import type FooterLinkProps from './types';
import classes from './Footer.module.scss';
import { Text, Container, Pad, Link, IconFrame } from '@/components';
import { FiGithub } from 'react-icons/fi';

export default function Footer() {
	return (
		<Container element="footer">
			<div className={classes['footer']}>
				<Text element="h3" color="dark-grey">
					sjns.dev
					<Pad element="span">
						<Link href="https://github.com/sjns19/sjns.dev" title="sjns.dev repository">
							<IconFrame>
								<FiGithub size={16} />
							</IconFrame>
						</Link>
					</Pad>
				</Text>
				<Text size="sm" color="dark-grey">
					Designing is hard. Improvising, not so much... Crafted using <FooterLink link="https://nextjs.org/">Next.js</FooterLink> w/ <FooterLink link="https://www.typescriptlang.org/">TypeScript</FooterLink>, <FooterLink link="https://docs.pmnd.rs/zustand/getting-started/introduction">Zustand</FooterLink> && <FooterLink link="https://sass-lang.com/">SASS</FooterLink> by me.
				</Text>
			</div>
		</Container>
	);
}

const FooterLink = ({ link, children }: FooterLinkProps) => {
	return (
		<Link href={link} className="link" target="_blank">
			<Text element="span" color="grey" weight="medium">
				{children}
			</Text>
		</Link>
	);
};