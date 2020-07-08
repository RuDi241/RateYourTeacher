const firebase = require("firebase/app");
require("dotenv").config();
// Required for side-effects
require("firebase/firestore");
require("firebase/auth");

var firebaseConfig = {
  apiKey: "YOUR_API_KEY", //change this to your api key
  authDomain: "test-9ab18.firebaseapp.com",
  databaseURL: "https://test-9ab18.firebaseio.com",
  projectId: "test-9ab18",
  storageBucket: "test-9ab18.appspot.com",
  messagingSenderId: "935526864282",
  appId: "1:935526864282:web:1b2b9a01e5475b2cba1623",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth = firebase.auth();
export { firebase, db as default, auth };
