/*react*/
import { FC } from 'react';

/*components*/
import loader from '@/styles/modules/loader.module.css';

/*types*/
interface Props {
	purpose: string;
}

const Loader: FC<Props> = ({ purpose }) => {
	return (
		<>
			<span className={loader.element} />
			<p className='mb-5'>{purpose} please wait</p>
		</>
	);
};

export default Loader;
