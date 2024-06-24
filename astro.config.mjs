import tailwind from "@astrojs/tailwind";
import Compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import Color from "colorjs.io";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkReadingTime } from "./src/plugins/remark-reading-time";
import swup from "@swup/astro";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

const oklchToHex = str => {
  const DEFAULT_HUE = 250;
  const regex = /-?\d+(\.\d+)?/g;
  const matches = str.string.match(regex);
  const lch = [matches[0], matches[1], DEFAULT_HUE];
  return new Color("oklch", lch).to("srgb").toString({
    format: "hex"
  });
};


// https://astro.build/config
export default defineConfig({
  site: "https://dorsharon.dev",
  integrations: [tailwind(), swup({
    theme: false,
    animationClass: "transition-",
    containers: ["main"],
    smoothScrolling: true,
    cache: true,
    preload: true,
    accessibility: true,
    globalInstance: true
  }), icon({
    include: {
      "material-symbols": ["*"],
      "fa6-brands": ["*"],
      "fa6-regular": ["*"],
      "fa6-solid": ["*"],
      "logos": ["*"],
      "svg-spinners": ["3-dots-bounce", "tadpole"]
    }
  }), Compress({
    Image: false
  }), react(), sitemap(), mdx(), partytown()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypeAutolinkHeadings]
  },
  vite: {
    plugins: [vanillaExtractPlugin()],
    css: {
      preprocessorOptions: {
        stylus: {
          define: {
            oklchToHex: oklchToHex
          }
        }
      }
    }
  }
});