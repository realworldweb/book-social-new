import Axios from 'axios';

import { Profile } from '../types/firestoreData';

const upload = (data: Profile, user: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		const formData = new FormData();
		const url = 'https://api.cloudinary.com/v1_1/dyrsqqf3n/auto/upload';
		const key: string = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!;

		formData.append('file', data.img as Blob);
		formData.append('api_key', key);
		formData.append('folder', `user/${user}`); //folder name
		formData.append('upload_preset', 'w8g8ka6c'); //upload preset see cloudinary account settings

		Axios.post(url, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
			.then((result) => {
				resolve(result.data.url);
			})
			.catch((err) => {
				console.error(err);
				reject(err);
			});
	});
};

export { upload };
