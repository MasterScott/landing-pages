$(document).ready(function(){

	$("#calc-square").val(20);
	$("#calc-angles-quantity").val(4);
	$("#calc-light-quantity").val(1);
	$(".calc-form").find("input:text").on('keyup change',function () {
		var _value = $(this).val(),
			max = $(this).is("#calc-square")? 999: 99,
			min = $(this).is("#calc-angles-quantity")? 4: ($(this).is("#calc-square")? 1: 0);

		_value = $(this).is("#calc-light-quantity")? ($(this).val() == ""? 0: $(this).val()): _value;
		if (/\d/.test(_value) && parseInt(_value) >= min && parseInt(_value) <= max) {

			$(this).removeClass("error").popover('hide');

			var $form = $(this).closest("form"),
				square = parseInt($form.find("#calc-square").val()),
				angleQuantity = parseInt($form.find("#calc-angles-quantity").val()),
				lightQuantity = parseInt($form.find("#calc-light-quantity").val() != ""? $form.find("#calc-light-quantity").val(): 0),
				$priceBlock = $form.siblings(".price-block").find(".price"),
				$priceBlockCredit = $form.siblings(".price-block").find(".js-price-credit");

			var summary = Math.round(square * 350 + Math.sqrt(square) * 4 * 120 + angleQuantity * 240 + lightQuantity * 350),
				therest = (summary % 1000).toString(),
				thousands = Math.floor(summary / 1000);

			// for credit
			var summaryCredit = Math.round(summary / 8),
				therestCredit = (summaryCredit % 1000).toString(),
				thousandsCredit = Math.floor(summaryCredit / 1000);

			if (therest.toString().length == 1) {
				therest = "00" + therest;
			}

			if (therest.toString().length == 2) {
				therest = "0" + therest;
			}

			if (thousands.toString().length > 2) {
				$priceBlock.addClass("price-small-font");
			} else {
				$priceBlock.removeClass("price-small-font");
			}

			// the same for credit price
			if (therestCredit.toString().length == 1) {
				therestCredit = "00" + therestCredit;
			}

			if (therestCredit.toString().length == 2) {
				therestCredit = "0" + therestCredit;
			}

			if (thousandsCredit.toString().length > 2) {
				$priceBlock.addClass("price-small-font");
			} else {
				$priceBlock.removeClass("price-small-font");
			}

			var html = (thousands && therest)? "<span>" + thousands + "</span>" + therest: "0";
			var htmlCredit = (thousandsCredit && therestCredit)? "<span>" + thousandsCredit + "</span>" + therestCredit: therestCredit;

			$priceBlock.html(html);
			$priceBlockCredit.html(htmlCredit);
		} else {
			if (!meAppleFuck) {
				$(this).addClass("error").popover('show');
			} else {
				$(this).addClass("error");
			}
			$(this).closest("form").siblings(".price-block").find(".price").text(0);
			$(this).closest("form").siblings(".price-block").find(".js-price-credit").text(0);
		}
	}).change();

});