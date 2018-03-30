var IE = /*@cc_on!@*/false;
var IE6 = (IE && (navigator['appVersion'].indexOf('MSIE 6') > 0)) ? true : false
var IE7 = (IE && (navigator['appVersion'].indexOf('MSIE 7') > 0)) ? true : false;
var IE8 = (IE && (navigator['appVersion'].indexOf('MSIE 8') > 0)) ? true : false;
var uagent = navigator.userAgent.toLowerCase();
var _android = (uagent.search('android') > -1);
var _ios = (uagent.search('iphone') > -1 || uagent.search('ipod') > -1 || uagent.search('ipad') > -1);

$(function() {
 $(document).ready(function(){
						
	$.easing.def = 'easeOutQuart';	
	//if (!_ios && !_android) { _ios = true; }
	if (_android) { $("body").addClass("android"); }
	if (_ios) { $("body").addClass("ios"); }

	var fts = [ 'events', 'places', 'friends', 'compare' ];
	var uh = (document.location.hash+'#///').split('#')[1].split('/');
	var ft = ($.inArray(uh[2],fts)!=-1) ? uh[2] : 'compare';
	
	var $featureTabs = $("div.feature-tab"),
		$featureSelect = $("ul.feature-tabs li a");
	
	$featureTabs.each(function(i){
		if ($(this).hasClass('feature-tab-'+ft)) { 
			$featureTabs.removeClass('active'); $(this).addClass('active');
			$featureSelect.removeClass('active').eq(i).addClass('active');
		}
	});	
	
	$featureSelect.each(function(i){
		$(this).click(function(){
			$featureSelect.removeClass('active');
			$(this).addClass('active');
			$featureTabs.removeClass('active').filter('.feature-tab-'+($(this).attr('href')+'').split('/')[2]).addClass('active');
		});
	});
	
	var $dvcs = $("div.devices"), dvcAnimDelay = 500, dvcAnimSpeed = 700;
	$("div.dvc").each(function(i){
		var $dvc = $(this);
		if ($dvcs.hasClass('anim') && !IE) {
			setTimeout(function(){ 
				$dvcs.removeClass('anim');
				var dvcTop = parseInt($dvc.find('.device').css('top')),
					dvcRflTop = parseInt($dvc.find('.reflect').css('top')),
					dvcLeft = parseInt($dvc.find('.device').css('left')),
					dvcRflLeft = parseInt($dvc.find('.reflect').css('left'));
				$dvcs.addClass('anim');
				$dvc.find('.device').animate({ opacity: 1, top: dvcTop, left: dvcLeft },dvcAnimSpeed);
				$dvc.find('.reflect').animate({ opacity: 1, top: dvcRflTop, left: dvcRflLeft },dvcAnimSpeed,function(){ if (i==$("div.dvc").length-1) { $dvcs.removeClass('anim'); } });
			},i*dvcAnimDelay);
		}
	});
	
	//$("div.under").switchDevices();


	/* tweet */
	$(".twitter .wrap p").tweet({
        join_text: false,
        username: "crowdspottr	",
        count: 1,
		template: function(i){
			$(".twitter .wrap h4").append(" <small>" + $(i['time']).html() + "</small>"); 
			return i['text']; 
		},
        loading_text: "loading..."
    });
	
	
	/* subscribe */
	$("input.email").bind("click focus",function(){ $(this).closest('span').addClass('active'); if ($(this).val()==$(this).attr("title")) { $(this).val(''); } }).blur(function(){ if ($(this).val()=='') { $(this).val($(this).attr("title")); } }).blur(function(){ $(this).closest('span').removeClass('active'); });
	
	$("input.submit").each(function(){
		$(this).click(function(e){
			var $form = $(this).closest('form'), $email = $form.find("input.email"), $s = $form.parent();
			e.preventDefault();
			if ($email.val()=='' || $email.val()==$email.attr("title")) {
				$form.subscribeError('Please fill out the form correctly.');
			} else {
				$.post("em.php", $form.serialize(), function (data) {
					if (data==1) {
						$form.subscribeError('Thanks!');
						setTimeout(function(){ $s.find("div.subscribe-error").animate({ opacity: 0, bottom: '-10px' },200,function(){ $(this).remove(); }); },5000);
						$form[0].reset();
					} else {
						var msg = '';
						switch (data) {
							case '-1': msg = 'Please provide an e-mail address!'; break;
							case '-2': msg = 'Please provide a valid e-mail address!'; break;
							case '-3': msg = 'System error.'; break;
							case '-4': msg = 'Already subscribed.'; break;
							case '-5': msg = 'System error.'; break;
							case '-6': msg = 'Please fill out the form correctly!'; break;
							case '-7': msg = 'Please provide a valid e-mail address!'; break;
							case '-8': msg = 'Please provide a valid e-mail address!'; break;
						}						
						$form.subscribeError(msg);					
					}
				});
			}
		});	
	});	
	
	$.fn.subscribeError = function(txt) {
		$.easing.def = "easeOutExpo";
		var $s = $(this).parent();
		$s.find("div.subscribe-error").remove();
		$s.append('<div class="subscribe-error">' + txt + '</div>');
		if ($s.hasClass('beta-subscribe')) {
			if (_ios || _android) {
				$s.find("div.subscribe-error").css({ opacity: 0, bottom: '-15px' }).animate({ opacity: 1, bottom: '-25px' },400).click(function(){ $(this).animate({ opacity: 0, bottom: '-20px' },200,function(){ $(this).remove(); }); });
			} else {
				$s.find("div.subscribe-error").css({ opacity: 0, bottom: '-120px' }).animate({ opacity: 1, bottom: '-130px' },400).click(function(){ $(this).animate({ opacity: 0, bottom: '-120px' },200,function(){ $(this).remove(); }); });
			}
		} else if (_ios || _android) {
			$s.find("div.subscribe-error").css({ opacity: 0, bottom: '-25px' }).animate({ opacity: 1, bottom: '-35px' },400).click(function(){ $(this).animate({ opacity: 0, bottom: '-30px' },200,function(){ $(this).remove(); }); });
		} else {
			$s.find("div.subscribe-error").css({ opacity: 0, bottom: '-5px' }).animate({ opacity: 1, bottom: '-15px' },400).click(function(){ $(this).animate({ opacity: 0, bottom: '-10px' },200,function(){ $(this).remove(); }); });
		}
	};
	
	/* about + video */
	if (!_ios && !_android) {
		$("div.video a.video, li.step3 a.video").click(function(e){
			e.preventDefault();
			$("div.video-overlay").height( $("body").height() ).width( $("body").width() ).fadeIn(200,function(){
				setTimeout(function(){ 
					$("div.video-overlay .video").show().css({ 'margin-top': 'auto', top: ($(window).scrollTop() + (($(window).height() - $("div.video-overlay .video").height())/2))+'px' }).find("iframe").attr("src", "http://www.youtube.com/embed/sCPQekt_hrk?hd=1&autoplay=1"); 
				},500);
				$(this).click(function(){ $(this).hide().find("div.video").hide().find("iframe").attr("src", "about:blank"); });
			});
		});
	}	
	
 });
});

$.fn.switchDevices = function(){
	
	$(this)
		.mouseover(function(){
			//console.log("mouseover");
			switchDevice = setTimeout(function(){
				//console.log("switch");
				window.clearTimeout(switchDevice);
				if ($("div.devices").hasClass("switching")) {
					return;	
				}
				$("div.devices").addClass("switching");
				var underPos = parseInt($("div.under").css('left'))<parseInt($("div.top").css('left')) ? 'left' : 'right';
				//console.log(underPos);
				switch (underPos) {
					case "left":
						var overlap = parseInt($("div.under").css('left'))+$("div.under").width() - parseInt($("div.top").css('left')),
							move = Math.ceil( overlap/2 ),
							underSteps = [
								[ Math.floor($("div.under img").width()/85*92), Math.floor($("div.under img").height()/85*92) ],
								[ Math.floor($("div.under img").width()/85*100), Math.floor($("div.under img").height()/85*100) ]
							],
							topSteps = [
								[ Math.floor($("div.top img").width()/100*92), Math.floor($("div.top img").height()/100*92) ],
								[ Math.floor($("div.top img").width()/100*85), Math.floor($("div.top img").height()/100*85) ]
							],
							underTarget = [ ],
							topTarget = [ 140, 220 ];
							//console.log(topTarget);

						$("div.under").animate({ left: '-='+move+'px', top: '-=20px' });
						$("div.under img").animate({  width: underSteps[0][0]+'px', height: underSteps[0][1]+'px' });
						$("div.top img").animate({ width: topSteps[0][0]+'px', height: topSteps[0][1]+'px' });
						$("div.top").animate({ left: '+='+move+'px', top: '+=20px' },function(){ 
							$("div.top, div.under").toggleClass('top').toggleClass('under'); 
							$("div.top").animate({ left: '+='+move+'px' });
							$("div.top img").animate({ width: underSteps[1][0]+'px', height: underSteps[1][1]+'px' });
							$("div.under img").animate({ width: topSteps[1][0]+'px', height: topSteps[1][1]+'px' });
							$("div.under").animate({ left: topTarget[0]+'px', top: topTarget[1]+'px' }, function(){
								$("div.devices").removeClass("switching"); 
								$("div.under").unbind('mouseover').removeAttr('style').switchDevices();
							});
						});
					break;
					
					case "right":
						var overlap = parseInt($("div.top").css('left'))+$("div.top").width() - parseInt($("div.under").css('left')),
							move = Math.ceil( overlap/2 ),
							underSteps = [
								[ Math.floor($("div.under img").width()/85*92), Math.floor($("div.under img").height()/85*92) ],
								[ Math.floor($("div.under img").width()/85*100), Math.floor($("div.under img").height()/85*100) ]
							],
							topSteps = [
								[ Math.floor($("div.top img").width()/100*92), Math.floor($("div.top img").height()/100*92) ],
								[ Math.floor($("div.top img").width()/100*85), Math.floor($("div.top img").height()/100*85) ]
							];
						
						$("div.under").animate({ left: '+='+move+'px', top: '-=20px' });
						$("div.under img").animate({  width: underSteps[0][0]+'px', height: underSteps[0][1]+'px' });
						$("div.top img").animate({ width: topSteps[0][0]+'px', height: topSteps[0][1]+'px' });
						$("div.top").animate({ left: '-='+move+'px', top: '+=20px' },function(){ 
							$("div.top, div.under").toggleClass('top').toggleClass('under'); 
							$("div.top").animate({ left: '-='+move+'px' });
							$("div.top img").animate({ width: underSteps[1][0]+'px', height: underSteps[1][1]+'px' });
							$("div.under img").animate({ width: topSteps[1][0]+'px', height: topSteps[1][1]+'px' });
							$("div.under").animate({ left: '+='+move+'px' }, function(){ 
								$("div.devices").removeClass("switching");
								$("div.top").removeAttr('style');
								$("div.under").unbind('mouseover').removeAttr('style').switchDevices();
							});
						});
					break;
				}
			},500);
		})
		.mouseout(function(){
			window.clearTimeout(switchDevice);				   
		});		
		
};

$(function(){$('a[href*=#]').click(function(){
	var $target = $('a[name="'+(this.hash+'').split('#')[1]+'"]');
	var targetOffset = $target.offset().top;
	if (!$('html').hasClass('scrolling') && (targetOffset < ($(window).scrollTop() + $(window).height()) || targetOffset > ($(window).scrollTop() + $(window).height()))) {
		$('html,body').addClass('scrolling').animate({scrollTop: targetOffset },1000,function(){ $('html,body').removeClass('scrolling'); });
	}
	document.location.hash = this.hash;
	return false;
	});
});