import { initializeApp } from "firebase/app";
import {
	getAuth,
	signOut,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import logger from "./logger";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function createUser(email, password) {
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

function login(email, password) {
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

function updateUserName(username) {
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

function logOut() {
	logger("Logout");
	signOut(auth)
		.then(() => {
			window.location.href = "index.html";
		})
		.catch((error) => {
			logger(error);
		});
}

function checkIfLogin() {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			window.location.href = "app.html";
		} else {
			console.log("This is empty!");
		}
	});
}

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_SENDER_ID,
	appId: process.env.FIREABSE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { login, logOut, checkIfLogin, createUser };
