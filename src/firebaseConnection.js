import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBmOG-vZxOrJWsm-VldE_GMPUoo2X2wc7M",
  authDomain: "findmiau-82689.firebaseapp.com",
  projectId: "findmiau-82689",
  storageBucket: "findmiau-82689.appspot.com",
  messagingSenderId: "487734733494",
  appId: "1:487734733494:web:e02abf5ecde49ff18e5417"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);