/*react*/
import { FormEvent, ReactNode, useRef, useState, useEffect } from 'react';

/*firebase*/
import { useAuth } from '@/context/authUserContext';

/*svgs*/
import { SVGEmail } from '../svg/icons';

/*types*/
interface FieldError {
	field: string;
	msg: string | ReactNode;
}

function SignUp() {
	const { createUserWithEmailAndPasswordACC, authError, clearError } =
		useAuth();

	/*state*/
	const [fieldError, setFieldError] = useState<FieldError>({
		field: '',
		msg: '',
	});

	/*refs*/
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);
	const passwordErrRef = useRef<HTMLInputElement>(null);

	const clearFieldError = () => {
		setFieldError(() => {
			return { field: '', msg: '' };
		});
	};

	const clearErrorStates = () =>
		setTimeout(() => {
			if (fieldError.msg) {
				clearFieldError();
			}
			if (authError) {
				clearError();
			}
		}, 5000);

	/*useEffects*/
	useEffect(() => {
		clearErrorStates();
	}, [fieldError.msg, authError]);

	const signUp = (e: FormEvent) => {
		e.preventDefault();
		if (!emailRef.current?.value) {
			setFieldError({ field: 'email', msg: 'email required' });
			return;
		}

		const isValidEmail = emailRef.current.value.match(
			/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
		);

		if (!isValidEmail) {
			setFieldError({ field: 'email', msg: 'please enter a valid email' });
			return;
		}

		if (!passwordRef.current?.value) {
			setFieldError({ field: 'password', msg: 'password required' });
			return;
		}

		const isValidPassword = passwordRef.current.value.match(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
		);

		if (!isValidPassword) {
			if (!passwordErrRef.current) return;
			passwordErrRef.current.innerHTML = `
			                                    <p class='text-xs'>password invalid</p>
			                                    <ul class='text-xs'>
			                                       <li>must be at least 8 characters</li>
												   <li>must contain a uppercase character</li>
												   <li>must contain a lowercase character</li>
												   <li>must contain a number</li>
												   <li>must contain a special character</li>
												</ul>`;
			setFieldError({
				field: 'password',
				msg: ``,
			});
			return;
		}

		if (!confirmPasswordRef.current?.value) {
			setFieldError({
				field: 'passwordConfirm',
				msg: 'please confirm password',
			});
			return;
		}

		if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
			setFieldError({ field: 'passwordConfirm', msg: 'passwords must match' });
			return;
		}

		createUserWithEmailAndPasswordACC(
			emailRef.current?.value!,
			passwordRef.current?.value!
		);
	};

	return (
		<form className='flex flex-col gap-5 px-2' onSubmit={signUp}>
			<p className='mt-2 text-2xl font-bold text-stone-800/80'>Sign-up</p>
			<div className='relative flex flex-col'>
				<label className='mt-2 ml-1 text-sm font-semibold text-stone-500/80'>
					Email
				</label>
				{fieldError.field === 'email' || authError ? (
					<p className='text-center text-red-700'>
						{fieldError.msg ? fieldError.msg : authError.msg}
					</p>
				) : null}
				<input
					className={`p-1 border rounded shadow-md ${
						fieldError.field === 'email'
							? 'border-red-700/50'
							: 'border-slate-400/50'
					}`}
					ref={emailRef}
					name='Email'
					placeholder='email'
					type='text'
				/>
			</div>
			<div className='relative flex flex-col'>
				<label className='mt-2 ml-1 text-sm font-semibold text-stone-500/80'>
					Choose Password
				</label>

				<p ref={passwordErrRef} className='text-center text-red-700'>
					{fieldError.msg && fieldError.field === 'password'
						? fieldError.msg
						: null}
				</p>

				<input
					className={`p-1 border rounded shadow-md ${
						fieldError.field === 'password'
							? 'border-red-700/50'
							: 'border-slate-400/50'
					}`}
					ref={passwordRef}
					placeholder='password'
					name='password'
					type='password'
				/>
			</div>
			<div className='relative flex flex-col'>
				<label className='mt-2 ml-1 text-sm font-semibold text-stone-500/80'>
					Confirm Password
				</label>
				{fieldError.field === 'passwordConfirm' ? (
					<p className='text-center text-red-700'>{fieldError.msg}</p>
				) : null}
				<input
					className={`p-1 border rounded shadow-md ${
						fieldError.field === 'passwordConfirm'
							? 'border-red-400/50'
							: 'border-slate-400/50'
					}`}
					ref={confirmPasswordRef}
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

export default SignUp;
