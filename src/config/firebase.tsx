import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgut7L3GNbiwugbGqWSuAQq96tmCmyahU",
  authDomain: "fasttasks-50cd3.firebaseapp.com",
  projectId: "fasttasks-50cd3",
  storageBucket: "fasttasks-50cd3.appspot.com",
  messagingSenderId: "1041446953826",
  appId: "1:1041446953826:web:b3db944e82fc022dbbc23b",
  measurementId: "G-5C7H9LC56J",
};

const app = firebase.initializeApp(firebaseConfig);
const database = getFirestore();
export default database;
