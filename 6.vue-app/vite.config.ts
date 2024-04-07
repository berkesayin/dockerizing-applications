import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  // root: "./src",
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    minify: false,
  },
});
