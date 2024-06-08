export function pathsEqual(path1: string, path2: string) {
	const normalizedPath1 = path1.replace(/^\/|\/$/g, '').toLowerCase();
	const normalizedPath2 = path2.replace(/^\/|\/$/g, '').toLowerCase();
	return normalizedPath1 === normalizedPath2;
}

function joinUrl(...parts: string[]): string {
	const joined = parts.join('/');
	return joined.replace(/\/+/g, '/');
}

export function getPostUrlBySlug(slug: string): string {
	return getUrl(`/posts/${slug}/`);
}

export function getDir(path: string): string {
	const lastSlashIndex = path.lastIndexOf('/');
	if (lastSlashIndex < 0) {
		return '/';
	}
	return path.substring(0, lastSlashIndex + 1);
}

export function getUrl(path: string) {
	return joinUrl('', import.meta.env.BASE_URL, path);
}
