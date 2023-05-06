/*react*/
import { ReactElement } from 'react';

/*next*/
import Head from 'next/head';

/*layout*/
import Layout from '../layouts/main';

/*components*/
import SvgSocial from '@/components/svg/socialLibary';
import Login from '@/components/index/login';

export default function Home() {
	return (
		<>
			<Head>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<meta
					name='keywords'
					content='books, book list, bookshelf, swap books, social booker'
				/>
				<meta
					name='description'
					content='A digital bookshelf with social interactions and encouraged book swap scheme'
				/>
				<meta name='DC.Title' content='Social digital bookshelf' />
				<meta name='DC.Language' content='en' />
				<meta name='DC.Subject' content='Social book sharing and opinions' />
				<meta
					name='DC.Description'
					lang='en'
					content='Create a digital bookshelf, meet new people based on your reading interests. Have dicussions on thoughts on the books you have read and swap books with friends list once done.'
				/>
				<meta name='DC.Publisher' content='RealworldWeb' />
				<meta name='DC.Type' content='digital bookshelf' />
			</Head>

			<div className='relative w-full h-full'>
				<SvgSocial />
				<Login />
			</div>
		</>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};
