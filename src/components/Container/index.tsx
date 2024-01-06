/** Reusable container fluid that wraps everything to make them sit in the center */

import type ContainerProps from './types';
import classes from './Container.module.scss';

export default function Container({ element, children }: ContainerProps) {
	const Element = element || 'div';

	return (
		<Element className={classes['container']}>
			{children}
		</Element>
	);
}