/*react*/
import { FC } from 'react';

/*context*/
import { useAuth } from '@/context/authUserContext';

/*components*/
import Login from './login';
import FacebookHandler from './facebookHandler';
import GoogleHandler from './googleHandler';
import GithubHandler from './githubHandler';

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
			<div className='relative rounded-md flex flex-col mb-3 px-5 gap-5 items-center w-1/2 min-w-[260px] mx-auto mt-5 border border-slate-400/50 justify-around bg-white shadow-2xl h-fit'>
				<Login />
				<hr className='w-full border bg-slate-900/30 border-slate-900/30' />
				<FacebookHandler />
				<GoogleHandler />
				<GithubHandler />
			</div>
		</div>
	);
};

export default LoginPanel;
