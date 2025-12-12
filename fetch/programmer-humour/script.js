let title = document.getElementById("safe-title");
let image = document.getElementById("img-container");

function getHumourFetch() {
    fetch(`https://xkcd.now.sh/?comic=latest`).then(response => response.json()).then(data => {
        console.log(data); // Logged in the console as reqested

        title.innerText = data.safe_title; // Display the title from the data  

        const imgElement = document.createElement("img"); // Creates an image element
        imgElement.src = data.img; // Takes the image from data
        imgElement.alt = data.alt; // Takes the text from data but apparently is not needed for display as text is embeded in the img

        image.appendChild(imgElement); // Appends the element to the container

        }).catch(error => console.log(error)) // Error in the console
    };

getHumourFetch();