const texts = [
  "get back to work!",
  "derek is cool",
  "join the discord!",
  "microsoft tech support here",
  "idk",
  "peppa pig is blocked?",
  "back in my day i used to walk 29 km to this classroom"
];

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

const randomTextElement = document.getElementById("randomText");
randomTextElement.textContent = getRandomText();
