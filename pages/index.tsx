import type { NextPage } from 'next';
import { Layout, HomePage, Meta } from '@/components';

const Index: NextPage = () => {
	return (
		<Layout isSolidNavbar isFooterHidden>
			<Meta />
			<HomePage />
		</Layout>
	);
};

export default Index;
