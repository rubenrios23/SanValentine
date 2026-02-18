const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

function test(){
    console.log(":)");
}
let messageindex = 0;
function clickIfyes(){
    window.location.href = "yesview.html";
}


function clickIfno(){
console.log(":(")
const btnno = document.querySelector(".no-button");
const btnyes = document.querySelector(".yes-button");

btnno.textContent = messages[messageindex];
messageindex = (messageindex + 1) % messages.length;

const currentSize = parseFloat(window.getComputedStyle(btnyes).fontSize);
btnyes.style.fontSize = `${currentSize * 1.5}px`;
}