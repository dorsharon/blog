import tailwind from "@astrojs/tailwind";
import Compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import Color from "colorjs.io";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";
import remarkDirective from "remark-directive"; /* Handle directives */
import swup from "@swup/astro";
import sitemap from "@astrojs/sitemap";
import { parseDirectiveNode } from "./src/plugins/remark-directive-rehype.js";
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
      "svg-spinners": ["3-dots-bounce"]
    }
  }), Compress({
    Image: false
  }), react(), sitemap(), mdx(), partytown()],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkDirective, parseDirectiveNode],
    rehypePlugins: [[rehypeAutolinkHeadings, {
      behavior: "append",
      properties: {
        className: ["anchor"]
      },
      content: {
        type: "element",
        tagName: "span",
        properties: {
          className: ["anchor-icon"],
          "data-pagefind-ignore": true
        },
        children: [{
          type: "text",
          value: "#"
        }]
      }
    }]]
  },
  vite: {
    plugins: [vanillaExtractPlugin()],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // temporarily suppress this warning
          if (warning.message.includes("is dynamically imported by") && warning.message.includes("but also statically imported by")) {
            return;
          }
          warn(warning);
        }
      }
    },
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