import { quote } from "./api.js";
import { typewrite } from "./typewrite.js";

const allFilter = document.querySelector(".portfolio__filter__all");
const javascriptFilter = document.querySelector(
  ".portfolio__filter__javascript"
);
const reactFilter = document.querySelector(".portfolio__filter__react");
const javaFilter = document.querySelector(".portfolio__filter__java");
const otherFilter = document.querySelector(".portfolio__filter__other");
const flipCards = document.querySelectorAll(".portfolio__gallery__flip");
const filterBtns = document.querySelectorAll(".portfolio__filter__btn");
let currentFilter;

allFilter.addEventListener("click", (e) => {
  currentFilter = allFilter.innerText;
  flipCards.forEach((card) => {
    card.classList.remove("portfolio__gallery__flip__hide-flip");
  });
  filterBtns.forEach((btn) => {
    if (btn.innerText == currentFilter) {
      btn.style.backgroundColor = "#3F8EFC";
    } else {
      btn.style.backgroundColor = "transparent";
    }
  });
});

javascriptFilter.addEventListener("click", () => {
  flipCards.forEach((card) => {
    currentFilter = javascriptFilter.innerText;
    card.classList.remove("portfolio__gallery__flip__hide-flip");
    if (!card.dataset.lang.split(" ").includes("javascript")) {
      card.classList.add("portfolio__gallery__flip__hide-flip");
    }
  });
  filterBtns.forEach((btn) => {
    if (btn.innerText == currentFilter) {
      btn.style.backgroundColor = "#3F8EFC";
    } else {
      btn.style.backgroundColor = "transparent";
    }
  });
});

reactFilter.addEventListener("click", () => {
  flipCards.forEach((card) => {
    currentFilter = "React.JS";
    card.classList.remove("portfolio__gallery__flip__hide-flip");
    if (!card.dataset.lang.split(" ").includes("react")) {
      card.classList.add("portfolio__gallery__flip__hide-flip");
    }
  });
  filterBtns.forEach((btn) => {
    if (btn.innerText == currentFilter) {
      btn.style.backgroundColor = "#3F8EFC";
    } else {
      btn.style.backgroundColor = "transparent";
    }
  });
});

javaFilter.addEventListener("click", () => {
  flipCards.forEach((card) => {
    currentFilter = javaFilter.innerText;
    card.classList.remove("portfolio__gallery__flip__hide-flip");
    if (!card.dataset.lang.split(" ").includes("java")) {
      card.classList.add("portfolio__gallery__flip__hide-flip");
    }
  });
  filterBtns.forEach((btn) => {
    if (btn.innerText == currentFilter) {
      btn.style.backgroundColor = "#3F8EFC";
    } else {
      btn.style.backgroundColor = "transparent";
    }
  });
});

otherFilter.addEventListener("click", () => {
  flipCards.forEach((card) => {
    currentFilter = otherFilter.innerText;
    card.classList.remove("portfolio__gallery__flip__hide-flip");
    if (!card.dataset.lang.split(" ").includes("other")) {
      card.classList.add("portfolio__gallery__flip__hide-flip");
    }
  });
  filterBtns.forEach((btn) => {
    if (btn.innerText == currentFilter) {
      btn.style.backgroundColor = "#3F8EFC";
    } else {
      btn.style.backgroundColor = "transparent";
    }
  });
});
typewrite();
quote();

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "./particles.json", function () {
  console.log("callback - particles.js config loaded");
});