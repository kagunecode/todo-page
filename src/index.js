import "./styles.css";
import erasePage from "./functions/erasePage";
import navbarLoad from "./pages/navbar";
import loadHome from "./pages/home";
import switchMode from "./functions/darkMode";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { login } from "./functions/userAuth";
import { checkEmail, checkPassword } from "./functions/strVerification";

loadHome();
navbarLoad();
switchMode();

document.getElementById("start-button").addEventListener("click", () => {
	window.location.href = "app.html";
});

const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#modal-close");
const buttonUser = document.querySelector("#button-log");
const loginButton = document.querySelector("#login-button");

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCiLNpG3XgkGWcpLtN2DzyJraeJ-riM-aA",
	authDomain: "todo-app-adf75.firebaseapp.com",
	projectId: "todo-app-adf75",
	storageBucket: "todo-app-adf75.appspot.com",
	messagingSenderId: "484620164961",
	appId: "1:484620164961:web:ce40d8221e06a923432f20",
};

closeModal.addEventListener("click", () => {
	modal.close();
});

buttonUser.addEventListener("click", () => {
	modal.showModal();
});

loginButton.addEventListener("click", () => {
	let email = document.querySelector("#input-email").value;
	let password = document.querySelector("#input-password").value;
	if (checkEmail(email) && checkPassword(password)) {
		login(auth, email, password);
	}
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// pass es lacobra11
