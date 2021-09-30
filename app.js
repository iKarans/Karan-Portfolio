const allFilter = document.querySelector(".portfolio__filter__all");
const javascriptFilter = document.querySelector(".portfolio__filter__javascript");
const reactFilter = document.querySelector(".portfolio__filter__react");
const javaFilter = document.querySelector(".portfolio__filter__java");
const flipCards = document.querySelectorAll(".portfolio__gallery__flip");

allFilter.addEventListener("click", () => {
    console.log(1);
});

javascriptFilter.addEventListener("click", () => {
    console.log(7);
    console.log(flipCards[3].dataset.lang);
    flipCards.forEach((card) => {
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