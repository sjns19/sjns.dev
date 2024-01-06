
import { dataFetchType } from '@/config';
import { useStoreActions } from '@/store';
import { useEffect } from 'react';

export default function useDataLoader() {
	const { load } = useStoreActions();

	useEffect(() => {
		load(process.env.PROJECTS_API_ENDPOINT as string, dataFetchType.projects);
		load(process.env.BLOG_API_ENDPOINT as string, dataFetchType.blog);
		load(process.env.GALLERY_API_ENDPOINT as string, dataFetchType.gallery);
	});
}