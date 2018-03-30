<?php

$ini = parse_ini_file('../config/config.ini');

$utmz = $_COOKIE['__utmz'];
$utmz = explode(".", $utmz);
$utmz = array_pop($utmz);
$utmz = explode('|', $utmz);
$utmz_out = array();
foreach ($utmz as &$part) {
	$part = explode('=', $part);
	$utmz_out[$part[0]] = $part[1];
}


$mail_title = 'Регистрация';
$line = '';
if (isset($_POST['name'])) $line .= "<p>Имя: {$_POST['name']}</p>";
$line .= "<p>E-mail: {$_POST['email']}</p><p>Пароль: {$_POST['password']}</p>";

if ($_POST['type'] == 'call_request') {
	$mail_title = 'Заказ звонка';
	$line = "<p>Имя: {$_POST['name']}</p><p>Телефон: {$_POST['phone']}</p>";
}

$mail = "
	<html>
		<head>
		  <title>{$mail_title}</title>
		</head>
		<body style='color:#111; font-family:13px Tahoma, Arial, sans-serif;'>
			<p><strong>{$mail_title}<strong></p>
			{$line}
			<p>Источник: {$utmz_out['utmcsr']}</p>
			<p>Название кампании: {$utmz_out['utmccn']}</p>
			<p>Носитель: {$utmz_out['utmcmd']}</p>
			<p>Ключевые слова: {$utmz_out['utmctr']}</p>
		</body>
	</html>
";

$headers = 'Content-type: text/html; charset=utf-8' . "\r\n" .
		'From: '.$ini['company_name'].' <'.$ini['from_email'].'>' . "\r\n";

mail($ini['request_email'], $mail_title . ' ' . date('d-m-Y H:i:s'), $mail, $headers);