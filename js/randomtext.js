const texts = [
  "dm me to host this site",
  "derek is cool",
  "join the discord!",
];

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

const randomTextElement = document.getElementById("randomText");
randomTextElement.textContent = getRandomText();
