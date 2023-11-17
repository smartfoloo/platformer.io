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

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;

  setTimeout(showTime, 1000);

}
showTime();











$(document).ready(function(){

  var playlist = [{
      title:"Scarlet Fire",
      artist:"Otis McDonald",
      mp3:"./music/music.mp3",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"Loud Indian Music",
      artist:"Classical Indians",
      mp3:"./music/indian.mp3",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"We Live We Love We Lie",
      artist:"Smurf Cat",
      mp3: "./music/cat.mp3",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"Celebrate our Differences",
      artist:"Various Artists",
      mp3: "./music/difference.mp3",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"Bad Habit",
      artist:"Steve Lacy",
      mp3: "./music/bhabit.mp3",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"It Girl",
      artist:"Aliyah's Interlude",
      mp3: "./music/itgirl.mp3",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"Ballin'",
      artist:"Roddy Rich, Mustard",
      mp3: "./music/ballin.mp3",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3",
    volumechange: function(event) {
      $( ".volume-level" ).slider("value", event.jPlayer.options.volume);
    },
    timeupdate: function(event) {
      $( ".progress" ).slider("value", event.jPlayer.status.currentPercentAbsolute);
    }
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  var PlayerData = $(cssSelector.jPlayer).data("jPlayer");
  
  
  // Create the volume slider control
  $( ".volume-level" ).slider({
     animate: "fast",
		max: 1,
		range: "min",
		step: 0.01,
		value : $.jPlayer.prototype.options.volume,
		slide: function(event, ui) {
			$(cssSelector.jPlayer).jPlayer("option", "muted", false);
			$(cssSelector.jPlayer).jPlayer("option", "volume", ui.value);
		}
  });
  
  // Create the progress slider control
  $( ".progress" ).slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = PlayerData.status.seekPercent;
			if(sp > 0) {
				// Move the play-head to the value and factor in the seek percent.
				$(cssSelector.jPlayer).jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					 $( ".progress" ).slider("value", 0);
				}, 0);
			}
		}
	});

  
});

