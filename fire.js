import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfxONoLSR1RiFdHEsIYofnh3gl6PMResk",
  authDomain: "live-docs-d38c6.firebaseapp.com",
  projectId: "live-docs-d38c6",
  storageBucket: "live-docs-d38c6.appspot.com",
  messagingSenderId: "497854268433",
  appId: "1:497854268433:web:b2af425dec6a5231ac9db0",
  measurementId: "G-ZTCTLQQQXW",
  databaseURL: "https://live-docs-d38c6-default-rtdb.asia-southeast1.firebasedatabase.app"
};


const fire = initializeApp(firebaseConfig);

export default fire