/*react*/
import { ReactNode, FC } from 'react';

/*components*/

import Header from '@/components/layout/headerRestricted';
import Footer from '@/components/layout/footerRestricted';
import Loader from '@/components/general/loader';

/*google fonts*/
import { Montserrat } from 'next/font/google';

/*firebase*/
import { LoggedIn } from '@/lib/loggedIn';

const montserrat = Montserrat({ subsets: ['latin'] });

interface MyProps {
	children: ReactNode;
}

const headerOnly: FC<MyProps> = ({ children }) => {
	const user = LoggedIn();
	return (
		<div
			className={`relative flex w-full min-h-screen flex-col justify-between bg-blue-50 ${montserrat.className}`}
		>
			<Header />

			{user ? (
				<main className='relative flex w-full grow'>{children}</main>
			) : (
				<main className='relative flex flex-col gap-5 w-full justify-center items-center grow'>
					<Loader purpose='Verifying' />
				</main>
			)}

			<Footer />
		</div>
	);
};

export default headerOnly;
