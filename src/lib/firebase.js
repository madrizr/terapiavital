// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV1zKABrmM437I6Yt9ALgPAg1fG2N8i1Y",
  authDomain: "acupunturavital-8f0b1.firebaseapp.com",
  projectId: "acupunturavital-8f0b1",
  storageBucket: "acupunturavital-8f0b1.firebasestorage.app",
  messagingSenderId: "999913695674",
  appId: "1:999913695674:web:2716d95efe3c6444b81583",
  measurementId: "G-13LZE8J3B9",
};

// Evita inicializar Firebase más de una vez
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);

const db = getFirestore(app);

const clientsCollectionRef = collection(db, "clientes");

export { auth, db, clientsCollectionRef };
