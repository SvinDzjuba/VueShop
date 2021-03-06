// import firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVaTQiR7e5dx_MeMRmWTjkON90XR8cdnU",
  authDomain: "web-shop-c2757.firebaseapp.com",
  projectId: "web-shop-c2757",
  storageBucket: "web-shop-c2757.appspot.com",
  messagingSenderId: "877234338239",
  appId: "1:877234338239:web:0dc7cffb3f8e8955f5890a",
  measurementId: "G-WHHYMBNEDS"
};

// init firebase
const app = initializeApp(firebaseConfig);

// init firestore database
const db = getFirestore(app);

// init firestore storage
const storage = getStorage(app);
const productsStorageRef = ref(storage, 'gs://web-shop-c2757.appspot.com/products')

// init firestore authentication
const auth = getAuth(app);

// init google authentication
const googleProvider = new GoogleAuthProvider();

export {
  db,
  storage,
  productsStorageRef,
  auth,
  googleProvider
} 