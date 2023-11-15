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
