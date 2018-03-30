/* Скрипты аккордеонов и табов
* Работают на jQuery
* Copyright (c) 2013 Александр Ильин для веб-студии "Системные решения"
*/



// АККОРДИОН
jQuery(function(){
  jQuery('.accordion .trigger').next().hide();
  jQuery('.accordion').each(function(i,e){ // по умолчанию: раскрываем первую вкладку или ту, на которую указывает #хеш адреса
    var ac = jQuery(e).children('.trigger'+location.hash);
	if (!ac.length) ac = jQuery(e).children('.trigger:first');
    ac.eq(0).addClass('active').next().show();
  });
  jQuery('.accordion .trigger').click(function(ev){ // раскрываем вкладку по клику
    if (jQuery(this).hasClass('active')) return false;
    jQuery('.trigger.active',ev.currentTarget.parentNode).removeClass('active').next().slideUp();
    jQuery(this).toggleClass('active').next().slideDown();
    return false;
  });
})

// ТАБЫ
jQuery(function(){
  jQuery('.tabs .trigger').next().hide();
  jQuery('.tabs').each(function(i,e){
    var ac = jQuery(e).children('.trigger'+location.hash);
	if (!ac.length) ac = jQuery(e).children('.trigger:first');
    if (!jQuery('.container',e).length) jQuery(e).append('<div class="container"></div>');
    jQuery('.container',e).html(ac.eq(0).addClass('active').next().html())
  });
  jQuery('.tabs .trigger').click(function(ev){
    if (jQuery(this).hasClass('active')) return false;
    jQuery('.trigger.active',ev.currentTarget.parentNode).removeClass('active');
	jQuery('.container',ev.currentTarget.parentNode).html(jQuery(this).addClass('active').next().html());
    return false;
  })
})
