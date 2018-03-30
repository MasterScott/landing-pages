<!DOCTYPE HTML>
<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini');
if (!$ini) {
	echo '&#1054;&#1096;&#1080;&#1073;&#1082;&#1072; &#1074; &#1082;&#1086;&#1085;&#1092;&#1080;&#1075;&#1091;&#1088;&#1072;&#1094;&#1080;&#1086;&#1085;&#1085;&#1086;&#1084; &#1092;&#1072;&#1081;&#1083;&#1077;';
	die();
}
?><!DOCTYPE html><html><head><title><?php print $ini['title']; ?></title><meta http-equiv="content-type" content="text/html; charset=utf-8"><meta name="description" content=""><meta name="keywords" content=""><link rel="stylesheet" href="css/skel-noscript.css"><link rel="stylesheet" href="css/style.css"><link rel="stylesheet" href="css/style-desktop.css"><!--[if lte IE 9]><link rel="stylesheet" href="css/ie9.css" /><![endif]--><!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]--><script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false"></script><script type="text/javascript" src="js/jquery-1.10.2-min.js"></script><script type="text/javascript" src="js/jquery.plugins.js"></script><script type="text/javascript" src="js/scripts.js?v2"></script><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">

		<!-- Header -->
			<div id="header-wrapper">
				<div class="head-wr">
				<header id="header" class="container"><div class="row">
						<div class="12u">
						
							<!-- Logo -->
								<h1 id="ib-block1" contenteditable="true"><span id="logo">Ваш логотип</span></h1>
							
							<!-- Nav -->
								<nav id="nav"><?php if ($ini['phone']) { ?><span><?php print $ini['phone']; ?></span><?php } ?></nav></div>
					</div>
				</header></div>
				<div id="banner">
					<div class="container">
						<div class="row">
							<div class="6u"><!-- Banner Copy -->
<p id="ib-block2" contenteditable="true">Мы организуем отдых для активных людей, ищущих впечатлений и адреналина по всему свету.</p>
							<form class="order-form" action="form/form.php" method="POST">
								<input class="<?php if ($ini['phone_required']) print 'required'; ?> phone phone-mask" placeholder="Ваш телефон" type="text" name="phone"><button class="button-big order-btn" type="submit" name="sub">Заказать звонок</button>
                             </form>
</div>
							<div class="6u" id="ib-block3" contenteditable="true"><!-- Banner Image -->
<p class="bordered-feature-image"><img alt="" src="images/banner.jpg"></p>
</div>
						</div>
					</div>
				</div>
			</div>

		<!-- Features -->
			<div id="features-wrapper">
				<div id="features">
					<div class="container">
						<div class="row">
							<div class="3u">
							
								<!-- Feature #1 -->
									<section id="ib-block4" contenteditable="true"><p class="bordered-feature-image"><img alt="" src="images/pic01.jpg"></p>

<h2>Серфинг</h2>

<p>Легко добраться</p>
</section></div>
							<div class="3u">
								
								<!-- Feature #2 -->
									<section id="ib-block5" contenteditable="true"><p class="bordered-feature-image"><img alt="" src="images/pic02.jpg"></p>

<h2>Фридайвинг</h2>

<p>И мы знаем, что делаем</p>
</section></div>
							<div class="3u">
								
								<!-- Feature #3 -->
									<section id="ib-block6" contenteditable="true"><p class="bordered-feature-image"><img alt="" src="images/pic03.jpg"></p>

<h2>Боевые исскуства</h2>

<p>От Apple до IBM</p>
</section></div>
							<div class="3u">
								
								<!-- Feature #4 -->
									<section id="ib-block7" contenteditable="true"><p class="bordered-feature-image"><img alt="" src="images/pic04.jpg"></p>

<h2>Лапта! :)</h2>

<p>Плазма, LCD, LED и др.</p>
</section></div>
						</div>
					</div>
				</div>
			</div>

		<!-- Content -->
			<div id="content-wrapper">
				<div id="content">
					<div class="container">
						<div class="row">
							<div class="4u">

								<!-- Box #1 -->
									<section id="ib-block8" contenteditable="true"><header><h2>Кто мы такие?</h2>

<h3>Подзаголовок</h3>
</header><p class="feature-image"><img alt="" src="images/pic05.jpg"></p>

<p>Текст с описанием компании в нескольких словах. Можно и не в нескольких, главное, не пытаться повторить "Войну и Мир"</p>
</section></div>
							<div class="4u">

								<!-- Box #2 -->
									<section id="ib-block9" contenteditable="true"><header><h2>Что мы можем сделать?</h2>

<h3>Подзаголовок</h3>
</header><ul class="check-list"><li>Починить</li>
	<li>Сломать</li>
	<li>Снова починить</li>
	<li>Сделать "чтобы все было как надо"</li>
	<li>Amet tellus gravida lorem ipsum</li>
</ul></section></div>
							<div class="4u">
								
								<!-- Box #3 -->
									<section id="ib-block10" contenteditable="true"><header><h2>Наши клиенты</h2>

<h3>Отзывы</h3>
</header><ul class="quote-list"><li><img alt="" src="images/pic06.jpg"><p>"Отличная работа!"</p>
	<span>Анна, студентка</span></li>
	<li><img alt="" src="images/pic07.jpg"><p>"Спасли меня перед дипломом"</p>
	<span>Кристина, бакалавр :)</span></li>
	<li><img alt="" src="images/pic08.jpg"><p>"Качественный аутсорс"</p>
	<span>Сергей, технический директор</span></li>
</ul></section></div>
						</div>
					</div>
				</div>
			</div>

		<!-- Footer -->
			<div id="footer-wrapper">
				<footer id="footer" class="container"><div class="row">
						<div class="8u">
						
							<div id="map" data-coord="<?php if ($ini['map_point']) print $ini['map_point'];?>" data-center="<?php if ($ini['map_center']) print $ini['map_center'];?>"></div>

						</div>
						<div class="4u">
							
							<!-- Blurb -->
								<section><div id="ib-block11" contenteditable="true"><h2>Наши контакты</h2>
</div>
									<ul class="contact"><?php if ($ini['address']) { ?><li>
											<h3>Адрес</h3>
											<p>
												<?php print $ini['address']; ?></p>
										</li>
										<?php } ?><?php if ($ini['email']) { ?><li>
											<h3>E-mail</h3>
											<p>
												<?php print chr(60).'a href="mailto:'.$ini['email'].'"'.chr(62).$ini['email'].chr(60).'/a'.chr(62);?></p>
										</li>
										<?php } ?><?php if ($ini['phone']) { ?><li>
											<h3>Телефон</h3>
											<p>
												<?php print $ini['phone']; ?></p>
										</li>
										<?php } ?></ul></section></div>
					</div>
				</footer></div>

		<!-- Copyright -->
			<div id="copyright">
				© <?php print $ini['company_name'] . ', ' . date('Y'); ?></div>
	<div class="modals">
		<div class="overlay"></div>
		<div class="modal recall-modal">
			<a href="#" class="close-btn"></a>
			<form action="form/form.php" method="POST" class="modal-form callback-form"><input type="hidden" name="type" value="call_request"><p><input type="text" name="name" class="name" placeholder="Ваше имя"></p>
				<p><input type="text" name="phone" class="phone phone-mask required" placeholder="Ваш телефон"></p>
				<p><button type="submit" class="button button-big modal-btn">Отправить</button></p>
			</form>
		</div>

		<div class="modal thanks2-modal">
			<h3 class="form-title">Спасибо!</h3>
			<a href="#" class="close-btn"></a>
			<p class="call-you">Мы свяжемся с вами в ближайшее время!</p>
		</div>
	</div>
	<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>