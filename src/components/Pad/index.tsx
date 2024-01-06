/**
 * This is just a reusable component that adds an extra
 * padding of 0.75rem.
 * 
 * Can be all sides, Y axis (top/bottom) or X axis (left/right)
 */

import type PadProps from './types';
import classes from './Pad.module.scss';

export default function Pad({ element, axis, children }: PadProps) {
	const Element = element || 'div';
	return (
		<Element className={classes[axis ? `pad-axis-${axis}` : 'pad']}>
			{children}
		</Element>
	);
}