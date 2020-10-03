import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyD9wAVZatVlO_PbPYVA0M3eFgRZKYGZVZ8",
  authDomain: "crown-clothing-432da.firebaseapp.com",
  databaseURL: "https://crown-clothing-432da.firebaseio.com",
  projectId: "crown-clothing-432da",
  storageBucket: "crown-clothing-432da.appspot.com",
  messagingSenderId: "960270152338",
  appId: "1:960270152338:web:59eef80ec9a14666406c4b",
  measurementId: "G-3X4EDJT1LY",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createProfileDocument = async (user, ...additionalData) => {
  if (!user) return

  const userRef = firestore.doc(`users/${user.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = user
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.log(err)
    }
  }
  return userRef
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
