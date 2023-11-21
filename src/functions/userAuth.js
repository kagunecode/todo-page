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

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCiLNpG3XgkGWcpLtN2DzyJraeJ-riM-aA",
	authDomain: "todo-app-adf75.firebaseapp.com",
	projectId: "todo-app-adf75",
	storageBucket: "todo-app-adf75.appspot.com",
	messagingSenderId: "484620164961",
	appId: "1:484620164961:web:ce40d8221e06a923432f20",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { login, logOut, checkIfLogin, createUser };
