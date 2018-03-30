

var ChangeText = function(){
	var a = $('#country option:selected').val();
	if(a == "BLR"){
		$('input[name*="address"]').attr("placeholder", "Минск, ул. Мележа, д. 10, кв. 24").placeholder();
		$('input[name*="telephone"]').attr("placeholder", "Например:  +375 (29) 101-00-11").placeholder();
		$('input[name*="zip"]').attr("placeholder", "220125").placeholder();
		$('input[name*="name"]').attr("placeholder", "Богданович Иван Николаевич").placeholder();
	}
	else if(a == "KAZ"){
		$('input[name*="address"]').attr("placeholder", "Астана, ул. Джалиля, д. 7, кв. 18").placeholder();
		$('input[name*="telephone"]').attr("placeholder", "Например:  +7 (7172) 34-11-11").placeholder();
		$('input[name*="zip"]').attr("placeholder", "010001").placeholder();
		$('input[name*="name"]').attr("placeholder", "Алиев Георгий Мамбетович").placeholder();
	}
	else if(a == "KGZ"){
		$('input[name*="address"]').attr("placeholder", "Бишкек, ул. Боконбаева, д. 10, кв. 7").placeholder();
		$('input[name*="telephone"]').attr("placeholder", "Например:  +906 52-11-00-11").placeholder();
		$('input[name*="zip"]').attr("placeholder", "720102").placeholder();
		$('input[name*="name"]').attr("placeholder", "Аманбаев Алмазбек Орунбасарович").placeholder();
	}
	else if(a == "UKR"){
		$('input[name*="address"]').attr("placeholder", "Киев, ул. Бассейная, д. 3, кв. 15").placeholder();
		$('input[name*="telephone"]').attr("placeholder", "Например:  +38 (096) 753-18-00").placeholder();
		$('input[name*="zip"]').attr("placeholder", "08170").placeholder();
		$('input[name*="name"]').attr("placeholder", "Шевченко Юрий Викторович").placeholder();
	}
	else if(a == "GEO"){
		$('input[name*="address"]').attr("placeholder", "Тбилиси, ул. Бакинская, д. 7, кв. 18").placeholder();
		$('input[name*="telephone"]').attr("placeholder", "Например:  +995 32-11-12-11").placeholder();
		$('input[name*="zip"]').attr("placeholder", "0133").placeholder();
		$('input[name*="name"]').attr("placeholder", "Болквадзе Зураб Георгиевич").placeholder();
	}
	else if(a == "RUS"){
		$('input[name*="address"]').attr("placeholder", "Москва, ул. Красногвардейская,  д. 16, кв. 98").placeholder();
		$('input[name*="telephone"]').attr("placeholder", "Например:  +7 (495) 988-78-11").placeholder();
		$('input[name*="zip"]').attr("placeholder", "119027").placeholder();
		$('input[name*="name"]').attr("placeholder", "Иванов Иван Иванович").placeholder();
	}
}; 
$(document).ready(function(){
	$("#country").change(function(){
		ChangeText();
	});
	ChangeText();
	$('input[name*="email"]').attr("placeholder", "ivanov@gmail.com").placeholder();
});

$(function(){
	$('.show-description').colorbox({inline:true, width:"830px"});
});
$(function(){
	$('.add-product').toggle(function(){
		$(this).addClass('active');
		$(this).parents('li').addClass('active');
		$(this).next().find(".product_check").attr('checked', 'checked');
		$(this).next().find(".product_check").triggerHandler('click');
	}, function(){
		$(this).removeClass('active');
		$(this).parents('li').removeClass('active');
		$(this).next().find(".product_check").removeAttr('checked', '');
		$(this).next().find(".product_check").triggerHandler('click');
	}); 
});


/*lightbox for other products*/
$(function(){
		 $('.show-description').click(function(){
     $(this).attr('href', '#product' + $(this).siblings('div').find('input[type="hidden"]').val());
		 $(this).parents('li').attr('id', 'product' + $(this).siblings('div').find('input[type="hidden"]').val());
		}); 
});

