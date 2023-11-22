var musicplayer = document.getElementById('musicplayer');
var songtitle = document.getElementById('songtitle');
var singer = document.getElementById('singer');
var album = document.getElementById('album');

var playbar = document.getElementById('playbar');
var process = document.getElementById('playbarnow');
var processicon = document.getElementById('playanchor');
var currenttime = document.getElementById('currenttime');
var totaltime = document.getElementById('totaltime');

var previous = document.getElementById('previous');
var pp=document.getElementById('playpause');
var next = document.getElementById('next');

var musicId = 0;
var musicfiles = ["陈奕迅 - 尘大师 Lightly - CHIN UP!", "陈奕迅 - 人啊人 Homo Sapiens - CHIN UP!", "陈奕迅 - 焦焦焦 Hold On A Sec - CHIN UP!", "陈奕迅 - 社交恐惧癌 Don’t Mind Me - CHIN UP!", "陈奕迅 - 空城记 Something Missing - CHIN UP!", "陈奕迅 - 是但求其爱 The Search - CHIN UP!", "陈奕迅 - 盲婚哑嫁 The Code - CHIN UP!", "陈奕迅 - 致明日的舞 A Dance For Tomorrow - CHIN UP!"];

function playpause()
{
	if(pp.src.match('play')) {
		pp.src = "img/pause.png";
		musicplayer.play();
	} else {
		pp.src = "img/play.png";
		musicplayer.pause();
	}
}

function transTime(value)
{
    var time = "";
    var h = parseInt(value / 3600);
    value %= 3600;
    var m = parseInt(value / 60);
    var s = parseInt(value % 60);
    if (h > 0) {
        time = formatTime(h + ":" + m + ":" + s);
    } else {
        time = formatTime(m + ":" + s);
    }

    return time;
}

function formatTime(value)
{
    var time = "";
    var s = value.split(':');
    var i = 0;
    for (; i < s.length - 1; i++) {
        time += s[i].length == 1 ? ("0" + s[i]) : s[i];
        time += ":";
    }
    time += s[i].length == 1 ? ("0" + s[i]) : s[i];

    return time;
}

function initMusic()
{
    musicplayer.src = "music/"+musicfiles[musicId]+".mp3";
    musicplayer.load();
    musicplayer.ondurationchange = function () {
        songtitle.innerText = musicfiles[musicId].split(" - ")[1];
        singer.innerText = musicfiles[musicId].split(" - ")[0];
		album.innerText = musicfiles[musicId].split(" - ")[2];
        totaltime.innerText = transTime(musicplayer.duration);
        music.currentTime = 0;
    }
}
initMusic();

function initAndPlay()
{
    initMusic();
    musicplayer.play();
}

musicplayer.addEventListener('timeupdate', updateProcess);
function updateProcess() {
    var percentage = musicplayer.currentTime / musicplayer.duration;
	var playbarwidth = getComputedStyle(playbar).width;
	playbarwidth = playbarwidth.substring(0, playbarwidth.length - 2);
    process.style.width = percentage * 100 + '%';
	processicon.style.left = -15 + percentage * Number(playbarwidth) + 'px';
    currenttime.innerText = transTime(musicplayer.currentTime);
}

previous.addEventListener('click', function (event) {
    musicId = musicId - 1;
    if (musicId < 0) {
        musicId = musicfiles.length - 1;
    }
    initAndPlay();
});

next.addEventListener('click', function (event) {
    musicId = musicId + 1;
    if (musicId > musicfiles.length - 1) {
        musicId = 0;
    }
    initAndPlay();
});