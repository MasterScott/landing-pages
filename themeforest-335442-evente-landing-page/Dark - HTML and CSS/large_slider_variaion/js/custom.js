// JavaScript Document
Cufon.replace('h1,h2,h3,h4,#header p');  
Cufon.replace('.button_1 a,.button_2 a',{textShadow: '0px 1px 0px #e80000'}); 

//Countdown
$(function () {
	jQuery('#defaultCountdown').countdown({
	until: new Date(2011, 8 - 1, 26, 0, 0, 0), 
	format: 'DHMS',
	layout: '<div id="vals">'+
				                '<div id="d" class="numbers">{dnn}</div>'+
								'<div id="h_name" class="numbers">days </div>'+
								'<div id="h" class="numbers">{hnn}</div>'+
								'<div id="h_name" class="numbers">hours </div>'+
								'<div id="m" class="numbers">{mnn}</div>'+
								'<div id="m_name" class="numbers">minutes</div>'+
								'<div id="s" class="numbers">{snn}</div>'+
								'<div id="s_name" class="numbers">seconds to go</div>'+
							    '</div>'
});
	Cufon.replace('#defaultCountdown', { fontFamily: 'Qlassik Bold'});   // this will replace everything in the defaultCountdown div with your font	
});
   
$(document).ready(function() {

//Fancybox for image / partner gallery
$("a[rel=next]").fancybox({
		'opacity'		: true,
		'overlayShow'	       : true,
		'overlayColor': '#000000',
		'overlayOpacity'     : 0.9,
		'titleShow':true,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic'
});

//Nivo slider
$('#slider').nivoSlider({
        effect:'random', // Specify sets like: 'fold,fade,sliceDown'
        slices:15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed:500, // Slide transition speed
        pauseTime:3000, // How long each slide will show
		pauseOnHover:true,
       directionNav:true, // Next & Prev navigation
        directionNavHide:true, // Only show on hover
        controlNav:false // 1,2,3... navigation
});

//List animation
$('#content_1 ul li').hover(function() { //mouse in
    $(this).animate({ marginLeft: '5px' }, 200);
  }, function() { //mouse out
    $(this).animate({ marginLeft: 0 }, 200);
});

//On Hover Event for social, speaker_social, gallery image 
$('#footer li a img,ul.speaker_social li a img,#gallery li a').hover(function(){
			$(this).animate({opacity: 0.6}, 300);
		}, function () {
			$(this).animate({opacity: 1}, 300);
});

//Tipsy plugin
$('.tipsy_hover').tipsy({fade: true, gravity: 's'});

//Contact form
$(function() {
		var v = $("#form").validate({
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					target: "#result",
					clearForm: true
				});
			}
		});
		
});	
$('#form #message').val('');

//Subscribe form
$(function() {
		var v = $("#subform").validate({
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					target: "#result_sub",
					clearForm: true
				});
			}
		});
		
});

});	//document ready closed
	
	
