// Import firebase
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, you have to paste here the object that comes from firebase
const firebaseConfig = {
    apiKey: "AIzaSyCs_0Ewnu6UG0jsr6gFqBKpTdgjCDF8vk8",
    authDomain: "dmi-proyecto-10c.firebaseapp.com",
    databaseURL: "https://dmi-proyecto-10c-default-rtdb.firebaseio.com",
    projectId: "dmi-proyecto-10c",
    storageBucket: "dmi-proyecto-10c.appspot.com",
    messagingSenderId: "793311602292",
    appId: "1:793311602292:web:df69282895eb07cdadd321"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  console.info({ firebase });
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
