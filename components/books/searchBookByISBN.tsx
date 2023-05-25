/*react*/
import { FC, useRef } from 'react';

/*firebase*/
import { getDocByName } from '@/lib/firebase/useFirestore';

/*googleBooks*/
import { getBookByISBN } from '@/lib/googleBooks';

/*class*/
import { Book } from '@/lib/functions/books';

interface searchBookByISBNProps {
	updateBookDetails: Function;
}

const SearchBookByISBN: FC<searchBookByISBNProps> = ({ updateBookDetails }) => {
	const ISBN = useRef<HTMLInputElement>(null);

	const findBook = async (ISBN: string) => {
		if (!ISBN) return;
		try {
			const book = await getDocByName('books', ISBN);

			if (book) {
				updateBookDetails({ ...(book as Book) });
				return;
			}

			const googleReq = await getBookByISBN(ISBN);
			const googleBook = googleReq.items[0].volumeInfo;

			const buildBook = new Book(ISBN, googleBook);

			updateBookDetails(buildBook);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<form
			className='flex flex-col sm:flex-row mb-5 gap-10'
			onSubmit={(e) => {
				e.preventDefault();
				return findBook(ISBN.current?.value!);
			}}
		>
			<div className='flex flex-col'>
				<label
					className='text-xs font-bold text-slate-900/80'
					htmlFor='postcode'
				>
					ISBN
				</label>
				<input
					type='text'
					className='p-1 border rounded shadow-md border-slate-400/50'
					ref={ISBN}
					name='ISBN'
					placeholder='please enter ISBN'
				/>
			</div>
			<button
				type='submit'
				className='px-3 py-1 mx-auto text-white rounded-md shadow-lg bg-sky-700 bg w-fit'
			>
				Search for details
			</button>
		</form>
	);
};
export default SearchBookByISBN;
