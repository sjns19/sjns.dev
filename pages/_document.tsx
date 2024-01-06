import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { SITE_URL } from '@/config';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		return initialProps;
	};

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="theme-color" id="browser-header" content="#000000" />
					<link rel="apple-touch-icon" sizes="180x180" href={`${SITE_URL}/apple-touch-icon.png`} />
					<link rel="icon" type="image/png" sizes="32x32" href={`${SITE_URL}/favicon-32x32.png`} />
					<link rel="icon" type="image/png" sizes="16x16" href={`${SITE_URL}/favicon-16x16.png`} />
					<link rel="manifest" href={`${SITE_URL}/site.webmanifest`} />
					<link rel="mask-icon" href={`${SITE_URL}/icons/safari-pinned-tab.svg`} color="#ffffff" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
