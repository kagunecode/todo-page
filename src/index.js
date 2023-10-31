import "./styles.css";
import erasePage from "./functions/erasePage";
import navbarLoad from "./pages/navbar";
import loadHome from "./pages/home";
import switchMode from "./functions/darkMode";
import renderCircles from "./elements/bgCircles";

const content = document.querySelector("#content");

renderCircles();
content.appendChild(navbarLoad());
loadHome();

switchMode();
