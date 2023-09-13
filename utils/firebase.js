// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// import {getfirestone} from 'fir'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APIKEY,
  authDomain: process.env.REACT_AUTHDOMAIN,
  projectId: process.env.REACT_PROJRCTID,
  storageBucket: process.env.REACT_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_MESSAGINGID,
  appId: process.env.REAT_APPID,
  measurementId: process.env.REACT_MEASURMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
// const analytics = getAnalytics(app);