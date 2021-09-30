import { typewrite } from "./typewrite.js";

const allFilter = document.querySelector(".portfolio__filter__all");
const javascriptFilter = document.querySelector(".portfolio__filter__javascript");
const reactFilter = document.querySelector(".portfolio__filter__react");
const javaFilter = document.querySelector(".portfolio__filter__java");
const flipCards = document.querySelectorAll(".portfolio__gallery__flip");

allFilter.addEventListener("click", () => {
    flipCards.forEach((card) => {
        card.classList.remove("portfolio__gallery__flip__hide-flip");
    })
});

javascriptFilter.addEventListener("click", () => {
    flipCards.forEach((card) => {
        card.classList.remove("portfolio__gallery__flip__hide-flip");
        if(card.dataset.lang != "javascript") {
            card.classList.add("portfolio__gallery__flip__hide-flip");
        }
    })
})

reactFilter.addEventListener("click", () => {
    console.log(3);
});

javaFilter.addEventListener("click", () => {
    console.log(4);
});

typewrite();