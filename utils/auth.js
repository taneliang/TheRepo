// import { firestore, auth, USERS_COLLECTION } from 'firebase';
import firebase from 'react-native-firebase';

// let authToken;

export function getUserOrganisation(uid) {
	return firebase.firestore()
		.collection("users")
		.doc(uid)
		.get()
		.then((doc) => {
			if (!doc.exists) {
				alert(`User not found`);
			} else {
				return doc.data().organisation;
			}
		}, error => { alert(`Receive error ${error}`) });
}

export function getToken() {
	return firebase.auth()
		.currentUser
		.getIdToken(/* forceRefresh */ true)
		.then(tok =>
			{ return tok }
		).catch(error => { alert(`Receive error ${error}`)});
}

export function anonLogin() {
	firebase.auth()
	  .signInAnonymouslyAndRetrieveData()
	  .then(credential => {
	    if (credential) {
	      console.log('default app user ->', credential.user.toJSON());
	    }
	  });
 }

export function setAuthCallback() {
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			getToken().then(tok => {authToken = tok});
		} else {
			authToken = null;
		}
	});
}
