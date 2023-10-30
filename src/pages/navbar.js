const navbarLoad = () => {
	const navbar = document.createElement("nav");
	navbar.classList.add(
		"flex",
		"h-20",
		"items-center",
		"justify-between",
		"p-10",
		"z-10"
	);

	const pageLogo = document.createElement("h1");
	pageLogo.innerText = "Todoers Logo";
	pageLogo.classList.add("text-2xl", "font-bold");

	const navul = document.createElement("ul");
	navul.classList.add("flex", "gap-8", "text-gray-400");

	const navliFeature = document.createElement("li");
	navliFeature.classList.add("hover:text-gray-700", "duration-100");
	const navfeature = document.createElement("a");
	navfeature.href = "#";
	navfeature.innerText = "Features";
	navliFeature.appendChild(navfeature);

	const navliContact = document.createElement("li");
	navliContact.classList.add("hover:text-gray-700", "duration-100");
	const navContact = document.createElement("a");
	navContact.href = "#";
	navContact.innerText = "Contact";
	navliContact.appendChild(navContact);

	const navliAbout = document.createElement("li");
	navliAbout.classList.add("hover:text-gray-700", "duration-100");
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
