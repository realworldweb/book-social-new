import { FC, useState } from 'react';

import Star from '../svg/star';

/*firebase*/
import { mergeDoc } from '@/lib/firebase/useFirestore';
import { useAuth } from '@/context/authUserContext';

interface ratingProps {
	rating: number;
	ISBN: string;
	label: string;
	disabled: boolean;
	passRating?: Function;
}

const Rating: FC<ratingProps> = ({
	rating,
	ISBN,
	label,
	disabled,
	passRating,
}) => {
	const { authUser } = useAuth();
	const [ratingArr, setRatingArr] = useState(
		Array.from({ length: 5 }, (_, i) => rating > i)
	); //create mapable boolean arr from rating

	const setRating = async (number: number) => {
		if (passRating) {
			passRating('rating', number);
			return;
		}
		try {
			await mergeDoc(`userBooks/${authUser!.uid}/ISBN`, ISBN, {
				rating: number,
			});
		} catch (err) {
			console.error(err);
		}
	};

	const starHover = (number: number) => {
		if (number === 0) {
			setRatingArr(Array.from({ length: 5 }, (_, i) => rating > i));
			return;
		}

		setRatingArr(Array.from({ length: 5 }, (_, i) => number > i));
	};

	return (
		<div className='relative flex w-4/5 mx-auto flex-col justify-center items-center'>
			<p className='text-xs font-bold w-full text-center text-slate-900/80'>
				{label}
			</p>
			<div className='flex p-1 mx-auto gap-2'>
				{ratingArr.map((rating, i) => (
					<Star
						lit={rating}
						number={i + 1}
						key={i}
						setRating={disabled ? null : setRating}
						starHover={disabled ? null : starHover}
					/>
				))}
			</div>
		</div>
	);
};
export default Rating;
