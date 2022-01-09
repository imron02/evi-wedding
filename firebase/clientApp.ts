import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyA_GqVAnivITw81PYhxQAqy4emaOxBuHKU",
  authDomain: "evi-bosnia-wedding.firebaseapp.com",
  projectId: "evi-bosnia-wedding",
  storageBucket: "evi-bosnia-wedding.appspot.com",
  messagingSenderId: "588711182163",
  appId: "1:588711182163:web:b367e2290874e8aca3aba6",
  measurementId: "G-H7XGM0RSMB"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
