import { db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getAllDoc = (collectionType: string) => {
	return;
};

export const queryDoc = async (
	collectionType: string,
	fieldPath: string,
	target: string
) => {
	const docs: any = [];
	const q = query(
		collection(db, collectionType),
		where(fieldPath, '==', target)
	);

	const querySnapshot = await getDocs(q);

	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.data());
		docs.push(doc.data());
	});

	return docs;
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
