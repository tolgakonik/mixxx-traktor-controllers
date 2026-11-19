import { readFile, writeFile } from "node:fs/promises";

const bundlePath = new URL("../dist/Traktor-Z1-MK2.script.js", import.meta.url);
const bundle = await readFile(bundlePath, "utf8");
const classicBundle = bundle.replace(/\nexport\s+\{[^}]*\};\s*$/, "\n");

if (classicBundle === bundle) {
  throw new Error("Expected the tsdown ES-module marker was not found.");
}
if (!/\nvar TraktorZ1MK2 = new TraktorZ1MK2Class\(\);/.test(classicBundle)) {
  throw new Error("Expected Mixxx controller callback object was not found.");
}
if (/\nexport\s/.test(classicBundle)) {
  throw new Error("Refusing to emit a Mixxx script containing module syntax.");
}

await writeFile(bundlePath, classicBundle);
