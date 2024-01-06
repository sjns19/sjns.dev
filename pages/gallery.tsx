import type { NextPage } from 'next';
import { SITE_URL } from '@/config';
import { Layout, GalleryPage, Meta } from '@/components';

const Sketches: NextPage = () => {
	return (
		<Layout pageTitle="Gallery">
			<Meta
				title="Gallery - Sujan Shrestha"
				description="All the pencil sketches, logos, and banners that I have created up until now."
				ogURL={`${SITE_URL}/gallery`}
			/>
			<GalleryPage />
		</Layout>
	);
};

export default Sketches;
