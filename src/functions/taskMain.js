// Task information that I will need:
// 1. Task Name
// 2. Task Description
// 3. Task Date
// 4. Task status (completed, on course, pending)
// 5. Task importance level (low, medium, high)
// 6. Task project group
// 7. Maybe task comments or something of that sort

// Import the functions you need from the SDKs you need
import "../styles.css";
import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCiLNpG3XgkGWcpLtN2DzyJraeJ-riM-aA",
	authDomain: "todo-app-adf75.firebaseapp.com",
	projectId: "todo-app-adf75",
	storageBucket: "todo-app-adf75.appspot.com",
	messagingSenderId: "484620164961",
	appId: "1:484620164961:web:ce40d8221e06a923432f20",
};

class UserAuth {
	constructor() {
		this._userList = {};
		this.currentUser = null;
	}

	createUser(auth, email, password) {
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

	login(auth, email, password) {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				this.currentUser = auth.currentUser;
				logger(`Welcome ${auth.currentUser.email}`);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				logger(errorCode + errorMessage);
			});
	}

	updateUserName(auth, username) {
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

	logout() {
		this.currentUser = null;
		logger("See you soon!");
	}

	getActiveUser() {
		return this.currentUser;
	}
}

class Task {
	addTask(
		user,
		name,
		description,
		date,
		status,
		importance,
		project,
		comments
	) {
		let newTask = {
			name: name,
			description: description,
			date: date,
			status: status,
			importance: importance,
			project: project,
			comments: comments,
		};

		user.push(newTask);
		logger("The task was added!");
	}

	taskList(user) {
		logger(user);
	}

	searchTask(taskName) {
		for (let items in this.taskArray) {
			if (this.taskArray[items].name == taskName) {
				logger(this.taskArray[items]);
				return true;
			}
		}
		logger("No task with that name was found");
		return false;
	}
}

const logger = (message) => {
	console.log(message);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
