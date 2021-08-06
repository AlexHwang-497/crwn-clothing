// ! discuss with carlos what is the point of this section?

import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCkt0OAWBQ2HHPc5k0vSl5rQQv7C5vLjGA",
    authDomain: "crwn-db-f018f.firebaseapp.com",
    projectId: "crwn-db-f018f",
    storageBucket: "crwn-db-f018f.appspot.com",
    messagingSenderId: "415703578570",
    appId: "1:415703578570:web:04c28bebe22d6239750133",
    measurementId: "G-5NRY9QXP7E"
  };

  firebase.initializeApp(config)


  // *we wil export this out for anything that needs authentication
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;