import { Profile } from '../types/firestoreData';

const upload = async (data: Profile, user: string) => {
	const formData = new FormData();
	const key: string = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!;

	formData.append('file', data.img as Blob);
	formData.append('api_key', key);
	formData.append('folder', `user/${user}`); //folder name
	formData.append('upload_preset', 'w8g8ka6c'); //upload preset see cloudinary account settings

	const requestOptions = {
		method: 'POST',
		body: formData,
	};

	try {
		const response = await fetch(
			'https://api.cloudinary.com/v1_1/dyrsqqf3n/auto/upload',
			requestOptions
		);

		const result = await response.json();

		if (response.ok) {
			return result.url;
		}

		throw new Error(result.message);
	} catch (err) {
		console.error(err);
	}
};

export { upload };
