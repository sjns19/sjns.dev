import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import useDataLoader from '@/hooks/useDataLoader';
import useRouteLoader from '@/hooks/useRouteLoader';
import { useThemeLoader } from '@/hooks/useThemer';

export const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700']
});

export default function App({ Component, pageProps }: AppProps) {
	useDataLoader();
	useRouteLoader();
	useThemeLoader();

	return (
		<main className={inter.className}>
			<Component {...pageProps} />
		</main>
	);
}