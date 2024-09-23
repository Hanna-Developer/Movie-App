import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // dev
    // proxy: {
    //   "/api/": "http://localhost:3000",
    //   "/uploads/": "http://localhost:3000",
    // },
    // prod
    proxy: {
      "/api/": "https://movie-app-64mh.onrender.com",
      "/uploads/": "https://movie-app-64mh.onrender.com",
    },
  },
});
