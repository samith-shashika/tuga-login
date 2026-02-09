import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHdz6JNoa2UVuO7oUH7glggOJ2lW-HpT0",
  authDomain: "login-ui-assessment.firebaseapp.com",
  projectId: "login-ui-assessment",
  storageBucket: "login-ui-assessment.firebasestorage.app",
  messagingSenderId: "806855089566",
  appId: "1:806855089566:web:c02c06a3a6bfe828a30a8f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
