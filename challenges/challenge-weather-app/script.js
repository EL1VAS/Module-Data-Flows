const WEATHER_API_KEY = "01c8510e47db5e342821cbfad960defc";

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`;

    console.log('Fetching weather for:', city);
    console.log('URL:', url);

    fetch(url)
    .then(function(response) {
        return response.json;
    })
    .then(function(data) {
        console.log(data);

        const conditionsElem = document.getElementById("consitions");
        const description = data.weather[0].description;
        conditionsElem.textContent = description;
    })
    .catch(function(error) {
        console.error("Error fetching weather...", error);
    })
    }

getWeather("Brussels");