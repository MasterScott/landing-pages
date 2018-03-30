jQuery(function($) {

	$(".phone-mask").mask("+7 999 999 99 99");
	$('input[placeholder], textarea[placeholder]').placeholder({overrideSupport: true});

	if ($("#map").length && $("#map").data('coord')) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	$('.send-btn').click(function(e) {
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('.call-request-btn').click(function(e) {
		e.preventDefault();

		showModal('.recall-modal');
	});

	$('.callback-form').submit(function(e) {
		e.preventDefault();
		$('.callback-form').find('[type="submit"]').attr("disabled", true);

		var $form = $(this),
				ok = true,
				$name = $form.find('.name'),
				$phone = $form.find('.phone');

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

		if (ok) {
			$form.ajaxSubmit({
				success: function(response) {
					hideModal();
					showModal($(".modal.thanks2-modal"));
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
		$('.callback-form').find('[type="submit"]').removeAttr('disabled');
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