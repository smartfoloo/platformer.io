$(document).ready(function(){

  var playlist = [{
      title:"Scarlet Fire",
      artist:"Otis McDonald",
      mp3:"/js/music.mp3",
      oga:"/js/music.ogg",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"Loud Indian Music",
      artist:"Classical Indians",
      mp3:"/js/indian.ogg",
      oga:"/js/indian.ogg",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"We Live We Love We Lie",
      artist:"Smurf Cat",
      mp3: "/js/cat.mp3",
      oga: "/js/cat.ogg",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"Celebrate our Differences",
      artist:"Various Artists",
      mp3: "/js/difference.mp3",
      oga: "/js/difference.ogg",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"Bad Habit",
      artist:"Steve Lacy",
      mp3: "/js/bhabit.mp3",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"It Girl",
      artist:"Aliyah's Interlude",
      mp3: "/js/itgirl.mp3",
      poster: "https://th.bing.com/th/id/R.907605c7d81e0d8524dd7de59a759b2f?rik=PUPEcwRoWtL%2fng&riu=http%3a%2f%2fwww.iwardrobes.co.uk%2fwp-content%2fuploads%2f2015%2f09%2fClassic_Black_RAL_9005_Lacobel.png&ehk=oJmsuYt71KXoj4eI0DKX7J81AWrMm%2fcIVMd6h1KvuBM%3d&risl=&pid=ImgRaw&r=0"
    },{
      title:"Ballin'",
      artist:"Roddy Rich, Mustard",
      mp3: "/js/ballin.mp3",
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
