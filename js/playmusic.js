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
var musicfiles = ["浮生恋"];

var lyrics = [document.getElementById('lyric_1'), document.getElementById('lyric_2'), document.getElementById('lyric_3'), document.getElementById('lyric_4'), document.getElementById('lyric_5'), document.getElementById('lyric_6'), document.getElementById('lyric_7'), document.getElementById('lyric_8'), document.getElementById('lyric_9'), document.getElementById('lyric_10'), document.getElementById('lyric_11'), document.getElementById('lyric_12'), document.getElementById('lyric_13'), document.getElementById('lyric_14'), document.getElementById('lyric_15'), document.getElementById('lyric_16'), document.getElementById('lyric_17'), document.getElementById('lyric_18'), document.getElementById('lyric_19')];

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
        totaltime.innerText = transTime(musicplayer.duration);
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

function animationLyric() {
	if (currenttime.innerHTML == '00:23') {
		lyrics[0].style.fontSize = "20px";
		lyrics[0].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '00:26') {
		lyrics[0].style.fontSize = "16px";
		lyrics[0].style.fontFamily = "仿宋";
		lyrics[1].style.fontSize = "20px";
		lyrics[1].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '00:30') {
		lyrics[1].style.fontSize = "16px";
		lyrics[1].style.fontFamily = "仿宋";
		lyrics[2].style.fontSize = "20px";
		lyrics[2].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '00:37') {
		lyrics[2].style.fontSize = "16px";
		lyrics[2].style.fontFamily = "仿宋";
		lyrics[3].style.fontSize = "20px";
		lyrics[3].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '00:40') {
		lyrics[3].style.fontSize = "16px";
		lyrics[3].style.fontFamily = "仿宋";
		lyrics[4].style.fontSize = "20px";
		lyrics[4].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '00:44') {
		lyrics[4].style.fontSize = "16px";
		lyrics[4].style.fontFamily = "仿宋";
		lyrics[5].style.fontSize = "20px";
		lyrics[5].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '00:51') {
		lyrics[5].style.fontSize = "16px";
		lyrics[5].style.fontFamily = "仿宋";
	}
	if (currenttime.innerHTML == '01:18') {
		lyrics[6].style.fontSize = "20px";
		lyrics[6].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '01:21') {
		lyrics[6].style.fontSize = "16px";
		lyrics[6].style.fontFamily = "仿宋";
		lyrics[7].style.fontSize = "20px";
		lyrics[7].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '01:25') {
		lyrics[7].style.fontSize = "16px";
		lyrics[7].style.fontFamily = "仿宋";
		lyrics[8].style.fontSize = "20px";
		lyrics[8].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '01:32') {
		lyrics[8].style.fontSize = "16px";
		lyrics[8].style.fontFamily = "仿宋";
		lyrics[9].style.fontSize = "20px";
		lyrics[9].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '01:35') {
		lyrics[9].style.fontSize = "16px";
		lyrics[9].style.fontFamily = "仿宋";
		lyrics[10].style.fontSize = "20px";
		lyrics[10].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '01:39') {
		lyrics[10].style.fontSize = "16px";
		lyrics[10].style.fontFamily = "仿宋";
		lyrics[11].style.fontSize = "20px";
		lyrics[11].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '01:46') {
		lyrics[11].style.fontSize = "16px";
		lyrics[11].style.fontFamily = "仿宋";
	}
	if (currenttime.innerHTML == '01:53') {
		lyrics[12].style.fontSize = "20px";
		lyrics[12].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '01:59') {
		lyrics[12].style.fontSize = "16px";
		lyrics[12].style.fontFamily = "仿宋";
		lyrics[13].style.fontSize = "20px";
		lyrics[13].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '02:03') {
		lyrics[13].style.fontSize = "16px";
		lyrics[13].style.fontFamily = "仿宋";
		lyrics[14].style.fontSize = "20px";
		lyrics[14].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '02:06') {
		lyrics[14].style.fontSize = "16px";
		lyrics[14].style.fontFamily = "仿宋";
		lyrics[15].style.fontSize = "20px";
		lyrics[15].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '02:07') {
		lyrics[15].style.fontSize = "16px";
		lyrics[15].style.fontFamily = "仿宋";
		lyrics[16].style.fontSize = "20px";
		lyrics[16].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '02:12') {
		lyrics[16].style.fontSize = "16px";
		lyrics[16].style.fontFamily = "仿宋";
		lyrics[17].style.fontSize = "20px";
		lyrics[17].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '02:14') {
		lyrics[17].style.fontSize = "16px";
		lyrics[17].style.fontFamily = "仿宋";
		lyrics[18].style.fontSize = "20px";
		lyrics[18].style.fontFamily = "黑体";
	}
	if (currenttime.innerHTML == '02:22') {
		lyrics[18].style.fontSize = "16px";
		lyrics[18].style.fontFamily = "仿宋";
	}
};
setInterval(animationLyric,100);