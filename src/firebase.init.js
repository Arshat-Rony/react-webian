// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3YKxwzmukHpYzNKUSs8XPWgO3DQoRHdU",
    authDomain: "react-webian.firebaseapp.com",
    projectId: "react-webian",
    storageBucket: "react-webian.appspot.com",
    messagingSenderId: "437197024372",
    appId: "1:437197024372:web:7106033e30ec3a4d1ab521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;