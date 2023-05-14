import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/authUserContext';

export const LoggedIn = () => {
	const { authUser, loading, signedOut } = useAuth();
	const router = useRouter();

	useEffect(() => {
		!authUser &&
			signedOut === true &&
			router.push({ pathname: '/', query: { signingOut: true } });

		//eslint-disable-next-line
	}, [signedOut, authUser]);

	// Listen for changes on loading and authUser, redirect if needed
	useEffect(() => {
		!loading && !authUser && !signedOut && router.push('/');
		//eslint-disable-next-line
	}, [authUser, loading, signedOut]);

	if (authUser) return true;

	return false;
};
