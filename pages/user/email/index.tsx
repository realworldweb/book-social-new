/*react*/
import { ReactElement } from 'react';

/*layouts*/
import Layout from '@/layouts/loggedIn/mainUserArea';

/*context*/
import { useAuth } from '@/context/authUserContext';

const EmailSetup = () => {
	const { validate, emailSent } = useAuth();
	return (
		<div className='relative flex flex-col items-center w-4/5 mx-auto my-5 bg-white rounded-sm shadow-lg h-fit'>
			<h1 className='mt-5 ml-5 text-xl font-extrabold'>
				{emailSent ? 'Check your Email' : 'Verify Email'}
			</h1>
			<p
				className={`max-w-[550px] ml-3 font-semibold text-center ${
					emailSent ? 'mb-5' : ''
				}`}
			>
				{emailSent
					? `We have sent the email please  check your inbox. Follow the link in the email to 
					   validate your account then come back here and refresh the page. `
					: `Hi thanks for signing up we just need to Verify your email then we can
				       help you get started.`}
			</p>
			{emailSent ? null : (
				<button
					onClick={validate}
					className='p-2 mx-auto mt-3 mb-5 text-center text-white bg-blue-700 rounded-md w-fit '
				>
					Verify Email
				</button>
			)}
		</div>
	);
};

EmailSetup.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default EmailSetup;
