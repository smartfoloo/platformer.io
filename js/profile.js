function displayUserXP() {
  var currentXP = parseInt(localStorage.getItem("userXP")) || 0;
  var currentLevel = parseInt(localStorage.getItem("userLevel")) || 1;
  document.getElementById("user-XP").textContent = "XP: " + currentXP;
  document.getElementById("user-Level").textContent = "Level: " + currentLevel;

  var xpPerLevel = 200;
  var xpForNextLevel = xpPerLevel * (currentLevel + 1);
  var xpProgress = (currentXP / xpForNextLevel) * 100;
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
