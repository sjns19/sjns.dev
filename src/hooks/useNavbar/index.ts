/** Hook for the navbar component */

import type { UseNavbar } from './types';
import navbarReducer, { _INITIAL_STATE_, actionTypes } from './reducer';
import { useRouter } from 'next/router';
import { useReducer, useEffect, useRef } from 'react';

export default function useNavbar(pageTitle: string): UseNavbar {
	const navbar = useRef<HTMLElement | null>(null);
	const [state, dispatch] = useReducer(navbarReducer, _INITIAL_STATE_);
	const { asPath, isReady, pathname } = useRouter();
	const { isOpen, hasScrolledToSection } = state;

	const toggleNav = () => dispatch({
		type: actionTypes.NAVBAR_SET_OPEN_CLOSE,
		isOpen: !isOpen
	});

	useEffect(() => {
		if (!pageTitle && navbar === null)
			return;

		const updateTitle = () => {
			if (navbar.current === null)
				return;

			const navHeight = navbar.current.offsetHeight;

			const pageTitle = <HTMLElement>document.getElementById('page-title');
			const pageTitleBottom = pageTitle.getBoundingClientRect().bottom;

			if (!hasScrolledToSection && pageTitleBottom <= navHeight) {
				dispatch({
					type: actionTypes.NAVBAR_SET_SCROLLED_TO_SECTION,
					hasScrolledToSection: true
				});
			} else if (hasScrolledToSection && pageTitleBottom > navHeight) {
				dispatch({
					type: actionTypes.NAVBAR_SET_SCROLLED_TO_SECTION,
					hasScrolledToSection: false
				});
			}
		}

		window.addEventListener('scroll', updateTitle);

		return () => window.removeEventListener('scroll', updateTitle);
	}, [pageTitle, hasScrolledToSection]);

	useEffect(() => {
		if (isOpen && isReady) {
			dispatch({
				type: actionTypes.NAVBAR_SET_OPEN_CLOSE,
				isOpen
			});
		}
	}, [asPath, isReady, isOpen]);

	return {
		navbar,
		hasScrolledToSection,
		isOpen,
		toggleNav,
		pathname
	};
}