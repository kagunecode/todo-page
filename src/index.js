import "./styles.css";
import erasePage from "./functions/erasePage";
import navbarLoad from "./pages/navbar";
import loadHome from "./pages/home";

const content = document.querySelector("#content");

content.appendChild(navbarLoad());
loadHome();
