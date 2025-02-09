import { type CollectionEntry, getCollection } from 'astro:content';

const isDevelopmentMode = import.meta.env.DEV;

export const getSortedPosts = async (options: { isDraft: boolean }): Promise<CollectionEntry<'posts'>[]> => {
	const { isDraft = false } = options ?? {};
	const allBlogPosts = await getCollection('posts');

	return allBlogPosts
		.filter(({ data }) => (data.isDraft ?? false) === isDraft)
		.sort((a, b) => {
			const dateA = new Date(a.data.publishDate);
			const dateB = new Date(b.data.publishDate);
			return dateA > dateB ? -1 : 1;
		});
};

export type Tag = {
	name: string;
	count: number;
};

export const getTagsList = async (): Promise<Tag[]> => {
	const allBlogPosts = await getCollection('posts');

	const countMap: { [key: string]: number } = {};
	allBlogPosts.map((post) => {
		post.data?.tags?.map((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// sort tags
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
};

export const groupPostsByYear = (
	posts: CollectionEntry<'posts'>[],
): { year: number; posts: CollectionEntry<'posts'>[] }[] => {
	const groupedPosts = posts.reduce<{
		[year: number]: CollectionEntry<'posts'>[];
	}>((result, post) => {
		const year = post.data.publishDate.getFullYear();

		if (!result[year]) {
			result[year] = [];
		}

		result[year].push(post);
		return result;
	}, {});

	// convert the object to an array
	const groupedPostsArray = Object.keys(groupedPosts).map((key) => ({
		year: Number.parseInt(key),
		posts: groupedPosts[Number.parseInt(key)],
	}));

	// sort years by latest first
	groupedPostsArray.sort((a, b) => b.year - a.year);

	return groupedPostsArray;
};
