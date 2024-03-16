import { initializeApp } from "firebase/app";

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "./FirebaseConfig";

// Initialiser l'appli Firebase
const app = initializeApp(firebaseConfig);

// Initialiser le service d'authentification Firebase
export const auth = getAuth(app);

// Initialiser le service du "provider" Google (authentification fédérée)
export const googleAuth = new GoogleAuthProvider();
// Pour connexion avec Google
export const cnxGoogle = signInWithPopup;

// Initialiser le service de connexion par courriel et mot de passe
export const signIn = signInWithEmailAndPassword;

// Pour deconnexion
export const deconnect = () => signOut(auth);

// Pour verifier si l'utilisateur est connecté
export const verifierCnx = onAuthStateChanged;

// Pour creer un compte
export const creerCompte = createUserWithEmailAndPassword;
