const hamburgerMenu = document.querySelector(".header__nav__hamburger");
const asided = document.querySelector("aside");

hamburgerMenu.addEventListener("click", () => {
    asided.classList.toggle("header__show");
})