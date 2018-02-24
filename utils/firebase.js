// @flow
import { firebase } from '@firebase/app';
import '@firebase/auth';

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