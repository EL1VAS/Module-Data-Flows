let fact = document.getElementById("fact");
let factText = document.getElementById("factText");
let numberInput = document.getElementById("numberInput");

console.log('numberInput:', numberInput);
console.log('fact:', fact);
console.log('factText:', factText);


numberInput.addEventListener("input", getFactAjax);

function getFactAjax() {
    console.log(123);

}