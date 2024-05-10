import { getCollection } from "astro:content";

export async function getSortedPosts() {
	const allBlogPosts = await getCollection("posts");

	const sortedPosts = allBlogPosts.sort((a, b) => {
		const dateA = new Date(a.data.published);
		const dateB = new Date(b.data.published);
		return dateA > dateB ? -1 : 1;
	});

	for (let i = 1; i < sortedPosts.length; i++) {
		sortedPosts[i].data.nextSlug = sortedPosts[i - 1].slug;
		sortedPosts[i].data.nextTitle = sortedPosts[i - 1].data.title;
	}
	for (let i = 0; i < sortedPosts.length - 1; i++) {
		sortedPosts[i].data.prevSlug = sortedPosts[i + 1].slug;
		sortedPosts[i].data.prevTitle = sortedPosts[i + 1].data.title;
	}

	return sortedPosts;
}

export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.map((post) => {
		post.data.tags.map((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// sort tags
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
	name: string;
	count: number;
};

export async function getCategoryList(): Promise<Category[]> {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.map((post) => {
		if (!post.data.category) {
			const ucKey = i18n(I18nKey.uncategorized);
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}
		count[post.data.category] = count[post.data.category]
			? count[post.data.category] + 1
			: 1;
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({ name: c, count: count[c] });
	}
	return ret;
}
