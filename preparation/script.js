 const film = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  }
];

// Render a film card in the UI
const filmCard = document.createElement("section");
filmCard.textContent = film.title;
document.body.appendChild(filmCard);

