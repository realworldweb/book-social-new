/*react*/
import { ReactElement } from 'react';

/*layouts*/
import Layout from '@/layouts/loggedIn/mainUserArea';

/*context*/
import SetupForm from '@/components/setup/setupForm';

const UserSetup = () => {
	return (
		<div className='relative flex flex-col items-center w-4/5 mx-auto my-5 bg-white rounded-sm shadow-lg h-fit'>
			<h1 className='mt-5 ml-5 text-xl font-extrabold'>Add account details</h1>
			<p className={`max-w-[550px] ml-3 mb-3 font-semibold text-center`}>
				Fill out the account details below so we can begin setting up your'e
				account.
			</p>
			<SetupForm />
		</div>
	);
};

UserSetup.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default UserSetup;
