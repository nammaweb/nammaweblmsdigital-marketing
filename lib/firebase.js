import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSSA14pwtf-K4FdX7dKhKsl-GhQtLXzFE",
  authDomain: "nammaweb-lms.firebaseapp.com",
  projectId: "nammaweb-lms",
  storageBucket: "nammaweb-lms.firebasestorage.app",
  messagingSenderId: "35905778273",
  appId: "1:35905778273:web:6bfc3a4fbd2c6ab6f17020"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

