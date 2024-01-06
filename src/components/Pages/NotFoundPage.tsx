/** Component for 404 page */

import { Section, Text, Link } from '@/components';

export default function NotFoundPage() {
	return (
		<Section page="page-404">
			<Section.Header title="404" />
			<Section.Content>
				<Text element="h2" weight="medium">
					You probably know what this error means
				</Text>
				<Text color="grey">
					Jk... It means, the page you requested at this URL does not exist.
				</Text>
				<Link href="/" className="link link-animate-rtl" title="Go back to home page">← Back to Home</Link>
			</Section.Content>
		</Section>
	);
}