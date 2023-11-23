import "./styles.css";
import {
  runSignAction,
  renderSignup,
  setSignVal,
} from "./functions/signStatus";
import navbarLoad from "./pages/navbar";
import loadHome from "./pages/home";
import switchMode from "./functions/darkMode";
import { checkIfLogin } from "./functions/userAuth";

loadHome();
navbarLoad();
switchMode();
checkIfLogin();

document.getElementById("start-button").addEventListener("click", () => {
  modal.showModal();
  setSignVal("signup");
  renderSignup();
});

const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#modal-close");
const buttonUser = document.querySelector("#button-log");
const loginButton = document.querySelector("#login-button");
const signUpChange = document.querySelector("#change");

closeModal.addEventListener("click", () => {
  modal.close();
});

buttonUser.addEventListener("click", () => {
  setSignVal("login");
  renderSignup();
  modal.showModal();
});

loginButton.addEventListener("click", () => {
  runSignAction();
});

signUpChange.addEventListener("click", () => {
  renderSignup();
});

// pass es lacobra11
