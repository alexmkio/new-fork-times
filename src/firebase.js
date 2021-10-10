import { initializeApp } from "firebase/app"
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore"

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBse-FqQnF_qxu8L80qh4vp7vqi_dzX1ZE",
  authDomain: "can-i-typescript.firebaseapp.com",
  projectId: "can-i-typescript",
  storageBucket: "can-i-typescript.appspot.com",
  messagingSenderId: "1014837999040",
  appId: "1:1014837999040:web:ea861af5eac6cd31878425"
})

export const db = getFirestore()

enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log('failed-precondition IndexedDbPersistence enable (firebase.js): ' + err.code)
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      console.log('unimplemented IndexedDbPersistence enable (firebase.js): ' + err.code)
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  })
// Subsequent queries will use persistence, if it was enabled successfully