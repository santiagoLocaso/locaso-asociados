import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://santiagolocaso.github.io",
  base: "/locaso-asociados",
  vite: {
    plugins: [tailwindcss()],
  },
});
