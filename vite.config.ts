import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vinext()],
  resolve: {
    alias: {
      "next/font/local": "next/font/local/index.js",
    },
  },
});
