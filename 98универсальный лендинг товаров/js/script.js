jQuery(function() {
	$('input[placeholder], textarea[placeholder]').placeholder();
	$(".phone-mask").mask("+7 999 999 99 99");

	var nowTime = new Date();
	weekcounter = typeof(weekcounter) == "undefined" ? 0 : weekcounter;
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

	$('.order-form').submit(function(e) {
		e.preventDefault();

		var $form = $(this),
				ok = true,
				$name = $form.find('.fio'),
				$phone = $form.find('.phone'),
				$email = $form.find('.email');
				
		if ($name.hasClass('required')) {
			if (!$name.val()) {
				ok = false;
				$name.addClass("error");
			} else
				$name.removeClass("error");
		}

		if ($phone.hasClass('required') && !/\d{11}/.test($phone.val().replace(/\D/g, ''))) {
			ok = false;
			$phone.addClass("error");
		} else
			$phone.removeClass("error");

		if ($email.length > 0) {
			if ($email.hasClass('required') || $email.val().length > 0) {
				if (!checkEmail($email.val())) {
					ok = false;
					$email.addClass("error");
				} else
					$email.removeClass("error");
			}
		}

		if (ok) {
			$form.ajaxSubmit({
				success: function(response) {
					hideModal();
					if ($('body').data('metrika') && window['yaCounter'+$('body').data('metrika')]) window['yaCounter'+$('body').data('metrika')].reachGoal('request');
					if (window._gaq) _gaq.push(['_trackEvent','Form','Sent']);
					window.location = 'thanks.php';
					$form.get(0).reset();
					
				}
			});
		}
	});

	$('.send-btn').click(function(e) {
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('.order-btn').click(function(e) {
		e.preventDefault();
		var mod = $('.modal.order-modal');
		if (mod.hasClass('open')) {
			hideModal(mod);
			mod.removeClass('open');
		} else {
			showModal(mod);
			mod.addClass('open');
		}
	});

	$('.call-request-btn').click(function(e) {
		e.preventDefault();
		var mod = $('.modal.phone-request');
		if (mod.hasClass('open')) {
			hideModal(mod);
			mod.removeClass('open');
		} else {
			showModal(mod);
			mod.addClass('open');
		}
	});

	$('.overlay, .modal .close-btn, .modal .modal-close-text').click(function(e) {
		e.preventDefault();
		hideModal('.modal');
		$('.modal').removeClass('open');
	});

	$('#reviews-block .view-more').click(function(e) {
		e.preventDefault();
		$('#reviews-block .review-list .hidden').slideDown(200);
		$(this).hide();
	});

	$('.gal-cont').each(function(e) {
		var $this = $(this),
				$slider = $this.find('.gal-slider'),
				sel_index;

		$slider.width($slider.find('a').outerWidth(true) * $slider.find('a').length);
		$slider.find('a').eq(0).addClass('act');

		var update_gal_image = function() {
			$this.find('.gal-image img').fadeOut(100, function() {
				$(this).remove();
				$this.find('.gal-image').append('<img style="opacity:0;" src="' + $slider.find('a').eq($slider.find('a').index($slider.find('a.act'))).attr('href') + '" />');
				$this.find('.gal-image img').animate({opacity: 1}, 100);
			});
		};

		$slider.find('a').click(function(e) {
			e.preventDefault();
			$slider.find('a').removeClass('act');
			$(this).addClass('act');
			update_gal_image();
		});

		$this.find('.gal-left').click(function(e) {
			e.preventDefault();
			sel_index = $slider.find('a').index($slider.find('a.act'));
			if (sel_index > 0) {
				if (sel_index - 1 + $slider.position().left / $slider.find('a').outerWidth(true) < 0) {
					$slider.animate({left: ($slider.position().left + $slider.find('a').outerWidth(true)) + 'px'}, 100);
				}
				$slider.find('a').removeClass('act').eq(sel_index - 1).addClass('act');
				update_gal_image();
			}
		});

		$this.find('.gal-right').click(function(e) {
			e.preventDefault();
			sel_index = $slider.find('a').index($slider.find('a.act'));
			if (sel_index + 1 < $slider.find('a').length) {
				if (sel_index + 1 + $slider.position().left / $slider.find('a').outerWidth(true) >= 4) {
					$slider.animate({left: ($slider.position().left - $slider.find('a').outerWidth(true)) + 'px'}, 100);
				}
				$slider.find('a').removeClass('act').eq(sel_index + 1).addClass('act');
				update_gal_image();
			}
		});
	});
});

function showModal(modal) {
	showModalTop(modal, 66);
}

function showModalTop(modal, top) {
	modal = modal instanceof jQuery ? modal : jQuery(modal);
	modal.css("top", top + "px");
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

	var temp = convert(days, ['день', 'дня', 'дней']);
	$('.timer .days').html(temp[0]);
	$('.timer .days-text').html(temp[1]);
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