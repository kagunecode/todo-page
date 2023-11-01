const loadHome = () => {
	const content = document.querySelector("#content");

	const heroSection = document.createElement("section");
	heroSection.className = "flex-1 flex items-center mx-auto z-10";

	const container = document.createElement("div");
	container.className = "flex-1 flex items-center mx-auto z-10";

	const textContainer = document.createElement("div");
	textContainer.className = "flex flex-col items-center";

	const mainText = document.createElement("h1");
	mainText.className = "text-7xl font-bold text-center dark:text-white";
	mainText.innerText = "Create handy to-do \n lists in a simple way!";

	const descText = document.createElement("p");
	descText.className =
		"text-4xl font-bold text-gray-500 pt-3 dark:text-gray-300";
	descText.innerText =
		"Organize your activities by projects, \n keeping track of each one of them.";

	const startButton = document.createElement("button");
	startButton.id = "start-button";
	startButton.className =
		"bg-blue-500 mt-5 py-3 px-12 text-white font-semibold text-xl rounded-xl hover:bg-blue-700 duration-100";
	startButton.innerText = "Get Started";

	textContainer.appendChild(mainText);
	textContainer.appendChild(descText);
	textContainer.appendChild(startButton);

	heroSection.appendChild(textContainer);
	content.appendChild(heroSection);
};

export default loadHome;
