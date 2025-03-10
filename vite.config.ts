import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 250,

    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },

    sourcemap: true
  },
  plugins: [react(), svgr(), sentryVitePlugin({
    org: "quantic-k9",
    project: "personal-portfolio-v1"
  }), sentryVitePlugin({
    org: "quantic-k9",
    project: "personal-portfolio-v1"
  })],
});