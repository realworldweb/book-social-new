import { FC } from 'react';

/*firebase*/
import { mergeDoc } from '@/lib/firebase/useFirestore';
import { useAuth } from '@/context/authUserContext';

interface StatusProps {
	status: string;
	ISBN: string;
	label: string;
	passStatus?: Function;
}

const ReadStatus: FC<StatusProps> = ({ status, ISBN, label, passStatus }) => {
	const { authUser } = useAuth();

	const setSetting = async (status: string) => {
		if (passStatus) {
			passStatus('status', status);
			return;
		}
		try {
			await mergeDoc(`userBooks/${authUser!.uid}/ISBN`, ISBN, {
				status,
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='relative flex w-4/5 mx-auto justify-center items-center'>
			<label className='text-xs font-bold mr-2 text-center text-slate-900/80'>
				{label}
			</label>
			<select
				name='status'
				value={status}
				className='p-1 border rounded shadow-md border-slate-400/50'
				onChange={(e) => setSetting(e.target.value)}
			>
				<option value='too read'>too read</option>
				<option value='reading'>reading</option>
				<option value='read'>read</option>
			</select>
		</div>
	);
};
export default ReadStatus;
