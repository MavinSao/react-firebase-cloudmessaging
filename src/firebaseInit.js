// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC36eu0DpFwFlVmBJ-dBs3uE3mo_q9Aytg",
  authDomain: "welab-8307b.firebaseapp.com",
  projectId: "welab-8307b",
  storageBucket: "welab-8307b.appspot.com",
  messagingSenderId: "479162976152",
  appId: "1:479162976152:web:1dd73e30c3808bce9e8ded",
  measurementId: "G-7RLS55CZX2"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const fetchToken = () => {

    getToken(messaging, { vapidKey: 'BJisuigcFIzNKJpQSd672a5B6PMWQ84-YBSxDtLys2OCUzLXf3Az_N5BBJ74LohmonIuVfdUQuBiO6doFi3Qb68' }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          console.log('TOKEN', currentToken);
          return currentToken;
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
}