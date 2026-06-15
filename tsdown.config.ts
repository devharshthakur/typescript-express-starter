import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/**/*.ts", "!**/*.test.ts"],
  outDir: "build",
  format: ["esm"],
  unbundle: true,
  clean: true,
  dts: false,
  shims: true,
  inputOptions: {
    resolve: {
      alias: {
        $lib: "./src/lib",
        $middlewares: "./src/middlewares",
        $services: "./src/services",
        $routes: "./src/routes",
        $: "./src",
      },
    },
    tsconfig: "./tsconfig.json",
  },
});
