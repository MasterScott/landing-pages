jQuery(function($) {

	$(".phone-mask").mask("+7 999 999 99 99");
	$('input[placeholder], textarea[placeholder]').placeholder({overrideSupport: true});

	if ($("#map").length && $("#map").data('coord')) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	var nowTime = new Date();
	weekcounter = typeof (weekcounter) == "undefined" ? 0 : weekcounter;
	if (weekcounter == false || weekcounter == 0) {
		var weekday = nowTime.getDay();
		weekday = weekday == 0 ? 7 : weekday;
		var day_offset = 60 * 60 * 24 - (((nowTime.valueOf() / 1000) % (60 * 60 * 24)) + (3600 * 4));
		var diffSecs = Math.floor(((7 - weekday) * 1000 * 60 * 60 * 24) + (day_offset * 1000));
	} else {
		var targetTime = weekcounter;
		var diffSecs = Math.floor((targetTime.valueOf() - nowTime.valueOf()));

	}
	dif(Math.floor(diffSecs / 1000));

	$('.send-btn').click(function(e) {
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('.order-btn').click(function(e) {
		e.preventDefault();

		showModal('.order-modal');
	});

	$('.order-call-btn').click(function(e) {
		e.preventDefault();

		showModal('.call-modal');
	});

	$('.order-form').submit(function(e) {
		e.preventDefault();
		$('.order-form').find('[type="submit"]').attr("disabled", true);

		var $form = $(this),
				ok = true,
				$name = $form.find('.name'),
				$phone = $form.find('.phone'),
				$email = $form.find('.email');

		if ($name.length && $name.hasClass('required') && $name.val().length === 0) {
			ok = false;
			$name.addClass("error");
		} else
			$name.removeClass("error");

		if ($phone.length && $phone.hasClass('required') && !/\d{11}/.test($phone.val().replace(/\D/g, ''))) {
			ok = false;
			$phone.addClass("error");
		} else
			$phone.removeClass("error");

		if ($email.length && ($email.val().length > 0 || $email.hasClass('required'))) {
			if (!checkEmail($email.val())) {
				ok = false;
				$email.addClass("error");
			} else
				$email.removeClass("error");
		}

		if (ok) {
			$form.ajaxSubmit({
				success: function(response) {
					hideModal();
					showModal($(".modal.thanks-modal"));
					setTimeout('hideModal()', 3000);
					$form.get(0).reset();
					if ($('body').data('metrika') && window['yaCounter' + $('body').data('metrika')])
						window['yaCounter' + $('body').data('metrika')].reachGoal('request');
					if (window._gaq)
						_gaq.push(['_trackEvent', 'Form', 'Sent']);
					$('.order-form').find('[type="submit"]').removeAttr('disabled');
				}
			});
		}
		$('.order-form').find('[type="submit"]').removeAttr('disabled');
	});

	$('.overlay, .modal .close-btn').click(function(e) {
		e.preventDefault();
		hideModal('.modal');
		$('.modal').removeClass('open');
	});

});

function showModal(modal) {
	modal = modal instanceof jQuery ? modal : jQuery(modal);
	modal.show();
	$(".overlay").show();
}

function hideModal() {
	$(".modals > div").hide();
	$(".overlay").hide();
}


function dif(diffSecs) {
	var sec = Math.floor(diffSecs % 60);
	var mins = Math.floor(diffSecs / 60) % 60;
	var hours = Math.floor(diffSecs / 60 / 60) % 24;
	var days = Math.floor(diffSecs / 60 / 60 / 24);


	var temp = convert(hours, ['час', 'часа', 'часов']);
	$('.timer .hours').html(temp[0] < 10 ? '0' + temp[0] : temp[0]);
	$('.timer .hours-text').html(temp[1]);
	var temp = convert(mins, ['минута', 'минуты', 'минут']);
	$('.timer .mins').html(temp[0] < 10 ? '0' + temp[0] : temp[0]);
	$('.timer .mins-text').html(temp[1]);
	var temp = convert(sec, ['секунда', 'секунды', 'секунд']);
	$('.timer .secs').html(temp[0] < 10 ? '0' + temp[0] : temp[0]);
	$('.timer .secs-text').html(temp[1]);

	if (diffSecs > 0)
	{
		t = setTimeout(function() {
			dif(diffSecs - 1)
		}, 1000);
	}
}

function convert(n, ar) {
	var o = n % 10;
	var l, g;
	switch (o) {
		case 1:
			l = 0;
			break;
		case 2:
		case 3:
		case 4:
			l = 1;
			break;
		default:
			l = 2;
			break;
	}

	var g = n % 100;
	if (g == 10 || g == 11 || g == 12 || g == 13 || g == 14) {
		l = 2;
	}
	return [n, ar[l]];
}

function checkEmail(mail) {
	return /^[a-zа-я0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+(\.[a-zа-я0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+)*@[a-zа-я0-9-]+(\.[a-z0-9-]+)*\.([a-zрф]{2,})$/.test(mail);
}

var map;

function initialize() {
	var coords = $("#map").data('coord').split(',');
	var center = $("#map").data('center').split(',');
	var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(center[0], center[1]),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(coords[0], coords[1]),
		map: map
	});
}