import type { ReactChildren } from '@global-types';
import classes from './Icon.module.scss';

export default function IconFrame({ children }: ReactChildren) {
	return (
		<i className={classes['icon']}>
			{children}
		</i>
	);
}