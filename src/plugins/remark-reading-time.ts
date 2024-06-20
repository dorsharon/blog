import type { RemarkPlugin } from '@astrojs/markdown-remark';
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

export const remarkReadingTime: RemarkPlugin =
	() =>
	(tree, { data }) => {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);
		const astro = data.astro as {
			frontmatter: { minutes: number; words: number };
		};
		astro.frontmatter.minutes = Math.max(1, Math.round(readingTime.minutes));
		astro.frontmatter.words = readingTime.words;
	};
