<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini');
if (!$ini) {
	echo 'Ошибка в конфигурационном файле';
	die();
}
?><!DOCTYPE HTML><html><head><title><?php print $ini['title']; ?></title><meta http-equiv="content-type" content="text/html; charset=utf-8"><meta name="description" content=""><meta name="keywords" content=""><link href="http://fonts.googleapis.com/css?family=Open+Sans:300,800" rel="stylesheet" type="text/css"><link href="http://fonts.googleapis.com/css?family=Oleo+Script:400" rel="stylesheet" type="text/css"><script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false"></script><script type="text/javascript" src="js/jquery-1.10.2-min.js"></script><script type="text/javascript" src="js/jquery.plugins.js"></script><script type="text/javascript" src="js/scripts.js?v2"></script><link rel="stylesheet" href="css/skel-noscript.css"><link rel="stylesheet" href="css/style.css"><link rel="stylesheet" href="css/style-desktop.css"><!--[if lte IE 8]><script src="js/html5shiv.js"></script><link rel="stylesheet" href="css/ie8.css" /><![endif]--><!--[if lte IE 7]><link rel="stylesheet" href="css/ie7.css" /><![endif]--><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body class="homepage" data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">

		<!-- Header Wrapper -->
			<div id="header-wrapper">
				<div class="container">
					<div class="row">
						<div class="8u">
						
							<!-- Header -->
								<header id="header"><!-- Logo --><div id="logo" contenteditable="true"><h1>Logo</h1>
<span>слоган вашей компании</span></div>
								
								</header></div>
						<div class="4u">
						<?php if ($ini['phone']) { ?><div id="phone">
								<span><?php print $ini['phone']; ?></span>
							</div>
						<?php } ?></div>
					</div>
				</div>
			</div>
		
		<!-- Banner Wrapper -->
			<div id="banner-wrapper">
				<div class="container">
					<div class="row">
						<div class="12u">
						
							<!-- Banner -->
								<div id="banner" class="box">

									<div>
										<div class="row">
											<div class="7u" id="ib-block1" contenteditable="true"><h2>Привет! Это мы.</h2>

<p>Мы занимаемся производством и продажей</p>
</div>
											<div class="5u" id="ib-block2" contenteditable="false">
												<ul><li><a href="#" class="button call-request-btn big fa fa-phone">Заказать звонок</a></li>
												</ul></div>
										</div>
									</div>
								
								</div>

						</div>
					</div>
				</div>
			</div>
		
		<!-- Features Wrapper -->
			<div id="features-wrapper">
				<div class="container">
					<div class="row">
						<div class="4u">
						
							<!-- Box -->
								<section class="box box-feature" id="ib-block3" contenteditable="true"><p class="image image-full"><img alt="" src="images/pic01.jpg"></p>

<div class="inner">
<header><h2>Предложение первое</h2>
<span class="byline">И самое простое</span></header><p>Здесь нужно описать, в чем состоит ваше предложение. Коротко, но увлекательно</p>
</div>
</section></div>
						<div class="4u">
						
							<!-- Box -->
								<section class="box box-feature" id="ib-block4" contenteditable="true"><p class="image image-full"><img alt="" src="images/pic02.jpg"></p>

<div class="inner">
<header><h2>Вариант получше</h2>
<span class="byline">Больше возможностей</span></header><p><!--class="Mso"-->Здесь нужно описать, в чем состоит ваше предложение. Коротко, но увлекательно</p>
</div>
</section></div>
						<div class="4u">
						
							<!-- Box -->
								<section class="box box-feature last" id="ib-block5" contenteditable="true"><p class="image image-full"><img alt="" src="images/pic03.jpg"></p>

<div class="inner">
<header><h2>Все и сразу</h2>
<span class="byline">И правда, почему нет?</span></header><p><!--class="Mso"-->Здесь нужно описать, в чем состоит ваше предложение. Коротко, но увлекательно</p>
</div>
</section></div>
					</div>
				</div>
			</div>

		<!-- Main Wrapper -->
			<div id="main-wrapper">
				<div class="container">
					<div class="row">
						<div class="4u">
						
							<!-- Sidebar -->
								<div id="sidebar">
									<section class="widget-thumbnails"><h3 id="ib-block6" contenteditable="true">Наши работы</h3>
										<div class="grid" id="ib-block7" contenteditable="true">
											<div class="row no-collapse half">
												<div class="6u"><img src="images/pic04.jpg" alt=""></div>
												<div class="6u"><img src="images/pic05.jpg" alt=""></div>
											</div>
											<div class="row no-collapse half">
												<div class="6u"><img src="images/pic06.jpg" alt=""></div>
												<div class="6u"><img src="images/pic07.jpg" alt=""></div>
											</div>
										</div>
									</section></div>
						
						</div>
						<div class="8u">

							<!-- Content -->
								<div id="content">
									<section class="last" id="ib-block8" contenteditable="true"><h2>Кто мы такие?</h2>

<p>Опишите здесь вашу компанию. <!--class="Mso"-->Справка: тетралогия Федора Абрамова "Пряслины" состоит из четырех книг: "Братья и сестры" (1958), "Две зимы и три лета" (1968), "Пути-перепутья" (1973) и "Дом" (1978). В ней прослеживается жизнь многодетной семьи Пряслиных и других жителей архангельского села Пекашино на протяжении 30 лет.</p>

<p>Если вас заинтересовало наше предложение, закажите звонок:</p>
<a class="button call-request-btn fa fa-phone" href="#">Заказать звонок</a></section></div>

						</div>
					</div>
				</div>
			</div>

		<!-- Footer Wrapper -->
			<div id="footer-wrapper">
				<footer id="footer" class="container"><div class="row">
						<div class="8u">
						
							<div id="map" data-coord="<?php if ($ini['map_point']) print $ini['map_point'];?>" data-center="<?php if ($ini['map_center']) print $ini['map_center'];?>"></div>
						
						</div>
						<div class="3u">
						
							<!-- Contact -->
								<section class="widget-contact last" id="ib-block9" contenteditable="true"><h2>Наш адрес</h2>

<ul>
	<li><a class="fa fa-twitter solo" href="#"><span>Twitter</span></a></li>
	<li><a class="fa fa-facebook solo" href="#"><span>Facebook</span></a></li>
	<li><a class="fa fa-vk solo" href="#"><span>Vkontakte</span></a></li>
	<li><a class="fa fa-google-plus solo" href="#"><span>Google+</span></a></li>
</ul>

<p>г. Москва<br>
ул. Пролетарская, д. 11, оф. 15<br>
и телефон</p>
</section></div>
					</div>
					<div class="row">
						<div class="12u">
							<div id="copyright">
								© <?php print $ini['company_name'] . ', ' . date('Y'); ?></div>
						</div>
					</div>
				</footer></div>
			
	<div class="modals">
		<div class="overlay"></div>
		<div class="modal recall-modal">
			<a href="#" class="close-btn"></a>
			<form action="form/form.php" method="POST" class="modal-form callback-form"><input type="hidden" name="type" value="call_request"><p><input type="text" name="name" class="name" placeholder="Ваше имя"></p>
				<p><input type="text" name="phone" class="phone phone-mask required" placeholder="Ваш телефон"></p>
				<p><button type="submit" class="button modal-btn">Заказать звонок</button></p>
			</form>
		</div>

		<div class="modal thanks2-modal">
			<h3 class="form-title">Спасибо!</h3>
			<a href="#" class="close-btn"></a>
			<p class="call-you">Мы перезвоним вам в ближайшее время!</p>
		</div>
	</div>
	<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
