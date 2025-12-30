const WEATHER_API_KEY = CONFIG.WEATHER_API_KEY;
const UNSPLASH_ACCESS_KEY = CONFIG.UNSPLASH_ACCESS_KEY;

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`;

    console.log('Fetching weather for:', city);
    console.log('URL:', url);

    fetch(url)
    .then(function(response) {
        console.log("Response status:", response.status);
        console.log("URL:", url);
        return response.json();
    })
    .then(function(data) {
        console.log("Weather data:", data);

        const conditionsElem = document.getElementById("conditions");
        const description = data.weather[0].description;
        conditionsElem.textContent = description;

        getPhotos(description);

    })
    .catch(function(error) {
        console.error("Error fetching weather...", error);
    })
    }

getWeather("Brussels");

function getPhotos(query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`;

    console.log("Fetching photos for:", query);

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log("Photo's data:", data);
        displayPhotos(data.results);
    })
    .catch(function(error) {
        console.error("Error fetching photos...", error);
    })
}

function displayPhotos(photos) {
    const photoElem = document.getElementById("photo");
    const thumbsElem = document.getElementById("thumbs");

    thumbsElem.innerHTML = ""; // To clear previous display
    photoElem.innerHTML = ""; // To clear previous display of main photo

    if (photos.length > 0) { //Display first photo in the main area
        const mainImg = document.createElement("img");
        mainImg.setAttribute("src", photos[0].urls.regular);
        mainImg.setAttribute("alt", photos[0].alt_description || "Weather photo");
        photoElem.appendChild(mainImg);
    }

    photos.forEach(function(photo, index) {
        const img = document.createElement("img");
        img.className = "thumb";

        if (index === 0) {
            img.className = "thumb active";
        }
        img.setAttribute("src", photo.urls.thumb);
        img.setAttribute("alt", photo.alt_description || "Weather photo");

        img.addEventListener("click", function() { //Update main img
            const mainImg = photoElem.querySelector("img");
            mainImg.src = photo.urls.regular;

            const allThumbs = document.querySelectorAll(".thumb");
            for (let i = 0; i < allThumbs.length; i++) {
                allThumbs[i].classList.remove("active");
            }
            img.classList.add("active");
        })

        thumbsElem.appendChild(img);
    })
}