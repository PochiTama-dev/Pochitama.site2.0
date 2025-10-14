import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/Pochitama.site2.0/',
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.resend.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  publicDir: 'public',
});
