const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", () => {
	const sidebar = document.querySelector("#sidebar");
	sidebar.classList.toggle("-translate-x-[100%]");
});
