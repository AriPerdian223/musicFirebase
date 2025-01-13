import {FirebaseApp, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkMj13ewZLuGC0EoZKARSh81AaTy43pdw',
  authDomain: 'uasproject-5a575.firebaseapp.com',
  projectId: 'uasproject-5a575',
  storageBucket: 'uasproject-5a575.firebasestorage.app',
  messagingSenderId: '189502182761',
  appId: '1:189502182761:web:4f7d88d62b7d05ae4459f8',
  measurementId: 'G-BHHEHKXJ1G',
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
