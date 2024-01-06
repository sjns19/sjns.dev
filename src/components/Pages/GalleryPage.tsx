/** Component for the /projects page */

import type { Gallery } from '@global-types';
import { Section, Thumbnail, Dynamic } from '@/components';
import { dataFetchType } from '@/config';
import { useGalleryStore, useStoreActions } from '@/store';

export default function GalleryPage() {
	const { Error, Skeleton } = Thumbnail;
	const { data, error } = useGalleryStore();
	const { reload } = useStoreActions();

	const retry = () => reload(dataFetchType.gallery);

	return (
		<Section page="page-projects">
			<Section.Header title="Gallery" />
			<Section.Content>
				<Dynamic>
					{error ? <Error onRetry={retry} /> : !data.length ? <Skeleton type="grid" /> : <Gallery gallery={data} />}
				</Dynamic>
			</Section.Content>
		</Section>
	);
}

const Gallery = ({ gallery }: { gallery: Gallery[] }) => {
	return (
		<Thumbnail viewType="gallery">
			{gallery.map((item, index) => <GalleryCard key={index} {...item} />)}
		</Thumbnail>
	);
};

const GalleryCard = ({ title, thumbnail, description, type }: Gallery) => {
	return (
		<Thumbnail.Item
			title={title}
			description={description}
			link={thumbnail}
			thumbnail={thumbnail}
			subText={type}
		/>
	);
};