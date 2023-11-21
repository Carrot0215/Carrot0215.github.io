function getDatetime()
{
	var d=new Date();   
	var year=d.getFullYear(); //获取年
	var month=d.getMonth()+1; //获取月
	var day=d.getDate(); //获取日
	var hour=d.getHours(); //获取小时
	var minute=d.getMinutes(); //获取分钟
	var second=d.getSeconds(); //获取秒
	
	if(Number(month)<10) month="0"+month;
	if(Number(day)<10) day="0"+days;
	if(Number(hour)<10) hour="0"+hour;
	if(Number(minute)<10) minute="0"+minute;
	if(Number(second)<10) second="0"+second;
	
	var datetime=year+" 年 "+month+" 月 "+day+" 日 "+"<br/>"+hour+" : "+minute+" : "+second;
	document.getElementById("datetime").innerHTML=datetime;
}

setInterval(getDatetime,1000);