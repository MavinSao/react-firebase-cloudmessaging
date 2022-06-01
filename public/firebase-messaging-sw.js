 // Scripts for firebase and firebase messaging
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
    apiKey: "AIzaSyC36eu0DpFwFlVmBJ-dBs3uE3mo_q9Aytg",
    authDomain: "welab-8307b.firebaseapp.com",
    projectId: "welab-8307b",
    storageBucket: "welab-8307b.appspot.com",
    messagingSenderId: "479162976152",
    appId: "1:479162976152:web:1dd73e30c3808bce9e8ded",
    measurementId: "G-7RLS55CZX2"
 };

 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });