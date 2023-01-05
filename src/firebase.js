import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJpLke-eITekRuB40MFW71NhqsEgSW2bY",
  authDomain: "netflix-clone-991b6.firebaseapp.com",
  projectId: "netflix-clone-991b6",
  storageBucket: "netflix-clone-991b6.appspot.com",
  messagingSenderId: "400933287104",
  appId: "1:400933287104:web:1c5ad52ea01f0fb0ece925"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =  firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;