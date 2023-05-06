/*next*/
import Image from 'next/image';

/*images*/
import heroImg from '@/public/images/book-readers.webp';

function Hero() {
	return (
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
				<div className='flex p-3 ml-[140px] text-xl font-extrabold text-white transform skew-x-12 w-fit h-fit bg-red-400/70 rounded-xl'>
					Connect
				</div>
			</div>
		</div>
	);
}

export default Hero;
