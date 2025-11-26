 const film = 
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  };

// Render a film card in the UI
const filmCard = document.createElement("section");
const title = document.createElement("h1");
title.textContent = film.title;
filmCard.appendChild(title);
document.body.appendChild(filmCard);

