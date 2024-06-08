import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string(),
			publishDate: z.date(),
			image: image(),
			tags: z.array(z.string()),
		}),
});

export const collections = {
	posts: postsCollection,
};
