const quoteText = document.querySelector(".lpage__quote__text");

let i = 0;
let quotesArray;

export const quote = () => {
    fetch("http://localhost:8080/quotes?search=Portfolio").then(response => {
        return response.json();
    }
    ).then(response => {
        console.log(response[Math.floor(response.length * Math.random())].quote);
        quoteText.innerText = response[Math.floor(response.length * Math.random())].quote;
    })
}
