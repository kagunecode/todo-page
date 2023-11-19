import "./styles.css";
import erasePage from "./functions/erasePage";
import navbarLoad from "./pages/navbar";
import loadHome from "./pages/home";
import switchMode from "./functions/darkMode";
import { login, checkIfLogin } from "./functions/userAuth";
import { checkEmail, checkPassword } from "./functions/strVerification";

loadHome();
navbarLoad();
switchMode();
checkIfLogin();

document.getElementById("start-button").addEventListener("click", () => {
	window.location.href = "app.html";
});

const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#modal-close");
const buttonUser = document.querySelector("#button-log");
const loginButton = document.querySelector("#login-button");

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
		login(email, password);
	}
	checkIfLogin();
});

// pass es lacobra11
