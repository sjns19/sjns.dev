/** 
 * /api/blogs - Fetching blog posts from Medium RSS feed
 * 
 * Prefered making custom Medium RSS scraper instead of relying on
 * rss2json API as it often gives random errors
 */

import type { Blog, RssBlog, RssBlogItem, APIRequest, APIResponse } from '@global-types';
import { httpRequest } from '@/utils';
import { XMLParser } from 'fast-xml-parser';

export default async function handler(_req: APIRequest, res: APIResponse<Blog[]>) {
	res.setHeader('Cache-Control', 's-maxage=864000');

	const { data, error, status } = await httpRequest<string>('https://medium.com/feed/@sjns19', {
		headers: {
			'Accept-Encoding': 'application/json',
		}
	});

	if (error || status !== 200) {
		console.log(error);

		return res.status(400).json({
			error: 'There was a problem fetching the posts.'
		});
	}

	const parsedXML: RssBlog = new XMLParser().parse(<string>data);
	const blogList = simplifyBlogData(parsedXML.rss.channel.item);

	res.status(200).json(blogList);
}

const simplifyBlogData = (blogItem: RssBlogItem[]): Blog[] => {
	return blogItem.map(({ title, description, pubDate, link, category, 'content:encoded': content }) => {
		const blogContent = content ? content : description;
		const thumbnail = getImageSource(blogContent, (content === undefined));

		return {
			title,
			// Date comes as 4/2/2012, convert it to something like Feb 2, 2012
			published: new Date(pubDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			}),
			link,
			thumbnail,
			// Remove the dashes from the category names; web-development => web development
			categories: category ? category.map((cat) => cat.split('-').join(' ')) : []
		};
	});
}

const getImageSource = (content: string, isDescription = false): string => {
	const pattern = !isDescription ? /<figure[^>]*>[^>]*<img[^>]*src\s*=\s*"(.*?)" \/>[^<]*/g : /src\s*=\s*"(.*?)"/g;
	const matchedImages = content.match(pattern);
	return matchedImages ? matchedImages[0].replaceAll(/(<|>|figure|img|=|"|src|alt)+/gm, '').trim() : '';
}