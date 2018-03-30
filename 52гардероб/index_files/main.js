jQuery(document).ready(function($) {

    $(".form-lb").fancybox();

    $(".fancybox").fancybox({
            helpers     : {
                title   : { type : 'inside' },
                buttons : {}
            }
    });


    $("a.scroll").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500
        });
        return false;
    });
	
	// $('input').focus(function () {
	// 	if ($(this).val() == $(this).attr("title")) {
	// 		$(this).val("");
	// 	}
	// }).blur(function () {
	// 	if ($(this).val() == "") {
	// 		$(this).val($(this).attr("title"));
	// 	}
	// });

	$(".tel .show-panel").click(function(){
        $(".lbBg, .feedback").fadeIn(300);
    })
	$(".b-bl .show-panel").click(function(){
        $(".lbBg, .buy").fadeIn(300);
    })

    $(".close-panel, .lbBg").click(function(){
        $(".lbBg, .lightbox-panel").fadeOut(300);
    })


    $(".feedback form").validate();
    $(".free-consult form").validate();
    $(".know-all form").validate();
    $("header form").validate();
    $("footer form").validate();

    $("#buy1 form").validate();
    $("#buy2 form").validate();
    $("#buy3 form").validate();
    $("#buy4 form").validate();
    $("#buy5 form").validate();

    $(".every1 form").validate();
    $(".every2 form").validate();
    $(".every3 form").validate();
    $(".every4 form").validate();
    $(".every5 form").validate();
    $(".every6 form").validate();



    $('.every1 form').ajaxForm(
        function() { 
        jQuery('.every1 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 
    $('.every2 form').ajaxForm(
        function() { 
        jQuery('.every2 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 
    $('.every3 form').ajaxForm(
        function() { 
        jQuery('.every3 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 
    $('.every4 form').ajaxForm(
        function() { 
        jQuery('.every4 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 
    $('.every5 form').ajaxForm(
        function() { 
        jQuery('.every5 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 
    $('.every6 form').ajaxForm(
        function() { 
        jQuery('.every6 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 


    $('.feedback form').ajaxForm(
        function() { 
        jQuery('.feedback form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 


    $('.free-consult form').ajaxForm(
        function() { 
        jQuery('.free-consult form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 


    $('.know-all form').ajaxForm(
        function() { 
        jQuery('.know-all form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    });


    $('footer form').ajaxForm(
        function() { 
        jQuery('footer form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 

    $('header form').ajaxForm(
        function() { 
        jQuery('header form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 


    $('#buy1 form').ajaxForm(
        function() { 
        jQuery('#buy1 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 


    $('#buy2 form').ajaxForm(
        function() { 
        jQuery('#buy2 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 


    $('#buy3 form').ajaxForm(
        function() { 
        jQuery('#buy3 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 


    $('#buy4 form').ajaxForm(
        function() { 
        jQuery('#buy4 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 


    $('#buy5 form').ajaxForm(
        function() { 
        jQuery('#buy5 form').html("<div class='message'></div>");
        jQuery('.message').html("<h2>Спасибо, <br />что выбрали нас!</h2>")
            .append("<p>Мы свяжемся с Вами<br />в течение 2 часов в рабочее время.</p>")
            .hide()
            .fadeIn(1500, function() {$('.message').append("<i class=\"icon-ok\"></i>");
            });
    }); 

    $(".every-block1 .show-panel").click(function() {
        $(".every1").fadeIn('slow');
    });
    $(".every-block2 .show-panel").click(function() {
        $(".every2").fadeIn('slow');
    });
    $(".every-block3 .show-panel").click(function() {
        $(".every3").fadeIn('slow');
    });
    $(".every-block4 .show-panel").click(function() {
        $(".every4").fadeIn('slow');
    });
    $(".every-block5 .show-panel").click(function() {
        $(".every5").fadeIn('slow');
    });
    $(".every-block6 .show-panel").click(function() {
        $(".every6").fadeIn('slow');
    });

    $(".buy-forms .button .show-panel").click(function() {
        $(this).parent().hide();
        $(this).parent().parent().siblings("form").fadeIn('slow');
    });




});