 const film = 
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  };

// Goal refactor this project to use film card template
const filmCard = document.createElement("section");
const title = document.createElement("h1");
const director = document.createElement("p");
const times = document.createElement("")
director.textContent = film.director;
title.textContent = film.title;
filmCard.appendChild(title);
filmCard.appendChild(director);
document.body.appendChild(filmCard);

