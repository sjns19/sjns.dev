/** Utility functions */

import type { CreateClassListPropss, AxiosResponseData } from './types';
import axios, { type AxiosRequestConfig } from 'axios';

/**
 * Creates a list of CSS classes that need to be added conditionally into
 * a component's element based on the presence of props that are passed through
 * 
 * Similar to that of classnames package
 */
export const createClassList = (classes: CreateClassListPropss): string | undefined => {
	const classList = Object
		.keys(classes)
		.map((key) => (key !== 'undefined' && classes[key]) ? key : null)
		.join(' ')
		.trim();

	return classList.length ? classList : undefined;
};

/**
 * Custom axios wrapper
 * 
 * Just to avoid the repeated try/catch block every time we need to perform a 
 * request. This will handle the try/catch and return either the response object 
 * or the error caught by the catch block.
 */
export const httpRequest = async <T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponseData<T>> => {
	try {
		return await axios<T>(url, config);
	} catch (error) {
		return {
			error: error
		};
	}
};