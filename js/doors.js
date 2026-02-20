function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Function to skip to next video when there's an error
function skipToNextVideo(currentVideo) {
    console.log('Video error detected, skipping to next video');

    playbackIndex = (playbackIndex + 1) % vidSources.length;
    if (playbackIndex === 0 && !shuffledOnce) {
        shuffledOnce = true;
        shuffle(vidSources);
        playbackIndex = 0;
    }

    var nextVideo = currentVideo.inx == 0 ? videoObjects[1] : videoObjects[0];
    currentVideo.style.display = 'none';
    nextVideo.style.display = 'block';
    nextVideo.src = vidSources[playbackIndex];
    nextVideo.load();
    nextVideo.play();
}

var videoContainer = document.getElementById('videoContainer'),
    output = document.getElementById('output'),
    nextVideo,
    videoObjects = [
        document.createElement('video'),
        document.createElement('video')
    ],

    vidSourcesMaster = doors_12monkeyss01.concat(doors_12monkeyss02, doors_12monkeyss03, doors_12monkeyss04, doors_continuums01, doors_continuums02, doors_continuums03, doors_continuums04, doors_ds9, doors_eerieindiana, doors_fringes01, doors_fringes02, doors_fringes03, doors_fringes04, doors_fringes05, doors_harshrealm, doors_kolchak, doors_maxheadrooms01, doors_maxheadrooms02, doors_nowhereman, doors_outerranges01, doors_outerranges02, doors_sanctuarys01, doors_sg1s01, doors_sg1s02, doors_sg1s03, doors_sg1s04, doors_sg1s05, doors_sg1s06, doors_sg1s07, doors_sg1s08, doors_sg1s09, doors_sg1s10, doors_stargateatlantiss01, doors_stargateatlantiss02, doors_stargateatlantiss03, doors_stargateatlantiss04, doors_stargateatlantiss05, doors_mlms01, doors_mlms02, doors_mlms03, doors_ontheair, doors_spaceaboveandbeyond, doors_theinvaderss01, doors_thelonegunmen, doors_theprisoner, doors_tols01, doors_tols02, doors_tols03, doors_tols04, doors_tols05, doors_tols06, doors_tols07, doors_tps01, doors_tps02, doors_tps03, doors_travelerss01, doors_travelerss02, doors_travelerss03, doors_txfs01, doors_txfs02, doors_txfs03, doors_txfs04, doors_txfs05, doors_txfs06, doors_txfs07, doors_txfs08, doors_txfs09, doors_txfs10, doors_txfs11);

// Playback state
let playbackIndex = 0;
let shuffledOnce = false;
let originalFilterLength = 0;

function allVids() { vidSources = vidSourcesMaster; newMode(); }
function continuum() { vidSources = doors_continuums01.concat(doors_continuums02, doors_continuums03, doors_continuums04); newMode(); }
function eerieindiana() { vidSources = doors_eerieindiana; newMode(); }
function fringe() { vidSources = doors_fringes01.concat(doors_fringes02, doors_fringes03, doors_fringes04, doors_fringes05); newMode(); }
function kolchak() { vidSources = doors_kolchak; newMode(); }
function millennium() { vidSources = doors_mlms01.concat(doors_mlms02, doors_mlms03); newMode(); }
function nowhereman() { vidSources = doors_nowhereman; newMode(); }
function ontheair() { vidSources = doors_ontheair; newMode(); }
function spaceaboveandbeyond() { vidSources = doors_spaceaboveandbeyond; newMode(); }
function theinvaders() { vidSources = doors_theinvaderss01.concat(doors_theinvaderss02); newMode(); }
function thelonegunmen() { vidSources = doors_thelonegunmen; newMode(); }
function theprisoner() { vidSources = doors_theprisoner; newMode(); }
function thexfiles() { vidSources = doors_txfs01.concat(doors_txfs02, doors_txfs03, doors_txfs04, doors_txfs05, doors_txfs06, doors_txfs07, doors_txfs08, doors_txfs09, doors_txfs10, doors_txfs11); newMode(); }
function travelers() { vidSources = doors_travelerss01.concat(doors_travelerss02, doors_travelerss03); newMode(); }
function twinpeaks() { vidSources = doors_tps01.concat(doors_tps02, doors_tps03); newMode(); }
function twelvemonkeys() { vidSources = doors_12monkeyss01.concat(doors_12monkeyss02, doors_12monkeyss03, doors_12monkeyss04); newMode(); }
function outerrange() { vidSources = doors_outerranges01.concat(doors_outerranges02); newMode(); }
function stargateatlantis() { vidSources = doors_stargateatlantiss01.concat(doors_stargateatlantiss02, doors_stargateatlantiss03, doors_stargateatlantiss04, doors_stargateatlantiss05); newMode(); }
function stargatesg1() { vidSources = doors_sg1s01.concat(doors_sg1s02, doors_sg1s03, doors_sg1s04, doors_sg1s05, doors_sg1s06, doors_sg1s07, doors_sg1s08, doors_sg1s09, doors_sg1s10); newMode(); }
function startrekdeepspacenine() { vidSources = doors_ds9; newMode(); }
function theouterlimits() { vidSources = doors_tols01.concat(doors_tols02, doors_tols03, doors_tols04, doors_tols05, doors_tols06, doors_tols07); newMode(); }

function tv() {
    vidSources = doors_12monkeyss01.concat(doors_12monkeyss02, doors_12monkeyss03, doors_12monkeyss04, doors_continuums01, doors_continuums02, doors_continuums03, doors_continuums04, doors_ds9, doors_eerieindiana, doors_fringes01, doors_fringes02, doors_fringes03, doors_fringes04, doors_fringes05, doors_harshrealm, doors_kolchak, doors_mlms01, doors_mlms02, doors_mlms03, doors_maxheadrooms01, doors_maxheadrooms02, doors_nowhereman, doors_ontheair, doors_outerranges01, doors_outerranges02, doors_sanctuarys01, doors_sg1s01, doors_sg1s02, doors_sg1s03, doors_sg1s04, doors_sg1s05, doors_sg1s06, doors_sg1s07, doors_sg1s08, doors_sg1s09, doors_sg1s10, doors_spaceaboveandbeyond, doors_stargateatlantiss01, doors_stargateatlantiss02, doors_stargateatlantiss03, doors_stargateatlantiss04, doors_stargateatlantiss05, doors_theinvaderss01, doors_thelonegunmen, doors_theprisoner, doors_tols01, doors_tols02, doors_tols03, doors_tols04, doors_tols05, doors_tols06, doors_tols07, doors_tps01, doors_tps02, doors_tps03, doors_travelerss01, doors_travelerss02, doors_travelerss03, doors_txfs01, doors_txfs02, doors_txfs03, doors_txfs04, doors_txfs05, doors_txfs06, doors_txfs07, doors_txfs08, doors_txfs09, doors_txfs10, doors_txfs11);
    newMode();
}
function lessthanfive() { vidSources = doors_lessthanfive; newMode(); }

function newMode() {
    shuffle(vidSources);
    playbackIndex = 0;
    shuffledOnce = false;
    originalFilterLength = vidSources.length;

    if (videoObjects[0].style.display == 'block') {
        videoObjects[0].src = vidSources[0];
        videoObjects[0].load();
    } else if (videoObjects[1].style.display == 'block') {
        videoObjects[1].src = vidSources[0];
        videoObjects[1].load();
        videoObjects[1].play();
    } else if (!videoObjects[0].style.display && videoObjects[1].style.display == 'none') {
        videoObjects[0].src = vidSources[0];
        videoObjects[0].load();
    }
}

tv();

// Initialize playback state
playbackIndex = 0;
shuffledOnce = false;
originalFilterLength = vidSources.length;

videoObjects[0].inx = 0;
videoObjects[1].inx = 1;

initVideoElement(videoObjects[0]);
initVideoElement(videoObjects[1]);

videoObjects[0].autoplay = true;
videoObjects[0].src = vidSources[playbackIndex];
videoContainer.appendChild(videoObjects[0]);

videoObjects[1].style.display = 'none';
videoContainer.appendChild(videoObjects[1]);

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 76 && videoObjects[0].loop == false && document.activeElement.id !== 'filter') {
        videoObjects[0].loop = true;
    } else if (event.keyCode == 76 && videoObjects[0].loop == true && document.activeElement.id !== 'filter') {
        videoObjects[0].loop = false;
    }
    if (event.keyCode == 76 && videoObjects[1].loop == false && document.activeElement.id !== 'filter') {
        videoObjects[1].loop = true;
    } else if (event.keyCode == 76 && videoObjects[1].loop == true && document.activeElement.id !== 'filter') {
        videoObjects[1].loop = false;
    }
    if (event.keyCode == 80 && videoObjects[0].paused == false && document.activeElement.id !== 'filter') {
        videoObjects[0].pause();
    } else if (event.keyCode == 80 && videoObjects[1].paused == false && document.activeElement.id !== 'filter') {
        videoObjects[1].pause();
    } else if (event.keyCode == 80 && videoObjects[0].style.display == 'block' && videoObjects[0].paused == true && document.activeElement.id !== 'filter') {
        videoObjects[0].play();
    } else if (event.keyCode == 80 && videoObjects[1].style.display == 'block' && videoObjects[1].paused == true && document.activeElement.id !== 'filter') {
        videoObjects[1].play();
    } else if (event.keyCode == 80 && !videoObjects[0].style.display && videoObjects[1].style.display == 'none' && document.activeElement.id !== 'filter') {
        videoObjects[0].play();
    }
});

function initVideoElement(video) {
    video.playsinline = true;
    video.muted = false;
    video.preload = 'auto';

    video.onerror = function(e) {
        console.log('Video load error:', e);
        skipToNextVideo(this);
    };

    video.onloadstart = function(e) {
        var loadTimeout = setTimeout(() => {
            if (this.readyState === 0) {
                console.log('Video loading timeout, skipping to next');
                skipToNextVideo(this);
            }
        }, 5000);
        this.onloadeddata = function() {
            clearTimeout(loadTimeout);
        };
    };

    video.onstalled = function(e) {
        console.log('Video stalled, attempting to skip to next');
        setTimeout(() => {
            if (this.readyState < 2) {
                skipToNextVideo(this);
            }
        }, 3000);
    };

    video.onplaying = function(e) {
        playbackIndex = (playbackIndex + 1) % vidSources.length;

        if (!shuffledOnce && playbackIndex === 0) {
            shuffledOnce = true;
            shuffle(vidSources);
            playbackIndex = 0;
        }

        const nextVideo = this.inx === 0 ? videoObjects[1] : videoObjects[0];
        nextVideo.src = vidSources[playbackIndex];
        nextVideo.pause();
    };

    video.onended = function(e) {
        this.style.display = 'none';
        const nextVideo = this.inx === 0 ? videoObjects[1] : videoObjects[0];
        nextVideo.style.display = 'block';
        nextVideo.play();
    };
}

function playpause() {
    if (videoObjects[0].paused == false) {
        videoObjects[0].pause();
    } else if (videoObjects[1].paused == false) {
        videoObjects[1].pause();
    } else if (videoObjects[0].style.display == 'block' && videoObjects[0].paused == true) {
        videoObjects[0].play();
    } else if (videoObjects[1].style.display == 'block' && videoObjects[1].paused == true) {
        videoObjects[1].play();
    } else if (!videoObjects[0].style.display && videoObjects[1].style.display == 'none') {
        videoObjects[0].play();
    }
}

function looper() {
    if (videoObjects[0].loop == false) {
        videoObjects[0].loop = true;
    } else if (videoObjects[0].loop == true) {
        videoObjects[0].loop = false;
    }
    if (videoObjects[1].loop == false) {
        videoObjects[1].loop = true;
    } else if (videoObjects[1].loop == true) {
        videoObjects[1].loop = false;
    }
}

function helpText() {
    var vidCount = vidSourcesMaster.filter(element => element.includes('webm')).length;
    var helpBox = document.getElementById("helpBox");
    if (!helpBox.innerHTML) {
        helpBox.innerHTML = vidCount + " takes from films and television series where a door is seen closing or opening. The clip begins and ends where the take begins and ends. Clicking one of the mode buttons will shuffle and play all clips, all clips from films, or all clips from tv series.<br><br>For the purposes of filtering, clips from films are named in the format title_director_year_clipnumber.webm (e.g. wiseblood_huston_1979_14.webm), and clips from tv series are mostly in the format seriestitle_seasonepisode_clipnumber.webm (e.g. twinpeaks_s02e22_10.webm). Some clips from tv series include year and director.<br><br>By default, multiple filters, separated by space or comma, will return clips from filters 1 AND 2 AND 3 (e.g. \"lynch 2001\" will return only clips from anything directed by David Lynch in 2001). Either/Or filtering can be executed by using the \"OR\" keyword (e.g. \"cronenberg OR 1983\" will return clips from films directed by David Cronenberg, as well as clips from films released in 1983).<br><br>You can also filter out clips by using the \"NOT\" keyword (e.g. \"NOT xfiles\" will return all clips except those from The X-Files).</p>";
    } else {
        helpBox.innerHTML = "";
    }
}

const btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    const name = document.getElementById("filter").value.trim();
    const messageElement = document.getElementById("message");
    if (messageElement) messageElement.textContent = '';

    let filtered = [...vidSourcesMaster];

    if (name) {
        const terms = name.split(/[\s,]+/).filter(t => t);

        if (terms.length === 1) {
            filtered = filtered.filter(el => el.split('/').pop().includes(terms[0]));
        } else if (terms.length === 2 && terms[0] === "NOT") {
            filtered = filtered.filter(el => !el.split('/').pop().includes(terms[1]));
        } else if (terms.length === 2) {
            filtered = filtered.filter(el =>
                el.split('/').pop().includes(terms[0]) &&
                el.split('/').pop().includes(terms[1])
            );
        } else if (terms.length === 3 && terms[1] === "OR") {
            filtered = filtered.filter(el =>
                el.split('/').pop().includes(terms[0]) ||
                el.split('/').pop().includes(terms[2])
            );
        } else if (terms.length === 3 && terms[1] === "NOT") {
            filtered = filtered.filter(el =>
                el.split('/').pop().includes(terms[0]) &&
                !el.split('/').pop().includes(terms[2])
            );
        } else if (terms.length === 3) {
            filtered = filtered.filter(el =>
                el.split('/').pop().includes(terms[0]) &&
                el.split('/').pop().includes(terms[1]) &&
                el.split('/').pop().includes(terms[2])
            );
        } else if (terms.length === 4 && terms[1] === "OR") {
            filtered = filtered.filter(el =>
                el.split('/').pop().includes(terms[0]) ||
                (el.split('/').pop().includes(terms[2]) &&
                 el.split('/').pop().includes(terms[3]))
            );
        } else if (terms.length === 4 && terms[2] === "OR") {
            filtered = filtered.filter(el =>
                (el.split('/').pop().includes(terms[0]) &&
                 el.split('/').pop().includes(terms[1])) ||
                el.split('/').pop().includes(terms[3])
            );
        } else if (terms.length === 4) {
            filtered = filtered.filter(el =>
                el.split('/').pop().includes(terms[0]) &&
                el.split('/').pop().includes(terms[1]) &&
                el.split('/').pop().includes(terms[2]) &&
                el.split('/').pop().includes(terms[3])
            );
        } else if (terms.length === 5 && terms[1] === "OR" && terms[3] === "OR") {
            filtered = filtered.filter(el =>
                el.split('/').pop().includes(terms[0]) ||
                el.split('/').pop().includes(terms[2]) ||
                el.split('/').pop().includes(terms[4])
            );
        }
    }

    if (filtered.length === 0) {
        if (messageElement) {
            messageElement.textContent = 'Nothing found, returning to default';
            setTimeout(() => messageElement.textContent = '', 3000);
        }
        filtered = [...vidSourcesMaster];
    }

    // Preserve unplayed clips when changing filter
    if (vidSources.length > 0 && originalFilterLength > 0) {
        const played = new Set();
        for (let i = 0; i < playbackIndex; i++) {
            played.add(vidSources[i]);
        }
        filtered = filtered.filter(url => !played.has(url));
    }

    shuffle(filtered);
    vidSources = filtered;
    originalFilterLength = vidSources.length;
    playbackIndex = 0;
    shuffledOnce = false;

    updateVideoSource();
});

function updateVideoSource() {
    if (vidSources.length === 0) return;

    const visible = videoObjects[0].style.display === 'block' ? videoObjects[0]
                  : videoObjects[1].style.display === 'block' ? videoObjects[1]
                  : videoObjects[0];

    visible.src = vidSources[playbackIndex];
    visible.load();

    if (!visible.paused) visible.play();
}

var input = document.getElementById("filter");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});
