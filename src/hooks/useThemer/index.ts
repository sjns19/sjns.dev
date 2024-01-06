import type UseThemer from './types';

import { useState, useEffect } from 'react';
import { useSiteConfigStore } from '@/store';
import { browserHeaderColors } from '@/data/theme';

export default function useThemer(): UseThemer {
	const [isDropdownShown, setIsDropdownShown] = useState(false);
	const [preferredColorScheme, saveColorScheme] = useSiteConfigStore((state) => [
		state.preferredColorScheme,
		state.saveColorScheme
	]);

	const toggleDropdown = () => setIsDropdownShown(!isDropdownShown);

	const applyColorScheme = (colorScheme: string, save: boolean) => {
		const root = document.documentElement;
		const browserHeader = document.getElementById('browser-header');

		browserHeader?.setAttribute('content', browserHeaderColors[<keyof typeof browserHeaderColors>colorScheme]);

		if (save) {
			saveColorScheme(colorScheme);
		}

		if (colorScheme === 'default') {
			return root.removeAttribute('data-preferred-color-scheme');
		}

		root.dataset.preferredColorScheme = colorScheme;
	};

	return {
		isDropdownShown,
		toggleDropdown,
		preferredColorScheme,
		applyColorScheme
	};
}

export const useThemeLoader = () => {
	const { preferredColorScheme, applyColorScheme } = useThemer();

	useEffect(() => {
		if (preferredColorScheme === 'default')
			return;

		applyColorScheme(preferredColorScheme, false);
	}, [preferredColorScheme]);
};