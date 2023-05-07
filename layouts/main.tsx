/*react*/
import { ReactNode, FC, useEffect } from 'react';

/*next*/
import dynamic from 'next/dynamic';

/*components*/

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
const LoginPanel = dynamic(() => import('@/components/login/loginModal'));

/*firebase*/
import { useAuth } from '@/context/authUserContext';

/*google fonts*/
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

interface MyProps {
	children: ReactNode;
}

const headerOnly: FC<MyProps> = ({ children }) => {
	const { loginPanel } = useAuth();
	return (
		<div
			className={`relative flex w-full min-h-screen flex-col justify-between bg-blue-50 ${montserrat.className}`}
		>
			<Header />

			<main className='relative flex flex-col w-full grow'>
				{loginPanel ? <LoginPanel currentState={loginPanel ?? ''} /> : null}
				{children}
			</main>

			<Footer />
		</div>
	);
};

export default headerOnly;
