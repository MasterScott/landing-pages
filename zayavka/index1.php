<?php
 /* Здесь проверяется существование переменных */
 if (isset($_POST['name'])) {$name = $_POST['name'];}
  if (isset($_POST['summa'])) {$summa = $_POST['summa'];}
  if (isset($_POST['srok'])) {$srok = $_POST['srok'];}
  if (isset($_POST['vid'])) {$vid = $_POST['vid'];}
  if (isset($_POST['mail'])) {$mail = $_POST['mail'];}
  if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
  if (isset($_POST['projivanie'])) {$projivanie = $_POST['projivanie'];}
  if (isset($_POST['inn'])) {$inn = $_POST['inn'];}

/* Сюда впишите свою эл. почту */
 $address = "st@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Тема: Заявка с сайта r.ru!\nФИО: $name\nСумма кредита: $summa\nСрок кредитования: $srok\nВид недвижимости: $vid\nЕ-Майл: $mail\nТелефон: $phone\nМесто проживания: $projivanie\nИНН: $inn";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ с сайта r.ru'; //сабж
$email='Заказ <r.ru>'; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>С вами свяжутся</title>
<meta name="generator">
<style type="text/css">
body
{
   
   background: #5da130 url(img/zakaz.jpg) top -70% center no-repeat;
   
}

<script type="text/javascript">
setTimeout('location.replace("/index.html")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
</head>
</body>
</html>