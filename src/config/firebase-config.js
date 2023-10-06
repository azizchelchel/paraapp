// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPnNP389PazanTGIz2WJ-VsJML4oMHw5Y",
  authDomain: "paragliding-app-f3b3b.firebaseapp.com",
  projectId: "paragliding-app-f3b3b",
  storageBucket: "paragliding-app-f3b3b.appspot.com",
  messagingSenderId: "696336258727",
  appId: "1:696336258727:web:c1e5508e29086f8390ad82",
  measurementId: "G-JM6Q50B1MT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
