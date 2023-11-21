function playpause()
{
	var pp=document.getElementById("playpause");
	if(pp.src.match("play")) {
		pp.src="img/pause.png";
	} else {
		pp.src="img/play.png";
	}
}