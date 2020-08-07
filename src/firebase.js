import firebase from "firebase";


const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyAvFWIVzTIf4vjQl400JQXtA2tTkbh-CZo",
        authDomain: "amazoclone-3254.firebaseapp.com",
        databaseURL: "https://amazoclone-3254.firebaseio.com",
        projectId: "amazoclone-3254",
        storageBucket: "amazoclone-3254.appspot.com",
        messagingSenderId: "188300870684",
        appId: "1:188300870684:web:5a21749957db90f001cbd9",
        measurementId: "G-XNZZSMFL5T"
     
});


const auth = firebase.auth();


export {auth}
