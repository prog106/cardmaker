import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();

// export default firebaseApp;
