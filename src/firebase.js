import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA2u_W6jTbqP6YOmkI0epnYhXEWRlqsjA8",
    authDomain: "netflix-clone-35e37.firebaseapp.com",
    projectId: "netflix-clone-35e37",
    storageBucket: "netflix-clone-35e37.appspot.com",
    messagingSenderId: "42185662773",
    appId: "1:42185662773:web:d92f14c07ad00831ce6c7c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;