import {
    googleAuthProvider,
    firebaseAuth,
    githubAuthProvider,
} from "./firebase";

class AuthService {
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }
    logined(callback) {
        return firebaseAuth.onAuthStateChanged(callback);
    }
    logout(callback) {
        return firebaseAuth.signOut().then(callback);
    }
    getProvider(providerName) {
        switch (providerName) {
            case "Google":
                return googleAuthProvider;
            case "Github":
                return githubAuthProvider;
            default:
                throw new Error(`${providerName} Error`);
        }
    }
}

export default AuthService;
