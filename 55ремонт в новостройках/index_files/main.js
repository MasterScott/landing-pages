var time = Math.round( ( (new Date("07/30/2014 23:59:59").getTime()) - (new Date().getTime()) )/1000 );

$(document).ready(function(){
	$("input, textarea").placeholder();
	$(".form-phone").mask("8 (999) 999-99-99");

	$(".menu ul a").click(function(){$.scrollTo($(this).attr("href"),800,{offset: {top: -30, left:0}});return false;});
	
	$("a.download").click(function(){yaCounter18491845.reachGoal("Download");});
	
	$(document).bind("scroll", function() {
		if ( $(document).scrollTop() > $(".header").offset().top + $(".header").outerHeight() )
			$(".menu").addClass("fixed");
		else
			$(".menu").removeClass("fixed");
	});
	
	if ( $(document).scrollTop() > $(".header").offset().top + $(".header").outerHeight() )
		$(".menu").addClass("fixed");
	else
		$(".menu").removeClass("fixed");
		
		
	$("#form1").click(function(){
		$("#call-form").fadeIn();
		$("#call-form .close").click(function(){$("#call-form").fadeOut();});
	});	

	$("#services .item span, #services .block .button").click(function(){
		var item = $(this).parents(".item");
		if( item.hasClass("i5") ) 
		{
			$("#service-form h2 span").text("Согласование перепланировок");
			$("#service-form .form-title").text("7");
		}
		else if( item.hasClass("i6") ) 
		{
			$("#service-form h2 span").text("Ремонтные работы");	
			$("#service-form .form-title").text("8");
		}
		else if( item.hasClass("i7") )
		{
			$("#service-form h2 span").text("Комплектация объекта");
			$("#service-form .form-title").text("9");
		}
		else
		{
			$("#service-form h2 span").text("Комплект из четырех проектов");	
			$("#service-form .form-title").text("6");
		}
		
		$("#service-form").fadeIn();
		$("#service-form .close").click(function(){$("#service-form").fadeOut();});
	});	


	$("#portfolio .item .button").click(function(){
		$("#portfolio-popup h2").text( $(this).parents(".item").find(".name").text() );
		$("#portfolio-popup .content").html( $(this).parents(".item").find(".content").html() );
		$("#portfolio-popup .main").css("background-image", "url("+$("#portfolio-popup .thumbs img:eq(0)").attr("src").replace("-t","")+")" );
		$("#portfolio-popup .thumbs img").click(function(){
			$("#portfolio-popup .main").css("background-image", "url("+$(this).attr("src").replace("-t","")+")" );
		});
		$("#portfolio-popup").fadeIn();
		$("#portfolio-popup .close").click(function(){$("#portfolio-popup").fadeOut();});
	});
	
	
	$(".visualization").click(function(){
		var current=1;
		var titles=[];
		titles[1]="Визуализация кухни";
		titles[2]="Визуализация спальной комнаты";
		titles[3]="Визуализация гостинной";
		
		$("#visualization-popup .content").css("background-image","url(pics/visualization"+current+".jpg)");
		$("#visualization-popup span").text(titles[current]);
		
		$("#visualization-popup .left").hide();
		
		$("#visualization-popup").fadeIn();
		$("#visualization-popup .close").click(function(){$("#visualization-popup").fadeOut();});
		
		$("#visualization-popup").delegate(".left","click", function(){
			if( current>1 ) 
			{
				current--;
				$("#visualization-popup .content").css("background-image","url(pics/visualization"+current+".jpg)");
				$("#visualization-popup span").text(titles[current]);
			}
			if(current==1) $("#visualization-popup .left").hide(); else $("#visualization-popup .left").show();
			if(current==3) $("#visualization-popup .right").hide(); else $("#visualization-popup .right").show();
		}).delegate(".right","click", function(){
			if( current<3 ) 
			{
				current++;
				$("#visualization-popup .content").css("background-image","url(pics/visualization"+current+".jpg)");
				$("#visualization-popup span").text(titles[current]);
			}
			if(current==1) $("#visualization-popup .left").hide(); else $("#visualization-popup .left").show();
			if(current==3) $("#visualization-popup .right").hide(); else $("#visualization-popup .right").show();
		});
		
	});
	
	
	$(".plan").click(function(){
		var current=1;
		
		$("#plans-popup .slides").hide();
		$("#plans-popup .item"+current).show();
		
		$("#plans-popup .left").hide();
		
		$("#plans-popup").fadeIn();
		$("#plans-popup .close").click(function(){$("#plans-popup").fadeOut();});
		
		$("#plans-popup").delegate(".left","click", function(){
			if( current>1 ) 
			{
				current--;
				$("#plans-popup .slides").hide();
				$("#plans-popup .item"+current).show();
			}
			if(current==1) $("#plans-popup .left").hide(); else $("#plans-popup .left").show();
			if(current==3) $("#plans-popup .right").hide(); else $("#plans-popup .right").show();
		}).delegate(".right","click", function(){
			if( current<3 ) 
			{
				current++;
				$("#plans-popup .slides").hide();
				$("#plans-popup .item"+current).show();
			}
			if(current==1) $("#plans-popup .left").hide(); else $("#plans-popup .left").show();
			if(current==3) $("#plans-popup .right").hide(); else $("#plans-popup .right").show();
		});
		
	});
	
	
	$(".form .button").click(function(){
		
		var form = $(this).parents(".form");
		
		var name = form.find(".form-name").val();
		var phone = form.find(".form-phone").val();
		var type = form.find(".form-title").text();
		if( $.trim(name)!="" && $.trim(phone)!="" )
		{
			$.ajax({
				type: "POST",
				url: "post.php",
				data: "name="+name+"&phone="+phone+"&type="+type
			}).done(function( msg ) {
				if(msg!="") 
				{
					yaCounter18491845.reachGoal("SubmitForm");
					
					$(".ds").hide();
					
					$("#ok-popup").fadeIn();
					$("#ok-popup .close").click(function(){$("#ok-popup").fadeOut();});
					form.find(".form-name").val("");
					form.find(".form-phone").val("");
				}
				else
					alert("Произошла ошибка! Попробуйте еще раз.");
			});

			
		}
		else
			alert("Укажите Ваше имя и номер телефона!");
	});
	
	
	setInterval(function(){
		if(time>0){
			time--;
			var d=Math.floor(time/86400);
			var h=Math.floor((time-d*86400)/3600);
			var m=Math.floor((time-d*86400-h*3600)/60);
			var s=time-d*86400-h*3600-m*60;
			
			$(".day").text( d<10?"0"+d:d );
			$(".hour").text( h<10?"0"+h:h );
			$(".min").text( m<10?"0"+m:m );
			$(".sec").text( s<10?"0"+s:s );
		}
	},1000);
	
});
$(window).load(function() {
	$("#slider").nivoSlider({effect:"fade",controlNav: false, prevText: "", nextText: ""});
});