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

	$('.mycarousel').jcarousel({
		wrap: 'circular'
	});
	$('.block_gallery .carousel_arrow_left').click(function(){
		$('.mycarousel').jcarousel('scroll', '-=1');
	});
	$('.block_gallery .carousel_arrow_right').click(function(){
		$('.mycarousel').jcarousel('scroll', '+=1');
	});

	$('.mask').mask('+7 (999) 999-99-99');

	$('.mycarousel a, .block_review_img a').lightBox();

	$('.block_date_inn').county({ endDateTime: new Date('2014/04/25 10:00:00'), reflection: false, animation: 'scroll', theme: 'gray' });
	$('.block_date_2_1').county({ endDateTime: new Date('2014/04/25 10:00:00'), reflection: false, animation: 'scroll', theme: 'gray' });
	$('.block_date_2_2').county({ endDateTime: new Date('2014/04/25 10:00:00'), reflection: false, animation: 'scroll', theme: 'gray' });
	$('.block_date_2_3').county({ endDateTime: new Date('2014/04/25 10:00:00'), reflection: false, animation: 'scroll', theme: 'gray' });
	$('.block_date_2_4').county({ endDateTime: new Date('2014/04/25 10:00:00'), reflection: false, animation: 'scroll', theme: 'gray' });
	$('.block_date_2_5').county({ endDateTime: new Date('2014/04/25 10:00:00'), reflection: false, animation: 'scroll', theme: 'gray' });
	$('.block_date_2_6').county({ endDateTime: new Date('2014/04/25 10:00:00'), reflection: false, animation: 'scroll', theme: 'gray' });

	setTimeout(function(){
		$('.block_item_one').css('position', 'relative').css('top', 'auto').css('display', 'none');
	}, 1000);

});