/*firebase*/
import { useAuth } from '@/context/authUserContext';

/*icons*/
import { SVGGoogle } from '../svg/icons';

function GoogleHandler() {
	const { providerSignin } = useAuth();

	return (
		<button
			className='flex items-center w-56 px-4 -mt-3 font-bold text-white bg-red-700 rounded hover:border-blue-500'
			onClick={() => {
				providerSignin('google');
			}}
		>
			<span className='flex items-center justify-center h-full pr-3 mr-3 text-white border-r-2 border-white'>
				<SVGGoogle width='2rem' height='2rem' />
			</span>
			<p className='py-2 text-center grow'>Google</p>
		</button>
	);
}

export default GoogleHandler;
