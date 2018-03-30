$(document).ready(function(){

	//Проверка поля номера телефона
	var regVp = /^((8|\+7)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{6,11}$/;
    var clname = $('#phone, #o_phone');
    clname.focus(function() {
		if (this.value == this.defaultValue){
		this.value = '';
		}$('#phone, #o_phone').css({'color' : '#000', 'border' : '1px solid #4C8CC9',	'background-color': '#FFF'});
    });
    
	clname.blur(function() {
        var username = $(this).val();
        
        if(username == '') {
            $(this).val(this.defaultValue).css({'color' : '#666', 'border' : '1px solid #CCC'});
        }else if(username.search(regVp) == -1) {
            $(this).css({'border': '1px solid #cc0000',	'background-color': '#FFE4E1'});
        }else {
            $(this).css({'border': '1px solid #00cc00',	'background-color': '#E4FFE1'});
        }
    });

	//Проверка поля имени
	var name = $('#form_name, #o_form_name');
    name.focus(function() {
		if (this.value == this.defaultValue){
			this.value = '';
		}
		$('#form_name').css({'color' : '#000', 'border' : '1px solid #4C8CC9',	'background-color': '#FFF'});
    });
    name.blur(function() {
        var username = $(this).val();
        
        if(username == '') {
            $(this).val(this.defaultValue).css({'color' : '#666', 'border' : '1px solid #CCC'});
        }else {
            $(this).css({'border': '1px solid #00cc00',	'background-color': '#E4FFE1'});
        }
    });	


	//Проверка поля email
	var regVm = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var clmail = $('#o_mail');
    clmail.focus(function() {
		if (this.value == this.defaultValue){
		this.value = '';
		}$('#phone, #o_mail').css({'color' : '#000', 'border' : '1px solid #4C8CC9',	'background-color': '#FFF'});
    });
    
	clmail.blur(function() {
        var usermail = $(this).val();
        
        if(usermail == '') {
            $(this).val(this.defaultValue).css({'color' : '#666', 'border' : '1px solid #CCC'});
        }else if(usermail.search(regVm) == -1) {
            $(this).css({'border': '1px solid #cc0000',	'background-color': '#FFE4E1'});
        }else {
            $(this).css({'border': '1px solid #00cc00',	'background-color': '#E4FFE1'});
        }
    });		
	
/*Всплывающая форма*/
	$('.button').click(function(){
		$('#graybox').fadeIn(function(){
			$('#colback_form').fadeIn();
		});
		
	});
	$('#graybox').click(function(){
		$('#colback_form').fadeOut();
		$(this).fadeOut();
	});	
	//Проверка поля номера телефона (обратный звонок)
	var regVp = /^((8|\+7)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{6,11}$/;
    var clname = $('#c_phone');
    clname.focus(function() {
		if (this.value == this.defaultValue){
		this.value = '';
		}$('#c_phone').css({'color' : '#000', 'border' : '1px solid #4C8CC9',	'background-color': '#FFF'});
    });
    
	clname.blur(function() {
        var userEmail = $(this).val();
        
        if(userEmail == '') {
            $(this).val(this.defaultValue).css({'color' : '#666', 'border' : '1px solid #CCC'});
        }else if(userEmail.search(regVp) == -1) {
            $(this).css({'border': '1px solid #cc0000',	'background-color': '#FFE4E1'});
        }else {
            $(this).css({'border': '1px solid #00cc00',	'background-color': '#E4FFE1'});
        }
    });

	//Проверка поля имени (обратный звонок)
	var name = $('#c_form_name');
    name.focus(function() {
		if (this.value == this.defaultValue){
			this.value = '';
		}
		$('#c_form_name').css({'color' : '#000', 'border' : '1px solid #4C8CC9',	'background-color': '#FFF'});
    });
    name.blur(function() {
        var username = $(this).val();
        
        if(username == '') {
            $(this).val(this.defaultValue).css({'color' : '#666', 'border' : '1px solid #CCC'});
        }else {
            $(this).css({'border': '1px solid #00cc00',	'background-color': '#E4FFE1'});
        }
    });


	//Просмотр дверей	
	$('#catalog>div>div>div, #catalog2>div>div>div, #catalog3>div>div>div, #catalog4>div>div>div, #catalog5>div>div>div, #catalog6>div>div>div').click(function(){
		var that = this;
		$('#graybox').fadeIn(function(){
			$(that).find($(".view_door")).fadeIn(function(){
				$('.btn_close').fadeIn();
			});
		});
	});
	$('#graybox, .btn_close').click(function(){
		$(".view_door").fadeOut();
		$('#graybox, .btn_close').fadeOut();
	});	

	// кнопка заказать
	$('.c_batton, #btn_catalog, #btn_what_us').click(function(){
		$('#graybox').fadeIn(function(){
			$('#order_form').fadeIn();
		});
		$('#idshnick').val($(this).attr('atr'));
	});
	$('#graybox').click(function(){
		$('#order_form').fadeOut();
		$(this).fadeOut();
	});	

	// раскрытие каталогов

	$('#toogle_cat').click(function(){
		$(this).removeClass("catalog_toogle_close").addClass("catalog_toogle_open");
		$('#toogle_cat6, #toogle_cat5, #toogle_cat4, #toogle_cat2, #toogle_cat3').removeClass("catalog_toogle_open").addClass("catalog_toogle_close");	
		$("#catalog").slideDown(function(){
			$('body,html').animate({scrollTop: $('#toogle_cat').offset().top}, 500);
		});			
		$("#catalog6, #catalog5, #catalog4, #catalog3, #catalog2").slideUp(function(){});
	});	
	$('#toogle_cat2').click(function(){
		$(this).removeClass("catalog_toogle_close").addClass("catalog_toogle_open");
		$('#toogle_cat6, #toogle_cat5, #toogle_cat4, #toogle_cat, #toogle_cat3').removeClass("catalog_toogle_open").addClass("catalog_toogle_close");
		$("#catalog2").slideDown(function(){
			$("body,html").animate({"scrollTop": $('#toogle_cat2').offset().top}, 500);
		});			
		$("#catalog6, #catalog5, #catalog4, #catalog, #catalog3").slideUp(function(){});
	});		
	$('#toogle_cat3').click(function(){
		$(this).removeClass("catalog_toogle_close").addClass("catalog_toogle_open");
		$('#toogle_cat6, #toogle_cat5, #toogle_cat4, #toogle_cat2, #toogle_cat').removeClass("catalog_toogle_open").addClass("catalog_toogle_close");	
		$("#catalog3").slideDown(function(){
			$('body,html').animate({scrollTop: $('#toogle_cat3').offset().top}, 500);
		});		
		$("#catalog6, #catalog5, #catalog4, #catalog2, #catalog").slideUp(function(){});
	});	
	$('#toogle_cat4').click(function(){
		$(this).removeClass("catalog_toogle_close").addClass("catalog_toogle_open");
		$('#toogle_cat6, #toogle_cat5, #toogle_cat3, #toogle_cat2, #toogle_cat').removeClass("catalog_toogle_open").addClass("catalog_toogle_close");	
		$("#catalog4").slideDown(function(){
			$('body,html').animate({scrollTop: $('#toogle_cat4').offset().top}, 500);
		});		
		$("#catalog6, #catalog5, #catalog3, #catalog2, #catalog").slideUp(function(){});
	});		
	$('#toogle_cat5').click(function(){
		$(this).removeClass("catalog_toogle_close").addClass("catalog_toogle_open");
		$('#toogle_cat6, #toogle_cat4, #toogle_cat3, #toogle_cat2, #toogle_cat').removeClass("catalog_toogle_open").addClass("catalog_toogle_close");	
		$("#catalog5").slideDown(function(){	
			$('body,html').animate({scrollTop: $('#toogle_cat5').offset().top}, 500);
		});
		$("#catalog6, #catalog4, #catalog3, #catalog2, #catalog").slideUp(function(){});
	});			
	$('#toogle_cat6').click(function(){
		$(this).removeClass("catalog_toogle_close").addClass("catalog_toogle_open");
		$('#toogle_cat5, #toogle_cat4, #toogle_cat3, #toogle_cat2, #toogle_cat').removeClass("catalog_toogle_open").addClass("catalog_toogle_close");	
		$("#catalog6").slideDown(function(){
			$('body,html').animate({scrollTop: $('#toogle_cat6').offset().top}, 500);
		});			
		$("#catalog5, #catalog4, #catalog3, #catalog2, #catalog").slideUp(function(){});	
	});			
	
	
	// Подгрузка полных изображений после загрузки страницы
    // функция замены атрибута img на src
    var changeAttr = function(){
		$('.view_door img[img]').each(function(){
			$(this).attr("src",$(this).attr("img")).removeAttr("img");
		});
    }
    // устанавливаем паузу 2 сек, после чего заменяем атрибуты img на src
    setTimeout(function(){
        changeAttr()}, 
        2000);




		
}); // End of ready

















