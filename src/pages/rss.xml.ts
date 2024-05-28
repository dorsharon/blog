import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context: any) {
	const blog = await getCollection("posts");

	return rss({
		title: 'Dor Sharon',
		description: "Dor Sharon's blog",
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.publishDate,
			description: post.data.subtitle,
			link: `/posts/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			}),
		})),
		customData: `<language>en</language>`,
	});
}
