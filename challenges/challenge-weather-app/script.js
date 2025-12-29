const WEATHER_API_KEY = "01c8510e47db5e342821cbfad960defc";

function getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error fetching weather...", error);
    })
    }

getWeather("Brussels");