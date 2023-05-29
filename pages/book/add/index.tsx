/*react*/
import { ReactElement, useState } from 'react';

/*firebase*/
import { addDoc, mergeDoc } from '@/lib/firebase/useFirestore';
import { useAuth } from '@/context/authUserContext';

/*layouts*/
import Layout from '@/layouts/loggedIn/mainUserArea';

/*components*/
import AddBookForm from '@/components/books/addBookForm';

/*types*/
import { Book, UserBook } from '@/lib/types/firestoreData';
import SearchBookByISBN from '@/components/books/searchBookByISBN';
import Rating from '@/components/general/rating';
import ReadStatus from '@/components/general/readStatus';
import TradeSetting from '@/components/general/tradeSeting';
import Loader from '@/components/general/loader';

const AddBook = () => {
	const { authUser } = useAuth();
	const [bookDetails, setBookDetails] = useState<Book | null>(null);
	const [loader, setLoader] = useState<string | null>(null);
	const [cached, setCached] = useState<Boolean>(false);
	const [userBookDetails, setUserBookDetails] = useState<UserBook>({
		rating: 0,
		status: 'too read',
		tradable: false,
	});

	const AddBooktoDB = async () => {
		setLoader('adding book');
		try {
			if (!cached) {
				await addDoc('books', bookDetails!.ISBN, {
					...bookDetails,
				});
			}

			await addDoc(`userBooks/${authUser!.uid}/ISBN`, bookDetails!.ISBN, {
				...userBookDetails,
			});
		} catch (err) {
			console.error(err);
		} finally {
			setLoader(null);
		}
	};

	const updateUserBookDetails = (property: string, value: number | string) => {
		setUserBookDetails((prev: UserBook) => ({ ...prev, [property]: value }));
	};

	const completeSetup = async () => {
		const res = await mergeDoc(`profiles`, authUser!.uid, { setup: true });

		console.log(res);
	};

	return (
		<div className='relative flex flex-col items-center w-full sm:w-4/5 max-w-[590px] mx-auto my-5 bg-white rounded-sm shadow-lg h-fit'>
			<h1 className='mt-5 ml-5 text-xl font-extrabold'>Add book details</h1>
			<p className={`max-w-[550px] ml-3 mb-3 font-semibold text-center`}>
				Add the details of the current books which you have in your collection
				to get started.
			</p>
			{loader ? (
				<Loader purpose={loader} />
			) : (
				<div className='flex flex-col gap-5 w-4/5 mb-5'>
					<div className='w-full flex justify-end'>
						<button
							className='relative px-3 py-1 text-white rounded-md shadow-lg bg-red-500 w-fit'
							onClick={completeSetup}
						>
							Skip this step
						</button>
					</div>
					<SearchBookByISBN
						updateBookDetails={setBookDetails}
						setLoader={setLoader}
						setOnServer={setCached}
					/>
					{bookDetails ? (
						<>
							<AddBookForm book={bookDetails} />
							<Rating
								rating={4}
								label='User rating'
								disabled={false}
								ISBN={bookDetails.ISBN}
								passRating={updateUserBookDetails}
							/>
							<div className='flex w-full justify-around align-center mx-auto'>
								<ReadStatus
									status='to read'
									label='Reading status'
									ISBN={bookDetails.ISBN}
									passStatus={updateUserBookDetails}
								/>
								<TradeSetting
									trade={true}
									label='Tradeable'
									ISBN={bookDetails.ISBN}
									passTrade={updateUserBookDetails}
								/>
							</div>
							<button
								className='px-3 py-1 mx-auto text-white rounded-md shadow-lg bg-sky-700 bg w-fit'
								onClick={AddBooktoDB}
							>
								Add Book
							</button>
						</>
					) : null}
				</div>
			)}
		</div>
	);
};

AddBook.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default AddBook;
