import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDax0fi0r2kQt2QpIFNFgpHZ5JjvtkVy_s",
  authDomain: "nextfire-df1b3.firebaseapp.com",
  projectId: "nextfire-df1b3",
  storageBucket: "nextfire-df1b3.appspot.com",
  messagingSenderId: "443282878079",
  appId: "1:443282878079:web:f9af1faef0b61da0c2594a",
  measurementId: "G-5K9S85DTP5"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
