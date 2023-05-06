import { createContext, useContext, Context } from 'react';
import useFirebaseAuth from '../lib/useFirebaseAuth';

interface AuthUserContextType {
	authUser: any;
	loading: boolean;
	signedOut: boolean;
	passPrompt: boolean;
	linkPrompt: boolean;
	authError: any;
	authSuccess: any;
	emailSent: any;
	signInWithEmailAndPasswordACC: (
		password: string,
		email: string
	) => Promise<void>;
	createUserWithEmailAndPasswordACC: () => Promise<void>;
	signOut: () => Promise<void>;
	providerSignin: () => Promise<void>;
	clearError: () => Promise<void>;
	resetPassword: () => Promise<void>;
	validate: () => Promise<void>;
}

const authUserContext = createContext<AuthUserContextType>({
	authUser: null,
	loading: true,
	signedOut: false,
	passPrompt: false,
	linkPrompt: false,
	authError: null,
	authSuccess: null,
	emailSent: null,
	signInWithEmailAndPasswordACC: async () => {},
	createUserWithEmailAndPasswordACC: async () => {},
	signOut: async () => {},
	providerSignin: async () => {},
	clearError: async () => {},
	resetPassword: async () => {},
	validate: async () => {},
});

export function AuthUserProvider({ children }: any) {
	const auth = useFirebaseAuth();
	console.log(auth);
	return (
		<authUserContext.Provider value={auth as unknown as AuthUserContextType}>
			{children}
		</authUserContext.Provider>
	);
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);