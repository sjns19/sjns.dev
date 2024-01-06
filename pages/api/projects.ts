/** 
 * /api/projects - Basically has no backend, it's just a static JSON 
 * data being sent through this endpoint
 */

import type { Projects, APIRequest, APIResponse } from '@global-types';

import { httpRequest } from '@/utils';
import ProjectsList from '@/data/projects';

export default async function handler(_req: APIRequest, res: APIResponse<Projects[]>) {
	res.setHeader('Cache-Control', 's-maxage=864000');
	try {
		for (const project of ProjectsList) {
			if (project.type !== 'Theme Extension')
				continue;

			project.tags = await getExtensionStats(project.link);
		}

		res.status(200).json(ProjectsList);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			error: 'There was a problem fetching the posts.'
		});
	}
}

const getExtensionStats = async (url: string): Promise<string[]> => {
	const { data } = await httpRequest<string>(url);
	const matches = data?.match(/s.\"> (.*) installs|\(<span>(.*)<\/span>\)/gm);
	return matches ? matches.map((match) => match.replaceAll(/s.">|installs|\(<span>|<\/span>\)/g, '').trim()) : [];
};