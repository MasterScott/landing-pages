﻿//Скрипт обратного отсчета времени CountDown

var eventstr = "Cожалеем, но по прежним ценам сделать заказ уже нельзя"; //Эта строка выводиться по окончанию отсчета
var countdownid = document.getElementById("countdown"); //ID элемента в который выводится время

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

function CountDowndmn(yr,m,d){
	cdyear=yr;
	cdmonth=m;
	cdday=d;
	var today=new Date();
	var todayy=today.getYear();
	if (todayy < 1000)
	todayy+=1900;
	var todaym=today.getMonth();
	var todayd=today.getDate();
	var todayh=today.getHours();
	var todaymin=today.getMinutes();
	var todaysec=today.getSeconds();
	var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec;
	futurestring=montharray[m-1]+" "+d+", "+yr
	dd=Date.parse(futurestring)-Date.parse(todaystring);
	dday=Math.floor(dd/(60*60*1000*24)*1);
	dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1);
	dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
	dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
	if(dday<=0&&dhour<=0&&dmin<=0&&dsec<=1){
//	countdownid.innerHTML=eventstr;
return
}
else {
	var lastchar = ""+dsec;	lastchar = lastchar.substring(lastchar.length-1,lastchar.length);
	var dsecstr = "секунд";
	if (lastchar=="1") { dsecstr = "секунда"; }
	if ((lastchar=="2")||(lastchar=="3")||(lastchar=="4")) { dsecstr = "секунды"; }
	
	lastchar = ""+dmin;	lastchar = lastchar.substring(lastchar.length-1,lastchar.length);
	var dminstr    = "минут";
	if (lastchar=="1") { dminstr = "минута"; }
	if ((lastchar=="2")||(lastchar=="3")||(lastchar=="4")) { dminstr = "минуты"; }

	lastchar = ""+dhour;	lastchar = lastchar.substring(lastchar.length-1,lastchar.length);
	var dhourstr   = "часов";
	if (lastchar=="1") { dhourstr = "час"; }
	if ((lastchar=="2")||(lastchar=="3")||(lastchar=="4")) { dhourstr = "часа"; }

	lastchar = ""+dday;	lastchar = lastchar.substring(lastchar.length-1,lastchar.length);
	var ddaystr = "дней";
	if (lastchar=="1") { ddaystr = "день"; }
	if ((lastchar=="2")||(lastchar=="3")||(lastchar=="4")) { ddaystr = "дня"; }

	countdownid.innerHTML="ДО НАЧАЛА ТРЕНИНГА ОСТАЛОСЬ: <br> "+dday+ " " +ddaystr+",  "+dhour+" "+dhourstr+", "+dmin+" "+dminstr+" и "+dsec+" "+dsecstr;
	
}
setTimeout("CountDowndmn(cdyear,cdmonth,cdday)",1000);
}

CountDowndmn(2013,08,15); //Дата отсчета: год, месяц, число