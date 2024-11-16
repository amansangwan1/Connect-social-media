// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv2rqY77kCfYW22sh22Qmu9ps4Ch5m8UI",
  authDomain: "connect-9a106.firebaseapp.com",
  projectId: "connect-9a106",
  storageBucket: "connect-9a106.firebasestorage.app",
  messagingSenderId: "281129737321",
  appId: "1:281129737321:web:5548262ded0ca59a6296f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });

  return user;
};
