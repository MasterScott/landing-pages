$(function(){

	function fun(){
		var bot = parseInt($('body').scrollTop());
		var hop = parseInt($('.header').css('opacity'));

		if (hop!=0.5 && bot!=0) {
			$('.header').css({'opacity':'0.5'});
		} else {
			$('.header').css({'opacity':'1'});
		};
		
	};

	$(window).scroll(function(){
		fun()
	});


	$('.header').mouseenter(function(){
		$(this).css({'opacity': 1})
	})
	$('.header').mouseleave(function(){
		var bot = parseInt($('body').scrollTop());
		if (bot!=0) {
			$(this).css({'opacity': 0.5})
		}
	})


	 $('.slider').mobilyslider({
	 	transition: 'fade',
	 	animationSpeed: 800,
	 	bullets: false,
	 	arrowsHide: false
	 })

});