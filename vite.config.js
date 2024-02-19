import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/pochitama.dev2.0/',
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
});
