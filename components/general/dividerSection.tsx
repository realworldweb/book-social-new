import { FC, ReactNode } from 'react';

import SvgDivider from '../svg/divider';

interface Props {
	children: ReactNode;
}

const DividerSection: FC<Props> = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<SvgDivider />
			<div className='bg-[#312d81]'>{children}</div>
		</div>
	);
};
export default DividerSection;
