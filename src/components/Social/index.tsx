/** Reusable social medias component */

import type { SocialMediasProps, SocialMediaItemProps } from './types';
import classes from './Social.module.scss';
import SocialLinks from '@/data/sociallinks';
import { Link, IconFrame } from '@/components';
import { createClassList } from '@/utils';

export default function Social({ forNav, isOpen }: SocialMediasProps) {
	const classList = createClassList({
		[classes['social']]: true,
		[classes['social-for-nav']]: forNav,
		[classes[isOpen ? 'is-shown' : 'is-hidden']]: true
	});

	return (
		<ul className={classList}>
			{SocialLinks.map(({ link, title, icon: Icon }, index) => (
				<SocialLink
					key={index}
					link={link}
					title={title}
					icon={<Icon size="1.25rem" />}
				/>
			))}
		</ul>
	);
}

const SocialLink = ({ link, title, icon }: SocialMediaItemProps) => {
	return (
		<li className={classes['social-link']}>
			<Link href={link} title={title}>
				<IconFrame>{icon}</IconFrame>
			</Link>
		</li>
	);
};