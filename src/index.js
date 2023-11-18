import "./styles.css";
import erasePage from "./functions/erasePage";
import navbarLoad from "./pages/navbar";
import loadHome from "./pages/home";
import switchMode from "./functions/darkMode";

loadHome();
navbarLoad();
switchMode();

document.getElementById("start-button").addEventListener("click", () => {
	window.location.href = "app.html";
});

const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#modal-close");
const buttonUser = document.querySelector("#button-log");
const htmlBody = document.querySelector("html");

closeModal.addEventListener("click", () => {
	modal.close();
	//htmlBody.classList.remove("overflow-hidden");
});

buttonUser.addEventListener("click", () => {
	modal.showModal();
	//htmlBody.classList.add("overflow-hidden");
});
