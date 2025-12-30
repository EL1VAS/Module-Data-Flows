const dogList = document.getElementById("dog-list");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

function fetchDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
        if(!response.ok) {
            throw new Error("HTTP error! Status:" + response.status);
        }
        return response.json();
    })
    .then(function(data) {
        console.log("Dog data:", data);
    })
    .catch(function(error) {
        console.error("Something went wrong while fetching the photos...", error);
    })
}