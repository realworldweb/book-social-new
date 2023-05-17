/*react*/
import { createContext, useContext, Context } from 'react';

/*firebase*/
import useFirebaseAuth from '../lib/firebase/useFirebaseAuth';

/*types*/
interface AuthUser {
	email: string;
	uid: string;
}

interface AuthUserContextType {
	authUser: AuthUser | null;
	loading: boolean;
	loginPanel: null | string;
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
	createUserWithEmailAndPasswordACC: (
		email: string,
		password: string
	) => Promise<void>;
	signOutACC: () => Promise<void>;
	providerSignin: (provider: string) => Promise<void>;
	clearError: () => Promise<void>;
	resetPassword: () => Promise<void>;
	validate: () => Promise<void>;
	toggleLogin: (purpose?: string) => void;
}

const authUserContext = createContext<AuthUserContextType>({
	authUser: null,
	loginPanel: null,
	loading: true,
	signedOut: false,
	passPrompt: false,
	linkPrompt: false,
	authError: null,
	authSuccess: null,
	emailSent: null,
	signInWithEmailAndPasswordACC: async () => {},
	createUserWithEmailAndPasswordACC: async () => {},
	signOutACC: async () => {},
	providerSignin: async () => {},
	clearError: async () => {},
	resetPassword: async () => {},
	validate: async () => {},
	toggleLogin: () => {},
});

export function AuthUserProvider({ children }: any) {
	const auth = useFirebaseAuth();
	return (
		<authUserContext.Provider value={auth as unknown as AuthUserContextType}>
			{children}
		</authUserContext.Provider>
	);
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
