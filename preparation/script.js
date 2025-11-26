 const film = 
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  };

// Goal refactor this project to use film card template
const filmCard = document.getElementById("film-card-template").content.cloneNode(true);

filmCard.querySelector("h1").textContent = film.title;
document.body.appendChild(filmCard);