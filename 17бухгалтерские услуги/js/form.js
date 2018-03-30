/**
 * Interactive Form
 *
 * @author John Asker
 * @copyright D&A Studio
 */
(function ($) {
	var DNAForm = function(formElement, params) {
		var self = this;

		if (!$.fancybox) {
			alert('no fancybox');
			return;
		}

		params = params || {};

		self.element = formElement;
		self.params = {
			url: 'form.php',
			errorClass: 'form-field-text_error',
			fancybox: {
				autoSize: false,
				autoHeight: false,
				autoWidth: false,
				autoResize: false,
				width: 400,
				height: 200
			},
			completeText: params.completeText && typeof params.completeText == 'string' ? params.completeText : '<h3 class="success"><span="success">Заявка отправлена</span></h3>',
			failText: params.failText && typeof params.failText == 'string' ? params.failText : '<h3 class="fail"><span="fail">При отправке произошла ошибка. Попробуйте еще раз.</span></h3>',
			errorValidation: params.errorValidation && typeof params.errorValidation == 'function' ? params.errorValidation : function () {},
			complete: params.complete && typeof params.complete == 'function' ? params.complete : function () {}
		};

		self.inputText = self.element.find('input[type="text"], textarea');

		self.element.on('submit', function (e) {
			var isError = false;

			e.preventDefault();

			if (self.validation()) {
				self.params.errorValidation();
				return false;
			}

			self.formData(function () {
				self.sendForm.apply(self);
			});

		});

		self.inputText.on('focus', function () {
			var element = $(this);
			
			if (element.hasClass(self.params.errorClass)) {
				element.removeClass(self.params.errorClass);
				element.siblings('.form-field-error')
					.addClass('hidden')
					.text('');
			}
		});
		
	}

	DNAForm.prototype = {
		formData: function (callback) {
			var self = this;

			callback = typeof callback == 'function' ? callback : function () {};

			self._data = {};

			self.inputText.each(function () {
				var element = $(this),
					name = element.attr('name'),
					value = element.val();

				self._data[name] = value;
			});

			self._data['extend'] = self.element.find('input[type="hidden"]').val();

			callback();
		},
		sendForm: function (callback) {
			var self = this;

			$.ajax({
				url: self.params.url,
				type: 'POST',
				cache: false,
				data: self._data,
				complete: function (xhr, response) {
					if (xhr.responseText == 'success') {
						$.fancybox(self.params.completeText, self.params.fancybox);
						self.inputText.val('');
						setTimeout(function () {
							$.fancybox.close();
						}, 3000);
					} else {
						$.fancybox(self.params.failText, self.params.fancybox);
					}
				}
			});
		},
		validation: function () {
			var self = this,
				isError = false,
				isErrorReturn = false;

				self.inputText.each(function () {
					var element = $(this),
						name = element.attr('name'),
						value = element.val();

					if (element.hasClass('necessatily')) isError = self.necessatilyValidation(value);
					if (!isError) {
						if (name == 'email') isError = self.emailValidation(value);
						if (name == 'phone') isError = self.phoneValidation(value);
					}

					if (isError) {
						element.addClass(self.params.errorClass);
						isError = false;
						isErrorReturn = true;
					}
				});

			return isErrorReturn;
		},
		necessatilyValidation: function (value) {
			var spaces = new RegExp(/^(\s|\u00A0)+|(\s|\u00A0)+$/g);

			if (value.replace(spaces, '').length > 2) return false;
			return true;

		},
		phoneValidation: function (value) {
			var notnumber = new RegExp(/^((8|0|\+\d{1,2})[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);

			if (value.match(notnumber) != null) return false;
			return true;
		},
		emailValidation: function (value) {
			if (value.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/) != null) return false;
			return true;
		}
	};

	window.DNAForm = DNAForm;
})(jQuery);
