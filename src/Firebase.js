import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAgx93ysMsDAdKgx5TeZr3oAhkw8nbtdc",
  authDomain: "busser-aaacd.firebaseapp.com",
  projectId: "busser-aaacd",
  storageBucket: "busser-aaacd.appspot.com",
  messagingSenderId: "559652930512",
  appId: "1:559652930512:web:23ef67863aab81530e6fd5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
