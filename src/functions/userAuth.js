import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import logger from "./logger";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function createUser(auth, email, password) {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			logger(`The user has been registered.`);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			logger(errorCode + errorMessage);
		});
}

function login(auth, email, password) {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			logger(`Welcome ${user.email}`);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			logger(errorCode + errorMessage);
		});
}

function updateUserName(auth, username) {
	updateProfile(auth.currentUser, {
		displayName: username,
		photoURL: null,
	})
		.then(() => {
			logger(
				`The username has been updated to ${auth.currentUser.displayName}`
			);
		})
		.catch((error) => {
			logger(error);
		});
}

function logout() {
	logger("See you soon!");
}

export { login };
