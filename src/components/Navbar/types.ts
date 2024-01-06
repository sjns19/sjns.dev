/** Navbar props type */

import type { ReactChildren } from '@global-types';

export type NavbarProps = {
	isSolid: boolean,
	pageTitle: string
};

export interface NavbarItemProps extends ReactChildren {
	to: string,
	currentPath?: string,
	title: string
}