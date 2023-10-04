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

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function updateUserVisit() {
  const lastVisitDate = new Date(localStorage.getItem('lastVisitDate'));
  const currentDate = new Date();

  if (!isToday(lastVisitDate)) {
    localStorage.setItem('visitCount', '1');
    localStorage.setItem('lastVisitDate', currentDate.toISOString());
  } else {
    const visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
    localStorage.setItem('visitCount', (visitCount + 1).toString());
  }
}

updateUserVisit();

const visitCount = localStorage.getItem('visitCount') || 0;
console.log(`Number of visits in the last 28 days: ${visitCount}`);

