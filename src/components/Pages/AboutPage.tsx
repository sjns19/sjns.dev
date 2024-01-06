/** Component for the /about page */

import type { ReactChildren } from '@global-types';
import { Section, Text, Pad, Label, Social, Link } from '@/components';
import { interests, technologies } from '@/data/hobbies';

export default function AboutPage() {
	return (
		<Section page="page-about">
			<Section.Header title="About" />
			<Section.Content>
				<Pad axis="y">
					<Text element="h2" size="xl" weight="medium">
						Hello there! My name is <Text element="span" color="accent">Sujan Shrestha</Text>.
					</Text>
					<Text color="grey">
						I&apos;m an individual with physical disabilities. Born with a rare bone-related condition
						and I also experience partial deafness. I like wandering around the internet everyday, engaging in
						various subjects.
					</Text>
					<br className="br__spaced" />
					<Text element="h3" size="mdl" weight="medium">
						That coding part <Text element="span" color="accent" monospaced>{'</>'}</Text>
					</Text>
					<Text color="grey">
						As a self-taught person, I started to learn coding in 2013 with a <Link href="https://www.compuphase.com/pawn/pawn.htm" className="link" title="PAWN language" target="_blank">language called PAWN</Link>, which
						is used by a <Link href="https://www.sa-mp.mp/" className="link" title="GTA San Andreas Multiplayer" target="_blank">game&apos;s multiplayer platform</Link> as the scripting language for its servers. Eventually prompting me to create <Link href="https://github.com/sjns19/samp-cod-wg/tree/main?tab=readme-ov-file" className="link" title="Click to view repository" target="_blank">a server gamemode</Link> for my own community.
						This initial experience opened the doors for me to enter the world of programming.
						In 2016, I shifted my focus towards web development, which has now become my main area of interest.
					</Text>
					<br className="br__spaced" />
					<Text element="h3" size="mdl" weight="medium">
						What I&apos;m doing right now <Text element="span" color="accent" monospaced>{'<?>'}</Text>
					</Text>
					<Text color="grey">
						I do web development and write blog posts, sharing the knowledge that I have gained in order to help others.
						<br />
						<br />
						Apart from coding, I also do pencil sketches alongside graphics design to some extent, although I&apos;m not a
						professional. My preferred approach for this field has always been improvisation.
						<br className="br__spaced" />
						<Link href="/gallery" className="link" title="Sketches and graphics arts gallery">View gallery →</Link>
					</Text>
				</Pad>
				<Pad axis="y">
					<SideItem title="things I enjoy">
						{interests.map((interest, index) => <Label key={index} title={interest}>{interest}</Label>)}
					</SideItem>
					<SideItem title="technologies I use">
						{technologies.map(({ title, color, icon: Icon }, index) => (
							<Label key={index} title={title}>
								{title} <Icon fill={color} />
							</Label>
						))}
					</SideItem>
					<SideItem title="where you can find me">
						<Text size="sm" color="dark-grey">
							I&apos;m always available for freelance opportunities. If you have a piece of cake
							to offer, feel free to bother me!
						</Text>
						<Social />
					</SideItem>
				</Pad>
			</Section.Content>
		</Section>
	);
}

const SideItem = ({ title, children }: { title: string } & ReactChildren) => {
	return (
		<Pad axis="y">
			<Text element="h3" size="xs" weight="bold">
				{title}
			</Text>
			{children}
		</Pad>
	);
}