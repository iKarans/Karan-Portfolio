import { typewrite } from "./typewrite.js";

const allFilter = document.querySelector(".portfolio__filter__all");
const javascriptFilter = document.querySelector(".portfolio__filter__javascript");
const reactFilter = document.querySelector(".portfolio__filter__react");
const javaFilter = document.querySelector(".portfolio__filter__java");
const cppFilter = document.querySelector(".portfolio__filter__cpp");
const flipCards = document.querySelectorAll(".portfolio__gallery__flip");
const filterBtns = document.querySelectorAll(".portfolio__filter__btn");

let currentFilter;

allFilter.addEventListener("click", (e) => {
    currentFilter = allFilter.innerText;
    flipCards.forEach((card) => {
        card.classList.remove("portfolio__gallery__flip__hide-flip");
    });
    filterBtns.forEach((btn) => {
        if(btn.innerText == currentFilter) {
            btn.style.backgroundColor = "#2667FF";
        } else {
            btn.style.backgroundColor = "transparent";
        }
    });
});

javascriptFilter.addEventListener("click", () => {
    flipCards.forEach((card) => {
        currentFilter = javascriptFilter.innerText;
        console.log(currentFilter);
        card.classList.remove("portfolio__gallery__flip__hide-flip");
        if(card.dataset.lang != "javascript") {
            card.classList.add("portfolio__gallery__flip__hide-flip");
        }
    });
    filterBtns.forEach((btn) => {
        if(btn.innerText == currentFilter) {
            btn.style.backgroundColor = "#2667FF";
        } else {
            btn.style.backgroundColor = "transparent";
        }
    });
});


reactFilter.addEventListener("click", () => {
    flipCards.forEach((card) => {
        currentFilter = reactFilter.innerText;
        card.classList.remove("portfolio__gallery__flip__hide-flip");
        if(card.dataset.lang != "react.js") {
            card.classList.add("portfolio__gallery__flip__hide-flip");
        }
    });
    filterBtns.forEach((btn) => {
        if(btn.innerText == currentFilter) {
            btn.style.backgroundColor = "#2667FF";
        } else {
            btn.style.backgroundColor = "transparent";
        }
    });
});

javaFilter.addEventListener("click", () => {
    flipCards.forEach((card) => {
        currentFilter = javaFilter.innerText;
        card.classList.remove("portfolio__gallery__flip__hide-flip");
        if(card.dataset.lang != "java") {
            card.classList.add("portfolio__gallery__flip__hide-flip");
        }
    });
    filterBtns.forEach((btn) => {
        if(btn.innerText == currentFilter) {
            btn.style.backgroundColor = "#2667FF";
        } else {
            btn.style.backgroundColor = "transparent";
        }
    });
});

cppFilter.addEventListener("click", () => {
    flipCards.forEach((card) => {
        currentFilter = "C++";
        card.classList.remove("portfolio__gallery__flip__hide-flip");
        if(card.dataset.lang != "cpp") {
            card.classList.add("portfolio__gallery__flip__hide-flip");
        }
    });
    filterBtns.forEach((btn) => {
        if(btn.innerText == currentFilter) {
            btn.style.backgroundColor = "#2667FF";
        } else {
            btn.style.backgroundColor = "transparent";
        }
    });
});
typewrite();