import Firebase from 'firebase'

// Firebase setup
const config = {
  apiKey: "AIzaSyCCbkWl9p5efMYTxxNeyWMMCS9h2o1EZyg",
  authDomain: "group-9dev.firebaseapp.com",
  databaseURL: "https://group-9dev.firebaseio.com",
  projectId: "group-9dev",
  storageBucket: "group-9dev.appspot.com",
  messagingSenderId: "1061646129937"
}

const app = Firebase.initializeApp(config) // Firebase intialization

export const db = app.database() // Use Firbase realtime database