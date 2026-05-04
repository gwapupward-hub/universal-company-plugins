import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const manifest = JSON.parse(
  readFileSync(join(__dirname, "openclaw.plugin.json"), "utf-8")
);

export const name = manifest.name;
export const version = manifest.version;
export const commands = manifest.commands;
export const capabilities = manifest.capabilities;
export const permissions = manifest.permissions;

export default manifest;
