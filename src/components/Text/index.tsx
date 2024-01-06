/**
 * Reusable text component.
 * 
 * This component handles everything text related such as
 * required text element, font size, font weight, text color etc...
 */

import type TextProps from './types';

import classes from './Text.module.scss';
import { createClassList } from '@/utils';

export default function Text(props: TextProps) {
	const { element, size, color, weight, monospaced, uppercase, children, ...rest } = props;
	const Element = element || 'p';
	const classList = createClassList({
		[classes['txt']]: classes['txt'],
		[classes[`txt-${size}`]]: size,
		[classes[`txt-${color}`]]: color,
		[classes[`txt-${weight}`]]: weight,
		[classes[`txt-uppercase`]]: uppercase,
		[classes[`txt-monospaced`]]: monospaced
	});

	return (
		<Element className={classList} {...rest}>
			{children}
		</Element>
	);
}