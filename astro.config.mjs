import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import profile from "./src/data/business.json" with { type: "json" };

export default defineConfig({
  site: profile.siteUrl || process.env.SITE_URL || undefined,
  integrations: [sitemap({ filter: (page) => !/\/404(?:\.html|\/)?$/.test(page) })],
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  vite: { plugins: [tailwindcss()] },
});
