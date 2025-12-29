import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://safaryar.com", // change later to your real domain
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
});
