import type { PageServerLoad } from './$types';
import { readBlog } from '$lib/readBlog';
import { processMarkdown } from '$lib/markdown';

export const load: PageServerLoad = async () => {
	return { rawJSON: await processMarkdown(await readBlog('about')) };
};
