import { login, checkIfLogin, createUser } from "./userAuth";
import { checkEmail, checkPassword } from "./strVerification";

let isOnSignin = true;

function renderSignup() {
	if (isOnSignin) {
		const signupText = document.querySelector("#signup-text");
		signupText.innerText =
			"Sign Up to todoers today and start organizing your time. It's free!";

		const loginButton = document.querySelector("#login-button");
		loginButton.innerText = "Sign Up";

		const bottomText = document.querySelector("#bottom-text");
		bottomText.innerText = "Already have an account?";

		const passwordError = document.querySelector("#password-error");
		passwordError.innerText = "At least 8 characters long";

		const signUpChange = document.querySelector("#change");
		signUpChange.innerText = "Sign In";

		isOnSignin = false;
	} else {
		const signupText = document.querySelector("#signup-text");
		signupText.innerText =
			"Sign In to todoers today and start organizing your time. It's free!";

		const loginButton = document.querySelector("#login-button");
		loginButton.innerText = "Sign In";

		const bottomText = document.querySelector("#bottom-text");
		bottomText.innerText = "Don't have an account yet?";

		const passwordError = document.querySelector("#password-error");
		passwordError.innerText = "";

		const signUpChange = document.querySelector("#change");
		signUpChange.innerText = "Sign Up";

		isOnSignin = true;
	}
}

function setSignVal(status) {
	if (status == "signup") {
		isOnSignin = true;
	} else {
		isOnSignin = false;
	}
}

function runSignAction() {
	if (isOnSignin) {
		runLogin();
	} else {
		runSignup();
	}
}

function runLogin() {
	let email = document.querySelector("#input-email").value;
	let password = document.querySelector("#input-password").value;
	let validEmail = checkEmail(email);
	let validPassword = checkPassword(password);

	if (validEmail && validPassword) {
		login(email, password);
	}
	checkIfLogin();
}

function runSignup() {
	let email = document.querySelector("#input-email").value;
	let password = document.querySelector("#input-password").value;
	let validEmail = checkEmail(email);
	let validPassword = checkPassword(password);

	if (validEmail && validPassword) {
		createUser(email, password);
		login(email, password);
	}
	checkIfLogin();
}

export { runSignAction, renderSignup, setSignVal };
