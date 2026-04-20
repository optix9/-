import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0xwlN4gYFr5j-HhIGDMBzTslFR3RkGWY",
  authDomain: "optix-f5c68.firebaseapp.com",
  projectId: "optix-f5c68",
  storageBucket: "optix-f5c68.firebasestorage.app",
  messagingSenderId: "100028773268",
  appId: "1:100028773268:web:47ec67fafe1be08b919581"
};

const app = initializeApp(firebaseConfig);

export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);
export const authReady = signInAnonymously(auth);