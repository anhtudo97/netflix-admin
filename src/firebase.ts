import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkmTkmD5JCM35uEr5D5srcHUuMDMrcgEE",
  authDomain: "netflix-5775b.firebaseapp.com",
  projectId: "netflix-5775b",
  storageBucket: "netflix-5775b.appspot.com",
  messagingSenderId: "683511385189",
  appId: "1:683511385189:web:6745f1bf134f8ac5428a8c",
  measurementId: "G-Z2TTD4D6M5",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
