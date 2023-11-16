//import "../styles.css";

const menuButton = document.querySelector("#menu-button");
const contentWindow = document.querySelector("#screen-space");

menuButton.addEventListener("click", () => {
	const sidebar = document.querySelector("#sidebar");
	sidebar.classList.toggle("-translate-x-[100%]");
	contentWindow.classList.toggle("-ml-[21rem]");
});
