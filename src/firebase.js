import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCLQMDIg-hPuF78C1Ovsuindgjlzqc000Q",
  authDomain: "login-9ab1a.firebaseapp.com",
  projectId: "login-9ab1a",
  storageBucket: "login-9ab1a.appspot.com",
  messagingSenderId: "983355118621",
  appId: "1:983355118621:web:47ce062f75634e45cf22f4",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
