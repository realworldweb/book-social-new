/*react*/
import { ReactElement, useState } from 'react';

/*layouts*/
import Layout from '@/layouts/loggedIn/mainUserArea';

/*components*/
import AddBookForm from '@/components/books/addBookForm';

/*types*/
import { Book, UserBook } from '@/lib/types/firestoreData';
import SearchBookByISBN from '@/components/books/searchBookByISBN';
import Rating from '@/components/general/rating';

const AddBook = () => {
	const [bookDetails, setBookDetails] = useState<Book | null>(null);
	const [userBookDetails, setUserBookDetails] = useState<UserBook>({
		rating: 0,
		status: 'too read',
		tradable: false,
	});

	const updateBookDetails = (bookDetails: Book) => {
		setBookDetails(bookDetails);
	};

	const updateUserBookDetails = (property: string, value: number | string) => {
		setUserBookDetails((prev: UserBook) => ({ ...prev, [property]: value }));
	};

	return (
		<div className='relative flex flex-col items-center w-full sm:w-4/5 max-w-[590px] mx-auto my-5 bg-white rounded-sm shadow-lg h-fit'>
			<h1 className='mt-5 ml-5 text-xl font-extrabold'>Add book details</h1>
			<p className={`max-w-[550px] ml-3 mb-3 font-semibold text-center`}>
				Add the details of the current books which you have in your collection
				to get started.
			</p>
			<SearchBookByISBN updateBookDetails={updateBookDetails} />
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
				</>
			) : null}
		</div>
	);
};

AddBook.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default AddBook;
