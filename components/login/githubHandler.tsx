/*firebase*/
import { useAuth } from '@/context/authUserContext';

/*icons*/
import { SVGGithub } from '../svg/icons';

function GithubHandler() {
	const { providerSignin } = useAuth();

	return (
		<button
			className='flex items-center w-56 px-4 mb-4 -mt-3 font-bold text-white rounded bg-slate-900 hover:border-blue-500'
			onClick={() => {
				providerSignin('github');
			}}
		>
			<span className='flex items-center justify-center h-full pr-3 mr-3 text-white border-r-2 border-white'>
				<SVGGithub width='2rem' height='2rem' />
			</span>
			<p className='py-2 text-center grow'>Github</p>
		</button>
	);
}

export default GithubHandler;
