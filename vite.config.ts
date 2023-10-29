/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@custom-types": path.resolve(__dirname, "src", "custom-types"),
    },
  },
});
