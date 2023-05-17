import type { FC } from 'react';

import Image from 'next/image';
import { SVGImage } from '../svg/icons';

interface profilePicProps {
	image: string | null;
}

const ProfilePic: FC<profilePicProps> = ({ image }) => {
	return (
		<div className='relative rounded-full overflow-hidden w-36 h-36 mx-auto'>
			{image ? (
				<Image
					src={image}
					alt='happy user'
					style={{ objectFit: 'cover', objectPosition: 'center' }}
					fill
				/>
			) : (
				<SVGImage fill='#fff' width='9rem' height='9rem' />
			)}
		</div>
	);
};
export default ProfilePic;
