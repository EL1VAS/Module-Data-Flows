let image = document.getElementById("img-container");

const comicNumbers = [3, 9, 106, 303, 309, 489, 968, 2054, 3000, "latest"];

function getMultipleHumourFetch() {
    for (let i = 0; i < comicNumbers.length; i++) {
        fetch(`https://xkcd.now.sh/?comic=${comicNumbers[i]}`).then(response => response.json()).then(data => {
        console.log(data); // Logged in the console data of each comic

        const card = document.createElement("div"); //Create a card element for each comic
        card.className = "card";

        const titleElement = document.createElement("h1"); // Create title for each comic
        title.textContent = data.safe_title; // Display the title from the data  

        const imgElement = document.createElement("img"); // Creates an image element
        imgElement.src = data.img; // Takes the image from data
        imgElement.alt = data.alt; // Takes the text from data but apparently is not needed for display as text is embeded in the img

        card.appendChild(titleElement); // Appends the title element to nex comic container
        card.appendChild(imgElement); // Appends the img element to the new comic container

        image.appendChild(card); // Appends the new container to the pre existing html one
        

        }).catch(error => console.log(error)) // Error in the console

    }
    
    }

getMultipleHumourFetch();