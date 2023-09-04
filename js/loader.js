const loader = document.getElementById('loader');
const gameframe = document.querySelector('.gameframe');
const gamename = document.getElementById('gamename');
const gameimage = document.querySelector('.game-image');

const params = new URLSearchParams(window.location.search);
const gameToLoad = params.get('game');

if (gameToLoad) {
  const imageName = gameToLoad.replace(/-/g, '');
  const imageSrcPng = `/images/${imageName}.png`;
  const imageSrcAvif = `/images/${imageName}.avif`;

  const imageChecker = new Image();
  imageChecker.src = imageSrcPng;

  imageChecker.onload = function () {
    gameimage.src = imageSrcPng;
    loadGame();
  };

  imageChecker.onerror = function () {
    gameimage.src = imageSrcAvif;
    loadGame();
  };

  function loadGame() {
    const title = gameToLoad.charAt(0).toUpperCase() + gameToLoad.slice(1).replace(/-/g, ' ');

    gamename.textContent = title;
    gameframe.src = `https://smartfolooo.bitbucket.io/images/${gameToLoad}`;

    loader.style.display = 'flex';
    gameframe.style.display = 'none';

    setTimeout(() => {
      loader.style.display = 'none';
      gameframe.style.display = 'block';
    }, 3000);
  }
}