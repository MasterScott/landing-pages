$(function() {

	// when the Submit button is clicked...
	$("#ajax-contact-form").submit(function() {
		var str = $(this).serialize();
		//Error Count
		var error_count=0;
		
		//Regex Strings
		var str_regex = /phone=$/;
		
			//Test Username
			if(str_regex.test(str)) {
				$('#inp').popover('show');
				error_count += 1;
			}
			//No Errors?
			if(error_count === 0) {
				$.ajax({
				type: "POST",
				url: "mail.php",
				data: str,
				});	
			  $("#fields").hide();
			  result = '<p style="padding:50px 8px;font-size:23px; line-height:1.2">Спасибо, Ваша<br>заявка принята.<br>Наш менеджер свяжется с Вами<br>в течении<br>15 минут</p>';
			  $('#note').html(result);
			  yaCounter22377703.reachGoal('targetforma');
			}
			else {
				$(document.getElementsByClassName('clearble')).val('');	
			}
			
		return false;
	});
	
});

$(function() {

	// when the Submit button is clicked...
	$("#ajax-contact-form1").submit(function() {
		var str = $(this).serialize();
		//Error Count
		var error_count=0;
		
		//Regex Strings
		var str_regex = /phone=$/;
		
			//Test Username
			if(str_regex.test(str)) {
				$('#inp1').popover('show');
				error_count += 1;
			}
			//No Errors?
			if(error_count === 0) {
				$.ajax({
				type: "POST",
				url: "mail.php",
				data: str,
				});	
			  $("#fields1").hide();
			  result = '<p style="padding:50px 8px;font-size:23px; line-height:1.2">Спасибо, Ваша<br>заявка принята.<br>Наш менеджер свяжется с Вами<br>в течении<br>15 минут</p>';
			  $('#note1').html(result);
			  yaCounter22377703.reachGoal('targetforma');
			}
			else {
				$(document.getElementsByClassName('clearble')).val('');	
			}
			
		return false;
	});
	
});

$(function() {

	// when the Submit button is clicked...
	$("#ajax-contact-form2").submit(function() {
		var str = $(this).serialize();
		//Error Count
		var error_count=0;
		
		//Regex Strings
		var str_regex = /phone=$/;
		
			//Test Username
			if(str_regex.test(str)) {
				$('#inp2').popover('show');
				error_count += 1;
			}
			//No Errors?
			if(error_count === 0) {
				$.ajax({
				type: "POST",
				url: "mail.php",
				data: str,
				});	
			  $("#fields2").hide();
			  result = '<p style="padding:50px 8px;font-size:23px; line-height:1.2">Спасибо, Ваша<br>заявка принята.<br>Наш менеджер свяжется с Вами<br>в течении<br>15 минут</p>';
			  $('#note2').html(result);
			  yaCounter22377703.reachGoal('targetforma');
			}
			else {
				$(document.getElementsByClassName('clearble')).val('');	
			}
			
		return false;
	});
	
});
$(function() {

	// when the Submit button is clicked...
	$("#ajax-contact-form3").submit(function() {
		var str = $(this).serialize();
		//Error Count
		var error_count=0;
		
		//Regex Strings
		var str_regex = /phone=$/;
		
			//Test Username
			if(str_regex.test(str)) {
				$('#inp3').popover('show');
				error_count += 1;
			}
			//No Errors?
			if(error_count === 0) {
				$.ajax({
				type: "POST",
				url: "mail.php",
				data: str,
				});	
			  $("#fields3").hide();
			  result = '<p style="padding:50px 8px;font-size:23px; line-height:1.2">Спасибо, Ваша<br>заявка принята.<br>Наш менеджер свяжется с Вами<br>в течении<br>15 минут</p>';
			  $('#note3').html(result);
			  yaCounter22377703.reachGoal('targetforma');
			}
			else {
				$(document.getElementsByClassName('clearble')).val('');	
			}
			
		return false;
	});
	
});