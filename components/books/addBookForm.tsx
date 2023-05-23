/*react*/
import { useRef, useState } from 'react';

/*components*/
import BookPic from '../general/bookPic';

/*firebase*/
import { getDocByName } from '@/lib/firebase/useFirestore';

/*types*/
import { Book } from '@/lib/types/firestoreData';

const AddBookForm = () => {
	/*refs*/
	const ISBN = useRef<HTMLInputElement>(null);
	const [formData, setFormData] = useState<Book | null>(null);
	const [ISBNSearched, setISBNSearched] = useState<boolean>(false);
	const [bookError, setBookError] = useState<string | null>(null);

	const getBookFromApi = async (ISBN: string) => {
		const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}&key=${process.env.NEXT_PUBLIC_Api_Key}`;
		try {
			const res = await fetch(url);

			return await res.json();
		} catch (error) {
			console.error(error);
		}
	};

	const findBook = async (ISBN: string) => {
		if (!ISBN) return;
		try {
			const book = await getDocByName('books', ISBN);

			if (book) {
				setFormData({ ...(book as Book) });
				setISBNSearched(true);
				return;
			}

			const googleReq = await getBookFromApi(ISBN);
			const googleBook = googleReq.items[0].volumeInfo;

			const bookObject = {
				ISBN,
				authors: googleBook.authors,
				desc: googleBook.description,
				title: googleBook.title,
				pages: googleBook.pageCount,
				thumb: googleBook.imageLinks.smallThumbnail,
				googleRating: googleBook.averageRating,
				userRating: 0,
			};

			setFormData(() => ({ ...bookObject }));
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className='flex flex-col gap-5 mb-5'>
			<form
				className='flex gap-10'
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

			<div className='relative flex flex-col h-fit w-full p-2 bg-slate-900/40'>
				<p className={`className='text-xs font-bold text-white/80`}>
					Book thumbnail:
				</p>
				<div className='relative flex w-full h-fit items-center justify-center'>
					<BookPic url={formData?.thumb!} />
				</div>
			</div>
			<div className='flex flex-col'>
				<label className='text-xs font-bold text-slate-900/80' htmlFor='title'>
					Title
				</label>
				<input
					type='text'
					className='p-1 border rounded shadow-md border-slate-400/50'
					value={formData?.title ?? ''}
					name='title'
					disabled={true}
				/>
			</div>
			<div className='flex flex-col'>
				<label className='text-xs font-bold text-slate-900/80' htmlFor='desc'>
					Description
				</label>
				<textarea
					className='p-1 border rounded shadow-md border-slate-400/50'
					value={formData?.desc ?? ''}
					name='desc'
					disabled={true}
				/>
			</div>
			<div className='flex flex-col'>
				<label className='text-xs font-bold text-slate-900/80' htmlFor='author'>
					Author(s)
				</label>
				<input
					type='text'
					className='p-1 border rounded shadow-md border-slate-400/50'
					value={formData?.authors.join(' ') ?? ''}
					name='author'
					disabled={true}
				/>
			</div>
		</div>
	);
};
export default AddBookForm;
