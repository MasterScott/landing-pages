function popup(element, th_is){
	$('#callback-container').fadeIn();
	
	

	if (element === '.thanks') {
		$('#callback-container').find('.call_its:visible').fadeOut();
		$('#callback-container').find('.map_d:visible').fadeOut();
	} else {
		$('#callback-container').find('.thanks:visible').fadeOut();
	};

	if (element === '.thanks' || element === '.error') {
		$('#callback-container').find(element).fadeIn(200, function(){
			var this_it = $(this),
				el_height = parseInt(this_it.outerHeight()),
				rel_height = parseInt(this_it.parent('#callback-container').outerHeight());

			if (rel_height>el_height) {
				this_it.css({'margin-top' : -el_height/2})
			} else {
				this_it.css({'margin-top' : 15, 'top' : 0})
			};
		});
	} else {


		var t_pos = th_is.offset();
		var body_h = parseInt($('body').outerHeight());

		$('#callback-container').find(element).fadeIn(5, function(){
			var this_it 	= $(this),
				el_height 	= parseInt(this_it.innerHeight()),
				rel_height 	= parseInt(this_it.parent('#callback-container').outerHeight()),
				rel_top		= this_it.parent('#callback-container').offset().top,
				got_space	= rel_height+rel_top,
				need_space	= t_pos.top+el_height+25;


			if (got_space>need_space) {
				this_it.offset(t_pos).css({'margin-top' : 55})
			} else {
				this_it.offset(t_pos).css({'margin-top':(-el_height-20)})
			};
		});
	};
};

function submeet(parent){

	var name = $(parent).find('input[name="name"]').val();
	var tel = $(parent).find('input[name="tel"]').val();
	var email = $(parent).find('input[name="email"]').val();
	var message = $(parent).find('textarea[name="message"]').val();
	
	var name_val = $(parent).find('input[name="name"]').val();
	var tel_val = $(parent).find('input[name="tel"]').val();
	var email_val = $(parent).find('input[name="email"]').val();
	var message_val = $(parent).find('textarea[name="message"]').val();
	var region_val = $(parent).find('select[name="region"]').val();
	var hotel_val = $(parent).find('select[name="hotel"]').val();
	var budget_val = $(parent).find('input[name="budget"]').val();
	var date_val = $(parent).find('input[name="date"]').val();
	var period_val = $(parent).find('input[name="period"]').val();
	var adults_val = $(parent).find('input[name="adults"]').val();
	var children_val = $(parent).find('input[name="children"]').val();
	var theme_val = $(parent).find('input[name="theme"]').val();

	var isCorrect = true;
	
	if(!isEmpty(name) || !isEmpty(tel)) {
		isCorrect = false;
	}

	if (isCorrect) {
		//var json = '{"name":"'+name+'", "tel":"'+tel+'", "email":"'+email+'", "message":"'+message_val+'"}';
		$.ajax({
				type: "POST",
				url:'mail.php',
				data:{
				theme:theme_val,
				name:name_val,
				email:email_val,
				tel:tel_val,
				message:message_val,
				region:region_val,
				hotel:hotel_val,
				budget:budget_val,
				date:date_val,
				period:period_val,
				adults:adults_val,
				children:children_val
			},
			error: function(e){
				console.log('error');
			},
			success:  function() {
					$(parent).find('input[name="name"]').val('Введите имя');
					$(parent).find('input[name="tel"]').val('Введите телефон');
					$(parent).find('input[name="email"]').val('Введите e-mail');
					$(parent).find('.btn').addClass('success').html('Отправлено!');
					popup('.thanks')
					console.log("SUCCESS!");
					setTimeout(function() {
						$(parent).find('.btn').removeClass('success').html('ЗАКАЖИ');
						$('#callback-container').fadeOut();
						$('#callback-container').find('#callback-window').fadeOut();
						$('#callback-container').find('#rev-window').fadeOut();
					}, 2000);
				
			}
		})
	} else {popup('.error'); setTimeout(function(){$('#callback-container, .error').fadeOut()},2000)}

}

$('.callback-btn').click(function() {
	var el = $(this).data('popup');
	var element = $('.'+el);
	var th_is = $(this);

    popup(element, th_is);
    return false
});

$('#callback-bg').click(function(){
	$(this).parent('#callback-container').fadeOut();
	$(this).parent('#callback-container').find('.callback-window').fadeOut(0).css({'margin-top':0, 'margin-bottom':0});
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