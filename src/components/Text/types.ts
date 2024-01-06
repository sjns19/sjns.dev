/** Text component props type */
import type { ReactChildren } from '@global-types';

type ExtendAttributes = ReactChildren & React.HTMLAttributes<HTMLElement>;

export default interface TextProps extends ExtendAttributes {
	element?: React.ElementType | string,
	size?: string,
	color?: string,
	uppercase?: boolean,
	weight?: string,
	monospaced?: boolean
}