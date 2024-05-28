import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		publishDate: z.date(),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	posts: postsCollection,
};
