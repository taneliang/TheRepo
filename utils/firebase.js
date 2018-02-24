// @flow
import { firebase } from 'react-native-firebase';
// import '@firebase/auth';
// import '@firebase/firestore';

export const USERS_COLLECTION = "users";

if (!firebase.apps.length) {
  firebase.initializeApp({
    // TODO: Use process.env instead
		apiKey: "AIzaSyDWC3PEeA2f1ZXFsu0pypClYyBzj6kKFLw",
    authDomain: "hackomania2018.firebaseapp.com",
    projectId: "hackomania2018"
  });
}

export default firebase;
export const auth = firebase.auth;
export const firestore = firebase.firestore;
