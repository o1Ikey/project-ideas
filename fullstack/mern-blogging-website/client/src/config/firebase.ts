// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsn6uCpukyojj2Ny_4RNrFlzArZE73SBY",
  authDomain: "mern-blog-website-e7797.firebaseapp.com",
  projectId: "mern-blog-website-e7797",
  storageBucket: "mern-blog-website-e7797.appspot.com",
  messagingSenderId: "645890621968",
  appId: "1:645890621968:web:c058c0532131ef1c2c4095",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// google auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((error) => {
      console.log(error, "error");
    });

  return user;
};
