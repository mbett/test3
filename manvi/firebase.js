// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


console.log('hello1');
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfigold = {
    apiKey: "AIzaSyCspDhXXbGc_9QL4O__q_Fj4uCRGo8X8no",
    authDomain: "learning-tool-a009b.firebaseapp.com",
    databaseURL: "https://learning-tool-a009b-default-rtdb.firebaseio.com",
    projectId: "learning-tool-a009b",
    storageBucket: "learning-tool-a009b.appspot.com",
    messagingSenderId: "211877966558",
    appId: "1:211877966558:web:4e9bfd8644e8f4ceb2884f",
    measurementId: "G-Y3S585J5NW"
  };


const firebaseConfigbett = {
    apiKey: "AIzaSyCmprwZYUG5w0wB8Pa3AeGxeCxQp40m3LQ",
    authDomain: "test3-24a5a.firebaseapp.com",
    projectId: "test3-24a5a",
    storageBucket: "test3-24a5a.appspot.com",
    messagingSenderId: "333990236385",
    appId: "1:333990236385:web:53a034772bf17a95fb67a0",
    measurementId: "G-XPSE5H2EHE"
  };
console.log('hello2);
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCspDhXXbGc_9QL4O__q_Fj4uCRGo8X8no",
    authDomain: "learning-tool-a009b.firebaseapp.com",
    projectId: "learning-tool-a009b",
    storageBucket: "learning-tool-a009b.appspot.com",
    messagingSenderId: "211877966558",
    appId: "1:211877966558:web:4e9bfd8644e8f4ceb2884f",
    measurementId: "G-Y3S585J5NW"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

console.log('hello3');
