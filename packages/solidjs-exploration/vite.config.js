import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import * as pkg from './package.json'
import solidPlugin from 'vite-plugin-solid';
import path from 'path'

export default defineConfig({
  plugins: [
    solidPlugin({ssr: true}),
    dts({
      tsConfigFilePath: "tsconfig.build.json",
      insertTypesEntry: true,
      noEmitOnError: true,
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: format => (format === "es" ? "index.mjs" : "index.cjs"),
      watch: true
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
});
