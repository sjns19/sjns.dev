/** Pad component props type */

import type { ReactChildren } from '@global-types';

export default interface PadProps extends ReactChildren {
	element?: React.ElementType | string,
	axis?: string
}