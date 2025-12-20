import type { RemarkPlugin } from '@astrojs/markdown-remark';
import { toString as mdastToString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

export const remarkReadingTime: RemarkPlugin =
	() =>
	(tree, { data }) => {
		const textOnPage = mdastToString(tree);
		const readingTime = getReadingTime(textOnPage);
		const astro = data.astro as {
			frontmatter: { minutes: number; words: number };
		};
		astro.frontmatter.minutes = Math.max(1, Math.round(readingTime.minutes));
		astro.frontmatter.words = readingTime.words;
	};
