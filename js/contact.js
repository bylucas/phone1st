//form

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBgOheePCJqT_ivlXs_EagQ3wQPGIMpJUg",
  authDomain: "howardlucas-7fcb0.firebaseapp.com",
  projectId: "howardlucas-7fcb0",
  storageBucket: "howardlucas-7fcb0.appspot.com",
  messagingSenderId: "945745527827",
  appId: "1:945745527827:web:3e282534ecdd22c66eabe6",
  measurementId: "G-QEE9Y648VB"
}

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()

import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore"

//import { db } from "./firebase-config.js"

// collection ref
const colRef = collection(db, "contacts")

const form = document.querySelector(".contact-form")
const feedback = document.querySelector(".feedback")


form.addEventListener("submit", (e) => {

  e.preventDefault()

  addDoc(colRef, {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
    createdAt: serverTimestamp()
  }).then(() => {
    feedback.style.display = 'block'
    setTimeout(() => {
  feedback.style.display = 'none',
  form.name.value = '',
  form.email.value = '',
  form.message.value = ''
  }, 3000 )


})
})