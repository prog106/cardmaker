import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
    logined(callback) {
        return firebaseApp.auth().onAuthStateChanged(callback);
    }
    logout(callback) {
        return firebaseApp.auth().signOut().then(callback);
    }
}

export default AuthService;
