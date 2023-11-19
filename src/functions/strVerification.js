const checkEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const errorField = document.querySelector("#mail-error");
	const emailInput = document.querySelector("#input-email");
	if (emailRegex.test(email)) {
		errorField.innerText = "";
		emailInput.classList.remove("border-red-400");
		emailInput.classList.add("border-green-600");
		return true;
	} else {
		errorField.innerText = "Invalid email!";
		emailInput.classList.remove("border-green-600");
		emailInput.classList.add("border-red-400");
		return false;
	}
};

const checkPassword = (password) => {
	const passwordRegex = /^.{8,}$/;
	const passwordField = document.querySelector("#password-error");
	const passwordInput = document.querySelector("#input-password");
	if (passwordRegex.test(password)) {
		passwordInput.classList.remove("border-red-400");
		passwordField.classList.remove("text-red-400");
		passwordInput.classList.add("border-green-600");
		return true;
	} else {
		passwordInput.classList.add("border-red-400");
		passwordField.classList.add("text-red-400");
		passwordInput.classList.remove("border-green-600");
		return false;
	}
};

export { checkEmail, checkPassword };
