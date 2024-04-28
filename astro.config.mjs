import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  site: "https://dorsharon.github.io",
  integrations: [mdx(), sitemap(), react(), icon(), lottie()],
});
