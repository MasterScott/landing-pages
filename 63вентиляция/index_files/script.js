$(document).ready(function() {
	var myValidateRules = {
		rules:{
			name:{
				required: true
			},
			phone:{
				required: true
			}
		}
	}

	for(var i = 1; i <= 4; i++) {
		$("#orderform"+i).validate(myValidateRules);
	}
	
    $.validator.messages.required = "Заполните поле!";
    
	$(".phoneform").inputmask("+7(999)999-99-99", {
		"clearIncomplete": true
	});//маска
	
});