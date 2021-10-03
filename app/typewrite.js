const typewriterText = document.querySelector("#typewriterText");
const greetings = ["Hello.", "こにちは。", "வணக்கம்.", 
"안녕하세요.", "Hola.", "Hallo.", "Ciao.", "你好。"]; 
let i = 0;
let j = 0;
let wordArray = [];

export const typewrite = () => {
    typewriterText.innerText = wordArray.join("");
    if(i < greetings.length) {
        if(j < greetings[i].length) {
            wordArray.push(greetings[i][j])
            j++
        } else {
            wordArray = [];
            i++
            j = 0;
        }
    } else{
        i = 0;
    }
    setTimeout(typewrite, 500);
}
