import type { NextPage } from 'next';
import { SITE_URL } from '@/config';
import { Layout, BlogPage, Meta } from '@/components';

const Blog: NextPage = () => {
	return (
		<Layout pageTitle="Blog">
			<Meta
				title="Blog - Sujan Shrestha"
				description="Explore my blog articles covering a wide range of web development tutorials and other informative topics."
				ogURL={`${SITE_URL}/blog`}
			/>
			<BlogPage />
		</Layout>
	);
};

export default Blog;
