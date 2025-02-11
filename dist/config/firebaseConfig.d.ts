import { User, AuthError } from "firebase/auth";
declare const firebaseConfig: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
};
declare const firebaseAnlytics: import("@firebase/analytics").Analytics;
declare const firebaseAnonymousSignIn: () => Promise<User | AuthError>;
export { firebaseAnlytics, firebaseConfig, firebaseAnonymousSignIn };
