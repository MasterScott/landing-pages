$(document).ready(function(){

    //grafik
    $('.gr_box .gr_block .arr').live('click',function(){
        if($(this).parent().hasClass('open')) {
            $('.gr_box .text').slideUp(100);
            $(this).parent().removeClass('open');
            $('.gr_circle span').removeClass('active');
            return false;
        } else {
            $('.gr_box .text').slideUp(100);
            $('.gr_block').removeClass('open');
            $(this).parent().children('.text').slideDown(100);
            $(this).parent().addClass('open');
            if($(this).parent().hasClass('item1')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item1').addClass('active');
            }
            if($(this).parent().hasClass('item2')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item2').addClass('active');
            }
            if($(this).parent().hasClass('item3')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item3').addClass('active');
            }
            if($(this).parent().hasClass('item4')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item4').addClass('active');
            }
            return false;
        }
    })
    $('.gr_box .gr_block .name').live('click',function(){
        if($(this).parent().hasClass('open')) {
            $('.gr_box .text').slideUp(100);
            $(this).parent().removeClass('open');
            $('.gr_circle span').removeClass('active');
            return false;
        } else {
            $('.gr_box .text').slideUp(100);
            $('.gr_block').removeClass('open');
            $(this).parent().children('.text').slideDown(100);
            $(this).parent().addClass('open');
            if($(this).parent().hasClass('item1')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item1').addClass('active');
            }
            if($(this).parent().hasClass('item2')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item2').addClass('active');
            }
            if($(this).parent().hasClass('item3')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item3').addClass('active');
            }
            if($(this).parent().hasClass('item4')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item4').addClass('active');
            }
            return false;
        }
        return false;
    })
    //colorbox
    $('.sert a, .gallery a').colorbox();

    $('.online_form .submit').on('click',function(event){
        event.preventDefault();
        var url = $('.online_form form').attr('action');
        var template = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        var template2 = /^[0-9-+()]+$/;
        var email = $('.online_form input[name=email]').val();
        var phone = $('.online_form input[name=phone]').val();
        var count = $('.online_form input[name=count]').val();
        var error = false;
        if($('.online_form input[name=name]').val()=='')
        {
            $('.online_form input[name=name]').attr("placeholder","Укажите свое имя");
            error = true;
        }
        if(template.test(email)==false)
        {
            $('.online_form input[name=email]').val('');
            $('.online_form input[name=email]').attr("placeholder","Неправильный e-mail");
            error = true;
        }
        if(template2.test(phone)==false)
        {
            $('.online_form input[name=phone]').val('');
            $('.online_form input[name=phone]').attr("placeholder","Неправильный телефон");
            error = true;
        }
        if(template2.test(count)==false)
        {
            $('.online_form input[name=count]').val('');
            $('.online_form input[name=count]').attr("placeholder","Неправильное количество");
            error = true;
        }
        if(error == true)
            return false;
        $.ajax({
            url:url,
            type:'post',
            data:{'name':$('.online_form input[name=name]').val(),'email':$('.online_form input[name=email]').val(),'phone':$('.online_form input[name=phone]').val(),'count':$('.online_form input[name=count]').val()},
            success: function(data){
                $('#order_ok').dialog('open');
            }
        });
    });
    $('#callback .callback_button').on('click',function(event){
        event.preventDefault();
        var url = $('#callback form').attr('action');
        var template = /^[0-9-+()]+$/;
        var phone = $('#callback input[name=phone]').val();
        var time = $('#callback input[name=time]').val();
        var error = false;
        if($('#callback input[name=name]').val()=='')
        {
            $('#callback input[name=name]').attr("placeholder","Укажите свое имя");
            error = true;
        }
        if(template.test(phone)==false)
        {
            $('#callback input[name=phone]').val('');
            $('#callback input[name=phone]').attr("placeholder","Неправильный телефон");
            error = true;
        }
        if(template.test(time)==false)
        {
            $('#callback input[name=time]').val('');
            $('#callback input[name=time]').attr("placeholder","Неправильное время");
            error = true;
        }
        if(error == true)
            return false;
        $.ajax({
            url:url,
            type:'post',
            data:{'name':$('#callback input[name=name]').val(),'phone':$('#callback input[name=phone]').val(),'time':$('#callback input[name=time]').val()},
            success: function(data){
                $('#callback').dialog('close');
                $('#callback_ok').dialog('open');
            }
        });
    });
    $('#opin .callback_button').on('click',function(event){
        event.preventDefault();
        var url = $('#opin form').attr('action');
        var template = /^[0-9-+()]+$/;
        var phone = $('#opin input[name=phone]').val();
        var error = false;
        if($('#opin input[name=name]').val()=='')
        {
            $('#opin input[name=name]').attr("placeholder","Укажите свое имя");
            error = true;
        }
        if(template.test(phone)==false)
        {
            $('#opin input[name=phone]').val('');
            $('#opin input[name=phone]').attr("placeholder","Неправильный телефон");
            error = true;
        }
        if($('#opin textarea').val()=='')
        {
            $('#opin textarea').attr("placeholder","Напишите отзыв");
            error = true;
        }
        if(error == true)
            return false;
        $.ajax({
            url:url,
            type:'post',
            data:{'name':$('#opin input[name=name]').val(),'phone':$('#opin input[name=phone]').val(),'text':$('#opin textarea').val()},
            success: function(data){
                $('#opin').dialog('close');
                $('#opin_ok').dialog('open');
            }
        });
    });
});