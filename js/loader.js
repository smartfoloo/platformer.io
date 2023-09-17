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
    gameimage.src = '/images/tamingio.png';
  } else if (gameToLoad === 'little-alchemy-2') {
    gameframe.src = 'https://littlealchemy2.com';
    gamename.textContent = 'Little Alchemy 2';
    gameimage.src = '/images/littlealchemy2.png';
  } else if (gameToLoad === 'san-francisco') {
    gameframe.src = 'https://smartfoloolol.netlify.app/assets/san-francisco';
    gamename.textContent = 'San Francisco';
    gameimage.src = '/images/sanfrancisco.png';
  } else if (gameToLoad === 'funny-shooter-2') {
    gameframe.src = 'https://smartfoloolol.netlify.app/assets/funny-shooter-2';
    gamename.textContent = 'Funny Shooter 2';
    gameimage.src = '/images/funnyshooter2.png';
  } else if (gameToLoad === 'time-shooter-2') {
    gameframe.src = 'https://smartfoloolol.netlify.app/assets/time-shoter-2o';
    gamename.textContent = 'Time Shooter 2';
    gameimage.src = '/images/timshooter2.png';
  } else if (gameToLoad === 'time-shooter-3') {
    gameframe.src = 'https://smartfoloolol.netlify.app/assets/time-shooter-3';
    gamename.textContent = 'San Francisco';
    gameimage.src = '/images/sanfrancisco.png';
  } else if (gameToLoad === 'turbo-moto-racer') {
    gameframe.src = 'https://smartfoloolol.netlify.app/assets/turbo-moto-racer';
    gamename.textContent = 'Turbo Moto Racer';
    gameimage.src = '/images/turbomotoracer.png';
  } else if (gameToLoad === 'bank-robbery') {
    gameframe.src = 'https://smartfoloolol.netlify.app/assets/bank-robbery';
    gamename.textContent = 'Bank Robbery';
    gameimage.src = '/images/bank-robbery.png';
  } else if (gameToLoad === 'bank-robbery-2') {
    gameframe.src = 'https://smartfoloolol.netlify.app/assets/bank-robbery-2';
    gamename.textContent = 'Bank Robbery 2';
    gameimage.src = '/images/bankrobbery2.png';
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



