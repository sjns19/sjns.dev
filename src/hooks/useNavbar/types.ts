/** useNavbar hook and its reducer types */

export type UseNavbar = {
	navbar?: React.RefObject<HTMLElement>,
	isOpen?: boolean,
	hasScrolledToSection?: boolean,
	toggleNav: () => void,
	pathname: string
};

export type NavbarActions = {
	type: string,
	isOpen?: any,
	hasScrolledToSection?: boolean
};

export type NavbarInitialStates = {
	isOpen?: boolean,
	hasScrolledToSection?: boolean
};
