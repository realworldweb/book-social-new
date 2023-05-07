/*firebase*/
import { useAuth } from '@/context/authUserContext';

/*svgs/icons*/
import Logo from '../general/logo';
import { SVGLogin, SVGSignIn } from '../svg/icons';

function Header() {
	const { toggleLogin } = useAuth();
	return (
		<header className='relative flex items-center justify-between w-full h-20 p-3 bg-indigo-900 shadow-md'>
			<Logo />
			<nav className='flex flex-col justify-around sm:flex-row sm:w-56'>
				<button
					onClick={() => toggleLogin('login')}
					className='relative flex items-center justify-between text-lg font-medium text-white'
				>
					<SVGLogin height='1.5rem' width='1.5rem' />
					&nbsp; Login
				</button>
				<button
					onClick={() => toggleLogin('signup')}
					className='relative flex items-center justify-between text-lg font-medium text-white'
				>
					<SVGSignIn height='1.5rem' width='1.5rem' />
					&nbsp; Sign-up
				</button>
			</nav>
		</header>
	);
}

export default Header;
