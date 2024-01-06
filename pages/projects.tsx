import type { NextPage } from 'next';
import { SITE_URL } from '@/config';
import { Layout, ProjectsPage, Meta } from '@/components';

const Projects: NextPage = () => {
	return (
		<Layout pageTitle="Projects">
			<Meta
				title="Projects - Sujan Shrestha"
				description="All the side projects and the projects I have completed for my clients so far..."
				ogURL={`${SITE_URL}/projects`}
			/>
			<ProjectsPage />
		</Layout>
	);
};

export default Projects;
