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
		<form
			className='relative rounded-md flex flex-col mb-3 px-5 gap-5 items-center w-1/2 min-w-[260px] mx-auto mt-5 border border-slate-400/50 justify-around bg-white shadow-2xl h-fit'
			onSubmit={signIn}
		>
			<p className='mt-2 text-lg font-bold text-stone-800'>Login / Sign-up</p>
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
				<span className='h-full pr-3 mr-3 text-white border-r-2 border-white'>
					<SVGEmail width='2rem' height='2rem' />
				</span>
				<p className='py-2 text-center grow'>Email</p>
			</button>
			<hr className='w-full border bg-slate-900/30 border-slate-900/30' />
			<button
				className='flex items-center w-56 px-4 font-bold text-white bg-blue-900 rounded hover:border-blue-500'
				type='submit'
			>
				<span className='h-full pr-3 mr-3 text-white border-r-2 border-white'>
					<SVGFacebook width='2rem' height='2rem' />
				</span>
				<p className='py-2 text-center grow'>Facebook</p>
			</button>
			<button
				className='flex items-center w-56 px-4 mb-4 -mt-3 font-bold text-white bg-red-700 rounded hover:border-blue-500'
				type='submit'
			>
				<span className='h-full pr-3 mr-3 text-white border-r-2 border-white'>
					<SVGGoogle width='2rem' height='2rem' />
				</span>
				<p className='py-2 text-center grow'>Google</p>
			</button>
		</form>
	);
}

export default Login;
