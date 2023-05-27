import { FC } from 'react';

/*firebase*/
import { mergeDoc } from '@/lib/firebase/useFirestore';
import { useAuth } from '@/context/authUserContext';

interface StatusProps {
	trade: boolean;
	ISBN: string;
	label: string;
	passTrade?: Function;
}

const TradeSetting: FC<StatusProps> = ({ trade, ISBN, label, passTrade }) => {
	const { authUser } = useAuth();

	const setSetting = async (trade: string) => {
		if (passTrade) {
			passTrade('status', trade);
			return;
		}
		try {
			await mergeDoc(`userBooks/${authUser!.uid}/ISBN`, ISBN, {
				trade,
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
				onChange={(e) => setSetting(e.target.value)}
				className='p-1 border rounded shadow-md border-slate-400/50'
			>
				<option value='true' selected={trade === true}>
					true
				</option>
				<option value='false' selected={trade === false}>
					false
				</option>
			</select>
		</div>
	);
};
export default TradeSetting;
