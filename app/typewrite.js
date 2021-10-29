const typewriterText = document.querySelector("#typewriterText");
const greetings = ["Hello.", "Kon'nichiwa.", "Vaṇakkam.", 
"annyeonghasibnikka.", "Hola.", "Hallo.", "Ciao.", "Nǐ hǎo.", "'ahlan.", "namaste"]; 
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
