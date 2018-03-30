jQuery(function($) {
	$(".gal-cont").tinycarousel();
	
	$('.order-btn').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('disabled'))
			return;
		
		var mod = $('.modal.order-modal');
		if (mod.hasClass('open')) {
			hideModal(mod);
			mod.removeClass('open');
		} else {
			showModal(mod);
			mod.addClass('open');
		}
	});
	
	$('.modals .overlay, .modals .modal-close').click(function(e) {
		e.preventDefault();
		hideModal('.modal');
		$('.modal').removeClass('open');
	});
	
	$('.send-btn').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('disabled'))
			return;
		
		$(this).closest('form').submit();
	});

	$('.order-form').submit(function(e) {
		e.preventDefault();

		var $form = $(this), ok = true;

		if (!checkEmail($form.find('.email').val())) {
			$form.find('.email').addClass("error");
			ok = false;
		} else {
			$form.find('.email').removeClass("error");
		}

		if (ok) {
			$form.ajaxSubmit({
				success: function(response) {
					if ($form.hasClass('order-form-blue')) {
						$form.empty();
						$form.html('<div class="thanks">'+$(".thanks-modal .text").html()+'</div>');
					} else {
						var mod = $('.modal.thanks-modal');
						showModal(mod);
						mod.addClass('open');
					}
					$form.get(0).reset();
					$('.order-form .send-btn, .order-btn').addClass('disabled');
					if ($('body').data('metrika') && window['yaCounter'+$('body').data('metrika')]) window['yaCounter'+$('body').data('metrika')].reachGoal('request');
					if (window._gaq) _gaq.push(['_trackEvent','Form','Sent']);
					timer_go();
				}
			});
		}
	});
	
	var timer_total = 30, timer_lim_per_time = 3;
	
	
	if (!$.cookie('timer')) {
		var date = new Date();
		date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
		$.cookie('timer', timer_total, { expires: date });
	} else
		timer_total = parseInt($.cookie('timer'));
	
	var init_timer_total = timer_total;
	
	function timer_go() {
		if (timer_total <= 3 || timer_total <= init_timer_total - timer_lim_per_time)
			return;
		
		$.cookie('timer', --timer_total);
		
		$('.timer').html(timer_total < 10 ? '0' + timer_total : timer_total);
	}
	
	function timer_start() {
		timer_go();
		setInterval(timer_go, Math.floor(Math.random() * (120000 - 60000 + 1)) + 60000); // time in miliseconds
	}
	setTimeout(timer_start, Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000); // time in miliseconds
	
	$('.timer').html(timer_total < 10 ? '0' + timer_total : timer_total);
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

function checkEmail(mail) {
	return /^[a-zа-я0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+(\.[a-zа-я0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+)*@[a-zа-я0-9-]+(\.[a-z0-9-]+)*\.([a-zрф]{2,})$/.test(mail);
}