import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./FirebaseConfig";

// Initialiser l'appli Firebase
const app = initializeApp(firebaseConfig);

// Obtenir une connexion à la BD Firestore
//export const bd = getFirestore(app);

// Initialiser le service d'authentification Firebase
export const auth = getAuth(app);

// Initialiser le service du "provider" Google (authentification fédérée)
export const googleAuth = new GoogleAuthProvider();
