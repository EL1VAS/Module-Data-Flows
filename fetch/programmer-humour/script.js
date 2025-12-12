let fact = document.getElementById("fact");
let factText = document.getElementById("factText");
let numberInput = document.getElementById("numberInput");

numberInput.addEventListener("input", getFactFetch);

function getFactFetch() {
    let number = numberInput.value;

    fetch(`https://xkcd.now.sh/?comic=latest`).then(response => response.text()).then(data => {
        if (number != "") {
            fact.style.display = "block"
            factText.innerText = data;
        }

    })
    .catch(error => console.log(error));

}