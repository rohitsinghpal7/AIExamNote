

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-note-258fd.firebaseapp.com",
  projectId: "ai-note-258fd",
  storageBucket: "ai-note-258fd.firebasestorage.app",
  messagingSenderId: "830933251877",
  appId: "1:830933251877:web:c41133c8a00e551ee74ccc"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}