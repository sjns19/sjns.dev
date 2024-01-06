/** Component for the /blogs page */

import type { Blog } from '@global-types';
import { LuExternalLink } from 'react-icons/lu';
import { Section, Text, Thumbnail, Label, Link, Dynamic } from '@/components';
import { dataFetchType } from '@/config';
import { useBlogsStore, useStoreActions } from '@/store';

export default function BlogPage() {
	const { Error, Skeleton } = Thumbnail;
	const { data, error } = useBlogsStore();
	const { reload } = useStoreActions();

	const retry = () => reload(dataFetchType.blog);

	return (
		<Section page="page-blogs">
			<Section.Header title="Blog" />
			<Section.Content>
				<Dynamic>
					{error ? <Error onRetry={retry} /> : !data.length ? <Skeleton /> : <BlogList blog={data} />}
				</Dynamic>
			</Section.Content>
		</Section>
	);
}

const BlogList = ({ blog }: { blog: Blog[] }) => {
	return (
		<Thumbnail>
			{blog.map((data, index) => <BlogCard key={index} {...data} />)}

			{/**
			 * Apparently, Medium RSS feed only provides maximum of 10 posts
			 * 
			 * If the posts reach 10, show a link to redirect people the
			 * Medium feed. Otherwise, display 'More to come...' text.
			 */}
			{blog.length === 10 ? (
				<Link href="https://medium.com/@sjns19" title="View all at Medium">
					View all at Medium →
				</Link>
			) : (
				<Text element="i" color="dark-grey" size="sm">More to come...</Text>
			)}
		</Thumbnail>
	);
};

const BlogCard = ({ thumbnail, title, published, link, categories }: Blog) => {
	// Construct an array of label components with the blog categories
	const labels = categories.map((category, index) => (
		<Label key={index} color="accent" title={category}>
			{category}
		</Label>
	));

	// External link array
	const externalLinks = [
		{
			link: link,
			title: 'Read at Medium',
			icon: LuExternalLink
		}
	];

	return (
		<Thumbnail.Item
			title={title}
			thumbnail={thumbnail}
			subText={published}
			link={link}
			externalLinks={externalLinks}
			labels={labels}
		/>
	);
};