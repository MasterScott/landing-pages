var now = new Date();
var timeend = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6 - now.getDay());

today = new Date();
today = Math.floor((timeend-today)/1000);
tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
thour=today%24; today=Math.floor(today/24);
$(function(){
$('.c-block:eq(0) .bl-inner span').text(today);
$('.c-block:eq(1) .bl-inner span').text(thour);
$('.c-block:eq(2) .bl-inner span').text(tmin);
$('.c-block:eq(3) .bl-inner span').text(tsec);
});