// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7aYS-H9EvgxSGLoMNiFqyITJWHbLLfbU",
    authDomain: "upload-user-avatar.firebaseapp.com",
    projectId: "upload-user-avatar",
    storageBucket: "upload-user-avatar.appspot.com",
    messagingSenderId: "728127024578",
    appId: "1:728127024578:web:b1ae0d8faf811a2a873a5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
