/*firebase*/
import { useAuth } from '@/context/authUserContext';
import { LoggedIn } from '@/lib/loggedIn';

function UserPage() {
	const { signOutACC } = useAuth();
	LoggedIn();
	return (
		<>
			<div>UserPage</div>
			<button onClick={() => signOutACC()}>Sign-out</button>
		</>
	);
}

export default UserPage;
