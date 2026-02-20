import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "node:path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    nodePolyfills({
      globals: {
        process: true,
        Buffer: true,
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  define: {
    "process.env": {},
  },

  server: {
    host: true,
    port: 80,
    strictPort: true,
    allowedHosts: ["app1.cm.local", "sso.cm.local"],
    proxy: {
      "/indigo": {
        target: "http://localhost:8002",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/indigo/, ""),
      },
    },
  },

  optimizeDeps: {
    include: ["ketcher-react", "ketcher-standalone", "raphael"],
  },

  build: {
    sourcemap: false,
    commonjsOptions: {
      include: [/ketcher-react/, /ketcher-standalone/, /raphael/, /node_modules/],
      transformMixedEsModules: true,
    },
  },
});
