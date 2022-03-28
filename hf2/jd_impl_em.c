#ifdef __EMSCRIPTEN__

#include "jd_sdk.h"
#include <stdlib.h>
#include <sys/time.h>
#include <time.h>
#include <emscripten/emscripten.h>
#include "jacscript/jacscript.h"

static uint64_t cached_devid = 0x1d46a30eef48919;

EM_JS(void, em_send_frame, (void *frame), {
    const sz = 12 + (HEAP8[frame + 2] & 0xff);
    const pkt = new Uint8Array(HEAP8.slice(frame, frame + sz).buffer);
    Module.sendPacket(pkt)
});

EM_JS(double, em_time_now, (void), { return Date.now(); });

int jd_em_frame_received(jd_frame_t *frame);

int jd_em_send_frame(jd_transport_ctx_t *ctx, jd_frame_t *frame) {
    em_send_frame(frame);
    jd_em_frame_received(frame);
    return 0;
}

static const jd_transport_t em_transport = {.send_frame = jd_em_send_frame};

EMSCRIPTEN_KEEPALIVE
void jd_em_set_device_id_2x_i32(int32_t id0, int32_t id1) {
    cached_devid = ((uint64_t)id0 << 32) | id1;
}

EMSCRIPTEN_KEEPALIVE
void jd_em_set_device_id_string(const char *str) {
    uint64_t devid;
    if (strlen(str) == 16 && jd_from_hex(&devid, str) == 8) {
        // set directly
        cached_devid = devid;
    } else {
        int bufsz = strlen(str);
        cached_devid = ((uint64_t)jd_hash_fnv1a(str, bufsz) << 32) |
                       ((uint64_t)jd_hash_fnv1a(str + 1, bufsz - 1));
    }
}

EMSCRIPTEN_KEEPALIVE
void jd_em_init(void) {
    tx_init(&em_transport, NULL);
    jd_rx_init();
    jd_services_init();

    char shortbuf[5];
    jd_device_short_id(shortbuf, jd_device_id());
    char hexbuf[17];
    jd_to_hex(hexbuf, &cached_devid, 8);
    DMESG("self-device: %s/%s", hexbuf, shortbuf);
}

EMSCRIPTEN_KEEPALIVE
void jd_em_process(void) {
    jd_process_everything();
    tx_process();
}

EMSCRIPTEN_KEEPALIVE
int jd_em_frame_received(jd_frame_t *frame) {
    if (jd_crc16((uint8_t *)frame + 2, JD_FRAME_SIZE(frame) - 2) != frame->crc) {
        ERROR("invalid CRC");
        return -2;
    }
    return jd_rx_frame_received(frame);
}

EMSCRIPTEN_KEEPALIVE
int jd_em_jacs_deploy(const void *img, unsigned imgsize) {
    return jacscriptmgr_deploy(img, imgsize);
}

#if 0
void run_emscripten_loop(void) {
    emscripten_set_interval(em_process, 10, NULL);
    emscripten_unwind_to_js_event_loop();
}
#endif

uint64_t hw_device_id(void) {
    return cached_devid;
}

void target_reset() {
    DMESG("target reset");
    exit(0);
}

static uint64_t getmicros(void) {
    return (uint64_t)(em_time_now() * 1000.0);
}

uint64_t tim_get_micros() {
    static uint64_t starttime;
    if (!starttime) {
        starttime = getmicros() - 123;
    }
    return getmicros() - starttime;
}

void target_wait_us(uint32_t us) {
    if (us < 1000) {
        uint64_t endt = tim_get_micros() + us;
        while (tim_get_micros() < endt)
            ;
    } else {
        emscripten_sleep(us / 1000);
    }
}

#endif
