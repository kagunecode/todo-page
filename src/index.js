import "./styles.css";
import erasePage from "./functions/erasePage";
import navbarLoad from "./pages/navbar";
import loadHome from "./pages/home";
import switchMode from "./functions/darkMode";

const content = document.querySelector("#content");

content.appendChild(navbarLoad());
loadHome();

switchMode();
