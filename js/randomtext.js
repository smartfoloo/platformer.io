const texts = [
  "get back to work!",
  "derek is cool",
  "join the discord!",
  "we live we love we lie",
  "welcome to china airline",
  "peppa pig is blocked?",
  "Control+Shift+Q+Q for free robux",
  "you are chatgpt",
  "made with help from obama",
  "back in my day i used to walk 29 km to this classroom"
];

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

const randomTextElement = document.getElementById("randomText");
randomTextElement.textContent = getRandomText();
