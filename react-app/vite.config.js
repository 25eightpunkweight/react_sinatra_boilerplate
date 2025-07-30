import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 8080,
  strictPort: true,
 },
 server: {
  port: 1337,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:1337",
 },
});