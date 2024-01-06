/** Social medias component props type */

export type SocialMediasProps = {
	forNav?: boolean,
	isOpen?: boolean
};

export type SocialMediaItemProps = {
	link: string,
	title: string,
	icon: JSX.Element
};