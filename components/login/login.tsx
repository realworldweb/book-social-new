/*react*/
import { FormEvent, useRef } from 'react';

/*firebase*/
import { useAuth } from '@/context/authUserContext';

/*svgs*/
import { SVGEmail, SVGFacebook, SVGGoogle } from '../svg/icons';

function Login() {
	const { signInWithEmailAndPasswordACC, authError, clearError } = useAuth();

	/*refs*/
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const signIn = (e: FormEvent) => {
		e.preventDefault();

		signInWithEmailAndPasswordACC(
			emailRef.current?.value!,
			passwordRef.current?.value!
		);
	};

	return (
		<form className='flex flex-col gap-5 px-2' onSubmit={signIn}>
			<p className='mt-2 text-2xl font-bold text-stone-800/80'>Login</p>
			<div className='relative flex flex-col'>
				<label className='mt-2 ml-1 text-sm font-semibold text-stone-500/80'>
					Email
				</label>
				<input
					className='p-1 border rounded shadow-md border-slate-400/50'
					ref={emailRef}
					name='Email'
					placeholder='email'
					type='text'
				/>
			</div>
			<div className='relative flex flex-col'>
				<label className='mt-2 ml-1 text-sm font-semibold text-stone-500/80'>
					Password
				</label>
				<input
					className='p-1 border rounded shadow-md border-slate-400/50'
					ref={passwordRef}
					placeholder='password'
					name='password'
					type='password'
				/>
			</div>
			<button
				className='flex items-center w-56 px-4 mb-2 font-bold text-white rounded bg-slate-900 hover:border-blue-500'
				type='submit'
			>
				<span className='flex items-center justify-center h-full pr-3 mr-3 text-white border-r-2 border-white'>
					<SVGEmail width='2rem' height='2rem' />
				</span>
				<p className='py-2 text-center grow'>Email</p>
			</button>
		</form>
	);
}

export default Login;
