const renderCircles = () => {
	const circlesContainer = document.createElement("div");
	circlesContainer.className = "absolute w-full h-full";

	const fisrtCircle = document.createElement("div");
	fisrtCircle.className = `absolute top-[10rem] right-[45rem] w-72 h-72 rounded-full bg-blue-300 dark:bg-black dark:blur-2xl mix-blend-multiply filter blur-xl opacity-90 animate-blob ease-in-out`;

	const secondCircle = document.createElement("div");
	secondCircle.className = `absolute top-[10rem] right-[60rem] w-72 h-72 rounded-full bg-blue-300 dark:bg-black dark:blur-2xl mix-blend-multiply blur-xl opacity-50 animate-blob animation-delay-2000 ease-in-out`;

	const thirdCircle = document.createElement("div");
	thirdCircle.className = `absolute bottom-[10rem] right-[50rem] w-72 h-72 rounded-full bg-blue-300 dark:bg-black dark:blur-2xl mix-blend-multiply blur-xl opacity-50 animate-blob animation-delay-4000 ease-in-out`;

	circlesContainer.appendChild(thirdCircle);
	circlesContainer.appendChild(secondCircle);
	circlesContainer.appendChild(fisrtCircle);

	return circlesContainer;
};

export default renderCircles;
