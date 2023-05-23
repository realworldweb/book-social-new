import type { FC } from 'react';
import Image from 'next/image';

interface bookPicProps {
	url: string;
}

const BookPic: FC<bookPicProps> = ({ url }) => (
	<Image
		loader={() => url}
		src={url}
		style={{ objectFit: 'cover', objectPosition: 'contain' }}
		alt='book thumbnail'
		width={150}
		height={270}
	/>
);
export default BookPic;
