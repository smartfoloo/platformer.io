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
