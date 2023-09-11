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
