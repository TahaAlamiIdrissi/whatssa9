import firebase  from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiegiZbjTWwsMw1L_kmKA5LytRDhQEIDg",
  authDomain: "whatssap-clone-7c4ed.firebaseapp.com",
  projectId: "whatssap-clone-7c4ed",
  storageBucket: "whatssap-clone-7c4ed.appspot.com",
  messagingSenderId: "199300240027",
  appId: "1:199300240027:web:9290552c903460af2b2c3e",
  measurementId: "G-6NL4LP64SC"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;