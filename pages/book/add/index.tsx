/*react*/
import { ReactElement } from 'react';

/*layouts*/
import Layout from '@/layouts/loggedIn/mainUserArea';

/*context*/
import { useAuth } from '@/context/authUserContext';
import SetupForm from '@/components/setup/setupForm';

const AddBook = () => {
	return (
		<div className='relative flex flex-col items-center w-4/5 mx-auto my-5 bg-white rounded-sm shadow-lg h-fit'>
			<h1 className='mt-5 ml-5 text-xl font-extrabold'>Add book details</h1>
			<p className={`max-w-[550px] ml-3 font-semibold text-center`}>
				Add the details of the current books which you have in your collection
				to get satrted.
			</p>
			<SetupForm />
		</div>
	);
};

AddBook.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default AddBook;
