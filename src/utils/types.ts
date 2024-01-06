/** Utility functions' types */

import type { AxiosResponse } from 'axios';

export interface CreateClassListPropss {
	[key: string]: (string | boolean | number | undefined)
}

export interface AxiosResponseData<T> extends Partial<AxiosResponse<T>> {
	error?: unknown
}