/*react*/
import { useRef, useState, ChangeEvent } from 'react';

/*next*/
import { useRouter } from 'next/router';

/*components*/
import ProfilePic from '../general/profilePic';

/*firebase*/
import { addDoc } from '@/lib/firebase/useFirestore';
import { useAuth } from '@/context/authUserContext';

/*cloudinary*/
import { upload } from '@/lib/cloudinary/upload';

/*types*/
import { FieldError } from '@/lib/types/genricTypes';
import { Profile } from '@/lib/types/firestoreData';
import Loader from '../general/loader';

const SetupForm = ({}) => {
	const { authUser } = useAuth();
	const router = useRouter();

	/*state*/
	const [image, setImage] = useState<string | null>(null);
	const [working, setWorking] = useState(false);
	const [fieldError, setError] = useState<FieldError>({
		field: '',
		msg: '',
	});

	/*refs*/
	const name = useRef<HTMLInputElement>(null);
	const username = useRef<HTMLInputElement>(null);
	const postcode = useRef<HTMLInputElement>(null);
	const tagline = useRef<HTMLInputElement>(null);
	const img = useRef<HTMLInputElement>(null);

	const createProfile = async () => {
		if (!username?.current?.value) {
			//return error if username empty
			setError({
				field: 'username',
				msg: 'Username is required',
			});
			return;
		}

		setWorking(true); //start loader;

		const data: Profile = {
			email: authUser?.email!,
			name: name?.current?.value ?? '',
			username: username?.current?.value!,
			postcode: postcode?.current?.value ?? '',
			tagline: tagline?.current?.value ?? '',
			//@ts-expect-error
			img: img?.current?.files[0] ?? '',
		};

		if (data.img) {
			//if img exists upload
			data.img = await upload(data, authUser!.email);
		}

		try {
			// upload user account details to db
			await addDoc('profiles', authUser!.uid, data);
			router.push('../book/add');
		} catch {
			console.error('firebase error');
		}
	};

	const catchUpload = (e: ChangeEvent) => {
		{
			image && URL.revokeObjectURL(image); //revoke previous image url if exists
		}

		{
			if (!(e.target as HTMLInputElement).files) return;
			if ((e.target as HTMLInputElement).files![0]) {
				setImage(URL.createObjectURL((e.target as HTMLInputElement).files![0])); //create new image for preview
			}
		}
	};

	return (
		<>
			{working ? (
				<Loader purpose='Creating account' />
			) : (
				<form
					className='flex flex-col gap-5 my-5'
					onSubmit={(e) => {
						e.preventDefault();
						createProfile();
					}}
				>
					<div className='flex gap-10'>
						<div className='flex flex-col'>
							<label
								className='text-xs font-bold text-slate-900/80'
								htmlFor='name'
							>
								Name
							</label>
							<input
								name='name'
								className='p-1 border rounded shadow-md border-slate-400/50'
								placeholder='Enter name'
								type='text'
								ref={name}
							/>
						</div>
						<div className='flex flex-col'>
							<label
								className='text-xs font-bold text-slate-900/80'
								htmlFor='username'
							>
								Username
							</label>
							{fieldError.field === 'username' ? (
								<p className='text-center text-red-700'>{fieldError.msg}</p>
							) : null}
							<input
								name='username'
								className={`p-1 border rounded shadow-md ${
									fieldError.field === 'username'
										? 'border-red-400/50'
										: 'border-slate-400/50'
								}`}
								placeholder='Enter username'
								type='text'
								ref={username}
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label
							className='text-xs font-bold text-slate-900/80'
							htmlFor='tagline'
						>
							Tagline
						</label>
						<input
							name='tagline'
							placeholder='Enter tagline'
							className='p-1 border rounded shadow-md border-slate-400/50'
							type='text'
							ref={tagline}
						/>
					</div>
					<div className='flex flex-col'>
						{/*TODO: change to what 3 words or some other localale option which can be used world wide*/}
						<label
							className='text-xs font-bold text-slate-900/80'
							htmlFor='postcode'
						>
							Postcode
						</label>
						<input
							name='postcode'
							className='p-1 border rounded shadow-md border-slate-400/50'
							placeholder='Enter postcode'
							type='text'
							ref={postcode}
						/>
					</div>
					<div>
						<label
							className='text-xs font-bold text-slate-900/80'
							htmlFor='profilepic'
						>
							Upload profile pic
						</label>
						<div className='relative w-full p-2 bg-slate-900/40'>
							<p className={`className='text-xs font-bold text-white/80`}>
								Pic preview:
							</p>
							<ProfilePic image={image} />
							{image ? null : (
								<p className={`block relative text-center mx-auto`}>
									No img selected
								</p>
							)}
							<input
								type='file'
								ref={img}
								onChange={(e) => {
									catchUpload(e);
								}}
								accept='image/png, image/jpeg, image/jpg'
								className='block px-3 py-2 mx-auto my-5 text-white rounded-md shadow-lg bg-sky-700 bg w-fit'
								id='profilepic'
							/>
						</div>
					</div>
					<button
						className='px-3 py-1 mx-auto text-white rounded-md shadow-lg bg-sky-700 bg w-fit'
						type='submit'
					>
						Create account
					</button>
				</form>
			)}
		</>
	);
};
export default SetupForm;
