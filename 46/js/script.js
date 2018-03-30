jQuery(function() {
	$('input[placeholder], textarea[placeholder]').placeholder();
	$(".phone-mask").mask("+7 999 999 99 99");
	
	//вывод каталога
	for (var g in goods.models){
		var $item = $('<li>'+
						'<img src="'+goods.models[g].img+'" width="149" alt="" title=""/>'+
						'<div class="goods-boots-info" data-id="'+g+'">'+
							'<h4>'+goods.models[g].name+'</h4>'+
							'<a class="more-info order-btn" href="#">Подробнее</a>'+
							'<p class="price"><span>'+goods.models[g].price+'</span> руб.</p>'+
							'<a href="#" class="blue-btn order-btn">Примерить</a>'+
						'</div>'+
					'</li>');
		var cat = g.split('_');
		$("#"+cat[0]).append($item);		
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

	$('a.scroll-link').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 300);
		return false;
	});

	$('.order-form').submit(function(e) {
		e.preventDefault();
		$('.order-form').find('[type="submit"]').attr("disabled",true);
		var $form = $(this),
				ok = true,
				$name = $form.find('.name'),
				$phone = $form.find('.phone'),
				$email = $form.find('.email');
				
		if ($name.hasClass('required') && !$name.val()) {
			ok = false;
			$name.addClass("error");
		} else
			$name.removeClass("error");

		if ($phone.hasClass('required') && !/\d{11}/.test($phone.val().replace(/\D/g, ''))) {
			ok = false;
			$phone.addClass("error");
		} else
			$phone.removeClass("error");

		if ($email.length > 0) {
			if ($email.val().length > 0 || $email.hasClass('required')) {
				if (!checkEmail($email.val())) {
					ok = false;
					$email.addClass("error");
				} else
					$email.removeClass("error");
			}
		}

		if (ok) {
			if ($form.hasClass("mod")){
				$form.find('.model').val($form.find('.model').val() + ', ' + $("#model-color option:selected").html() + ', р. ' + $("#model-size").val());
			}
			$form.ajaxSubmit({
				success: function(response) {
					hideModal();
					showModal($(".modal.thanks-modal"));
					setTimeout('hideModal()',3000);
					$form.get(0).reset();
					if ($('body').data('metrika') && window['yaCounter'+$('body').data('metrika')]) window['yaCounter'+$('body').data('metrika')].reachGoal('request');
					if (window._gaq) _gaq.push(['_trackEvent','Form','Sent']);
					$('.order-form').find('[type="submit"]').removeAttr('disabled');
				}
			});
		}
		$('.order-form').find('[type="submit"]').removeAttr('disabled');
	});
	
	

	$('.order-btn').click(function(e) {
		e.preventDefault();

		var $item = $(this).closest('.goods-boots-info');

		goods.showModal($item.data('id'), $item.find('h4').html(), $item.find('.price').html());
	});
	$('.size-btn').click(function(e) {
		e.preventDefault();
		var mod = $('.modal.size-modal');
		if (mod.hasClass('open')) {
			hideModal(mod);
			mod.removeClass('open');
		} else {
			showModal(mod);
			mod.addClass('open');
		}
	});

	$('.overlay, .modal .close-btn').click(function(e) {
		e.preventDefault();
		hideModal('.modal');
		$('.modal').removeClass('open');
	});

	$('.gal-cont').each(function(e) {
		var $this = $(this),
				$slider = $this.find('.gal-slider'),
				sel_index;

		//$slider.width($slider.find('a').outerWidth(true) * $slider.find('a').length);
		$slider.find('a').eq(0).addClass('act');

		var update_gal_image = function() {
			$this.find('.gal-image img').fadeOut(100, function() {
				$(this).remove();
				$this.find('.gal-image').append('<img style="opacity:0;" src="' + $slider.find('a').eq($slider.find('a').index($slider.find('a.act'))).attr('href') + '" />');
				$this.find('.gal-image img').animate({opacity: 1}, 100);
			});
		};

		$(document).on('click', '.gal-slider a', function(e) {
			e.preventDefault();
			$slider.find('a').removeClass('act');
			$(this).addClass('act');
			update_gal_image();
		});

		$this.find('.left-arrow').click(function(e) {
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

		$this.find('.right-arrow').click(function(e) {
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

goods.showModal = function(id, name, price) {
	var $mod = $('.modal.order-modal');

	// modal is open
	if ($mod.hasClass('open')) {
		/*hideModal($mod);
		 $mod.removeClass('open');
		 return;*/
	}

	// set the hidden field "Model name" value
	$mod.find('.model').val(name.replace(/(\r\n|\n|\r)/gm, " ").replace(/<\/?[^>]+>/gi, ' '));

	// set the name
	$mod.find('h5').html(name.replace(/<\/?[^>]+>/gi, ' '));

	// set the price
	$mod.find('.price').html(price);

	// find color by default
	var model_color = null;
	for (var col in this.models[id].colors) {
		model_color = col;
		break;
	}

	// fill up the gallery
	this.changeColor($mod, id, model_color);

	// set the description
	$mod.find('.model-descr').html(this.models[id].description);

	// set available colors
	$mod.find('#model-color').empty();
	for (var col in this.models[id].colors) {
		$mod.find('#model-color').append('<option value="' + col + '">' + this.colors[col] + '</option>');
	}

	// set available sizes
	$mod.find('#model-size').empty();
	for (var size in this.models[id].sizes) {
		$mod.find('#model-size').append('<option value="' + this.models[id].sizes[size] + '">' + this.models[id].sizes[size] + '</option>');
	}

	var _this = this;
	
	$mod.find('.following-model').unbind('click').click(function(e) {
		e.preventDefault();

		_this.getItem(id, 1).find(".order-btn").eq(0).click();
	});
	
	$mod.find('.previous-model').unbind('click').click(function(e) {
		e.preventDefault();

		_this.getItem(id, -1).find(".order-btn").eq(0).click();
	});
	
	$mod.find('#model-color').unbind('change').change(function(e) {
		e.preventDefault();

		_this.changeColor($mod, id, $(this).val());
	});

	// show the modal up
	showModal($mod);
	$mod.addClass('open');
};

goods.changeColor = function($mod, id, model_color) {
	$mod.find('.gal-slider').empty();
	var img_i = 0;
	for (var gal_img in this.models[id].colors[model_color]) {
		if (img_i === 0)
			$mod.find('.gal-image img').prop('src', this.models[id].colors[model_color][gal_img]);
		$mod.find('.gal-slider').append('<a href="' + this.models[id].colors[model_color][gal_img] + '" class="' + (img_i === 0 ? 'act' : '') + '"><img src="' + this.models[id].colors[model_color][gal_img] + '" alt="" title=""></a>');
		img_i++;
	}
};

goods.getItem = function(id, dif) {
	var ind = 0;
	for (var i = 0; i < $('.goods-list .goods-boots-info').length; i++) {
		if ($('.goods-list .goods-boots-info').eq(i).data('id') == id) {
			ind = i;
			break;
		}
	}
	if (typeof (dif) !== 'undefined') {
		ind = ((ind + dif) / $('.goods-list .goods-boots-info').length - Math.floor((ind + dif) / $('.goods-list .goods-boots-info').length)) * $('.goods-list .goods-boots-info').length;
	}
	return $('.goods-list .goods-boots-info').eq(ind);
};

// goods end

function showModal(modal) {
	showModalTop(modal, 66);
}

function showModalTop(modal, top) {
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