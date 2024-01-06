/** MAin navigation bar component */

import type { NavbarProps, NavbarItemProps } from './types';
import classes from './Navbar.module.scss';
import useNavbar from '@/hooks/useNavbar';
import NavLinks from '@/data/navlinks';
import { SITE_NAME } from '@/config';
import { createClassList } from '@/utils';
import { Container, Social, Link, Themer } from '@/components';

export default function Navbar({ isSolid, pageTitle }: NavbarProps) {
	const { isOpen, toggleNav, navbar, hasScrolledToSection, pathname } = useNavbar(pageTitle);
	const classList = createClassList({
		[classes['navbar']]: true,
		[classes['navbar-solid']]: isSolid,
		[classes[isOpen ? 'is-opened' : 'is-closed']]: true,
		[classes['is-title-shown']]: hasScrolledToSection
	});

	return (
		<nav className={classList} ref={navbar}>
			<Container>
				<ul className={classes['navbar-inner']}>
					{/*<li className={classes['navbar-item']}>
						<Link href="/" className={classes['navbar-logo']}>
							<Image
								className={classes['navbar-logo-img']}
								src="/icons/icon.png"
								height="24"
								width="24"
								alt="Sujan Shrestha"
							/>
						</Link>
	</li>*/}
					<li className={classes['navbar-item']}>
						<Link href="/" className={classes['navbar-logo']} title={SITE_NAME}>
							<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 495.19 385.13">
								<rect className={classes['navbar-vector-accent']} x="103.26" width="236.54" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-secondary']} x="207.72" y="70.02" width="91.2" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-secondary']} x="286.91" y="140.05" width="170.54" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-accent']} x="373.67" width="62.4" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-accent']} x="226.91" y="280.09" width="191.06" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-accent']} x="361.77" y="210.07" width="133.41" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-secondary']} x="171.54" y="347.86" width="170.54" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-secondary']} x="75.27" y="347.86" width="59.51" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-secondary']} y="70.02" width="170.54" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-accent']} x="117.3" y="140.05" width="133.41" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-accent']} x="7" y="1.13" width="62.4" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-accent']} x="376.25" y="350.12" width="62.4" height="35.01" rx="17.51" />
								<rect className={classes['navbar-vector-secondary']} x="170.54" y="210.07" width="158.13" height="35.01" rx="17.51" />
							</svg>
						</Link>
					</li>
					{pageTitle && (
						<li className={`${classes['navbar-item']} ${classes['navbar-item-left']}`}>
							<span className={classes['navbar-title']}>{pageTitle}</span>
						</li>
					)}
					<li className={`${classes['navbar-item']} ${classes['navbar-item-right']}`}>
						<Themer />
					</li>
					<li className={classes['navbar-item']}>
						<div className={classes['navbar-content']}>
							<ul className={classes['navbar-nav']}>
								{NavLinks.map((nav, index) => {
									const { link, title } = nav;
									return (
										<NavItem key={index} to={link} currentPath={pathname} title={title}>
											{title}
										</NavItem>
									);
								})}
							</ul>
							<Social forNav isOpen={isOpen} />
						</div>
					</li>
					<li className={classes['navbar-item']}>
						<button
							className={classes['navbar-toggler']}
							onClick={toggleNav}
							title="Menu"
						/>
					</li>
				</ul>
			</Container>
		</nav>
	);
}

const NavItem = ({ to, currentPath, title, children }: NavbarItemProps) => {
	const linkClassList = createClassList({
		[classes['navbar-nav-link']]: true,
		[classes['is-active']]: currentPath === to
	});

	return (
		<li className={classes['navbar-nav-item']}>
			<Link href={to} className={linkClassList} title={title}>
				{children}
			</Link>
		</li>
	);
};
