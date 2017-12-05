import firebase from 'firebase'

// Initializing Firebase with unique keys 
const config = {
    apiKey: "AIzaSyAprEBKRXcBKPbsyYefmCP7KhPmN1E4GGw",
    authDomain: "my-app-8449f.firebaseapp.com",
    databaseURL: "https://my-app-8449f.firebaseio.com",
  };

firebase.initializeApp(config);

// Exporting consts for the Firebase database and the (user) authentification
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth