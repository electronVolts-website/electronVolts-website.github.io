import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, params }) => {
	console.log('the slug is in page: ' + params.slug);
	return { data };
};
