/**
 * Layout wrapper component
 * 
 * This component stays persistent at all time and
 * every page is its child.
 */

import type LayoutProps from './types';
import { Container, Navbar, Footer } from '@/components';

export default function Layout(props: LayoutProps) {
	const {
		pageTitle = '',
		isNavbarHidden = false,
		isSolidNavbar = true,
		isFooterHidden = false,
		children
	} = props;

	return (
		<>
			{!isNavbarHidden && <Navbar
				isSolid={isSolidNavbar}
				pageTitle={pageTitle}
			/>}
			<Container>
				{children}
			</Container>
			{!isFooterHidden && <Footer />}
		</>
	);
};