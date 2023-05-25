const getBookByISBN = async (ISBN: string) => {
	const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}&key=${process.env.NEXT_PUBLIC_Api_Key}`;
	try {
		const res = await fetch(url);

		return await res.json();
	} catch (error) {
		console.error(error);
	}
};

export { getBookByISBN };
