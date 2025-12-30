const dogList = document.getElementById("dog-list");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

let dogGallery = [];
let currentIndex = -1;

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

        dogGallery.push(data.message);
        currentIndex = dogGallery.length -1;
        displayImage(currentIndex);
    })
    .catch(function(error) {
        console.error("Something went wrong while fetching the photos...", error);
    })
}

function displayImage(index) {
    dogList.innerHTML = ""; // Clears previous
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = dogGallery[index];
    img.alt = "Random dog photo";

    li.appendChild(img);
    dogList.appendChild(li);
}

nextBtn.addEventListener("click", fetchDogImage);
previousBtn.addEventListener("click", function() {
    if(currentIndex > 0) { // If there are photos...
        currentIndex--;
        displayImage(currentIndex);
    }
    else {
        console.log("No previous photos!")
    }
})