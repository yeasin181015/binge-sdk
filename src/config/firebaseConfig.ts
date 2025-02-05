// Import the functions you need from the SDKs you need
import { getAnalytics } from "@firebase/analytics";
import { initializeApp } from "firebase/app";
import { User, AuthError } from "firebase/auth";
import {
  browserPopupRedirectResolver,
  browserSessionPersistence,
  initializeAuth,
  signInAnonymously,
} from "firebase/auth";

const appConfig = {
  apiKey: "AIzaSyDKtOJpkYEDnQVKNnyCeyoN1DjajMW7o9g",
  authDomain: "binge-mobile.firebaseapp.com",
  databaseURL: "https://binge-mobile.firebaseio.com",
  projectId: "binge-mobile",
  storageBucket: "binge-mobile.appspot.com",
  messagingSenderId: "84147851202",
  appId: "1:84147851202:web:839afbf7d74575a729505b",
  measurementId: "G-CNNSYHBDMN",
};

// Initialize Firebase
const firebaseConfig = appConfig;
const app = initializeApp(firebaseConfig);
const firebaseAnlytics = getAnalytics(app);
const auth = initializeAuth(app, {
  persistence: browserSessionPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});

const firebaseAnonymousSignIn = async (): Promise<User | AuthError> => {
  try {
    const user = await auth.currentUser;

    // Sign in the user anonymously and return the user object
    const signInResult = await signInAnonymously(auth);
    return signInResult.user;
  } catch (error) {
    // Handle errors and return the error object
    return error as AuthError;
  }
};

export { firebaseAnlytics, firebaseConfig, firebaseAnonymousSignIn };
