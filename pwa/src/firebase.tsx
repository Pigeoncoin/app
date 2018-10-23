import * as firebase from "firebase/app";

// to reduce bundle size import items individually
// import * as firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';

const config = {
  apiKey: "AIzaSyB3DfPuceQW7ZfCcPAlOCYGHF9RoIIU0io",
  authDomain: "pigeonapp-dev.firebaseapp.com",
  databaseURL: "https://pigeonapp-dev.firebaseio.com",
  projectId: "pigeonapp-dev",
  storageBucket: "pigeonapp-dev.appspot.com",
  messagingSenderId: "716371410547"
};

firebase.initializeApp(config);
