$(document).ready(function(){

	var h = new Date();
	var time = h.getHours() + 1;
	if (time === 24) {
		time = '00';
	}
	if (time < 10) {
		time = "0" + time;
	}
	time += ':00';
    $('.block_popup_sale .time').append(time);

});