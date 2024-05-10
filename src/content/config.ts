import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		publishDate: z.date(),
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = {
	posts: postsCollection,
};
