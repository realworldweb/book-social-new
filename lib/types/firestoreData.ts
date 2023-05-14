interface Profile {
	email: string;
	name: string;
	username: string;
	profilePic: string;
	postcode: string;
	shelves: Array<string>;
	books: Array<string>;
	connections: Array<string>;
	tagline: string;
}

interface Notfication {
	type: string;
	message: string;
	viewed: boolean;
}

interface Notifications {
	notifications: Array<Notification>;
}

interface Message {
	subject: string;
	from: string;
	body: string;
	read: boolean;
}

interface Messages {
	messages: Array<Message>;
}

interface Book {
	ISBN: string;
	authors: Array<string>;
	desc: string;
	name: string;
	pages: number;
	thumb: string;
	googleRating: number;
	userRating: number;
}
