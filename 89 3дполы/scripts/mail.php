<?php
 /* Здесь проверяется существование переменных */
  if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
 if (isset($_POST['avtor'])) {$avtor = $_POST['avtor'];}
 if (isset($_POST['email'])) {$email = $_POST['email'];}

/* Сюда впишите свою эл. почту */
 $address = "vegetable-opt@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Заявка на покупку картофеля\n Телефон: $phone\nИмя: $avtor \nE-mail: $email";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>С вами свяжутся</title>
<meta name="generator">
<style type="text/css">
body
{
   margin: 0;
   padding: 0;
   background-color: #22BFF7;
   background-image: url(img/zakaz.jpg);
   background-repeat: no-repeat;
   color: #000000;
}
</head>
</body>
</html>