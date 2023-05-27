import { SVGProps, FC } from 'react';

interface Props extends SVGProps<SVGElement> {
	setRating?: Function | null;
	starHover?: Function | null;
	number: number;
	lit: boolean;
}

const Star: FC<Props> = ({ lit, setRating, starHover, number }) => {
	const background = lit ? 'rgb(243, 199, 12)' : 'rgb(243, 199, 12, 0.1)';

	const handleHover = (clear: boolean) => {
		if (!starHover) return;
		if (clear) {
			starHover(0);
			return;
		}
		starHover(number);
	};

	const userRate = () => {
		if (!setRating) return;
		setRating(number);
	};

	return (
		<svg
			viewBox='0 0 6.037 5.77'
			width='2rem'
			height='2rem'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M3.019 4.832l1.464.886a.352.352 0 00.525-.381L4.62 3.672 5.915 2.55a.352.352 0 00-.201-.618L4.01 1.788 3.343.214a.353.353 0 00-.649 0l-.667 1.57-1.704.145a.352.352 0 00-.2.617l1.294 1.122-.388 1.665a.352.352 0 00.526.381z'
				fill={background}
				strokeWidth='.353'
				stroke='rgb(243, 199, 12)'
				onMouseOver={() => handleHover(false)}
				onMouseOut={() => handleHover(true)}
				onClick={userRate}
			/>
		</svg>
	);
};

export default Star;
