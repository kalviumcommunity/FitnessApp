// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLQNa3nV-V4uRZKnne96cP2IEkIDtfJVk",
  authDomain: "fitness-website-3625b.firebaseapp.com",
  projectId: "fitness-website-3625b",
  storageBucket: "fitness-website-3625b.appspot.com",
  messagingSenderId: "406626943900",
  appId: "1:406626943900:web:404dd239fbedb5f9e0be59",
  measurementId: "G-31G7C46LZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth