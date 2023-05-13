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
			className={`relative mt-5 mb-5 d-flex ${
				color === 'black' ? 'text-black' : 'text-white'
			}`}
		>
			<div className='relative w-3/5 ml-8'>{svg}</div>

			<div className='w-4/5 mx-auto mt-5 realtive'>
				<h2 className={`ml-2 text-xl font-extrabold`}>{heading}</h2>
				<hr
					className={`w-4/5 h-1 ml-2 ${
						color === 'black' ? 'bg-slate-900/50' : 'bg-[#eff6ff]/50'
					}`}
				/>
				<p className='w-4/5 mx-auto mt-2 ml-5 font-semibold'>{para}</p>
			</div>
		</div>
	);
};

export default IndexSection;
