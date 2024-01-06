/** 
 * Reusable thumbnail component
 * 
 * This component is used to showcase the projects and blog posts.
 */

import type { ThumbnailProps, ThumbnailItemProps, ThumbnailErrorProps } from './types';
import classes from './Thumbnail.module.scss';
import { MdOutlineRefresh, MdErrorOutline } from 'react-icons/md';
import { Image, Link, Text, Pad, IconFrame } from '@/components';
import { createClassList } from '@/utils';

// Main thumbnail component
export default function Thumbnail({ viewType, children }: ThumbnailProps) {
	const classList = createClassList({
		[classes['thumbnail']]: true,
		[classes[`thumbnail-${viewType}`]]: viewType
	});
	return (
		<ul className={classList}>
			{children}
		</ul>
	);
}

// Thumbnail.Item - Renders the passed data, used by both Blogs and Projects components
const Item = ({ title, thumbnail, subText, link, externalLinks, description, labels }: ThumbnailItemProps) => {
	return (
		<li className={classes['thumbnail-item']} title={title}>
			<figure className={classes['thumbnail-thumb']}>
				<Image
					className={classes['thumbnail-thumb-img']}
					src={thumbnail}
					alt={title}
					height={1080}
					width={1080}
				/>
			</figure>
			<div className={classes['thumbnail-inner']}>
				<Text size="sm" color="accent" monospaced>{subText}</Text>
				<h3 className={classes['thumbnail-title']}>
					<Link href={link} className="link" target="_blank">{title}</Link>
				</h3>
				{description && <Text color="grey">{description}</Text>}
				{labels && <Pad axis="y">{labels}</Pad>}
				{externalLinks &&
					<div className={classes['thumbnail-footer']}>
						{externalLinks.map(({ link, title, icon: Icon }, index) => (
							<Link key={index} href={link} title={title} target="_blank">
								<IconFrame>
									<Icon size={22} />
								</IconFrame>
							</Link>
						))}
					</div>
				}
			</div>
		</li>
	);
};

// Thumbnail.Skeleton - Shown while data is being loaded
const Skeleton = ({ type }: { type?: string }) => {
	const className = type === 'grid' ? 'thumbnail-skeleton-grid' : 'thumbnail-skeleton';
	const elems = [];

	for (let i = 0, j = 4; i < j; i++) {
		elems.push(<div key={i} className={classes['thumbnail-skeleton-lines']} />);
	}

	return (
		<div className={classes[className]}>
			<div className={classes['thumbnail-skeleton-details']}>
				{elems}
			</div>
		</div>
	);
};

// Thumbnail.Error - Shown when an error occurs during data fetching
const Error = ({ onRetry }: ThumbnailErrorProps) => {
	return (
		<div className={classes['thumbnail-error']}>
			<MdErrorOutline size={65} />
			<div className={classes['thumbnail-error-body']}>
				<h3>Something went wrong</h3>
				<p>There was a problem fetching the data. Sorry about that.</p>
				<small>
					<i>If you continue to encounter this error, please inform me.</i>
				</small>
				<button onClick={onRetry} title="Click to retry">
					<MdOutlineRefresh size={20} /> Retry
				</button>
			</div>
		</div >
	);
};

Thumbnail.Item = Item;
Thumbnail.Skeleton = Skeleton;
Thumbnail.Error = Error;