const quoteText = document.querySelector(".lpage__quote-container__quote__text");

export const quote = () => {
    fetch("http://localhost:8080/quotes?search=Portfolio").then(response => {
        return response.json();
    }
    ).then(response => {
        console.log(response[Math.floor(response.length * Math.random())].quote);
        quoteText.innerText = response[Math.floor(response.length * Math.random())].quote;
    })
}
