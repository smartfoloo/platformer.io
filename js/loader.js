const loader = document.getElementById('loader');
const gameframe = document.querySelector('.gameframe');
const gamename = document.getElementById('gamename');
const gameimage = document.querySelector('.game-image');

const params = new URLSearchParams(window.location.search);
const gameToLoad = params.get('game');

if (gameToLoad) {
  if (gameToLoad === 'taming-io') {
    gameframe.src = 'https://school-homework.com/';
    gamename.textContent = 'Taming.io';
  if (gameToLoad === 'little-alchemy-2') {
    gameframe.src = 'https://littlealchemy2.com';
  }
  } else if (gameToLoad === 'dogeminer2') {
    gameframe.src = '#';
    gamename.textContent = 'Dogeminer 2';
    gameimage.style.display = 'none';
  } else {
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
      const words = gameToLoad.split('-');
      const title = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

      gamename.textContent = title;
      gameframe.src = `https://smartfoloolol.pages.dev/${gameToLoad}`;

      loader.style.display = 'flex';
      gameframe.style.display = 'none';

      setTimeout(() => {
        loader.style.display = 'none';
        gameframe.style.display = 'block';
      }, 300);
    }
  }
}



