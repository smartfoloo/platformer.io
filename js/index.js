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
    var totalTime = Math.floor((endTime - parseInt(startTime)) / 1000);
    localStorage.setItem("totalTime", totalTime.toString());
    var xpPerMinute = 20;
    var totalXP = Math.floor(totalTime / 60) * xpPerMinute;
    var currentXP = parseInt(localStorage.getItem("userXP")) || 0;
    localStorage.setItem("userXP", (currentXP + totalXP).toString());
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
  const customKey = localStorage.getItem('selectedKey');

  if (event.code === 'Backquote' && customKey) {
    window.location.href = selectedUrl || defaultUrl;
  } else if (event.key === customKey) {
    window.location.href = selectedUrl || defaultUrl;
  }
}

document.addEventListener('keydown', handleKeyPress);


if (!localStorage.getItem('firstVisitDate')) {
  const currentDate = new Date();
  localStorage.setItem('firstVisitDate', currentDate.toISOString());
} else {
  const firstVisitDate = new Date(localStorage.getItem('firstVisitDate'));
}

if (localStorage.getItem('pageVisits')) {
  const pageVisits = parseInt(localStorage.getItem('pageVisits'), 10) + 1;
  localStorage.setItem('pageVisits', pageVisits.toString());
} else {
  localStorage.setItem('pageVisits', '1');
}

function toggleDropdown() {
  const dropdownContent = document.getElementById('dropdownContent');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}