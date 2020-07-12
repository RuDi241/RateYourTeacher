const firebase = require("firebase/app");
require("dotenv").config();
// Required for side-effects
require("firebase/firestore");
require("firebase/auth");

const firebaseConfig = {
  apiKey: " hihi",
  authDomain: "rate-your-teacher-5e1f0.firebaseapp.com",
  databaseURL: "https://rate-your-teacher-5e1f0.firebaseio.com",
  projectId: "rate-your-teacher-5e1f0",
  storageBucket: "rate-your-teacher-5e1f0.appspot.com",
  messagingSenderId: "494234996624",
  appId: "1:494234996624:web:8991532ff6b172ba7a6d15",
  measurementId: "G-82PTY1P25V",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export { firebase, db as default, auth };
