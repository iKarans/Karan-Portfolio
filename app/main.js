import { typewrite } from "./typewrite.js";

const allFilter = document.querySelector(".portfolio__filter__all");
const javascriptFilter = document.querySelector(".portfolio__filter__javascript");
const reactFilter = document.querySelector(".portfolio__filter__react");
const javaFilter = document.querySelector(".portfolio__filter__java");
const flipCards = document.querySelectorAll(".portfolio__gallery__flip");
const filterBtns = document.querySelectorAll(".portfolio__filter__btn");

let currentFilter;

allFilter.addEventListener("click", (e) => {
    currentFilter = allFilter.innerText;
    console.log(currentFilter);
    flipCards.forEach((card) => {
        card.classList.remove("portfolio__gallery__flip__hide-flip");
    });
    filterBtns.forEach((btn) => {
        if(btn.innerText == currentFilter) {
            btn.style.backgroundColor = "#2667FF";
            btn.style.padding = "5px;"
        } else {
            btn.style.backgroundColor = "transparent";
            btn.style.padding = "0px;"
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
            btn.style.padding = "5px;"
        } else {
            btn.style.backgroundColor = "transparent";
            btn.style.padding = "0px;"
        }
    });
});


reactFilter.addEventListener("click", () => {
    console.log(3);
});

javaFilter.addEventListener("click", () => {
    console.log(4);
});

typewrite();