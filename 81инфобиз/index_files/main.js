/**
 * Скрипты сайта "Домашние финансы".
 */

$(function(){
  /*
    Форма регистрации на exit popup.
   */
  $('.express-signup-container')
    .expressForm({
      successURL: 'http://' + document.domain + '/complimentary/'
    });
});
