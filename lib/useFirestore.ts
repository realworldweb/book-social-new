import { db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getAllDoc = (collectionType: string) => {
	return;
};

export const queryDoc = (collectionType: string, email: string) => {
	return query(collection(db, collectionType), where('email', '==', email));
};

/*export const addDoc = (collectionType: string, data: any) => {
	return db.collection(collection).add(data);
};

export const mergeDoc = async (collection, email, data) => {
	const docId = await queryDoc(collection, email).then((snapshot) => {
		return snapshot.docs[0].id;
	});

	const doc = db.collection(collection).doc(docId);

	return doc.set(data, { merge: true });
};

export const updateDoc = async (collection, email, data) => {
	const docId = await queryDoc(collection, email).then((snapshot) => {
		return snapshot.docs[0].id;
	});

	const doc = db.collection(collection).doc(docId);

	return doc.set(data, { merge: true });
};*/
