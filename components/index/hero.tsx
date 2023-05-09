/*next*/
import Image from 'next/image';

/*images*/
import heroImg from '@/public/images/bookshelfHero.webp';

function Hero() {
	return (
		<div className='relative flex items-center justify-center w-full h-52'>
			<Image
				src={heroImg}
				fill
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
					opacity: 0.7,
				}}
				alt='group of book readers'
			/>
			<div className='relative z-10 bg-slate-900/50'>
				<h1 className='mt-1 font-extrabold text-center text-white md:text-xl'>
					Explore your bookshelf and beyond.
				</h1>
				<p className='w-4/5 mx-auto my-2 text-xs font-bold text-center text-white '>
					Calling all book lovers. Discover new titles, connect with like-minded
					readers, and explore the boundless universe of literature.
				</p>
				<div className='flex items-center justify-center gap-10 mt-2 mb-4'>
					<button className='flex items-center justify-center px-2 py-1 font-bold text-white border-2 border-white rounded-md hover:bg-white hover:text-black'>
						Login
					</button>
					<button className='flex items-center justify-center px-2 py-1 font-bold bg-white border-2 border-white rounded-md hover:bg-transparent hover:text-white'>
						Signup
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
