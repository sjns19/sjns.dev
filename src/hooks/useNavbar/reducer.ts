/** Reducer for useNavbar hook */

import type { NavbarActions, NavbarInitialStates } from './types';

export const _INITIAL_STATE_: NavbarInitialStates = {
	isOpen: false,
	hasScrolledToSection: false
};

export const actionTypes = {
	NAVBAR_SET_OPEN_CLOSE: '0',
	NAVBAR_SET_SCROLLED_TO_SECTION: '1'
};

export default function navbarReducer(state: NavbarInitialStates, action: NavbarActions): NavbarInitialStates {
	const { type, isOpen, hasScrolledToSection } = action;

	switch (type) {
		case actionTypes.NAVBAR_SET_OPEN_CLOSE:
			return {
				...state,
				isOpen
			};
		case actionTypes.NAVBAR_SET_SCROLLED_TO_SECTION:
			return {
				...state,
				hasScrolledToSection
			};
		default:
			return state;
	}
}