import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";
import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://dorsharon.github.io",
  base: 'blog',
  trailingSlash: 'never',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [mdx(), sitemap(), react(), icon(), lottie()],
});
