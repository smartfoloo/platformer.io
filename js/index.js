var tab = localStorage.getItem('tab');
if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

if (tabData.title) {
  document.title = tabData.title;
}

if (tabData.icon) {
  document.querySelector('link[rel="icon"]').href = tabData.icon;
}

function startTrackingTime() {
  var startTime = new Date().getTime();
  localStorage.setItem("startTime", startTime.toString());
}

function stopTrackingTime() {
  var startTime = localStorage.getItem("startTime");
  if (startTime) {
    var endTime = new Date().getTime();
    var totalTimeInSeconds = Math.floor((endTime - parseInt(startTime)) / 1000);

    var hours = Math.floor(totalTimeInSeconds / 3600);
    var minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    var seconds = totalTimeInSeconds % 60;

    var totalXP = Math.floor(totalTimeInSeconds / 60) * 20;
    var currentXP = parseInt(localStorage.getItem("userXP")) || 0;
    localStorage.setItem("userXP", (currentXP + totalXP).toString());

    var previousTotalTime = localStorage.getItem("totalTimeInSeconds") || 0;
    var newTotalTime = previousTotalTime + totalTimeInSeconds;
    localStorage.setItem("totalTimeInSeconds", newTotalTime.toString());

    var totalTimeFormatted = hours + " hours " + minutes + " minutes " + seconds + " seconds";
    localStorage.setItem("totalTime", totalTimeFormatted);

    localStorage.removeItem("startTime");
  }
}


window.onload = function () {
  startTrackingTime();
};

window.onunload = function () {
  stopTrackingTime();
};

function handleKeyPress(event) {
  const selectedUrl = localStorage.getItem('selectedUrl');
  const defaultUrl = 'https://www.instructure.com/canvas?domain=canvas';

  if (event.code === 'Backquote') {
    window.location.href = selectedUrl || defaultUrl;
  }
}

document.addEventListener('keydown', handleKeyPress);


