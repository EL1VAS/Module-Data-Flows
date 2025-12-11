let fact = document.getElementById("fact");
let factText = document.getElementById("factText");
let numberInput = document.getElementById("numberInput");

numberInput.addEventListener("input", getFactAjax);

function getFactAjax() {
    let number = numberInput.value;
    console.log(number);

}