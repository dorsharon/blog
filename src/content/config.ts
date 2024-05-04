import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string(),
			publishDate: z.coerce.date(),
			image: image(),
		}),
});

export const collections = { blog };
