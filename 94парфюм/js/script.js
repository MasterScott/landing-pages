$(document).ready(function() {
	CBS();// add class to html

	/* Cufon */
	Cufon.replace('#telephone span, .make-up-title-sub, .make-up-action, #make-up .callback .callback-title, .features .feature, .callback span, .review-text, .service-price-text, .service-text, .services-all span, .services-all li, #footer .contact', {
		fontFamily: 'PT Serif'
	});
    
	Cufon.replace('#logo a, #telephone, .make-up-title, .features .feature span, .callback-title-1, .callback-title-2, .reviews-title, .services-title, .service-title, .service-price-title, #footer .quote, #callback-window .callback-title', {
		fontFamily: 'Hagin Caps Medium'
	});
    
	Cufon.replace('.btn, #counter span, .features-all', {
		fontFamily: 'Hagin Caps Medium',
        textShadow: '1px 1px 3px #e05a82'
	});
    

	 $('.inputtext').each(function() {
		var vlaue = $(this).val();
		$(this).focus(function() {
			if($(this).val()==vlaue) {
				$(this).val('');
			}
		}).blur(function() {
			if($(this).val()=='') {
				$(this).val(vlaue);
			}
		});
	});
    
    $('.callback button').click(function() {
		var name = $(this).parent().find('input[name="name"]').val();
		var tel = $(this).parent().find('input[name="tel"]').val();
		var email = $(this).parent().find('input[name="email"]').val();
		var isCorrect = true;
		var parent = this;

		if(!isEmpty(name) || !isEmpty(tel) || !isEmpty(email)) {
			isCorrect = false;
		}
		if (isCorrect && validateEmail(email)) {
			var json = '{"name":"'+name+'", "tel":"'+tel+'", "email":"'+email+'"}';
			$.ajax({
			  type: "POST",
			  url: 'js/buy.php',
			  data: {json: json},
			  error: function(e){
				console.log(e.status);
			  },
			  success: function(data) {
				var results = jQuery.parseJSON(data);
				if(results['status']=="success") {
					console.log("SUCCESS!");
					$(parent).parent().find('input[name="name"]').val('Введите имя');
					$(parent).parent().find('input[name="tel"]').val('Введите телефон');
					$(parent).parent().find('input[name="email"]').val('Введите e-mail');
					$(parent).addClass('success').html('Отправлено!');
					Cufon.replace('.callback button',{fontFamily: 'Corki'});
					setTimeout(function() {
						$(parent).removeClass('success').html('Заказать!');
						Cufon.replace('.callback button',{fontFamily: 'Corki'});
					}, 2000);
				}
			  }
			});
		}

		return false;
	});
    
    $('.callback-btn').click(function() {
        $('#callback-container').fadeIn();
    });
    
    $('.callback-2 button').click(function() {
		var name = $(this).parent().find('input[name="name"]').val();
		var tel = $(this).parent().find('input[name="tel"]').val();
		var isCorrect = true;
		var parent = this;

		if(!isEmpty(name) || !isEmpty(tel)) {
			isCorrect = false;
		}
		if (isCorrect) {
			var json = '{"name":"'+name+'", "tel":"'+tel+'"}';
			$.ajax({
			  type: "POST",
			  url: 'data/buy.php',
			  data: {json: json},
			  error: function(e){
				console.log(e.status);
			  },
			  success: function(data) {
				var results = jQuery.parseJSON(data);
				if(results['status']=="success") {
					console.log("SUCCESS!");
					$(parent).parent().find('input[name="name"]').val('Введите имя');
					$(parent).parent().find('input[name="tel"]').val('Введите телефон');
					$(parent).addClass('success').html('Отправлено!');
					Cufon.replace('.callback-2 button',{fontFamily: 'Hagin Caps Medium',textShadow: '1px 1px 3px #e05a82'});
					setTimeout(function() {
						$(parent).removeClass('success').html('Заказать!');
                        Cufon.replace('.callback-2 button',{fontFamily: 'Hagin Caps Medium',textShadow: '1px 1px 3px #e05a82'});
                        $('#callback-container').fadeOut();
					}, 2000);
				}
			  }
			});
		}

		return false;
	});

});


function validateEmail(email) {
	var at = email.lastIndexOf("@");

	// Make sure the at (@) sybmol exists and  
	// it is not the first or last character
	if (at < 1 || (at + 1) === email.length)
		return false;

	// Make sure there aren't multiple periods together
	if (/(\.{2,})/.test(email))
		return false;

	// Break up the local and domain portions
	var local = email.substring(0, at);
	var domain = email.substring(at + 1);

	// Check lengths
	if (local.length < 1 || local.length > 64 || domain.length < 4 || domain.length > 255)
		return false;

	// Make sure local and domain don't start with or end with a period
	if (/(^\.|\.$)/.test(local) || /(^\.|\.$)/.test(domain))
		return false;

	// Check for quoted-string addresses
	// Since almost anything is allowed in a quoted-string address,
	// we're just going to let them go through
	if (!/^"(.+)"$/.test(local)) {
		// It's a dot-string address...check for valid characters
		if (!/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(local))
			return false;
	}

	// Make sure domain contains only valid characters and at least one period
	if (!/^[-a-zA-Z0-9\.]*$/.test(domain) || domain.indexOf(".") === -1)
		return false;	

	return true;
}

function isEmpty(value) {
	return value===""?false:true;
}
