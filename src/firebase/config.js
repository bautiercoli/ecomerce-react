

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDSvs5PzTCB6SNbvN4JHqbbYbJ4dZDyx78",
    authDomain: "vortix-9d64f.firebaseapp.com",
    projectId: "vortix-9d64f",
    storageBucket: "vortix-9d64f.appspot.com",
    messagingSenderId: "410221979487",
    appId: "1:410221979487:web:97aec1c0df269c9e9df8ea"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}