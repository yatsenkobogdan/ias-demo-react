import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "node:path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    nodePolyfills({
      globals: { process: true, Buffer: true },
    }),
  ],

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },

  define: {
    "process.env.NODE_ENV": JSON.stringify(
      mode === "production" ? "production" : "development"
    ),
  },

  optimizeDeps: {
    include: ["ketcher-react", "ketcher-standalone", "raphael"],
  },

  build: {
    sourcemap: false,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
}));