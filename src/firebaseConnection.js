// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBmOG-vZxOrJWsm-VldE_GMPUoo2X2wc7M",
  authDomain: "findmiau-82689.firebaseapp.com",
  databaseURL: "https://findmiau-82689-default-rtdb.firebaseio.com",
  projectId: "findmiau-82689",
  storageBucket: "findmiau-82689.appspot.com",
  messagingSenderId: "487734733494",
  appId: "1:487734733494:web:e02abf5ecde49ff18e5417"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const db = getFirestore(Firebase)
export const storage = getStorage(Firebase)
