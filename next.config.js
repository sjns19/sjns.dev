/** @type {import('next').NextConfig} */

const path = require('path');
const loaderUtils = require('loader-utils');

const hashOnlyIdent = (context, _, exportName) => {
	const { rootContext, resourcePath } = context;
	const filePath = path.relative(rootContext, resourcePath);
	const buffer = Buffer.from(`filePath:${filePath.replace(/\\+/g, '/')}#className:${exportName}`);
	const utils = loaderUtils.getHashDigest(buffer, 'md4', 'base64', 6);
	
	return utils.replace(/^(-?\d|--)/, '_$1').replaceAll('+', '_').replaceAll('/', '_');
}

const nextConfig = {
  	reactStrictMode: false,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'classes')],
		prependData: `
			@import "src/styles/modules/vars.scss";
			@import "src/styles/modules/mixins.scss";
			@import "src/styles/modules/keyframes.scss";
		`
	},
	env: {
		BLOG_API_ENDPOINT: '/api/blog',
		PROJECTS_API_ENDPOINT: '/api/projects',
		GALLERY_API_ENDPOINT: '/api/gallery'
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'user-images.githubusercontent.com',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'cdn-images-1.medium.com',
				pathname: '**'
			},
			{
				protocol: 'https',   
				hostname: '**.medium.com',
			}  
		]
	},
	webpack: (config, { dev }) => {
		const rules = config.module.rules.find((rule) => typeof rule.oneOf === 'object').oneOf.filter((rule) => Array.isArray(rule.use));
		if (!dev) {
			rules.forEach((rule) => {
				rule.use.forEach((moduleLoader) => {
					if (moduleLoader.loader?.includes('css-loader') && !moduleLoader.loader?.includes('postcss-loader')) {
						moduleLoader.options.modules.getLocalIdent = hashOnlyIdent
					}
				})
			})
		}
		return config;
	}
}

module.exports = nextConfig;