import Logo from '../general/logo';
import { SVGLogin, SVGSignIn } from '../svg/icons';

function Header() {
	return (
		<header className='relative flex items-center justify-between w-full h-20 p-3 bg-indigo-900 shadow-md'>
			<Logo />
			<a className='relative flex items-center justify-between text-lg font-medium text-white'>
				<SVGLogin height='1.5rem' width='1.5rem' />
				&nbsp; Login
			</a>
			<a className='relative flex items-center justify-between text-lg font-medium text-white'>
				<SVGSignIn height='1.5rem' width='1.5rem' />
				&nbsp; Sign-up
			</a>
		</header>
	);
}

export default Header;
