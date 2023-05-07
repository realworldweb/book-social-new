/*firebase*/
import { useAuth } from '@/context/authUserContext';

/*icons*/
import { SVGFacebook } from '../svg/icons';

function FacebookHandler() {
	const { providerSignin } = useAuth();
	return (
		<button
			className='flex items-center w-56 px-4 font-bold text-white bg-blue-900 rounded hover:border-blue-500'
			onClick={() => {
				providerSignin('facebook');
			}}
		>
			<span className='flex items-center justify-center h-full pr-3 mr-3 text-white border-r-2 border-white'>
				<SVGFacebook width='2rem' height='2rem' />
			</span>
			<p className='py-2 text-center grow'>Facebook</p>
		</button>
	);
}

export default FacebookHandler;
