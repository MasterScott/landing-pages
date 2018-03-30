function init(){    
	var coords = $("#map").data('coord').split(',');
	var center = $("#map").data('center').split(',');
	
    myMap1 = new ymaps.Map ("map", {
        center: [center[0],center[1]],
        zoom: 15
    });
	var myPlacemark1 = new ymaps.Placemark([coords[0],coords[1]], {}, {});
	myMap1.geoObjects.add(myPlacemark1);
}

$(function(){
	

	if ($("#map").length && $("#map").data('coord')) {
		ymaps.ready(init);
	}
	
	
	
    ib.init();
	
    $('.phone').mask('+7 (999) 999-99-99')
	
    $('form').submit(function(){
        return false;
    })
	
	
    ib.vwo_wrapper.on('click','.open-modal',function(){
        var modal = $(this).data('modal');
        ib.showModal(modal);	
       
        return false;
    })
    $('body').on('click','#overlay ,.modals .close',function(){		
        ib.hideModal();	
        return false;
    })	

	
	
})


ib = {
	
    overlay: null,
    modal_dugration : 500,
    vwo_wrapper: null,
	
    errors: {
		
        required: 'Поле не должно быть пустым',
        email: 'Не правильно заполнено поле email'
    },
    init:function(){
        this.vwo_wrapper = $('#root_container');
        this.overlay = $('#overlay');
        this.validation.initAllForms();
    },

    /*
	*	на вход склас/id либо готовый обьект
	*/
    showModal: function(modal){
        if (typeof(modal) != 'object'){
            var modal = $(modal);
        }	
        modal.fadeIn(this.modal_dugration);			
        this.overlay.fadeIn(this.modal_dugration);		
    },	
    hideModal: function(){
        $('.modals > div').fadeOut(this.modal_dugration);			
        this.overlay.fadeOut(this.modal_dugration);		
    },	
    /*
	* На вход число или обьект 
	* и смещение 
	*/
    scroll:function(options){		
        options = $.extend({
            top:0, 
            offset:0,
            dugration:700
        }, options);
        if (typeof(options.top) == 'object'){
            options.top = options.top.offset().top;
        }else if(typeof(options.top) == 'string'){	    	
            options.top = $(options.top).offset().top;	    	
        }	  
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop:options.top+options.offset
        }, options.dugration);
    },
	
    validation:{
		
        initAllForms:function(){
            var that = this;
            $('form').each(function(){		
                var form = $(this); 
                $(this).submit(function(){
                    re = that.validateForm($(this));
                    // выводим ошибки 
                    that.printError($(this),re.errors);
                    //console.log(re)
					var xform = $(this);
                    if (re.status == true){
                        $(this).ajaxSubmit(function (h) {
							if (xform.hasClass('form-login')) {document.location.reload(); return;}
                            if ($('body').data('metrika') && window['yaCounter'+$('body').data('metrika')]) window['yaCounter'+$('body').data('metrika')].reachGoal('request');
							if (window._gaq) _gaq.push(['_trackEvent','Form','Sent']);
                            
                            
                            $('.modals > div').fadeOut(this.modal_dugration);
                            if (form.attr('name') == 'call'){
                                ib.showModal('#success');
                            }else{
                                form.find('.vis').slideUp(500);
                               form.find('.suc').slideDown(500)
                              
                            }
                        });
                    }					
                })
            })
        },
        validateForm: function(form){									
            var error = {
                status:true,
                errors:[]
            }, // типо все ок, чтобы не перепутать				
            that = this;
            form.find('input[type="text"]').each(function(i){
                var $this = $(this),
                type = $this.data('valid'),
                name = $this.attr('name');
                // Если поле обязательное 	
                if ($this.hasClass('required')){
                    // ищем обработчик 
                    if (typeof(type) != 'undefined'){
                        type_status = that[type]($this);	
									
                    }else{
                        // проверяем на заполненость
                        if ($this.hasClass('required')){
                            type_status = that.required($this);
							
                        }
                    }
                    if (!type_status.status){
                        error.status = false;						
                        error.errors[i] = type_status.error;
						
                    };
                }else{
                    // Если не обязательное 
                    // и не пустое 
					
                    if ($(this).val() || $.trim($(this).val()) !== ''){
                        if (typeof(type) != 'undefined'){
                            res = that[type]($this);
                            l(res);
                            if (res.status == false){
                                error.status = false;
                                error.errors[i] = res.error;						
                            };
                        }
                    }else{
                        $(this).removeClass('error')
                    }		
                }	
				
				
            })
            return error;
        },
        /*
		* Проверка на email
		*/
        email:function(input){
            if(!/^[\w0-9.]+@[\w0-9]+(\.[\w0-9]+)+$/.test(input.val())){
                input.addClass('error').removeClass('success');
                return {
                    status:false,
                    error:ib.errors.email
                }
            }else{
                input.removeClass('error').addClass('success');
                return {
                    status:true,
                    error:''
                }
            }		
			
        },
        /*
		* Проверка на заполненость 
		*
		*/
        required:function(input){
            if (!input.val() || $.trim(input.val()) == ''){
                input.addClass('error').removeClass('success');		
				
                return {
                    status:false,
                    error:ib.errors.required
                }
            }else{
                input.removeClass('error').addClass('success');
                return {
                    status:true,
                    error:''
                }
            }
        },
        /*
		* � аспечатка ошибок 
		*/
        printError:function(form, errors){			
            // Сначала производим зачистку
            form.find('span.error').remove();
            form.find('.error-block').empty();
			
            if (form.hasClass('print-error')){
                form.find('input[type="text"]').each(function(i){
                    if (errors[i]){
                        $(this).after('<span class="error">'+errors[i]+'</span>');
                    }
                })	
            }else if(form.find('.error-block').length){
                var i=0;			
                while (i < errors.length) {
                    if (errors[i]){
                        form.find('.error-block').append('<span>'+errors[i]+'</span>');
                    }
                    i++;
                }
            }

        },
	
		
    }
	
}


function l(e){
//console.log(e);
}



function dif(diffSecs) {
    sec = Math.floor(diffSecs % 60);
    mins = Math.floor(diffSecs / 60) % 60;
    hours = Math.floor(diffSecs / 60 / 60) % 24;
    days = Math.floor(diffSecs / 60 / 60 / 24);
    if (weekcounter == 0){
    //hours %= 24;
    //hours = hours * days;
    }else{
		
    }
    //days = Math.floor(diffSecs / 60 / 60 / 24);
    var temp = convert(sec, ['секунда', 'секунды', 'секунд'], true);
    $('.timer .secunds').html(temp[0]);
    $('.string-time .ssecunds').html(temp[1]);	
	
    var temp = convert(mins, ['минута', 'минуты', 'минут'], true);
    $('.timer .minutes').html(temp[0]);
    $('.string-time .mminutes').html(temp[1]);
	
	
    var temp = convert(hours, ['час', 'часа', 'часов'], true);
    $('.timer .hurses').html(temp[0]);
    $('.string-time .hhours').html(temp[1]);
	
    var temp = convert(days, ['день', 'дня', 'дней']);
    $('.timer .days').html(temp[0]);
    $('.string-time .ddays').html(temp[1]);
    /*var temp = convert(days, ['С‡� °СЃ', 'С‡� °СЃ� °', 'С‡� °СЃ� ѕ� І']);
	$('.timer .days').html(temp[0]);
	$('.timer .measure-days').html(temp[1]);*/
    //var temp = convert(days, ['� ґ� µ� ЅСЊ', '� ґ� ЅСЏ', '� ґ� Ѕ� µ� №']);
	

    if (diffSecs > 0)
    {
        t = setTimeout(function() {
            dif(diffSecs - 1)
        }, 1000);
    }
}
function convert(n, ar, tt) {
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
    if (n < 10 && tt == true){
        ee = '0'+n;
    }else{
        ee = n;
    }
    return [ee, ar[l]];
}



