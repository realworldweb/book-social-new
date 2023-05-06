// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_Api_Key,
	authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
	projectId: process.env.NEXT_PUBLIC_Project_Id,
	storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
	messagingSenderId: process.env.NEXT_PUBLIC_Messaging_Sender_Id,
	appId: process.env.NEXT_PUBLIC_App_Id,
	measurement_id: process.env.NEXT_PUBLIC_Measurement_Id,
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app!);

export { db };
