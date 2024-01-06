/** Component for the /projects page */

import type { Projects } from '@global-types';
import { LuExternalLink, LuDownload, LuStar, LuGithub } from 'react-icons/lu';
import { dataFetchType } from '@/config';
import { Section, Text, Thumbnail, Label, Dynamic } from '@/components';
import { useProjectsStore, useStoreActions } from '@/store';

export default function ProjectsPage() {
	const { Error, Skeleton } = Thumbnail;
	const { data, error } = useProjectsStore();
	const { reload } = useStoreActions();

	const retry = () => reload(dataFetchType.projects);

	return (
		<Section page="page-projects">
			<Section.Header title="Projects" />
			<Section.Content>
				<Dynamic>
					{error ? <Error onRetry={retry} /> : !data.length ? <Skeleton /> : <ProjectList projects={data} />}
				</Dynamic>
			</Section.Content>
		</Section>
	);
}

const ProjectList = ({ projects }: { projects: Projects[] }) => {
	return (
		<Thumbnail>
			{projects.map((project, index) => <ProjectCard key={index} {...project} />)}
			<Text element="i" color="dark-grey" size="sm">More to come...</Text>
		</Thumbnail>
	);
};

const ProjectCard = ({ title, description, thumbnail, link, type, repo, tags }: Projects) => {
	/**
	 * Build an array containing the labels components with filtered tags
	 * based on the project type
	 * 
	 * For instance, if the project type is Theme Extension, it should show
	 * installs and stars icon along
	 */
	const labels = tags.map((tag, index) => {
		let Icon = null, labelTitle = tag;

		if (type === 'Theme Extension') {
			Icon = index === 0 ? LuDownload : LuStar;
			labelTitle += index === 0 ? ' installs' : ' ratings at Visual Studio Marketplace';
		}

		return (
			<Label key={index} color="accent" iconAlignment="left" title={labelTitle}>
				{Icon && <Icon size="14" />} {tag}
			</Label>
		);
	});

	// External links - Github repo, view link etc...
	const externalLinks = [
		{
			link: repo,
			title: 'View github repository',
			icon: LuGithub
		},
		{
			link: link,
			title: 'View project',
			icon: LuExternalLink
		}
	];

	return (
		<Thumbnail.Item
			title={title}
			description={description}
			thumbnail={thumbnail}
			subText={type}
			link={link}
			externalLinks={externalLinks}
			labels={labels}
		/>
	);
};