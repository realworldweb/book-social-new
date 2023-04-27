/*react*/
import { ReactNode, FC } from 'react';

/*components*/

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

/*google fonts*/
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

interface MyProps {
	children: ReactNode;
}

const headerOnly: FC<MyProps> = ({ children }) => {
	return (
		<div
			className={`relative flex w-full min-h-screen flex-col justify-between bg-blue-50 ${montserrat.className}`}
		>
			<Header />

			<main className='relative flex w-full grow'>{children}</main>

			<Footer />
		</div>
	);
};

export default headerOnly;
