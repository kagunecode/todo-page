import moonIcon from "../assets/img/moon.svg";
import sunIcon from "../assets/img/sun.svg";

const navbarLoad = () => {
	const body = document.querySelector("#general");

	const navbar = document.createElement("nav");
	navbar.className =
		"flex h-20 items-center justify-between p-10 sticky top-0 z-50 backdrop-filter backdrop-blur-lg";

	const pageLogo = document.createElement("a");
	pageLogo.innerText = "Todoers Logo";
	pageLogo.href = "#general";
	pageLogo.classList.add("text-2xl", "font-bold", "dark:text-white");

	const navul = document.createElement("ul");
	navul.classList.add("flex", "gap-8", "text-gray-400", "items-center");

	const navliMoon = document.createElement("li");
	navliMoon.classList.add(
		"dark:hover:text-white",
		"hover:stroke-gray-700",
		"duration-100",
		"hover:cursor-pointer"
	);
	const navMoon = document.createElement("img");
	navMoon.src = moonIcon;
	navMoon.width = "23";
	navliMoon.id = "moon";
	navliMoon.appendChild(navMoon);

	const navliSun = document.createElement("li");
	navliSun.classList.add(
		"dark:hover:text-white",
		"hover:text-gray-700",
		"duration-100",
		"hover:cursor-pointer"
	);
	const navSun = document.createElement("img");
	navSun.src = sunIcon;
	navSun.width = "23";
	navliSun.id = "sun";
	navliSun.appendChild(navSun);

	const navliFeature = document.createElement("li");
	navliFeature.classList.add(
		"dark:hover:text-white",
		"hover:text-gray-700",
		"duration-100"
	);
	const navfeature = document.createElement("a");
	navfeature.href = "#features";
	navfeature.innerText = "Features";
	navliFeature.appendChild(navfeature);

	const navSeparator = document.createElement("div");
	navSeparator.innerText = "|";
	navSeparator.className = "cursor-default";

	const loginButton = document.createElement("button");
	loginButton.className =
		"bg-gray-500 rounded-md hover:bg-blue-500 px-7 py-2 text-white duration-300";
	loginButton.innerText = "Sign In";
	loginButton.id = "button-log";

	navul.appendChild(navliFeature);
	navul.appendChild(loginButton);
	navul.appendChild(navSeparator);
	navul.appendChild(navliMoon);
	navul.appendChild(navliSun);

	navbar.appendChild(pageLogo);
	navbar.appendChild(navul);

	body.prepend(navbar);
};

export default navbarLoad;
