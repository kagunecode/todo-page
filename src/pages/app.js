import "../styles.css";
import { logOut } from "../functions/userAuth";

const menuButton = document.querySelector("#menu-button");
const contentWindow = document.querySelector("#screen-space");
const logoutButtton = document.querySelector("#test-button");

menuButton.addEventListener("click", () => {
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.toggle("-translate-x-[100%]");
  contentWindow.classList.toggle("-ml-[21rem]");
});

logoutButtton.addEventListener("click", () => {
  logOut();
});
