/** Component for the main home page / */

import { Section, Text } from '@/components';

export default function HomePage() {
	return (
		<Section page="page-home">
			<div id="hero-image" />
			<Section.Header title="I'm Sujan" />
			<Section.Content>
				<Text element="h2" size="lg" weight="medium">A web developer</Text>
				<Text color="grey">
					I specialize in <Text element="span" color="accent">creating</Text> web-based products.
				</Text>
			</Section.Content>
		</Section>
	);
}