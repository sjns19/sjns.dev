/** Configuration objects */

/** Site URL */
export const SITE_URL = 'https://www.sjns.dev';
export const SITE_NAME = 'Sujan Shrestha';

/** Default props for meta data */
export const defaultMetaProps = {
	title: SITE_NAME,
	keywords: 'developer,web developer,web development,freelance,freelancer,freelance developer,frontend developer,backend developer,fullstack,fullstack developer,coding,coder,programming,programmer',
	description: 'I am a self-taught developer specializing in creating web-based products.',
	ogURL: SITE_URL,
	ogImage: SITE_URL + '/og-banner.png'
};

/** Data fetch type for zustand store */
export const dataFetchType = {
	blog: 'blog',
	projects: 'projects',
	gallery: 'gallery'
};