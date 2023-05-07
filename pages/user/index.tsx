import { ReactElement } from 'react';

/*layouts*/
import Layout from '@/layouts/loggedIn/mainUserArea';

function UserPage() {
	return <div>UserPage</div>;
}

UserPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default UserPage;
