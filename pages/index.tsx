/*react*/
import { ReactElement } from 'react';

/*next*/
import Head from 'next/head';

/*layout*/
import Layout from '../layouts/main';

/*components*/
import SvgSocial from '@/components/svg/socialLibary';
import Hero from '@/components/index/hero';
import SvgReader from '@/components/svg/reader';
import SvgGrow from '@/components/svg/grow';
import IndexSection from '@/components/index/read';
import DividerSection from '@/components/general/dividerSection';

const readerPara = `Introducing a revolutionary reading experience designed 
                    specifically with readers in mind! Our platform is meticulously 
					crafted from the ground up to cater to your literary needs. With 
					our innovative system, you can easily access a comprehensive analysis 
					and review of the books you have read. We provide detailed insights, 
					critiques, and recommendations tailored to your preferences and 
					reading history.`;

const growPara = `As your bookshelf grows, so does the wealth of suggestions, analyses, 
                  and connections available to you. With each new addition to your collection
				  , our platform expands its knowledge of your reading preferences, allowing 
				  us to offer even more tailored recommendations. We understand the importance 
				  of finding books that truly resonate with you, and our goal is to enhance 
				  your reading experience by providing valuable insights and connections based 
				  on the books you love.`;

const connectPara = `With our robust platform, we foster a dynamic environment where you can 
                     establish connections, engage in book swaps, participate in book clubs, 
					 discuss your favorite stories, and stay updated on what your friends are 
					 reading. We believe that sharing the joy of reading with others enhances 
					 the overall experience and creates a sense of community.`;

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
				<Hero />
				<IndexSection
					svg={SvgReader()}
					heading='Read'
					para={readerPara}
					color='black'
				/>
				<DividerSection>
					<IndexSection
						svg={SvgGrow()}
						heading='Grow'
						para={growPara}
						color='white'
					/>
				</DividerSection>
				<IndexSection
					svg={SvgSocial()}
					heading='Connect'
					para={connectPara}
					color='black'
				/>
			</div>
		</>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};
