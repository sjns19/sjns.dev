import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

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
					<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
					<link rel="manifest" href="/icons/site.webmanifest" />
					<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#ffffff" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
