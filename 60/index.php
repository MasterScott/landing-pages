<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini');
if (!$ini) {
	echo 'Ошибка в конфигурационном файле';
	die();
}
?><!DOCTYPE html><html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title><?php print $ini['title']; ?></title><link href="http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css"><meta name="keywords" content=""><meta name="description" content=""><meta name="viewport" content="user-scalable=1, width=1000, initial-scale=1"><!--[if lt IE 9]>
			<script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]--><link rel="stylesheet" href="style/CSS_reset.css"><link rel="stylesheet" href="style/style.css"><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">
		<div class="header">
			<div class="h-top-row">
				<div class="conteiner clr">
					<div class="logo" id="ib-block1" contenteditable="true">
						<p class="lg"><img src="images/logo.png" alt="" width="160" height="34"></p>
						<p>информация о компании</p>
					</div><!--close logo-->
					<address class="top-contacts">
						<?php if ($ini['phone']) { ?><span><?php print $ini['phone']; ?></span><?php } ?></address>
					<div class="call-order orange-btn">
						<a href="" class="order-call-btn">Заказать звонок</a>
					</div>
				</div><!--end conteiner-->
			</div><!--end top-row-->
			<div class="h-down-row">
				<div class="conteiner">
					<div class="main-offer-block">
						<div class="headers" id="ib-block2" contenteditable="true"><h1>Продающий заголовок</h1>
						<p class="sub-title">Основное описание о сайте продающем товар или услугу</p></div>
						<div class="h-form-block">
							<div id="ib-block3" contenteditable="true"><h3>Отправьте заявку 
								на бесплатный расчёт<br>вашего заказа
							</h3></div>
							<form class="order-form" method="post" action="form/form.php">
								<p><input type="text" name="name" class="name <?php if ($ini['name_required']) print 'required'; ?>" placeholder="Ваше имя"></p>
								<p><input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required'; ?>" placeholder="Ваш номер телефона"></p>
								<p><input type="text" name="email" class="email <?php if ($ini['email_required']) print 'required'; ?>" placeholder="Ваш e-mail"></p>
								<p class="margin-top"><input class="orange-btn form-btn" type="submit" value="Отправить"></p>
							</form>
						</div><!--end h-form-block-->
						<div class="action-block">
							<div class="hgroup" id="ib-block-act" contenteditable="true"><h3>До конца акции осталось</h3>

<p>Успейте заказать сейчас</p>
</div>
							<img src="images/arrows.png" class="arws"><div class="timer timer-digits">
								<div>
									<i class="hours">00</i>
									<span class="hours-text">часов</span>
								</div>
								<div>
									<i class="mins">00</i>
									<span class="mins-text">минут</span>
								</div>
								<div>
									<i class="secs">00</i>
									<span class="secs-text">секунд</span>
								</div>
							</div>
						</div><!--end action-block-->
					</div><!--end main-offer-block-->
				</div><!--end conteiner-->
			</div><!--end h-down-row-->
					<div class="our-advantages clr">
						<div class="conteiner">
							<div class="adv-block" id="ib-block4" contenteditable="true"><p class="adv-number">7</p>

	<p class="adv-text">лет успешной работы</p>
	</div><!--end adv-block-->
							<div class="adv-block" id="ib-block5" contenteditable="true"><p class="adv-number">654</p>

	<p class="adv-text">довольных клиентов</p>
	</div><!--end adv-block-->
							<div class="adv-block" id="ib-block6" contenteditable="true">
								<p class="adv-number">700</p>
								<p class="adv-text">единиц товара</p>
							</div><!--end adv-block-->
						</div><!--end conteiner-->
					</div><!--end our-advantages-->
				

		</div><!--end header-->
		<div class="why-we-block">
			<div class="conteiner" id="ib-block7" contenteditable="true"><h2>Почему выбирают нас?</h2>

<ul class="why-we-list clr"><li>
	<div><img src="images/why-we-list/1.png"></div>

	<p>Вы отправляете нам заявку, мы связваемся с вами в ближайшее время</p>
	</li>
	<li>
	<div><img src="images/why-we-list/2.png"></div>

	<p>Быстро подбираем вам качественный товар и высылаем в кратчайшие сроки</p>
	</li>
	<li>
	<div><img src="images/why-we-list/3.png"></div>

	<p>Получаете посылку на почте и проверяете работспособность товара</p>
	</li>
	<li>
	<div><img src="images/why-we-list/4.png"></div>

	<p>Если вас все устраивает,мы выставляем вам счет на оплату наших услуг</p>
	</li>
</ul></div><!--end conteiner-->
		</div><!--end why-we-block-->
		<div class="b-form-middle">
			<div class="conteiner">
				<div id="ib-block8" contenteditable="true"><h2>оставьте заявку на заказ и покупку товара</h2>

<p class="sub-title">Узнайте о других специальных предложениях и <span>скидках</span> нашей компании</p>
</div>
				<form class="order-form middle clr" method="post" action="form/form.php">
					<p><input type="text" name="name" class="name <?php if ($ini['name_required']) print 'required'; ?>" placeholder="Ваше имя"></p>
					<p><input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required'; ?>" placeholder="Ваш телефон"></p>
					<p><input type="text" name="email" class="email <?php if ($ini['email_required']) print 'required'; ?>" placeholder="Ваш E-mail"></p>
					<p><button type="submit" class="orange-btn form-btn">Отправить</button></p>
				</form>
			</div><!--close conteiner-->
		</div><!--end-b-offer-middle-->
		<div class="reviews-block">
			<div class="conteiner">
				<div id="ib-block9" contenteditable="true"><h2>Схема работы</h2>
</div>
				<div id="ib-block10" class="howlist" contenteditable="true"><ul><li>Вы отправляете заявку и мы связываемся с вами в ближайшее время.</li>
	<li><img src="images/arrow.png"></li>
	<li><!--class="Mso"-->Вы отправляете заявку и мы связываемся с вами в ближайшее время.<br><!--class="Mso"-->Вы отправляете заявку и мы связываемся с вами в ближайшее время.</li>
	<li> </li>
	<li><img src="images/arrow.png"></li>
	<li><!--class="Mso"-->Вы отправляете заявку и мы связываемся с вами в ближайшее время.</li>
	<li><img src="images/arrow.png"></li>
	<li><!--class="Mso"-->Вы отправляете заявку и мы связываемся с вами в ближайшее время.<br><!--class="Mso"-->Вы отправляете заявку и мы связываемся с вами в ближайшее время.</li>
	<li><img src="images/arrow.png"></li>
	<li><!--class="Mso"-->Вы отправляете заявку и мы связываемся с вами в ближайшее время.</li>
</ul></div>
			</div><!--end conteiner-->
		</div><!--end reviews-block-->
		<div class="contacts-block">
			<div class="conteiner clr">
				<div id="ib-block14" contenteditable="true"><h2>Контактная информация</h2></div>
				<div id="map" data-coord="<?php if ($ini['map_point']) print $ini['map_point'];?>" data-center="<?php if ($ini['map_center']) print $ini['map_center'];?>"></div>
				<div class="c-right-col">
					<address class="bottom-contacts">
						<?php if ($ini['address']) { ?><p>
								<span class="b-c-title">Наш адрес:</span>
								<span><?php print $ini['address']; ?></span>
							</p>
						<?php } ?><?php if ($ini['email']) { ?><p>
								<span class="b-c-title">Электронная почта</span>
								<span><?php print chr(60).'a href="mailto:'.$ini['email'].'"'.chr(62).$ini['email'].chr(60).'/a'.chr(62);?></span>
							</p>
						<?php } ?><?php if ($ini['phone']) { ?><p>
								<span class="b-c-title phone-textx">Телефон</span>
								<span class="phone-text"><?php print $ini['phone']; ?></span>
							</p>
						<?php } ?></address>
					<div class="send-request-bottom">
						<span class="b-c-title">Обратный звонок</span>
						<a href="" class="orange-btn bottom-btn order-call-btn">заказать</a>
					</div>
				</div><!--end-c-right-col-->
			</div><!--end conteiner-->
		</div><!--end contacts-block-->
		<div class="footer">
			<div class="conteiner clr">
				<div class="copyright">
					<p>© <?php print $ini['company_name'] . ', ' . date('Y'); ?></p>
				</div>
				<div class="developer">
					<p>Сайт сделан в <a href="http://youlp.ru/" target="_blank">YouLP.ru</a></p>
				</div>
			</div>
		</div><!--end-footer-->
		<div class="modals">
			<div class="overlay"></div>
			<div class="modal order-modal">
				<a class="close-btn" href="javascript:;">X</a>
				<h4>Заявка</h4>
				<form class="order-form" method="post" action="form/form.php">
					<input type="text" name="phone" class="<?php if ($ini['phone_required']) print 'required'; ?> phone phone-mask" placeholder="Ваш номер телефона?"><?php if ($ini['email_field']) { ?><input type="text" name="email" class="<?php if ($ini['email_required']) print 'required'; ?> email" placeholder="Ваш email"><?php } ?><a href="javascript:;" class="send-btn red-btn orange-btn">Отправить заявку</a>
				</form>
			</div>
			<div class="modal call-modal">
				<a class="close-btn" href="javascript:;">X</a>
				<h4>Обратный звонок</h4>
				<form class="order-form" method="post" action="form/form.php">
					<input type="hidden" name="call" value="1"><input type="text" name="phone" class="<?php if ($ini['phone_required']) print 'required'; ?> phone phone-mask" placeholder="Ваш номер телефона?"><?php if ($ini['email_field']) { ?><input type="text" name="email" class="<?php if ($ini['email_required']) print 'required'; ?> email" placeholder="Ваш email"><?php } ?><a href="javascript:;" class="send-btn red-btn orange-btn">Перезвоните мне</a>
				</form>
			</div>
			<div class="modal thanks-modal">
				<a class="close-btn" href="javascript:;">X</a>
				<h4>Спасибо!</h4>
			</div>
		</div>
		<script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false"></script><script type="text/javascript" src="js/jquery-1.10.2-min.js"></script><script type="text/javascript" src="js/jquery.plugins.js"></script><script type="text/javascript" src="js/scripts.js?v2"></script><?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
