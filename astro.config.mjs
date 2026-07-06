import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  site: isGitHubPages
    ? "https://santiagolocaso.github.io"
    : "https://locasoyasociados.com.ar",

  base: isGitHubPages ? "/locaso-asociados" : "/",

  vite: {
    plugins: [tailwindcss()],
  },
});
