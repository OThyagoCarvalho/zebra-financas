import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [remix(), tsConfigPaths(), tailwindcss()],
});