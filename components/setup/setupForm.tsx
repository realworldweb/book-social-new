import type { FC } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import router from 'next/router';
import { addDoc } from '@/lib/firebase/useFirestore';

//import Axios from 'axios';

import { useAuth } from '@/context/authUserContext';

interface setupFormProps {}

const SetupForm: FC<setupFormProps> = ({}) => {
	const { authUser } = useAuth();

	/*refs*/
	const name = useRef<HTMLInputElement>(null);

	const createProfile = () => {
		const data = {
			name: name?.current?.value,
			email: authUser.email,
		};
		addDoc('profiles', authUser.uid, data);
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				createProfile();
			}}
		>
			<input name='owner name' type='text' ref={name} />
			<button type='submit'>Submit</button>
		</form>
	);
};
export default SetupForm;
