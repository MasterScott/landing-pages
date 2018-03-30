<?php 
header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini'); 
if (!$ini) {
	echo 'Ошибка в конфигурационном файле'; die();
}	?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="user-scalable=yes, width=1000">
		<!--[if lt IE 9]>
			<script src="js/html5shiv.js"></script>
		<![endif]-->
		<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>
		<link type="text/css" href="css/style.css?v2" rel="stylesheet" media="screen">
		<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="js/jquery.placeholder.min.js"></script>
		<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
		<script type="text/javascript" src="js/jquery.form.min.js"></script>
		<script type="text/javascript" src="js/script.js?v2"></script>
		<title></title>
	</head>
	<body class="thanks-page">
		<header id="header">
			<article class="inner">
				<a href="/" class="logo"><img src="i/logo.png" alt="Логотип"/></a>

				<?php if ($ini['phone']) {?><div class="phone"><?php print $ini['phone'];?></div><?php } ?>

			</article>
		</header>
		<section id='thanks-block'>
			<article class="inner clearfix">
				<div class="left-col">
					<img class="big-logo" src='i/logo-big.png' alt="Большой логотип" />
					<p class="back-link"><a href='javascript:history.back();'>Назад к заказу</a></p>
				</div>
				<div class="right-col">
					<h1>Спасибо!</h1>
					<p>Еще раз хотели поблагодарить вас за&nbsp;отклик и&nbsp;оставленное сообщение.
						Мы&nbsp;приняли его и&nbsp;очень скоро свяжемся с&nbsp;вами. 
						<?php if ($ini['phone'] || $ini['email']) {?>
						Если хотите что то-добавить или описать детали, пожалуйста, 
						<?php if ($ini['email']) {?>пишите нам в&nbsp;любое время на&nbsp;<a href='mailto:<?php print $ini['email']; ?>'><?php print $ini['email']; ?></a><?php } ?>
						<?php if ($ini['email'] && $ini['phone']) {?>или<?php } ?>
						<?php if ($ini['phone']) {?>звоните <?php print $ini['phone']; } ?>
						<?php }?></p>
					<p>Спасибо за&nbsp;проявленный интерес</p>
				</div>
			</article>
		</section>
		<footer id="footer">
			<article class="inner">
				<span class="copyright">© <?php print $ini['company_name'];?>, 2009-<?php print date('Y'); ?></span>
				<div class="made-by">Шаблон сделан в <a href="http://www.ibrush.ru" target="_blank">iBrush.ru</a> в 2013 году</div>
			</article>
		</footer>
	
	</body>
</html>
