// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeTTynYNOaURGQdAnyE_ZVsq2TQFCj8Wo",
  authDomain: "myblog-ad031.firebaseapp.com",
  projectId: "myblog-ad031",
  storageBucket: "myblog-ad031.appspot.com",
  messagingSenderId: "1077197615099",
  appId: "1:1077197615099:web:2d675049aa110fbe22255e",
  measurementId: "G-9P7HZFQSL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
