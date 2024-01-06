/** Thumbnail component props type */

import type { ReactChildren } from '@global-types';
import type { IconType } from 'react-icons';

export interface ThumbnailProps extends ReactChildren {
	viewType?: string
}

export type ThumbnailItemProps = {
	title: string,
	thumbnail: string,
	subText: string,
	link: string,
	externalLinks?: {
		link: string,
		title: string,
		icon: IconType,
	}[],
	description?: string,
	labels?: JSX.Element[]
};

export type ThumbnailErrorProps = {
	onRetry: () => void
};