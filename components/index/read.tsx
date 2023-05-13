import { FC, ReactComponentElement } from 'react';

interface Props {
	svg: ReactComponentElement<any, any>;
	heading: string;
	para: string;
	color: string;
}

const IndexSection: FC<Props> = ({ svg, heading, para, color }) => {
	return (
		<div
			className={`relative mt-5 mb-5 flex flex-col items-center md:flex-row ${
				color === 'black' ? 'text-black' : 'text-white'
			}`}
		>
			<div className='relative w-3/5'>{svg}</div>

			<div className='relative flex flex-col items-center w-4/5 mx-auto mt-5'>
				<h2 className={`ml-2 text-xl font-extrabold`}>{heading}</h2>
				<hr
					className={`w-4/5 h-1 ${
						color === 'black' ? 'bg-slate-900/50' : 'bg-[#eff6ff]/50'
					}`}
				/>
				<p className='w-4/5 px-4 mt-2 font-semibold'>{para}</p>
			</div>
		</div>
	);
};

export default IndexSection;
