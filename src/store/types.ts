/** Initial states types for the store */

import type { Blog, Projects, Gallery } from '@global-types';

type StoreData<T> = {
	data: T,
	error: boolean,
	endpoint: string
};

export type Store = {
	projects: StoreData<Projects[]>,
	blog: StoreData<Blog[]>,
	gallery: StoreData<Gallery[]>,
	actions: {
		load: (url: string, loadType: string) => void;
		reload: (reloadType: string) => void
	}
};

export type SiteConfigStore = {
	preferredColorScheme: string,
	saveColorScheme: (colorScheme: string) => void
};