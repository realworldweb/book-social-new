import { db } from './firebase';
import {
	collection,
	query,
	where,
	getDocs,
	getDoc,
	doc,
	setDoc,
} from 'firebase/firestore';

export const getDocByName = async (collection: string, name: string) => {
	//find one document in collection by docID
	const docRef = doc(db, collection, name);
	const docSnap = await getDoc(docRef);

	return docSnap.exists() ? docSnap!.data() : null;
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

export const mergeDoc = async (
	collectionType: string,
	docName: string,
	data: any
) => {
	try {
		await setDoc(doc(db, collectionType, docName), data, { merge: true });
	} catch (err) {
		console.error(err);
	}
};
