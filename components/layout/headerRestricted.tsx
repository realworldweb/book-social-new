import Logo from '../general/logo';

/*firebase*/
import { useAuth } from '@/context/authUserContext';

/*icons*/
import { SVGSignOut } from '../svg/icons';

function Header() {
	const { signOutACC } = useAuth();
	return (
		<header className='relative flex items-center justify-between w-full h-20 p-3 bg-indigo-900 shadow-md'>
			<Logo />
			<nav className='flex flex-col justify-around sm:flex-row sm:w-56'>
				<button
					onClick={signOutACC}
					className='relative flex items-center justify-between text-lg font-medium text-white'
				>
					<SVGSignOut height='1.5rem' width='1.5rem' />
					&nbsp; Sign-out
				</button>
			</nav>
		</header>
	);
}

export default Header;
