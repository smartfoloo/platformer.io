const texts = [
  "Get back to work!",
  "mrbeast",
  "Join the Discord!",
  "microsoft tech support here",
  "idk"
];

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

const randomTextElement = document.getElementById("randomText");
randomTextElement.textContent = getRandomText();
