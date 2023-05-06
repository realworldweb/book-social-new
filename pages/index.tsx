/*react*/
import { ReactElement } from 'react';

/*next*/
import Head from 'next/head';

/*layout*/
import Layout from '../layouts/main';

/*components*/
import Hero from '@/components/index/hero';
import Login from '@/components/index/login';

export default function Home() {
	return (
		<div className='relative w-full h-full'>
			<Hero />
			<Login />
		</div>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};
