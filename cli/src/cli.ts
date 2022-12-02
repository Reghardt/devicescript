import { program } from "commander"
import pkg from "../package.json"
import { build } from "./build"
import { devtools } from "./devtools"
import init from "./init"

export async function mainCli() {
    program
        .name("DeviceScript")
        .description(
            "build and run DeviceScript program https://aka.ms/devicescript"
        )
        .version(pkg.version)
        .option("-v, --verbose", "more logging")

    program
        .command("build", { isDefault: true })
        .description("build a DeviceScript file")
        .option("-l, --library", "build library")
        .option("--no-verify", "don't verify resulting bytecode")
        .option("-o", "--out-dir", "output directory, default is 'built'")
        .option("-w, --watch", "watch file changes and rebuild automatically")
        .option("--internet", "allow connections from non-localhost")
        .option(
            "--localhost",
            "use localhost:8000 instead of the internet dashboard"
        )
        .arguments("[file.ts]")
        .action(build)

    program
        .command("init")
        .description("configures the current directory for devicescript")
        .option("-f, --force", "force overwrite existing files")
        .option("--spaces", "number of spaces when generating JSON (default 4)")
        .action(init)

    program
        .command("devtools")
        .description("launches a local deveplopement tools server")
        .option("--internet", "allow connections from non-localhost")
        .option(
            "--localhost",
            "use localhost:8000 instead of the internet dashboard"
        )
        .action(devtools)

    program.parse(process.argv)
}

if (require.main === module) mainCli()
