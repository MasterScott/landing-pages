$(document).ready(function(){
	$("#order_form").validate({
	highlight: function(element){
		$(element).parents('.row').removeClass("valid");
		$(element).parents('.row').addClass("error");
    },
    unhighlight: function(element) {
			$(element).parents('.row').removeClass("error");
			$(element).parents('.row').addClass("valid");
    },
		rules: {

			telephone: "required",
			
			
		},
		messages: {
			telephone: {
				required: 'введите телефон (с международным кодом)',
			},
			

			
		},
  });
});

