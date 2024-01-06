/** Reusable section component */

import type { ReactChildren } from '@global-types';
import type { SectionProps, SectionHeaderProps } from './types';
import classes from './Section.module.scss';
import { Pad } from '@/components';

export default function Section({ page, children }: SectionProps) {
	return (
		<section className={classes['section']} id={page}>
			{children}
		</section>
	);
}

// Section.Header
const Header = ({ title }: SectionHeaderProps) => {
	return (
		<Pad element="header">
			<h1 className={classes['section-title']} id="page-title">
				{title}
			</h1>
		</Pad>
	);
};

// Section.Contents
const Content = ({ children }: ReactChildren) => <div className={classes['section-content']}>{children}</div>;

Section.Header = Header;
Section.Content = Content;