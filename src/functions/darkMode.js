const switchMode = () => {
	const moonIcon = document.querySelector("#moon");
	const sunIcon = document.querySelector("#sun");
	const body = document.querySelector("body");

	sunIcon.classList.add("hidden");

	moonIcon.addEventListener("click", () => {
		moonIcon.classList.add("hidden");
		sunIcon.classList.remove("hidden");
		body.classList.add("dark");
	});

	sunIcon.addEventListener("click", () => {
		sunIcon.classList.add("hidden");
		moonIcon.classList.remove("hidden");
		body.classList.remove("dark");
	});
};

export default switchMode;
