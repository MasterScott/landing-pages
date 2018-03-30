function popup(element){
	$('#callback-container').fadeIn();
	
	if (element === '.thanks') {
		$('#callback-container').find('.call_its:visible').fadeOut();
		$('#callback-container').find('.review_its:visible').fadeOut();
	} else {
		$('#callback-container').find('.thanks:visible').fadeOut();
	};

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
	var theme_val = $(parent).find('input[name="theme"]').val();

	var isCorrect = true;
	

	if (isCorrect) {
		var json = '{"name":"'+name+'", "tel":"'+tel+'", "email":"'+email+'", "message":"'+message_val+'"}';
		$.ajax({
				type: "POST",
				url:'mail.php',
				data:{
				theme:theme_val,
				name:name_val,
				email:email_val,
				tel:tel_val,
				message:message_val
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
						$(parent).find('.btn').removeClass('success').html('ПОЛУЧИТЬ');
						$('#callback-container').fadeOut();
						$('#callback-container').find('#callback-window').fadeOut();
						$('#callback-container').find('#rev-window').fadeOut();
					}, 2000);
				
			}
		})
	}

}

$('.callback-btn').click(function() {
	var el = $(this).data('popup');
	var element = $('.'+el)
    popup(element);
    return false
});

$('#callback-bg').click(function(){
	$(this).parent('#callback-container').fadeOut();
	$(this).parent('#callback-container').find('#callback-window').fadeOut();
});