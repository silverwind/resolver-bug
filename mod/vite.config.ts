import {fileURLToPath} from "node:url";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: fileURLToPath(new URL("dist", import.meta.url)),
    target: "node22",
    lib: {
      entry: fileURLToPath(new URL("index.ts", import.meta.url)),
      formats: ["es"],
    },
  },
  plugins: [
    dts({exclude: [
      "*.config.ts",
    ]}),
  ],
});
