import type { PageServerLoad } from './$types';
import * as fs from 'fs';
import feeds from '../staticFiles/feeds.json';

interface ytVideo {
	title: string;
	description: string;
	thumbnail: string;
	url: string;
}

export const load: PageServerLoad = async ({}) => {
	const videos: ytVideo[] = [];

	for (const feed of feeds.feeds) {
		if (!fs.existsSync(`staticFiles/Thumbnail/${feed}.png`)) {
			const ID = feed.url.split('=').pop();
			const video: ytVideo = {
				title: feed?.title,
				description: feed?.description,
				thumbnail: `https://img.youtube.com/vi/${ID}/maxresdefault.jpg`,
				url: feed?.url
			};
			videos.push(video);
		}
	}
	return { videos: videos };
};
