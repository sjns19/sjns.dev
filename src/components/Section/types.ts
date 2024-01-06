/** Section component props type */

import type { ReactChildren } from '@global-types';

export interface SectionProps extends ReactChildren {
	page?: string
}

export type SectionHeaderProps = {
	title: string
};