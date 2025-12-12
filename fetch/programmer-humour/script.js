let title = document.getElementById("safe-title");
let image = document.getElementById("img-container");

function getHumourFetch() {
    fetch(`https://xkcd.now.sh/?comic=latest`).then(response => response.json()).then(data => {
        console.log(data);
        }).catch(error => console.log(error))
    };

getHumourFetch();