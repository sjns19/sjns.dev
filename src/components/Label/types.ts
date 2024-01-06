import type { ReactChildren } from '@global-types';

type ExtendAttributes = ReactChildren & React.HTMLAttributes<HTMLElement>;

export default interface LabelProps extends ExtendAttributes {
	title?: string,
	color?: string,
	iconAlignment?: string
}