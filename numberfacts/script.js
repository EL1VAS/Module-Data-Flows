let fact = document.getElementById("fact");
let factText = document.getElementById("factText");
let numberInput = document.getElementById("numberInput");

console.log('numberInput:', numberInput);
console.log('About to add event listener');

numberInput.addEventListener("input", getFactAjax);

console.log('Event listener added');




function getFactAjax() {
    console.log(123);

}