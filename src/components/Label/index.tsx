/** Reusable small rounded label component */

import type LabelProps from './types';
import classes from './Label.module.scss';
import { createClassList } from '@/utils';

export default function Label({ color, iconAlignment, children, ...rest }: LabelProps) {
	const classList = createClassList({
		[classes['label']]: true,
		[classes[`label-icon-${iconAlignment}`]]: iconAlignment,
		[classes[`label-${color}`]]: color
	});

	return (
		<span className={classList} {...rest}>
			{children}
		</span>
	);
}