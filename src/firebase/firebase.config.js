import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBwGrMwoEzx5Jf9jtc1pUEiWw1oLDgYkB4",
  authDomain: "agile-digital-tools.firebaseapp.com",
  databaseURL: "https://agile-digital-tools.firebaseio.com",
  projectId: "agile-digital-tools",
  storageBucket: "agile-digital-tools.appspot.com",
  messagingSenderId: "545369644637",
  appId: "1:545369644637:web:521d101c8436a17e57f7b4",
  measurementId: "G-VF9GTMZYYK",
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
