

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdqT-2nLwvbfHvWN36--ZVjA1w6zxLHqs",
  authDomain: "practice-4cb39.firebaseapp.com",
  projectId: "practice-4cb39",
  storageBucket: "practice-4cb39.appspot.com",
  messagingSenderId: "552456991902",
  appId: "1:552456991902:web:cfa1cddd70546eb251778f"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage(); 
export default firebase;




