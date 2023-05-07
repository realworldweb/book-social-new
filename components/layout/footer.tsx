import Logo from '../general/logo';
import { SVGLogin, SVGSignIn } from '../svg/icons';

function Footer() {
	return (
		<header className='relative flex items-center justify-between w-full h-20 p-3 bg-indigo-900 shadow-md'>
			<Logo />
			<nav className='flex flex-col justify-around sm:flex-row sm:w-56'>
				<a className='relative flex items-center justify-between text-lg font-medium text-white'>
					<SVGLogin height='1.5rem' width='1.5rem' />
					&nbsp; Login
				</a>
				<a className='relative flex items-center justify-between text-lg font-medium text-white'>
					<SVGSignIn height='1.5rem' width='1.5rem' />
					&nbsp; Sign-up
				</a>
			</nav>
		</header>
	);
}

export default Footer;
