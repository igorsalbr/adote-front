import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.REACT_AUTH_DOMAIN,
    databaseURL: process.env.REACT_DATABASE_URL,
    projectId: process.env.REACT_PROJECT_ID,
    storageBucket: process.env.REACT_STORAGE,
    messagingSenderId: process.env.REACT_MESSAGE,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_ME
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)