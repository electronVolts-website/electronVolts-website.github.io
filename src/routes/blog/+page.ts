import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	console.log('data is ');
	console.log(data);
	return data;
};
