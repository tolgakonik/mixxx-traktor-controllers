import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/TraktorZ1MK2.ts"],
  // Keep the controller instance as a top-level `var`, which is how Mixxx
  // resolves the `functionprefix` declared in the XML mapping.
  format: "esm",
  target: "es2020",
  outputOptions: {
    dir: undefined,
    file: "dist/Traktor-Z1-MK2.script.js",
  },
});
