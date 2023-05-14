/*react*/
import { useState, useEffect } from 'react';

/*next*/
import { useRouter } from 'next/router';

/*firebase*/
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	EmailAuthProvider,
	GoogleAuthProvider,
	FacebookAuthProvider,
	GithubAuthProvider,
	fetchSignInMethodsForEmail,
	sendPasswordResetEmail,
	onAuthStateChanged,
	sendEmailVerification,
} from 'firebase/auth';

import { EmailAuthCredential } from 'firebase/auth';

import { queryDoc } from './useFirestore';

interface AuthDetails {
	msg: string;
	assign: string;
}

const auth = getAuth();

const providerGoogle = new GoogleAuthProvider();

const providerFacebook = new FacebookAuthProvider();

const providerGithub = new GithubAuthProvider();

const formatAuthUser = (user: any) => ({
	uid: user.uid,
	email: user.email,
});

export default function useFirebaseAuth() {
	const [authUser, setAuthUser] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [signedOut, setSignedOut] = useState<boolean>(false);
	const [linkEmail, setLinkEmail] = useState<string | null>(null);
	const [linkCred, setLinkCred] = useState<EmailAuthCredential | null>(null);
	const [linkMethod, setLinkMethod] = useState<string | null>(null);
	const [passPrompt, setPassPrompt] = useState(false);
	const [linkPrompt, setLinkPrompt] = useState(false);
	const [authError, setAuthError] = useState<AuthDetails | null>(null);
	const [authSuccess, setAuthSuccess] = useState<AuthDetails | null>(null);
	const [emailSent, setEmailSent] = useState<boolean | null>(null);
	const [loginPanel, setLoginPanel] = useState<string | null>(null);
	const router = useRouter();

	const clearError = () => {
		setAuthError(null);
	};

	const authStateChanged = async (authState: any) => {
		if (!authState) {
			setAuthUser(null);
			setLoading(false);
			return;
		}

		setLoading(true);
		const formattedUser = formatAuthUser(authState);

		setAuthUser(formattedUser);
		setLoading(false);
		if (!formattedUser) {
			return;
		}
		const emailVaild = auth.currentUser?.emailVerified;
		try {
			const profile = await queryDoc('profiles', 'email', formattedUser.email);

			const setupComplete = profile?.[0]?.setup;
			if (!emailVaild) {
				router.push('../user/email');
			} else if (profile.length === 0) {
				router.push('../user/setup');
			} else if (setupComplete) {
				router.push('./user');
			} else {
				router.push('../book/add');
			}
		} catch (err) {
			console.error(err);
		}
	};

	const clear = (origin: string) => {
		//clear user states
		if (origin === 'signout') {
			setSignedOut(true);
		}

		setAuthUser(null);
		setLoading(true);
	};

	const checkMethods = () => {
		// check available methods to vaildate secondary signin.
		fetchSignInMethodsForEmail(auth, linkEmail!).then((methods) => {
			setLinkMethod(methods[0]);
			{
				if (methods.includes('password')) {
					setPassPrompt(true);
				} else {
					setLinkPrompt(true);
				}
			}
		});
	};

	const linkAccount = (result: any) => {
		//link secondary signin method.

		setSignedOut(false);
		result.user.linkWithCredential(linkCred).then(() => {
			router.push('./email-setup');
			setLinkCred(null);
			setLinkEmail(null);
			setLinkMethod(null);
		});
	};

	const signInWithEmailAndPasswordACC = (email: string, password: string) => {
		{
			if (!email) email = linkEmail!;
		}

		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				{
					if (linkCred) linkAccount(result);
				} //if action has come through methods function run link accounts

				setSignedOut(false);
				setLoginPanel(null);
			})
			.catch((error) => {
				if (error.code === 'auth/user-not-found') {
					setAuthError({
						msg: 'user not found please sign up',
						assign: 'login',
					});
					return;
				}

				if (error.code === 'auth/wrong-password') {
					setAuthError({
						msg: 'incorrect password or user name',
						assign: 'login',
					});
					return;
				}

				setAuthError({
					msg: error.message,
					assign: 'login',
				});
			});
	};
	const createUserWithEmailAndPasswordACC = (email: string, password: string) =>
		createUserWithEmailAndPassword(auth, email, password)
			.then((authUser) => {})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;

				// The firebase.auth.AuthCredential type that was used.
				const credential = error.credential;
				// catch duplicate acc and set state to be caught by use effect

				if (errorCode === 'auth/email-already-in-use') {
					fetchSignInMethodsForEmail(auth, email).then((methods) => {
						if (methods.includes('password')) {
							setAuthError({
								msg: 'email already registered please login',
								assign: 'signup',
							});
						} else {
							continueLink();
						}
					});
					const continueLink = () => {
						setLinkCred(EmailAuthProvider.credential(email, password));
						setLinkEmail(email);
					};
				} else {
					setAuthError({
						msg: error.message,
						assign: 'signup',
					});
				}
			});

	const signOutACC = () => signOut(auth).then(() => clear('signout')); //signout of firebase clear user with purpose signout.

	const providerSignin = (provider: any, link: any) => {
		if (!provider) provider = linkMethod!;
		//catch link requests and set provider from saved method.
		/*the following statements check requested provider string. 
     then load the approiate provider object above*/

		if (provider.toString().includes('facebook')) provider = providerFacebook;

		if (provider.toString().includes('google')) provider = providerGoogle;

		if (provider.toString().includes('github')) provider = providerGithub;

		signInWithPopup(auth, provider)
			.then((userCredential) => {
				// The signed-in user info.
				const user = userCredential.user;

				//if action has come from methods function run links.

				if (link) linkAccount(userCredential);

				setSignedOut(false);
				setLoginPanel(null);

				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;

				// The email of the user's account used.
				const email = error.email;

				// The firebase.auth.AuthCredential type that was used.
				const credential = error.credential;

				// catch duplicate acc and set state to be caught by use effect
				if (errorCode === 'auth/account-exists-with-different-credential') {
					setLinkCred(credential), setLinkEmail(email);
				} else {
					setAuthError({
						msg: error.message,
						assign: 'social',
					});
				}
			});
	};

	const resetPassword = (email: string) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setAuthSuccess({
					msg: 'success emaill has been sent',
					assign: 'reset',
				});
			})
			.catch((error) => {
				setAuthError({
					msg: error.message,
					assign: 'reset',
				});
			});
	};

	const validate = () => {
		sendEmailVerification(auth.currentUser!)
			.then(() => {
				setEmailSent(true);
				return true;
			})
			.catch((err) => {
				setAuthError(err);
				return false;
			});
	};

	const toggleLogin = (purpose?: string) => {
		switch (purpose) {
			case 'login':
				setLoginPanel('login');
				return;
			case 'signup':
				setLoginPanel('signup');
				return;
			default:
				setLoginPanel(null);
				return;
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, authStateChanged);
		return () => unsubscribe();
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		{
			if (linkEmail) checkMethods();
		}
		//eslint-disable-next-line
	}, [linkEmail]);

	return {
		authUser,
		loading,
		signedOut,
		passPrompt,
		linkPrompt,
		authError,
		authSuccess,
		emailSent,
		loginPanel,
		signInWithEmailAndPasswordACC,
		createUserWithEmailAndPasswordACC,
		signOutACC,
		providerSignin,
		clearError,
		resetPassword,
		validate,
		toggleLogin,
	};
}
