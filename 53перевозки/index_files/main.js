$(function(){
	/* Modal */
	$('.callme').click(function(){
		var back = $('<div class=back></div>'),
		h = $(document).height(),
		w = $(window).width(),
		modW = $('.hide').width(),
		modH = $('.hide').height(),
		modX = w/2-modW/2;
		back.css({'width':w,'height':h}).fadeTo("slow", 0.8).appendTo('body');
		$('.hide').show().css({'left':modX,'top':'30%'});
	});
    $('.zakaz').click(function(){
        var zakaz = $(this).attr('title');
        $('#zakaz').attr("value", zakaz);
        var back = $('<div class=back></div>'),
            h = $(document).height(),
            w = $(window).width(),
            modW = $('.hide2').width(),
            modH = $('.hide2').height(),
            modX = w/2-modW/2;
        back.css({'width':w,'height':h}).fadeTo("slow", 0.8).appendTo('body');
        $('.hide2').show().css({'left':modX,'top':'30%'});
    });
    $('.zakaz_deliv').click(function(){
        var back = $('<div class=back></div>'),
            h = $(document).height(),
            w = $(window).width(),
            modW = $('.hide3').width(),
            modH = $('.hide3').height(),
            modX = w/2-modW/2;
        back.css({'width':w,'height':h}).fadeTo("slow", 0.8).appendTo('body');
        $('.hide3').show().css({'left':modX,'top':'30%'});
    });
	$('.close').on('click', function(){
		$('.back, .hide, .hide2, .hide3').hide();
		return false;
	});
	/* Mail */
    $('.mail').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $(this).serialize(),
            success: function(data){
                if(data == "true"){
                    $('<div class=thanks><h2>Спасибо за заявку!</h2><p class=success_hide>Мы обязательно свяжемся<br />с Вами в ближайшее время</p></div>').css({
					'height':'56px',
					'text-align':'center'
					}).appendTo('.mail');
					$('.mail button').hide();
					
					$('.close').live('click', function(){
                        $('.back, .hide, .hide2').hide();
				        return false;
                    });
					
					setTimeout("$('.thanks').fadeOut()", 2500);
					setTimeout("$('.mail button').fadeIn()", 3000);
                }
            }
        });
    });
	$('.zoom').click(function(e){
		e.preventDefault();
		var link = $(this).attr("alt");
		var back = $('<div class=back></div>');
		var art = $('<div class="cert"><img src=' + link + ' class=cer-img><a href="#" class=close></a></div>').css({'width':'500px'});
		var h = $(document).height();
		var w = $(window).width();
		var picW = art.width();
		var modW = $('.hide').width();
		var modH = $('.hide').height();
		var modX = w/2-picW/2;
		back.css({'width':w,'height':h, 'text-align':'center'}).fadeTo("slow", 0.8).appendTo('body');
		art.appendTo('body').css({'left':modX,'top':'2%','width':picW});
	});
	$('.close, .back').live('click', function(){
		$('.back, .cert').remove();
		return false;
	});
});