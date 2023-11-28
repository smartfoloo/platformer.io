const texts = [
  "dm me to host this site",
  "derek is cool",
  "NEW music player! Enable it in settings! 🎵",
  "join the discord!",
  "its christmas timeeeeeeee",
  "🎄🎄🎄🎄",
  "NEW music player! Enable it in settings! 🎵",
  "rooftop snipers 2 is peak gaming",
  "you can flex your time in profile ",
  "get back to work, blud",
  "https://youtu.be/dQw4w9WgXcQ DONT CLICK!!!",
  "whipping noises intensifies ",
  "NEW music player! Enable it in settings! 🎵",
  "theres an emulator in extras 🤯",
  "change your nickname in profile",
  "nobody ever reads these :sigh:",
];

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

const randomTextElement = document.getElementById("randomText");
randomTextElement.textContent = getRandomText();
