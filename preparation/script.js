 const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    director: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  }
];

// Goal refactor this project to use film card template
function createFilmCard(films) {
    const filmCard = document.getElementById("film-card-template").content.cloneNode(true);

    filmCard.querySelector("h1").textContent = films.title;
    filmCard.querySelector("p[data-director]").textContent = films.director;
    filmCard.querySelector("time").textContent = films.times;
    filmCard.querySelector("p[data-certificate]").textContent = films.certificate;
    return filmCard;
}

const filmCards = [];

for (const item of films) {
    const card = createFilmCard(item);
    filmCards.push(card);   
};

document.body.append(...filmCards);