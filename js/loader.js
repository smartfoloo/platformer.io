const loader = document.getElementById('loader');
const gameframe = document.querySelector('.gameframe');
const gamename = document.getElementById('gamename');
const gameimage = document.querySelector('.game-image');

const params = new URLSearchParams(window.location.search);
const gameToLoad = params.get('game');

if (gameToLoad) {
  const imageName = gameToLoad.replace(/-/g, '');
  const imageSrc = `/images/${imageName}.png`;
  const title = gameToLoad.charAt(0).toUpperCase() + gameToLoad.slice(1).replace(/-/g, ' ');

  gameimage.src = imageSrc;
  gamename.textContent = title;

  gameframe.src = `https://smartfolooo.bitbucket.io/images/${gameToLoad}`;

  loader.style.display = 'flex';
  gameframe.style.display = 'none';

  setTimeout(() => {
    loader.style.display = 'none';
    gameframe.style.display = 'block';
  }, 3000);
}