function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

                      // Pick a remaining element...
                      randomIndex = Math.floor(Math.random() * currentIndex);
                      currentIndex -= 1;

                      // And swap it with the current element.
                      temporaryValue = array[currentIndex];
                      array[currentIndex] = array[randomIndex];
                      array[randomIndex] = temporaryValue;
                    }

          return array;
}
var videoContainer = document.getElementById('videoContainer'),
    output = document.getElementById('output'),
    nextVideo,
    videoObjects =
    [
        document.createElement('video'),
        document.createElement('video')
    ],

	vidSourcesMaster = doors_B.concat(doors_C, doors_D, doors_E, doors_F, doors_G, doors_H, doors_I, doors_J, doors_K, doors_L, doors_M, doors_P, /*doors_R, doors_S, */doors_mlms01, doors_mlms02, doors_ontheair, doors_tps01, doors_tps02, doors_tps03, doors_txfs01, doors_txfs02, doors_txfs03, doors_txfs04, doors_txfs05, doors_txfs06, doors_txfs07, doors_txfs08);
function allVids() {
	vidSources = vidSourcesMaster;
	newMode()
}
function cinema() {
	vidSources = doors_B.concat(doors_C, doors_D, doors_E, doors_F, doors_G, doors_H, doors_I, doors_J, doors_K, doors_L, doors_M, doors_P, /*doors_R, doors_S*/);
	newMode();
}
function tv() {
	vidSources = doors_mlms01.concat(doors_mlms02, doors_ontheair, doors_tps01, doors_tps02, doors_tps03, doors_txfs01, doors_txfs02, doors_txfs03, doors_txfs04, doors_txfs05, doors_txfs06, doors_txfs07, doors_txfs08);
	newMode();
}
function lessthanfive() {
	vidSources = doors_lessthanfive;
	newMode();
}
function newMode() {
	shuffle(vidSources);
	if (videoObjects[0].style.display =='block') {
		videoObjects[0].src=vidSources[0];
		videoObjects[0].load();
	}
	else if (videoObjects[1].style.display =='block') {
		videoObjects[1].src=vidSources[0];
		videoObjects[1].load();
		videoObjects[1].play();
	} 
	else if (!videoObjects[0].style.display && videoObjects[1].style.display == 'none') {
		videoObjects[0].src=vidSources[0];
		videoObjects[0].load();
	};
}
allVids();
    //vidSources = vidSourcesMaster;
    //random starting point
    nextActiveVideo = Math.floor((Math.random() * vidSources.length));
shuffle(vidSources);
videoObjects[0].inx = 0; //set index
videoObjects[1].inx = 1;

initVideoElement(videoObjects[0]);
initVideoElement(videoObjects[1]);

videoObjects[0].autoplay = true;
videoObjects[0].src = vidSources[nextActiveVideo];
videoContainer.appendChild(videoObjects[0]);

videoObjects[1].style.display = 'none';
videoContainer.appendChild(videoObjects[1]);

	document.addEventListener('keydown', function(event) {
	    if (event.keyCode == 76 && videoObjects[0].loop == false && document.activeElement.id !== 'filter') {
		    videoObjects[0].loop=true;
	    }
	    else if (event.keyCode == 76 && videoObjects[0].loop == true && document.activeElement.id !== 'filter') {
		    videoObjects[0].loop=false;
  	    }
	    if (event.keyCode == 76 && videoObjects[1].loop == false && document.activeElement.id !== 'filter') {
		    videoObjects[1].loop=true;
	    }
	    else if (event.keyCode == 76 && videoObjects[1].loop == true && document.activeElement.id !== 'filter') {
		    videoObjects[1].loop=false;
  	    }
	    else if (event.keyCode == 80 && videoObjects[0].paused == false && document.activeElement.id !== 'filter') {
		    videoObjects[0].pause();
	    }
	    else if (event.keyCode == 80 && videoObjects[1].paused == false && document.activeElement.id !== 'filter') {
		    videoObjects[1].pause();
	    }
		else if (event.keyCode == 80 && videoObjects[0].style.display == 'block' && videoObjects[0].paused == true && document.activeElement.id !== 'filter') {
		    videoObjects[0].play();
	    }
		else if (event.keyCode == 80 && videoObjects[1].style.display == 'block' && videoObjects[1].paused == true && document.activeElement.id !== 'filter') {
		    videoObjects[1].play();
	    }
		else if (event.keyCode == 80 && !videoObjects[0].style.display && videoObjects[1].style.display == 'none' && document.activeElement.id !== 'filter') {
		    videoObjects[0].play();
	    }
});
function initVideoElement(video)
{
    video.playsinline = true;
    video.muted = false;
    video.preload = 'auto'; //but do not set autoplay, because it deletes preload

    //loadedmetadata is wrong because if we use it then we get endless loop
    video.onplaying = function(e)
    {
        //output.innerHTML = 'Current video source index: ' + nextActiveVideo;

        //select next index. If is equal vidSources.length then it is 0
        nextActiveVideo = ++nextActiveVideo % vidSources.length;

        //replace the video elements against each other:
        if(this.inx == 0)
            nextVideo = videoObjects[1];
        else
            nextVideo = videoObjects[0];

        nextVideo.src = vidSources[nextActiveVideo];
        nextVideo.pause();
    };

    video.onended = function(e)
    {
        this.style.display = 'none';
        nextVideo.style.display = 'block';
        nextVideo.play();
    };
}

function playpause() {
	    if (videoObjects[0].paused == false) {
		    videoObjects[0].pause();
	    }
	    else if (videoObjects[1].paused == false) {
		    videoObjects[1].pause();
	    }
		else if (videoObjects[0].style.display == 'block' && videoObjects[0].paused == true) {
		    videoObjects[0].play();
	    }
		else if (videoObjects[1].style.display == 'block' && videoObjects[1].paused == true) {
		    videoObjects[1].play();
	    }
		else if (!videoObjects[0].style.display && videoObjects[1].style.display == 'none') {
		    videoObjects[0].play();
	    }
}
function looper() {
	    if (videoObjects[0].loop == false) {
		    videoObjects[0].loop=true;
	    }
	    else if (videoObjects[0].loop == true) {
		    videoObjects[0].loop=false;
  	    }
	    if (videoObjects[1].loop == false) {
		    videoObjects[1].loop=true;
	    }
	    else if (videoObjects[1].loop == true) {
		    videoObjects[1].loop=false;
            }
}

function helpText() {
	var vidCount = vidSourcesMaster.filter(element => element.includes('webm')); 
	var vidCount = vidCount.length;
	var helpBox = document.getElementById("helpBox");
	if (!helpBox.innerHTML) {
		helpBox.innerHTML = vidCount+" takes from films and television series where a door is seen closing or opening. The clip begins and ends where the take begins and ends. Clicking one of the mode buttons will shuffle and play all clips, all clips from films, or all clips from tv series.<br><br>For the pusposes of filtering, clips from films are named in the format title_director_year_clipnumber.webm (e.g. wiseblood_huston_1979_14.webm), and clips from tv series are mostly in the format seriestitle_seasonepisode_clipnumber.webm (e.g. twinpeaks_s02e22_10.webm). Some clips from tv series include year and director.<br><br>By default, multiple filters, separated by space or comma, will return clips from filters 1 AND 2 AND 3 (e.g. \"lynch 2001\" will return only clips from anything directed by David Lynch in 2001). Either/Or filtering can be executed by using the \"OR\" keyword (e.g. \"cronenberg OR 1983\" will return clips from films directed by David Cronenberg, as well as clips from films released in 1983).<br><br>You can also filter out clips by using the \"NOT\" keyword (e.g. \"NOT xfiles\" will return all clips except those from The X-Files).</p>"
	}
	else if (helpBox.innerHTML) {
	    helpBox.innerHTML = "";
	}
	};
const btn= document.getElementById("btn");

btn.addEventListener('click', function(){
  var name = document.getElementById("filter").value;
name = name.split(/[\s,]+/);
	if (name.length == 1) {
		vidSources = vidSourcesMaster.filter(element => element.split('/').pop(-1).includes(name[0]));
	}
	if (name.length == 2 && name[0] == "NOT") {
		vidSources = vidSourcesMaster.filter(element => !element.split('/').pop(-1).includes(name[1]));
	}
	else if (name.length == 2) {
		vidSources = vidSourcesMaster.filter(element => element.split('/').pop(-1).includes(name[0]) && element.split('/').pop(-1).includes(name[1]));
	}
	else if (name.length == 3 && name[1] == "OR") {
		vidSources = vidSourcesMaster.filter(element => element.split('/').pop(-1).includes(name[0]) || element.split('/').pop(-1).includes(name[2]));
	}
	else if (name.length == 3 && name[1] == "NOT") {
		vidSources = vidSourcesMaster.filter(element => element.split('/').pop(-1).includes(name[0]) && !element.split('/').pop(-1).includes(name[2]));
	}
	else if (name.length == 3) {
		vidSources = vidSourcesMaster.filter(element => element.split('/').pop(-1).includes(name[0]) && element.split('/').pop(-1).includes(name[1]) && element.split('/').pop(-1).includes(name[2]));
	}
	else if (name.length == 4 && name[1] == "OR") {
		vidSources = vidSourcesMaster.filter(element => element.split('/').pop(-1).includes(name[0]) || element.split('/').pop(-1).includes(name[2]) && element.split('/').pop(-1).includes(name[3]));
	}
	else if (name.length == 4 && name[2] == "OR") {
		vidSources = vidSourcesMaster.filter(element => element.split('/').pop(-1).includes(name[0]) && element.split('/').pop(-1).includes(name[1]) || element.split('/').pop(-1).includes(name[3]));
	}
	else if (name.length == 4) {
		vidSources = vidSourcesMaster.filter(element => element.split('/').pop(-1).includes(name[0]) && element.split('/').pop(-1).includes(name[1]) && element.split('/').pop(-1).includes(name[2]) && element.split('/').pop(-1).includes(name[3]));
	}
	else if (name.length == 5 && name[1] == "OR" && name[3] == "OR") {
		vidSources = vidSourcesMaster.filter(element => element.split('/').pop(-1).includes(name[0]) || element.split('/').pop(-1).includes(name[2]) || element.split('/').pop(-1).includes(name[4]));
	}
	
	shuffle(vidSources);
	if (videoObjects[0].style.display =='block') {
		videoObjects[0].src=vidSources[0];
		videoObjects[0].load();
	}
	else if (videoObjects[1].style.display =='block') {
		videoObjects[1].src=vidSources[0];
		videoObjects[1].load();
		videoObjects[1].play();
	} 
	else if (!videoObjects[0].style.display && videoObjects[1].style.display == 'none') {
		videoObjects[0].src=vidSources[0];
		videoObjects[0].load();
	};
});
var input = document.getElementById("filter");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
