// Global JS
// Order CountDown
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
function countdown(yr,m,d){
	theyear=yr;themonth=m;theday=d
	var today=new Date()
	var todayy=today.getYear()
	if (todayy < 1000) todayy+=1900
	var todaym=today.getMonth()
	var todayd=today.getDate()
	var todayh=today.getHours()
	var todaymin=today.getMinutes()
	var todaysec=today.getSeconds()
	var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
	futurestring=montharray[m-1]+" "+d+", "+yr
	dd=Date.parse(futurestring)-Date.parse(todaystring)
	dday=Math.floor(dd/(60*60*1000*24)*1)
	dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
	dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
	dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
	if(dday==0&&dhour==0&&dmin==0&&dsec==1){
		$('#time').text('');
		return
	} else {
		if(dhour < 10) dhour = '0'+dhour;
		if(dmin < 10) dmin = '0'+dmin;
		if(dsec < 10) dsec = '0'+dsec;
		$('#time').text(dhour+":"+dmin+":"+dsec);
	}
	setTimeout("countdown(theyear,themonth,theday)",1000)
}

// Check Order Form
function check_form() {
	var valid = 1;
	var country = $('#country').val();
	var text_error = 			'<span class="errorMedium">Пожалуйста заполните это поле</span>';
	var fio_error = 			'<span class="errorMedium">Укажите корретные ФИО</span>';
	var zip_error = 			'<span class="errorMedium">Укажите индекс</span>';
	var text_index_error = 		'<span class="errorMedium">Индекс заполнен неправильно</span>';
	var text_city_error = 		'<span class="errorMedium">Укажите ваш город</span>';
	var text_address_error = 	'<span class="errorMedium">Укажите полный адрес</span>';
	var text_phone1_error = 	'<span class="errorMedium">Укажите телефон</span>';
	var text_phone2_error = 	'<span class="errorMedium">Номер телефона должен быть с кодом города</span>';

	var fio_length = $('#name').val().length;
	if($('#name').val() == '') {
		valid = 0;
		$('#error_name').show().html(fio_error);
		$('#note_name').hide();
	} else if (fio_length <= 6) {
		valid = 0;
		$('#error_name').show().html(fio_error);
		$('#note_name').hide();
	} else {
		$('#error_name').hide();
		$('#note_name').show();
	}
	if($('#address').val() == '') {
		valid = 0;
		$('#error_address').show().html(text_address_error);
		$('#note_address').hide();
	} else if(!/\d+/.test($('#address').val()) || /^\d+$/.test($('#address').val())) {
		valid = 0;
		$('#error_address').show().html(text_address_error);
		$('#note_address').hide();
	} else {
		$('#error_address').hide();
		$('#note_address').show();
	}

	var phone_length = $('#phone').val().length;
	if($('#phone').val() == '') {
		valid = 0;
		$('#error_phone').show().html(text_phone1_error);
		$('#note_phone').hide();
	} else if(phone_length < 7 ){
		valid = 0;
		$('#error_phone').show().html(text_phone2_error);
		$('#note_phone').hide();
	} else {
		$('#error_phone').hide();
		$('#note_phone').show();
	}

	if(valid == 1) {
		if (typeof window['counter_start'] == 'function') {
			counter_start();
		}
	
		document.order_all.submit();
	} else {
		$('#forms_errors').show();
	}
}
cntry_selector = '#country';
quantity_selector = '#int_product_count';

$(document).ready(function() {
	$(cntry_selector).on('change', function() {
		upd_int();
	});
	$(quantity_selector).on('keyup', function() {
		if ($(this).val() < 1) {
			$(this).val(1);
		}
		upd_int();
	});

	$(".close").click(function() {
	  $(".banner").hide();
	});
	
	$(".more li.first").click(function(){	
		$(".more-comment").slideToggle("normal"); 
	});
	
	$(".more li.response").click(function(){	
		$(".block-response").slideToggle("normal"); 
		$(this).hide(); 
	});
	
	$(".more-link").click(function(){	
		$(this).parent() .find('.more-content').slideToggle("normal"); 
		
		return false;
	});
 });

function upd_int() {
	curs 	= $(cntry_selector).children(":selected").val();
	count 	= $(quantity_selector).val();
	if($.isNumeric(count)){
		count 	= $(quantity_selector).val();
	}else{
		count = 1;
	}
	prod_info = $jsonData.prices[curs];
	total = (prod_info.price + prod_info.delivery_price + prod_info.tax_price);
	$(".int_price_show").text(prod_info.price * count + " " + prod_info.currency);
	$(".int_price_delivery").text(prod_info.delivery_price * count + " " + prod_info.currency);
	$(".int_price_total").text(total * count + " " + prod_info.currency);
	$(".int_price_old").text(prod_info.old_price * count + " " + prod_info.currency);
	$("#note_phone b").text(prod_info.phone_template);
	$("#product_count").val(count);

}



















