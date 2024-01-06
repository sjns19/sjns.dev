/** Global types */

import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Since ReactChildren is deprecated, this type definition can be
 * extended by any type that requires a React children
 */
export type ReactChildren = {
	children: React.ReactNode
};

// Type for simplified blog data
export type Blog = {
	title: string,
	published: string,
	link: string,
	thumbnail: string,
	categories: string[]
};

// Type for raw blog data that is fetched from Medium RSS feed
export type RssBlog = {
	'?xml': string,
	rss: {
		channel: {
			title: string,
			description: string,
			link: string,
			image: {
				url: string,
				title: string,
				link: string,
			},
			"atom:link": string[],
			generator: string,
			lastBuildDate: string,
			webMaster: string,
			item: RssBlogItem[]
		}
	}
};

// Type for item array of raw blog posts
export type RssBlogItem = {
	title: string,
	link: string,
	description: string,
	guid: string,
	category: string[],
	pubDate: string,
	"dc:creator": string,
	"atom:updated": string,
	"content:encoded": string,
};

// Type for projects data 
export type Projects = {
	title: string,
	description: string,
	type: string,
	link: string,
	repo: string,
	thumbnail: string,
	tags: string[]
};

// Type for sketches and graphics arts data 
export type Gallery = {
	title: string,
	description: string,
	type: string,
	thumbnail: string
};

// Type for API response extending custom error type
export type APIResponse<T> = NextApiResponse<T | {
	error: string
}>;

// Re-exporting just so it can be imported along with other types in 1 line
export type APIRequest = NextApiRequest;