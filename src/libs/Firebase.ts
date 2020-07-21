import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBn5wIn_AhpJDlmpWrXTN1_dLoE1C8uO2g",
  authDomain: "we-sale-car.firebaseapp.com",
  databaseURL: "https://we-sale-car.firebaseio.com",
  projectId: "we-sale-car",
  storageBucket: "we-sale-car.appspot.com",
  messagingSenderId: "32916161031",
  appId: "1:32916161031:web:dfbc175b470862140a60a2",
  measurementId: "G-1481VJ62EG"
};

firebase.initializeApp(firebaseConfig);

export default firebase;