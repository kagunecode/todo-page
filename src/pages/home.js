import renderCircles from "../elements/bgCircles";

const loadHome = () => {
	const general = document.querySelector("#general");

	const content = document.createElement("section");
	content.id = "content";
	content.className =
		"relative font-sans flex flex-col h-[calc(100vh-5rem)] bg-white dark:bg-slate-800 duration-500";
	general.prepend(content);

	content.appendChild(renderCircles(16, 45, 16, 45, 46, 52));

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

	// FEATURES SECTION

	const featureSection = document.createElement("section");
	featureSection.id = "features";
	featureSection.className =
		"relative flex font-sans h-[calc(100vh-5rem)] bg-white dark:bg-slate-800 duration-500 items-center overflow-hidden";
	featureSection.appendChild(renderCircles(5, 4, 20, 30, 8, 40));

	general.appendChild(featureSection);

	const featuresContainer = document.createElement("div");
	featuresContainer.className = "flex-1 flex flex-col pl-10 z-20";
	const ftMainText = document.createElement("h1");
	ftMainText.className = "text-6xl font-bold dark:text-white text-justify";
	ftMainText.innerText =
		"Your time is important. <br> Organize your time and be more efficient.";

	const ftMainPar = document.createElement("p");
	ftMainPar.className =
		"text-3xl text-gray-500 dark:text-gray-300 pt-6 text-justify";
	ftMainPar.innerText =
		"Don’t let your projects and tasks become a mess. Todoers is the perfect tool to keep you updated on what you need to do.";

	const ftBarSep = document.createElement("hr");
	ftBarSep.className =
		"my-12 h-0.5 border-t-0 bg-gray-500 opacity-100 dark:opacity-50";

	const svgDivs = document.createElement("div");
};

export default loadHome;
