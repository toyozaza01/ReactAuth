import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFuDjUalXJ4APGOyTnF4XJM5cT8p3MJpY",
    authDomain: "prapatsorn65-auth.firebaseapp.com",
    projectId: "prapatsorn65-auth",
    appId: "1:502015071348:web:af9daf5f2a509fe9472d21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;