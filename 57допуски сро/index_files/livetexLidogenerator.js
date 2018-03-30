/**
 * @package Livetex
 * @version 1
 * @author Andrey Garbuzov
 */

/*
 *  @section Lidogenerator Interface
 */
var livetexLidogenerator = {

  isMobile: function() {
    return /iPhone|iPod|android/i.test(navigator.userAgent);
  },

  // Выделение ошибочно или неправильно введенных полей
  fieldError : function (fieldname) {
      switch (fieldname) {
        case 'name':
          $('#name').addClass('error').click(function() {
            $(this).removeClass('error');
          });
          break;
        case 'email':
          $('.email').addClass('error').click(function() {
            $(this).removeClass('error');
          });
          break;
        case 'phone':
          $('.phone').addClass('error').click(function() {
            $(this).removeClass('error');
          });
          break;
        case 'msg' :
          $('#question').addClass('error').click(function() {
            $(this).removeClass('error');
          });
          break;
        case 'groups' :
          $('#groups').addClass('error').click(function() {
            $(this).removeClass('error');
          });
          $('#groupselect').find('.select-decor').addClass('error').click(function() {
            $(this).removeClass('error');
          });
          break;
        default:
          break;
      }
  },

  /**
   * @param Number Witch fields to show
   */
  setRequestFields: function(number) {
    var $emailForm = $('#form-email'),
      $phoneForm = $('#form-phone'),
      $selectForm = $('#form-select'),
      $emailAndPhoneForm = $('#form-email-and-phone');
    switch(number) {
      case 0 :
        $emailForm.show();
        $phoneForm.hide();
        $selectForm.hide();
        $emailAndPhoneForm.hide();
        livetexLidogenerator.setTextareaSize();
        break;
      case 1:
        $phoneForm.show();
        $emailForm.hide();
        $selectForm.hide();
        $emailAndPhoneForm.hide();
        livetexLidogenerator.setTextareaSize();
        break;
      case 2:
        $selectForm.show();
        $emailForm.hide();
        $phoneForm.hide();
        $emailAndPhoneForm.hide();
        livetexLidogenerator.setSelection();
        livetexLidogenerator.setTextareaSize();
        break;
      case 3:
        $emailAndPhoneForm.show();
        $emailForm.hide();
        $phoneForm.hide();
        $selectForm.hide();
        livetexLidogenerator.setTextareaSize();
        break;
      default :
        break;
    }
  },

  /**
  * Fill Group selectors
  */
   fillgroups : function (items) {
      if (items.length > 0) {
        $('#groups').empty();
        if (items.length == 1){
            $('#groups').append('<option value="'+ items[0].group_id +'">'+ items[0].group_name +'</option>');
        }else{
            var duplicateArray = [];

            $('<option/>').attr('value', '')
                .text('Выберите отдел')
                .prop('selected', true)
                .appendTo($('#groups'));

            for (var i = 0; i < items.length; i++) {
                var k = items[i];

                if ($.inArray(k.group_id, duplicateArray) === -1) {
                    if (items.length == 1) {
                        $('#groups').append('<option value="' + k.group_id + '" selected>' + k.group_name + '</option>');
                    }
                    else {
                        $('#groups').append('<option value="' + k.group_id + '">' + k.group_name + '</option>');
                    }
                }
                duplicateArray.push(k.group_id);
            }
        }
        $('select[name=groups]').decor();
        $('select[name=groups]').change();
        $('#groupselect').addClass('active');
        livetexLidogenerator.setTextareaSize();
        $('label').css('padding-top', '2px');
      }
  },


  /**
   *
   */
  setTextareaSize : function () {
    var textarea = $('textarea');
    var operatorBlock = $('.operator-block');
    var forms = $('#form-email, #form-phone, #form-select, #form-email-and-phone, #groupselect');
    var height = 300;
    height = height - operatorBlock.height();

    // ИЕ не определяет высоту элементов, которых ещё не видно
    if (forms.height() == 0) {
      setTimeout(function(){livetexLidogenerator.setTextareaSize()}, 1000);
      return;
    }

    forms.each(function(){
      var self = $(this);
      if (self.css('display') == 'block') {
        height = height - self.height();
      }
    });

    textarea.css('height', height + 'px');
  },

  /**
   * Working of Field selector
   */
  setSelection : function(){
    var select = $('#form-select select');

    select.change(function(){
      if($(this).val() == 'email') {
        $('#form-select').find('.phone').hide();
        $('#form-select').find('.email').show();
      }else {
        $('#form-select').find('.email').hide();
        $('#form-select').find('.phone').show();
      }
    })

    $('select').decor();
  },

  /**
   * Set Required Fields
   * @param Number Witch fields required
   */
  setRequiredFields : function(num) {
    var inputs = $('#form-email-and-phone').find('label input');
    switch (num) {
      case 1 :
        inputs.removeClass('required').eq(0).addClass('required');
        break;
      case 2 :
        inputs.removeClass('required').eq(1).addClass('required');
        break;
      case 3 :
        inputs.addClass('required');
        break;
      default:
        break;
    }
  },

  getVal: function (param) {
    switch (param) {
      case 'name':
        return $('#name').val();
        break;
      case 'email' :
        return $('#email').val();
        break;
      case 'phone' :
        return $('#phone').val();
        break;
      case 'group' :
        return $('#groups').val();
        break;
      case 'msg':
        return $('#question').val();
        break;
      default:
        break;
    }
  },

  /**
   * Проверка полей на заполненность
   */
  validateFields : function() {

    var forms = ['form-email','form-phone','form-select','form-email-and-phone'];
    var name = livetexLidogenerator.getVal('name'),
        text = livetexLidogenerator.getVal('msg'),
        groupId = livetexLidogenerator.getVal('group');

    var $form = $('#' + forms[ltSiteSettings.lid_type]);

    var email = $form.find('.email').val();
    var phone = $form.find('.phone').val();

    if (name === '') {
      livetexLidogenerator.showError('name', 'Не заполнено имя');
      return false;
    }

    if (wltx.util.trim(text) === '') {
      livetexLidogenerator.showError('msg', 'Поле сообщения пустое');
      return false;
    }

    if (groupId === '') {
      livetexLidogenerator.showError('groups', 'Выберите, пожалуйста, отдел');
      return false;
    }

    // Какие поля надо обязательно проверить
    switch (ltSiteSettings.lid_type) {
      case 0:
        if (email === '') {
          livetexLidogenerator.showError('email', 'Не введен почтовый адрес');
          return false;
        }

        if (!livetexLidogenerator.validateEmail(email)) {
          livetexLidogenerator.showError('email', 'Некорректный почтовый адрес!');
          return false;
        }
        break;

      case 1:
        if (phone === '' ||  phone === '+7(XXX)XXX-XX-XX') {
          livetexLidogenerator.showError('phone', 'Не введен номер телефона');
          return false;
        }
        if (!livetexLidogenerator.validatePhone(phone)) {
          livetexLidogenerator.showError('phone', 'Некорректный номер телефона');
          return false;
        }
        break;

      case 2:
        var selectedInput = $('#form-select select').val();
        switch(selectedInput) {
          case 'email':
            if(email == '') {
              livetexLidogenerator.showError('email','Не введен почтовый адрес');
              return false;
            }
            if (!livetexLidogenerator.validateEmail(email)) {
              livetexLidogenerator.showError('email','Некорректный почтовый адрес!');
              return false;
            }
            break;
          case 'phone':
            if (phone === '' || phone === '+7(XXX)XXX-XX-XX') {
              livetexLidogenerator.showError('phone', 'Не введен номер телефона');
              return false;
            }
            if (!livetexLidogenerator.validatePhone(phone)) {
              livetexLidogenerator.showError('phone', 'Некорректный номер телефона');
              return false;
            }
            break;
        }
        break;

      case 3:
        if ($form.find('.email').hasClass('required')) {
          if(email == '') {
            livetexLidogenerator.showError('email','Необходимо ввести почтовый адрес');
            return false;
          }
          if (!livetexLidogenerator.validateEmail(email)) {
            livetexLidogenerator.showError('email','Некорректный почтовый адрес!');
            return false;
          }
          if (phone !== '' && phone !== '+7(XXX)XXX-XX-XX' && !livetexLidogenerator.validatePhone(phone)) {
            livetexLidogenerator.showError('phone', 'Некорректный номер телефона');
            return false;
          }
        }
        if ($form.find('.phone').hasClass('required')) {
          if (phone === '' || phone === '+7(XXX)XXX-XX-XX') {
            livetexLidogenerator.showError('phone', 'Необходимо ввести номер телефона');
            return false;
          }
          if (!livetexLidogenerator.validatePhone(phone)) {
            livetexLidogenerator.showError('phone', 'Некорректный номер телефона');
            return false;
          }
          if (email !== '' && !livetexLidogenerator.validateEmail(email)) {
            livetexLidogenerator.showError('email','Некорректный почтовый адрес!');
            return false;
          }
        }
        break;
    }

    return true;
  },

  /**
   * Проверка почтового адреса
   * @param email
   * @returns {Boolean}
   */
  validateEmail : function(email) {
    var validate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,15}$/i;
    return validate.test(email);
  },

  /**
   * Проверка телефонного номера
   * @param phone
   * @returns {Boolean}
   */
  validatePhone : function (phone) {
    var validate = /^[\+\d]{1}[\d\-\s\(\)\t]+[\d]$/;

    if (!validate.test(phone)) return false;

    var numPhone = phone;

    var numCount = numPhone.replace(/[^\d.]/g, "").length;

    if (/^\+/.test(phone)) {
      return numCount == 11 || numCount == 12;
    } else {
      return numCount >= 5 && numCount <= 12;
    }
  },

  /**
   * Отображение ошибок
   * @param field Поле с ошибкой
   * @param errorText Текст для вывода в окошке
   */
  showError : function (field, errorText) {
      this.warning( errorText );
    this.fieldError(field);
  },


  /**
   * @param {string} type
   * @param {string} action
   * @return {string}
   */
  makeActionMessage: function(type, action) {
    return type + ',' + wltx.util.encodeJsonData({
      action: action
    });
  },


  /**
   * @param {string} message
   */
  sendToParentWindow: function(message) {
    wltx.xdm.postParentMessage(message);
  },

  sendActionMessage: function(type, action) {
    this.sendToParentWindow(this.makeActionMessage(type, action));
  },

  validateAndSend : function () {
    if (!livetexLidogenerator.validateFields()) return;

    var forms = ['form-email','form-phone','form-select','form-email-and-phone'];
    var name = livetexLidogenerator.getVal('name'),
        text = livetexLidogenerator.getVal('msg'),
        groupId = livetexLidogenerator.getVal('group');

    var $form = $('#' + forms[ltSiteSettings.lid_type]);

    var email = $form.find('.email').val() || '';
    var phone = $form.find('.phone').val() || '';


    // Убираем плейсхолдеры
    if (phone === '+7(XXX)XXX-XX-XX') phone = '';

    var props = {
        site_id: livetexChatParams['site_id'],
        group_id: groupId,
        visitor_id: livetexVisitor,
        name: name,
        phone: phone,
        email: email,
        msg: text,
        type_id: 1
    };

    // Запоминаем имя пользователя
    wltx.util.saveToStorage('livetext_name', props.name, 10000);

    $.getJSON(LivetexSettings.BILLING_URL + "?control=AjaxHelper&ajax=lead&callback=?", props);

    this.sendActionMessage('leadAction', 'send');

    if ($('body').hasClass('biglead')) {
      this.sendOffline();
    } else {
      $(".submit_text").show();
    }

    if (window.livetexEmbededChatController) {
        $(".content").hide();
    }

    this.clean();
  },

    setMessage : function(message) {
        message = this.nl2br(message);
        $(".bubble-text").html(message).show();
    },

    setOperatorImage : function(src) {
        if (typeof LTX_URL == 'undefined') {
          var LTX_URL = '//cs15.livetex.ru/';
        }
        if (src) $('.operator img').attr('src', LTX_URL + '/' + src);
        $('.operator-block').addClass('active');
    },
    setSubmitText : function(message) {
        message = this.nl2br(message);
        $("#sendText").html(message);

    },

    setClientName: function (name) {
      $('#name').val(name);
    },


    warning : function (text) {
          if (text == 'hide') {
              $('.warning').hide();

          } else {
              $('.warning div').html(text);
              $('.warning').show();
              if (!window.livetexEmbededChatController) $('.operator-block').hide();
          }
      },

    setColor : function(color) {
        color--;
        if (color < 0 || color > 9) color = 6;

        if (window.livetexEmbededChatController) {
            var colorCode = ['#6ab411','#DA8F50','#0889bf','#D65F5F','#AA86E5','#777777','#E57EC0','#7D7D7D','#b1ab10','#EDEDED'];
        }else {
             var colorCode = ['#BDE56F','#DA8F50','#9BCCE7','#D65F5F','#AA86E5','#B5B5B5','#E57EC0','#7D7D7D','#D2CE60','#EDEDED'];
        }

        var cutHex = function(h) {
            return (h.charAt(0)=="#") ? h.substring(1,7):h
        };
        var hexToR = function(h) {
        return parseInt((cutHex(h)).substring(0,2),16)
        };
        var hexToG = function(h) {
            return parseInt((cutHex(h)).substring(2,4),16)
        };
        var hexToB = function(h) {
            return parseInt((cutHex(h)).substring(4,6),16)
        };
        var lumen = function(h) {
            return Math.sqrt( Math.pow( 0.241 * hexToR(h)/255.0, 2 ) +
                                                    Math.pow( 0.691 * hexToG(h)/255.0, 2 ) +
                                                    Math.pow( 0.068 * hexToB(h)/255.0, 2 ) );
        };

        var colorFont = lumen(colorCode[color]) > 0.5 ? 'light' : 'dark';

        this.chatBright(colorFont);

        $('.background').css('background-color', colorCode[color]);
    },

    chatBright  : function (bright) {
        switch (bright) {
            case 'dark' :
                $('body').removeClass('light').addClass('dark');
                break;
            case 'light' :
                $('body').removeClass('dark').addClass('light');
                break;
            default:
                $('body').removeClass();
                break;
        }
    },

    // Очистка полей вода
    clean : function () {
            $('textarea').val('');
    },
    nl2br : function(text) {

        return text.replace(/([^>])\n/g, '$1<br/>');
    },

    // Устанавливает id клиентв в ссылку с окошка чата
    setLinkSiteId    : function (id) {
       $('.lnk-livetex').attr('href', 'http://livetex.ru/online_consultant/?referal=' + id + '&utm_source=clients&utm_medium=chatlink&utm_campaign=chatlink');
    },

    externalCss: function (siteId) {
      if (livetexLidogenerator.isMobile()) {
        return;
      }
      if (siteId) {
        var url = '//cs15.livetex.ru/csscontroller/csschat/' + siteId + '.css';
        if (document.createStyleSheet) {
          document.createStyleSheet(url);
        } else {
          $('<link rel="stylesheet" type="text/css" href="' + url + '" />').appendTo('head');
        }
      }
    },

    sendOffline: function () {
      $('.content').hide();
      $('#question-send').show();
      $('#question').val('');
    }
};

/*
 * @section Select decor & control
 */
(function ($) {

    $.fn.extend({

        decor : function () {
            // Для мобильных не стилизуем
            if (livetexLidogenerator.isMobile()) {
              return this;
            } else {
                return this.each(function () {

                    // Если это не select, то ничего не делаем
                    if (!$(this).is('select')) return;

                    var select = $(this);
                    var options = select.find('option');

                    // Скрываем стандартный select
                    select.hide();

                    // Проверка на уже созданный декоратор, актуально для перерисовки элементов.
                    if (select.parent('.select-decor').length > 0) {
                        select.parent('.select-decor').find('.select-popup').remove();
                    } else {
                        // Оборачиваем и создаем заменитель select
                        select.wrap('<div class="select-decor"></div>');
                    }

                    var decor = select.parent('.select-decor');
                    var selected = options.filter(':selected');

                    var popup = $('<div class="select-popup"></div>').insertAfter(select);
                    popup.append('<div class="select-header"><div class="select-text">' + selected.text() + '</div></div><div class="select-content"><ul class="select-list"></ul></div>');
                    var list = popup.find('ul');
                    var content = popup.find('.select-content');
                    var header = popup.find('.select-header');

                    options.each(function () {
                        if ($(this).val() == '') {
                            list.append('<li class="hidden">' + $(this).text() + '</li>');
                        } else {
                            list.append('<li>' + $(this).text() + '</li>');
                        }
                    });

                    var listItems = $(list).children('li');

                    /*if (select.val() === '') {
                        header.css('color', '#999');
                    }*/

                    // Назначение поведения элементам
                    // Скрытие списка при клике вне контейнера
                    $(document).click(function () {
                        decor.css('z-index', '10');
                        $('.select-content.active').hide().removeClass('active');
                    });

                    if (options.length == 1) {
                        header.addClass('noselect');

                    } else {
                        // Раскрытие списка при клике на контейнер
                        header.click(function () {
                            $(this).removeClass('error');
                            header.css('color', '#000');
                            $('.select-decor').css('z-index', '10');

                            if (content.css('display') == 'block') {
                                content.hide().removeClass('active');
                                decor.css('z-index', '10');
                            } else {
                                $('.select-content.active').hide().removeClass('active');
                                content.show().addClass('active');
                                decor.css('z-index', '999');
                            }
                            return false;
                        });

                        // Выбор элемента
                        listItems.each(function (index) {
                            $(this).click(function () {

                                // Очистка текущих выделенных элементов
                                $(this).siblings().removeClass('selected');

                                content.hide();
                                decor.css('z-index', '10');

                                // Выделение нового элемента
                                $(this).addClass('selected');

                                header.find('.select-text').html($(this).html());

                                // Выбор соответствующего элемента в select для корректной работы кноки submit
                                $(options[index]).prop('selected', true);
                                $(options[index]).attr('selected', 'selected');
                                select.change();

                                // // Если выбрали пустой вариант, то делаем текст серым
                                // if (select.val() === '') {
                                //     header.css('color','#999');
                                // }
                            });
                        });
                    }
                });
            }
        }
    })
})(jQuery);

$(document).ready(function () {
  livetexLidogenerator.sendToParentWindow('windowLoaded');


    var textWasSet = false,
        textSybmitWasSet = false;

    if (window.livetexEmbededChatController) {
        window.livetexEmbededChatController.embedListeners.push(function(command, value){
            switch (command) {
                case 'setSayText' :
                    textWasSet = true;
                    livetexLidogenerator.setMessage(value);
                    break;

                case 'setSubmitText':
                    textSybmitWasSet = true;
                    livetexLidogenerator.setSubmitText(value);
                    break;
            }

            var setFields = setInterval(function() {
               if (window.ltSiteSettings.lid_type != undefined) {
                 livetexLidogenerator.setRequestFields(window.ltSiteSettings.lid_type);
                 livetexLidogenerator.setRequiredFields(window.ltSiteSettings.lead_required_fields);
                 clearInterval(setFields);
               }
            }, 500);

        });
    }

    $('.btn-close').click(function() {
      if (typeof livetexEmbededChatController  !== 'undefined') {
        livetexEmbededChatController.hideChat();
      } else {
        window.close();
      }
    });

    $('.btn-close-window').click(function() {
        window.close();
    });

    // If Old Android Browser
    if (navigator.userAgent.match(/Android\s+(\d)/) && navigator.userAgent.match(/Android\s+(\d)/)[1] < 3) {
     $('body').addClass('old-android');
    }

    // Работа placeholder'ов
    $('.phone').focusin(function () {
        if (($(this).val() == '+7(XXX)XXX-XX-XX') || ($(this).val() == '+7(ХХХ)ХХХ-ХХ-ХХ') ) $(this).val('').css('color', '#000');
    }).focusout(function () {
            if ($(this).val() == '') $(this).val('+7(XXX)XXX-XX-XX').css('color', '#999');
        });

    $('label').click(function(event){
        return false;
    });

    $('#question-send .back-link').click(function(){
      $('#question-send').hide();
      $('.content').show();
      $('#question').focus();
      $('.info-text').show();
    });

    $('input, textarea').focusin(function(){
        $(this).removeClass('error');
    });

    if (livetexChatParams['name_readonly']) {
      var visitorName = document.getElementById('name');
      if (visitorName !== null) {
        visitorName.setAttribute('readOnly', 'readonly');
      }
    }

    var renderLead = function () {

        var livetexChatParams = livetexChatParams ||
            wltx.util.decodeFormData(document.location.href.split("/")[4].substr(1));

        if (!window.ltSiteSettings) {
          window.setTimeout(renderLead, 100);
          return;
        }

        //получение первого сообщения
        if (!textSybmitWasSet) {
          livetexLidogenerator.setSubmitText(
              livetexChatParams['lead_submit_text'] ||
              window.ltSiteSettings.lid_submit_text ||
              '');
        }

        if (!textWasSet) {
            livetexLidogenerator.setMessage(window.ltSiteSettings.lid_text || '');
        }

        if (window.ltSiteSettings.lid_face_type === undefined) {
          window.ltSiteSettings.lid_face_type = 1;
        }

        switch(window.ltSiteSettings.lid_face_type) {
            case 0 :
                break;
            case 1 :
                livetexLidogenerator.setOperatorImage();
                 break;
            case 2 :
                livetexLidogenerator.setOperatorImage(window.ltSiteSettings.lid_face);
                break;
        }

        // Обратная совместимость
        if (window.ltSiteSettings.lead_required_fields === undefined) {
          window.ltSiteSettings.lead_required_fields = 1;
        }

        livetexLidogenerator.setRequestFields(window.ltSiteSettings.lid_type);
        livetexLidogenerator.setRequiredFields(window.ltSiteSettings.lead_required_fields);

        $('select').decor();

        //это втроенный чат

          if (window.livetexEmbededChatController){
            livetexLidogenerator.setColor(window.ltSiteSettings.lid_color);
          } else if (window.ltSiteSettings.lid_color) {
          //не встроенный и передан цвет
            livetexLidogenerator.setColor(window.ltSiteSettings.lid_color);
          }


    };

    renderLead();
});
