/**
 * Reusable meta data component using Next's Head
 * 
 * Can be imported in any page and replace the
 * needed meta content.
 */

import type MetaProps from './types';
import Head from 'next/head';
import { defaultMetaProps } from '@/config';

export default function Meta({ title, keywords, description, ogURL, ogImage }: MetaProps) {
	return (
		<Head>
			<meta name="viewport" content="width=device-width,initial-scale=1.0" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta property="og:title" content={title} key="ogtitle" />
			<meta property="og:description" content={description} key="ogdesc" />
			<meta property="og:image" content={ogImage} key="ogimage" />
			<meta property="og:site_name" content="Sujan Shrestha" key="ogsitename" />
			<meta property="og:url" content={ogURL} key="ogurl" />
			<meta property="og:type" content="website" key="ogtype" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:domain" content="sjns.dev" />
			<meta name="twitter:title" itemProp="name" content={title} />
			<meta name="twitter:image" content={ogImage} />
			<meta name="twitter:description" property="og:description" itemProp="description" content={description} />
			<title>{title}</title>
		</Head>
	);
}

Meta.defaultProps = defaultMetaProps;