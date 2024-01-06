import Router from 'next/router';
import { useEffect } from 'react';

export default function useRouteLoader() {
	useEffect(() => {
		const body = document.body;
		Router.events.on("routeChangeStart", (_url) => body.classList.add('route-is-changing'));
		Router.events.on("routeChangeComplete", (_url) => body.classList.remove('route-is-changing'));
	}, []);
}