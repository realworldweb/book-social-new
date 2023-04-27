/*react*/
import { ReactElement } from 'react';

/*next*/
import Head from 'next/head';
import Image from 'next/image';

/*layout*/
import Layout from '../layouts/main';

/*images*/
import heroImg from '../public/images/book-readers.webp';

export default function Home() {
	return (
		<div className='relative w-full h-full'>
			<div className='relative flex items-center justify-center w-full h-52'>
				<Image
					src={heroImg}
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
					}}
					alt='group of book readers'
				/>
				<div className='relative flex flex-col items-center justify-center mx-auto w-fit'>
					<div className='flex p-3 -ml-[200px] text-xl font-extrabold text-white transform skew-x-12 w-fit h-fit bg-lime-300/70 rounded-xl'>
						Read
					</div>
					<div className='flex p-3 -ml-[50px] text-xl font-extrabold text-white transform skew-x-12 w-fit h-fit bg-blue-500/70 rounded-xl'>
						Grow
					</div>
					<div className='flex p-3 ml-[140px] text-xl font-extrabold text-white transform skew-x-12 w-fit h-fit bg-red-200/70 rounded-xl'>
						Connect
					</div>
				</div>
			</div>
		</div>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};
