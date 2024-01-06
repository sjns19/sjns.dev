import type { NextPage } from 'next';
import { Layout, Meta, NotFoundPage } from '@/components';

const NotFound: NextPage = () => {
	return (
		<Layout isFooterHidden isNavbarHidden>
			<Meta
				title="404 - Page not found"
				description="The page at the requested URL was not found."
			/>
			<NotFoundPage />
		</Layout>
	);
};

export default NotFound;
