import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
	const blog = await getCollection('posts');

	return rss({
		title: 'Dor Sharon',
		description: "Dor Sharon's blog",
		site: context.site?.toString() as string,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.publishDate,
			description: post.data.subtitle,
			link: `/posts/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
			}),
		})),
		customData: '<language>en</language>',
	});
}
