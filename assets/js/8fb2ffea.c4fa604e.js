"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5341],{35318:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>g});var n=r(27378);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),l=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},d=function(t){var e=l(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=l(r),u=a,g=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return r?n.createElement(g,p(p({ref:e},d),{},{components:r})):n.createElement(g,p({ref:e},d))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,p=new Array(i);p[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:a,p[1]=s;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},39255:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const i={description:"Espressif ESP32-C3-RUST-DevKit"},p="Espressif ESP32-C3-RUST-DevKit",s={unversionedId:"devices/esp32/esp32c3-rust-devkit",id:"devices/esp32/esp32c3-rust-devkit",title:"Espressif ESP32-C3-RUST-DevKit",description:"Espressif ESP32-C3-RUST-DevKit",source:"@site/docs/devices/esp32/esp32c3-rust-devkit.mdx",sourceDirName:"devices/esp32",slug:"/devices/esp32/esp32c3-rust-devkit",permalink:"/devicescript/devices/esp32/esp32c3-rust-devkit",draft:!1,tags:[],version:"current",frontMatter:{description:"Espressif ESP32-C3-RUST-DevKit"},sidebar:"tutorialSidebar",previous:{title:"Espressif ESP32-C3 (bare)",permalink:"/devicescript/devices/esp32/esp32c3-bare"},next:{title:"Espressif ESP32-S2 (bare)",permalink:"/devicescript/devices/esp32/esp32s2-bare"}},o={},l=[{value:"Features",id:"features",level:2},{value:"Stores",id:"stores",level:2},{value:"Pins",id:"pins",level:2},{value:"DeviceScript import",id:"devicescript-import",level:2},{value:"Firmware update",id:"firmware-update",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:l},c="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"espressif-esp32-c3-rust-devkit"},"Espressif ESP32-C3-RUST-DevKit"),(0,a.kt)("p",null,"A ESP32-C3 dev-board from Espressif with IMU and Temp/Humidity sensor, originally for ESP32 Rust port."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://microsoft.github.io/jacdac-docs/images/devices/espressif/esp32c3rustdevkitv12a.catalog.jpg",alt:"Espressif ESP32-C3-RUST-DevKit picture"})),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I2C on 10/8 using Header connector"),(0,a.kt)("li",{parentName:"ul"},"WS2812B RGB LED on pin 2  (use ",(0,a.kt)("a",{parentName:"li",href:"/developer/status-light"},"setStatusLight")," to control)"),(0,a.kt)("li",{parentName:"ul"},"Serial logging on pin P21 at 115200 8N1"),(0,a.kt)("li",{parentName:"ul"},"Service: buttonBOOT (button)")),(0,a.kt)("h2",{id:"stores"},"Stores"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/esp-rs/esp-rust-board"},"https://github.com/esp-rs/esp-rust-board"))),(0,a.kt)("h2",{id:"pins"},"Pins"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"pin name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"hardware id"),(0,a.kt)("th",{parentName:"tr",align:"right"},"features"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"LED")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO7"),(0,a.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"P0")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO0"),(0,a.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"P1")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO1"),(0,a.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"P20")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO20"),(0,a.kt)("td",{parentName:"tr",align:"right"},"bootUart,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"P21")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO21"),(0,a.kt)("td",{parentName:"tr",align:"right"},"log.pinTX,  bootUart,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"P3")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO3"),(0,a.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"P4")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO4"),(0,a.kt)("td",{parentName:"tr",align:"right"},"analogIn,  debug,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"P5")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO5"),(0,a.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"P6")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO6"),(0,a.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"P9")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO9"),(0,a.kt)("td",{parentName:"tr",align:"right"},"$services.buttonBOOT","[0]",".pin,  boot,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"i2c.pinSCL")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO8"),(0,a.kt)("td",{parentName:"tr",align:"right"},"i2c.pinSCL,  boot,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"i2c.pinSDA")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO10"),(0,a.kt)("td",{parentName:"tr",align:"right"},"i2c.pinSDA,  io")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"led.pin")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GPIO2"),(0,a.kt)("td",{parentName:"tr",align:"right"},"led.pin,  analogIn,  boot,  io")))),(0,a.kt)("h2",{id:"devicescript-import"},"DeviceScript import"),(0,a.kt)("p",null,"You must add this import statement to load\nthe pinout configuration for this device."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/vscode"},"Visual Studio Code"),",\nclick the ",(0,a.kt)("strong",{parentName:"p"},"wand"),' icon on the file menu and\nselect "Espressif ESP32-C3-RUST-DevKit".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { pins, board } from "@dsboard/esp32c3_rust_devkit"\n')),(0,a.kt)("p",null),(0,a.kt)("h2",{id:"firmware-update"},"Firmware update"),(0,a.kt)("p",null,"In Visual Studio Code,\nselect ",(0,a.kt)("strong",{parentName:"p"},"DeviceScript: Flash Firmware...")," from the command palette."),(0,a.kt)("p",null,"Run this ",(0,a.kt)("a",{parentName:"p",href:"/api/cli"},"command line")," command and follow the instructions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"devicescript flash --board esp32c3_rust_devkit\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript-esp32/releases/latest/download/devicescript-esp32c3-esp32c3_rust_devkit-0x0.bin"},"Firmware"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="esp32c3_rust_devkit.json"',title:'"esp32c3_rust_devkit.json"'},'{\n    "$schema": "https://raw.githubusercontent.com/microsoft/devicescript-esp32/main/boards/esp32deviceconfig.schema.json",\n    "id": "esp32c3_rust_devkit",\n    "devName": "Espressif ESP32-C3-RUST-DevKit",\n    "productId": "0x33f29c59",\n    "$description": "A ESP32-C3 dev-board from Espressif with IMU and Temp/Humidity sensor, originally for ESP32 Rust port.",\n    "archId": "esp32c3",\n    "url": "https://github.com/esp-rs/esp-rust-board",\n    "$services": [\n        {\n            "name": "buttonBOOT",\n            "pin": "P9",\n            "service": "button"\n        }\n    ],\n    "i2c": {\n        "$connector": "Header",\n        "pinSCL": 8,\n        "pinSDA": 10\n    },\n    "led": {\n        "pin": 2,\n        "type": 1\n    },\n    "log": {\n        "pinTX": "P21"\n    },\n    "pins": {\n        "LED": 7,\n        "P0": 0,\n        "P1": 1,\n        "P20": 20,\n        "P21": 21,\n        "P3": 3,\n        "P4": 4,\n        "P5": 5,\n        "P6": 6,\n        "P9": 9\n    }\n}\n')))}m.isMDXComponent=!0}}]);