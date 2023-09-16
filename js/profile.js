function displayUserXP() {
  var currentXP = parseInt(localStorage.getItem("userXP")) || 0;
  var xpPerLevel = 200;

  var currentLevel = Math.floor(currentXP / xpPerLevel) + 1;
  var xpForNextLevel = xpPerLevel * (currentLevel);
  var xpProgress = ((currentXP % xpPerLevel) / xpPerLevel) * 100;

  document.getElementById("user-Level").textContent = "Level " + currentLevel;
  document.getElementById("xp-progress").style.width = xpProgress + "%";

  var remainingXP = xpForNextLevel - currentXP;
  var remainingMessage = `${remainingXP} XP until next levelup`; // Format the message

  document.getElementById("remaining-XP").textContent = remainingMessage;

  document.getElementById("xp-progress").style.width = xpProgress + "%";
}


window.onload = function () {
  displayUserXP();
  checkLevelUp();
};

const editableHeading = document.getElementById('editableHeading');
const editInput = document.getElementById('editInput');
const saveButton = document.getElementById('saveButton');

const savedUsername = localStorage.getItem('username');
if (savedUsername) {
    editableHeading.textContent = savedUsername;
    editInput.value = savedUsername;
}

editableHeading.addEventListener('click', () => {
    editableHeading.style.display = 'none';
    editInput.style.display = 'inline-block';
    editInput.focus();
});

saveButton.addEventListener('click', () => {
    const newUsername = editInput.value;
    editableHeading.textContent = newUsername;
    editInput.style.display = 'none';
    editableHeading.style.display = 'block';
    
    localStorage.setItem('username', newUsername);
});

document.getElementById("editIcon").addEventListener("click", function () {
  var inputDiv = document.querySelector(".input-div");
  if (inputDiv.style.display === "none" || inputDiv.style.display === "") {
    inputDiv.style.display = "block";
    document.getElementById("saveButton").style.display = "block";
  } else {
    inputDiv.style.display = "none";
    document.getElementById("saveButton").style.display = "none";
  }
});
