interface GoogleBook {
	authors: Array<string>;
	description: string;
	title: string;
	pageCount: number;
	imageLinks: {
		smallThumbnail: string;
	};
	averageRating: number;
}

class Book {
	ISBN: string;
	authors: Array<string>;
	desc: string;
	title: string;
	pages: number;
	thumb: string;
	googleRating: number;
	userRating: number;

	constructor(ISBN: string, googleBook: GoogleBook) {
		this.ISBN = ISBN;
		this.authors = googleBook.authors;
		this.desc = googleBook.description;
		this.title = googleBook.title;
		this.pages = googleBook.pageCount;
		this.thumb = googleBook.imageLinks.smallThumbnail;
		this.googleRating = googleBook.averageRating;
		this.userRating = 0;
	}
}

export { Book };
