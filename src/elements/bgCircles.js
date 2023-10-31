const renderCircles = () => {
	const content = document.querySelector("#content");

	const circlesContainer = document.createElement("div");
	circlesContainer.className = "relative w-full max-w-lg";

	const fisrtCircle = document.createElement("div");
	fisrtCircle.className =
		"absolute top-[16rem] left-[45rem] w-72 h-72 rounded-full bg-blue-300 dark:bg-black dark:blur-2xl mix-blend-multiply filter blur-xl opacity-90 animate-blob ease-in-out";

	const secondCircle = document.createElement("div");
	secondCircle.className =
		"absolute top-[16rem] -right-[45rem] w-72 h-72 rounded-full bg-blue-300 dark:bg-black dark:blur-2xl mix-blend-multiply blur-xl opacity-50 animate-blob animation-delay-2000 ease-in-out";

	const thirdCircle = document.createElement("div");
	thirdCircle.className =
		"absolute -bottom-[46rem] left-[52rem] w-72 h-72 rounded-full bg-blue-300 dark:bg-black dark:blur-2xl mix-blend-multiply blur-xl opacity-50 animate-blob animation-delay-4000 ease-in-out";

	circlesContainer.appendChild(fisrtCircle);
	circlesContainer.appendChild(secondCircle);
	circlesContainer.appendChild(thirdCircle);

	content.appendChild(circlesContainer);
};

export default renderCircles;
