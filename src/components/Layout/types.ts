/** Layout wrapper props type */

import type { ReactChildren } from '@global-types';

export default interface LayoutProps extends ReactChildren {
	pageTitle?: string,
	isSolidNavbar?: boolean,
	isNavbarHidden?: boolean,
	isFooterHidden?: boolean
}