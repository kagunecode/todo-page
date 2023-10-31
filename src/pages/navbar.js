const navbarLoad = () => {
	const navbar = document.createElement("nav");
	navbar.className =
		"flex h-20 items-center justify-between p-10 sticky top-0 z-20 backdrop-filter backdrop-blur-md";

	const pageLogo = document.createElement("h1");
	pageLogo.innerText = "Todoers Logo";
	pageLogo.classList.add("text-2xl", "font-bold", "dark:text-white");

	const navul = document.createElement("ul");
	navul.classList.add("flex", "gap-8", "text-gray-400");

	const navliFeature = document.createElement("li");
	navliFeature.classList.add(
		"dark:hover:text-white",
		"hover:text-gray-700",
		"duration-100"
	);
	const navfeature = document.createElement("a");
	navfeature.href = "#";
	navfeature.innerText = "Features";
	navliFeature.appendChild(navfeature);

	const navliContact = document.createElement("li");
	navliContact.classList.add(
		"dark:hover:text-white",
		"hover:text-gray-700",
		"duration-100"
	);
	const navContact = document.createElement("a");
	navContact.href = "#";
	navContact.innerText = "Contact";
	navliContact.appendChild(navContact);

	const navliAbout = document.createElement("li");
	navliAbout.classList.add(
		"dark:hover:text-white",
		"hover:text-gray-700",
		"duration-100"
	);
	const navAbout = document.createElement("a");
	navAbout.href = "#";
	navAbout.innerText = "About";
	navliAbout.appendChild(navAbout);

	navul.appendChild(navliFeature);
	navul.appendChild(navliContact);
	navul.appendChild(navliAbout);

	navbar.appendChild(pageLogo);
	navbar.appendChild(navul);

	return navbar;
};

export default navbarLoad;
