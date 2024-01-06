/** 
 * /api/projects - Basically has no backend, it's just a static JSON 
 * data being sent through this endpoint
 */

import type { NextApiRequest } from 'next';
import type { Gallery, APIResponse } from '@global-types';
import gallery from '@/data/gallery';

export default async function handler(_req: NextApiRequest, res: APIResponse<Gallery[]>) {
	res.setHeader('Cache-Control', 's-maxage=864000');
	try {
		res.status(200).json(gallery);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			error: 'There was a problem fetching the posts.'
		});
	}
}