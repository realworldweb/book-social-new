/*react*/
import type { ReactElement, ReactNode } from 'react';

/*next*/
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

/*context*/
import { AuthUserProvider } from '../context/authUserContext';

/*styles*/
import '@/styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<AuthUserProvider>
			{getLayout(<Component {...pageProps} />)}
		</AuthUserProvider>
	);
}
