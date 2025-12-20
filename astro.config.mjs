import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import swup from '@swup/astro';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';
import Compress from 'astro-compress';
import icon from 'astro-icon';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { remarkReadingTime } from './src/plugins/remark-reading-time';

// https://astro.build/config
export default defineConfig({
	site: 'https://dorsharon.dev',
	integrations: [
		swup({
			theme: false,
			animationClass: 'transition-',
			containers: ['main'],
			smoothScrolling: true,
			cache: true,
			preload: true,
			accessibility: true,
			globalInstance: true,
		}),
		icon({
			include: {
				'material-symbols': ['*'],
				'fa6-brands': ['*'],
				'fa6-regular': ['*'],
				'fa6-solid': ['*'],
				logos: ['*'],
				'svg-spinners': ['3-dots-bounce', 'tadpole'],
			},
		}),
		Compress({
			Image: false,
		}),
		react(),
		sitemap(),
		mdx(),
		partytown(),
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
		rehypePlugins: [rehypeAutolinkHeadings],
	},
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
