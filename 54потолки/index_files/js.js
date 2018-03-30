$(document).ready(function(){
  		$('.block_item a').click(function(){
		$('.block_actions').css('display', 'none');
		$('.block_item_one').fadeIn(800);
		$('html, body').animate({scrollTop: $('.block_item_one').offset().top}, 800);
		$('.block_item_one_left').css('display', 'none');
		$('.block_item_one_right ul').css('display', 'none');
	});
	$('.block_item .img').click(function(){
		$('.'+$(this).parent().parent().attr('id')+'_1').fadeIn(800);
		$('.'+$(this).parent().parent().attr('id')+'_2').fadeIn(800);
	});
	$('.block_item .button.fl_right').click(function(){
		$('.'+$(this).parent().parent().parent().attr('id')+'_1').fadeIn(800);
		$('.'+$(this).parent().parent().parent().attr('id')+'_2').fadeIn(800);
	});
	$('.button_back').click(function(){
		$('.block_item_one').css('display', 'none');
		$('.block_actions').fadeIn(800);
	});

	$('.mycarousel_index').jcarousel({
		wrap: 'circular'
	});
	$('.mycarousel_index_all .carousel_arrow_left').click(function(){
		$('.mycarousel_index').jcarousel('scroll', '-=1');
	});
	$('.mycarousel_index_all .carousel_arrow_right').click(function(){
		$('.mycarousel_index').jcarousel('scroll', '+=1');
	});
	$('.mycarousel_index_paging').on('jcarouselpagination:active', 'a', function(){
		$(this).addClass('active');
	}).on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active');
	}).jcarouselPagination();

	var tmp = $('.block_contacts_all').height();
	$('.button_contacts').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('.block_contacts_all').slideUp(800);
			$('.header').animate({'top': '38px'}, 800);
		}else{
			$(this).addClass('open');
			$('.block_contacts_all').slideDown(800);
			$('.header').animate({'top': tmp}, 800);
		}
	});
	$('.block_contacts_all .button_close').click(function(){
		$('.button_contacts').removeClass('open');
		$('.block_contacts_all').slideUp(800);
		$('.header').animate({'top': '38px'}, 800);
	});

	$('.mask').mask('8 (999) 999 99 99');

	$('.ul_production_stages p a').click(function(){
		$(this).parent().css('display', 'none');
	});

	$('.a_popup_info').click(function(){
		var $this = $(this),
			$form = $this.closest('form');

		$.get($form.attr('action'), $form.serialize(), function(data) {
			if (parseInt(data)) {
				var $block_popup_sale = $this.closest('.block_popup_sale, .block_contacts_form_2, .block_contacts_form');

				/*if ($block_popup_sale.length) {
					$block_popup_sale.html('<div class="ok-text js-ok-text"><i></i>Ваша заявка принята</div>');
					setTimeout(function() {
						$('.js-ok-text').fadeOut();
					}, 5000);
				} else {
					$('.overlay').css('display', 'block');
					$('.popup_info').css('display', 'block').css('top', ((document.documentElement.scrollTop || document.body.scrollTop) + 150) + 'px');
					$this.closest('form').find(':text').val('');
				}*/

				if ($this.is('.button_yellow')) {
					$('.overlay').css('display', 'block');
					$('.popup_info').css('display', 'block').css('top', ((document.documentElement.scrollTop || document.body.scrollTop) + 150) + 'px');
					$this.closest('form').find(':text').val('');
				} else {
					$block_popup_sale.html('<div class="ok-text js-ok-text"><i></i>Ваша заявка принята</div>');
					if ($block_popup_sale.is('.block_popup_sale')) {
						setTimeout(function () {
							$('.js-ok-text').parent().fadeOut();
						}, 5000);
					}
				}
			}
		});
		return false;
	});
	$('.overlay, .button_close').click(function(){
		$('.overlay').css('display', 'none');
		$('.popup').css('display', 'none');
	});

	$('.block_slider').cycle({
		prev:   '.block_slider_arrow_left',
		next:   '.block_slider_arrow_right',
		speed:   800,
		timeout: 0
	});

	$('.block_slider a, .block_review_left a, .mycarousel a').lightBox();


	$('.mycarousel').jcarousel({
		wrap: 'circular'
	});
	$('.block_gallery_all .carousel_arrow_left').click(function(){
		$('.mycarousel').jcarousel('scroll', '-=1');
	});
	$('.block_gallery_all .carousel_arrow_right').click(function(){
		$('.mycarousel').jcarousel('scroll', '+=1');
	});

/*
	$('.block_slider').cycle({
		prev:   '.block_slider_arrow_left',
		next:   '.block_slider_arrow_right',
		speed:   800,
		timeout: 8000,
		pager:  '.slider_paging'
	});
	setTimeout(function(){
		$('.block_item_one').css('position', 'relative').css('top', 'auto').css('display', 'none');
	}, 1000);
*/

	if(device.mobile() || device.tablet()){
	}else{
		setTimeout(function(){
			$('.block_popup_sale').fadeIn(800);
		}, 20000);
	}

	$('.block_popup_sale .button_close').click(function(){
		$('.block_popup_sale').fadeOut(800);
	});

});