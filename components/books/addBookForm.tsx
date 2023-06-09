/*react*/
import { FC } from 'react';

/*components*/
import BookPic from '../general/bookPic';
import Rating from '../general/rating';

/*types*/
import { Book } from '@/lib/types/firestoreData';

interface Props {
	book: Book;
}

const AddBookForm: FC<Props> = ({ book }) => (
	<>
		<div className='relative flex flex-col h-fit w-full p-2 bg-slate-900/40'>
			<p className={`className='text-xs font-bold text-white/80`}>
				Book thumbnail:
			</p>
			<div className='relative flex w-full h-fit items-center justify-center'>
				<BookPic url={book?.thumb!} />
			</div>
		</div>
		<div className='flex flex-col'>
			<label className='text-xs font-bold text-slate-900/80' htmlFor='title'>
				Title
			</label>
			<input
				type='text'
				className='p-1 border rounded shadow-md border-slate-400/50'
				value={book?.title ?? ''}
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
				value={book?.desc ?? ''}
				name='desc'
				disabled={true}
			/>
		</div>
		<div className='flex flex-col'>
			<p className='text-xs font-bold text-slate-900/80'>Author(s)</p>
			<input
				type='text'
				className='p-1 border rounded shadow-md border-slate-400/50'
				value={book?.authors.join(' ') ?? ''}
				name='author'
				disabled={true}
			/>
		</div>
		<div className='flex flex-col sm:flex-row gap-5'>
			<div className='flex flex-col'>
				<p className='text-xs font-bold text-slate-900/80'>Page count</p>
				<input
					type='text'
					className='p-1 border rounded shadow-md border-slate-400/50'
					value={book?.pages ?? ''}
					name='pages'
					disabled={true}
				/>
			</div>
			<div className='flex flex-col'>
				<Rating
					rating={parseInt(String(book?.googleRating))}
					label='&nbsp;&nbsp;Google rating'
					disabled={true}
					ISBN={book.ISBN}
				/>
			</div>
		</div>
	</>
);
export default AddBookForm;
