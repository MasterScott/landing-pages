jQuery(document).ready(function() {
			$("input[type='text']").focus(function(){
				if(this.value==this.defaultValue)this.value='';
			});
			$("input[type='text']").blur(function(){
				if(this.value=='')this.value=this.defaultValue;
			});
			$("textarea").focus(function(){
				if(this.value==this.defaultValue)this.value='';
			});	
			$("textarea").blur(function(){
				if(this.value=='')this.value=this.defaultValue;
			});

			var kurs = "none";
			$( "#phone-f-butt" ).click(function(e) {
				e.preventDefault();
				show4('block');
			});			
			$( ".besplatnoe" ).click(function(e) {
				show5('block');
				kurs = $(this).attr('kurs');
			});	

			
			$( ".zvonok-butt-go" ).click(function(e) {
				e.preventDefault();
				var name = $(this).parent().find(".inp-zvat").val();
				var phone = $(this).parent().find(".inp-phone").val();
				var time = $(this).parent().find(".inp-time").val();
				if(phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) {
					$.post(
						"form-call.php",
						{
							name: name,
							phone: phone,
							time: time
						},
						function(){
							show4('none');
							//show('block');
							window.location = 'callorder.php';
						}
					);
				} else {
					alert("¬ы неправильно запонили одно из полей.");
				}				
			});	


			$( ".zanatie-butt-go" ).click(function(e) {
				e.preventDefault();
				var name = $(this).parent().find(".inp-name").val();
				var phone = $(this).parent().find(".inp-phone").val();
				var mail = $(this).parent().find(".inp-mail").val();
				var text = $(this).parent().find(".textarea-text").val();
				if(phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) && mail.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)) {
					$.post(
						"form-order.php",
						{
							name: name,
							phone: phone,
							mail: mail,
							text: text,
							kurs: kurs
						},
						function(){
							show5('none');
							//show3('block');
							window.location = 'freeclass.php';
						}
					);
				} else {
					alert("¬ы неправильно запонили одно из полей.");
				}				
			});			
			

});