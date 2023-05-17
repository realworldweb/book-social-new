import { db } from './firebase';
import {
	collection,
	query,
	where,
	getDocs,
	doc,
	setDoc,
} from 'firebase/firestore';

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
		docs.push(doc.data());
	});

	return docs;
};

export const addDoc = async (
	collectionType: string,
	docName: string,
	data: any
) => {
	try {
		await setDoc(doc(db, collectionType, docName), data);
	} catch (err) {
		console.error(err);
	}
};

/*export const mergeDoc = async (collection, email, data) => {
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
