const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const gameCards = gameList.getElementsByClassName("game-card");

  for (const card of gameCards) {
    const title = card.querySelector(".title").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
});

document.getElementById('randomGameButton').addEventListener('click', function () {
  const gameLinks = document.querySelectorAll('#gameList a');
  const randomIndex = Math.floor(Math.random() * gameLinks.length);
  const randomGameLink = gameLinks[randomIndex];
  window.location.href = randomGameLink.href;
});

const gameCards = document.querySelectorAll('.game-card');
const shuffledGameCards = Array.from(gameCards);
for (let i = shuffledGameCards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledGameCards[i], shuffledGameCards[j]] = [shuffledGameCards[j], shuffledGameCards[i]];
}
const selectedGameCards = shuffledGameCards.slice(0, 5);

const gameData = selectedGameCards.map(card => {
  return card.outerHTML;
});

localStorage.setItem('selectedGamesData', JSON.stringify(gameData));
