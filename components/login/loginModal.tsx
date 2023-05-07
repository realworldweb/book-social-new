/*react*/
import { FC } from 'react';

/*context*/
import { useAuth } from '@/context/authUserContext';

/*components*/
import Login from './login';

interface Props {
	currentState: string;
}

const LoginPanel: FC<Props> = ({ currentState }) => {
	const { toggleLogin } = useAuth();

	return (
		<div className='absolute z-10 flex flex-col items-center justify-center w-full h-full bg-slate-900/60'>
			<button
				className='absolute text-2xl font-extrabold text-white right-4 top-2'
				onClick={() => toggleLogin()}
			>
				X
			</button>
			<Login />
		</div>
	);
};

export default LoginPanel;
