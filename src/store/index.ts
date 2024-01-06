/** Store for blog posts and projects */

import type { Store, SiteConfigStore } from './types';
import type { Blog, Projects } from '@global-types';

import { create } from 'zustand';
import { persist } from "zustand/middleware";
import { httpRequest } from '@/utils';
import { dataFetchType } from '@/config';

const _INITIAL_STORE_DATA_ = {
	data: [],
	error: false,
	endpoint: ''
};

// Data store
const store = create<Store>((set, get) => ({
	blog: _INITIAL_STORE_DATA_,
	projects: _INITIAL_STORE_DATA_,
	gallery: _INITIAL_STORE_DATA_,
	actions: {
		load: async (url, loadType) => {
			if (!(loadType in dataFetchType))
				return;

			const { data, error, status } = await httpRequest<Projects[] & Blog[]>(<string>url);
			const isError = error !== undefined || status !== 200;

			set((state) => ({
				...state,
				[loadType]: {
					data: !isError ? data : [],
					error: isError,
					endpoint: url
				}
			}));
		},
		reload: (reloadType) => {
			const _state = get();
			const endpoint = _state[<keyof typeof dataFetchType>reloadType].endpoint;

			set((state) => ({
				...state,
				[reloadType]: {
					data: [],
					error: false
				}
			}));

			_state.actions.load(endpoint, reloadType);
		}
	}
}));

// Site config store (using localStorage)
const siteConfigPersist = persist<SiteConfigStore>((set) => ({
	preferredColorScheme: 'default',
	saveColorScheme: (colorScheme) => set({
		preferredColorScheme: colorScheme
	})
}), {
	name: 'sjns-dev-config'
});

export const useSiteConfigStore = create(siteConfigPersist);

export const useProjectsStore = () => store(({ projects }) => projects);
export const useBlogsStore = () => store(({ blog }) => blog);
export const useGalleryStore = () => store(({ gallery }) => gallery);
export const useStoreActions = () => store(({ actions }) => actions);

export const useStore = (type: string) => store((state) => state[<keyof typeof dataFetchType>type]);