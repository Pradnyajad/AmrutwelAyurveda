// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB6s_UvDRjnV0kxpeOcYE9pqF4_ghrWGI4",
  authDomain: "amrutwelayurvedaa.firebaseapp.com",
  projectId: "amrutwelayurvedaa",
  storageBucket: "amrutwelayurvedaa.firebasestorage.app",
  messagingSenderId: "551256038226",
  appId: "1:551256038226:web:8d8c1cfae2cb2e24c7388b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
