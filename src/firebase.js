import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDdrUn1McsSuFT5jEiM-xhIBiyCT3Hfuxk",
    authDomain: "disney-clone-9bb71.firebaseapp.com",
    projectId: "disney-clone-9bb71",
    storageBucket: "disney-clone-9bb71.appspot.com",
    messagingSenderId: "971104849329",
    appId: "1:971104849329:web:75f65cbf215cc71de34190",
    measurementId: "G-PRRPBJMRNB"
  };


const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;