<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini');
if (!$ini) {
	echo 'Ошибка в конфигурационном файле';
	die();
}
?><!DOCTYPE html><html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title><?php print $ini['title']; ?></title><meta name="keywords" content=""><meta name="description" content=""><meta name="viewport" content="user-scalable=1, width=1000, initial-scale=1"><!--[if lt IE 9]>
			<script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]--><link rel="stylesheet" href="style/CSS_reset.css"><link rel="stylesheet" href="style/style.css"><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">
		<div class="header">
			<div class="h-top-row">
				<div class="conteiner clr">
					<div class="logo" id="ib-block1" contenteditable="true">
						<img src="images/logo.png" alt=""></div><!--close logo-->
					<address class="top-contacts">
						<?php if ($ini['phone']) { ?><span><?php print $ini['phone']; ?></span><?php } ?></address>
					<div class="call-order">
						<a href="" class="order-call-btn">Заказать звонок</a>
					</div>
					<div class="send-request">
						<a href="" class="order-btn orange-btn header-btn">отправить заявку</a>
					</div>
				</div><!--end conteiner-->
			</div><!--end top-row-->
			<div class="h-down-row">
				<div class="conteiner">
					<div id="ib-block2" contenteditable="true"><h1>Продающий заголовок</h1>
					<p class="sub-title">Основное описание о сайте продающем товар или услугу</p></div>
					<div class="main-offer-block">
						<div id="ib-block3-of" class="main-action" contenteditable="true">
								<h3>Уникальная акция!</h3>
								<p>Закажи три товара и получи в подарок что-нибудь</p>
						</div>
						<div class="h-form-block">
							<div id="ib-block3" contenteditable="true"><h3>Отправьте заявку 
								<span>На бесплатный<br> расчёт вашего заказа</span>
							</h3></div>
							<form class="order-form" method="post" action="form/form.php">
								<p><input type="text" name="name" class="name <?php if ($ini['name_required']) print 'required'; ?>" placeholder="Ваше имя"></p>
								<p><input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required'; ?>" placeholder="Ваш номер телефона"></p>
								<p class="margin-top"><input class="orange-btn form-btn" type="submit" value="Отправить"></p>
							</form>
						</div><!--end h-form-block-->
						<div class="action-block">
							<div class="hgroup">
								<p><strong>До конца осталось</strong></p>
							</div>
							<div class="timer timer-digits">
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
							<div id="ib-block-ar" contenteditable="true"><p><img src="images/arrow-53-128.png"/></p></div>
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
			</div><!--end h-down-row-->
		</div><!--end header-->
		<div class="overback">
			<div class="why-we-block">
				<div class="conteiner" id="ib-block7" contenteditable="true">
					<h2>Почему выбирают нас?</h2>
					<ul class="why-we-list clr"><li><div><img src="images/why-we-list/1.png"></div><p>Вы отправляете нам заявку, мы связваемся с вами в ближайшее время</p></li>
						<li><div><img src="images/why-we-list/2.png"></div><p>Быстро подбираем вам качественный товар и высылаем в кратчайшие сроки</p></li>
						<li><div><img src="images/why-we-list/3.png"></div><p>Получаете посылку на почте и проверяете работспособность товара</p></li>
						<li><div><img src="images/why-we-list/4.png"></div><p>Если вас все устраивает,мы выставляем вам счет на оплату наших услуг</p></li>
					</ul></div><!--end conteiner-->
			</div><!--end why-we-block-->
			<div class="b-form-middle">
				<div class="conteiner">
					<div id="ib-block8" contenteditable="true"><h2>оставьте заявку на заказ и покупку товара</h2>
					<p class="sub-title">Узнайте о других специальных предложениях и <span>скидках</span> нашей компании</p></div>
					<form class="order-form middle clr" method="post" action="form/form.php">
						<p><input type="text" name="name" class="name <?php if ($ini['name_required']) print 'required'; ?>" placeholder="Ваше имя"></p>
						<p><input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required'; ?>" placeholder="Ваш телефон"></p>
						<p><input type="text" name="email" class="email <?php if ($ini['email_required']) print 'required'; ?>" placeholder="Ваш E-mail"></p>
						<p><button type="submit" class="orange-btn form-btn">Отправить</button></p>
					</form>
				</div><!--close conteiner-->
			</div><!--end-b-offer-middle-->
		</div>
		<div class="reviews-block">
			<div class="conteiner">
				<div id="ib-block9" contenteditable="true"><h2>Отзывы</h2></div>
				<div class="rev-wrap clr">
					<div class="rev left-fl">
						<div class="rev-head">
							<div class="img-caption clr" id="ib-block10" contenteditable="true">
								<img src="images/review_placeholder2.png" alt=""><h3>Михаил Липницкий</h3>
								<p class="sub-title">Ответственный по технике безопасности ООО «Северо-Сталь»
								</p><p class="b-data">17.08.2013</p>
							</div>
							<div class="r-text" id="ib-block11" contenteditable="true">
								<p>Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur, и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги de Finibus Bonorum et Malorum (О пределах добра и зла), написанной Цицероном в 45 году н.э.Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur, и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги de Finibus Bonorum et Malorum.</p>
							</div>
						</div>
					</div><!--end-rev-->
					<div class="rev right-fl">
						<div class="rev-head">
							<div class="img-caption clr" id="ib-block12" contenteditable="true">
								<img src="images/review_placeholder1.png" alt=""><h3>Михаил Липницкий</h3>
								<p class="sub-title">Ответственный по технике безопасности ООО «Северо-Сталь»
								</p><p class="b-data">17.08.2013</p>
							</div>
							<div class="r-text" id="ib-block13" contenteditable="true">
								<p>Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur, и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги de Finibus Bonorum et Malorum (О пределах добра и зла), написанной Цицероном в 45 году н.э.Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur, и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги de Finibus Bonorum et Malorum.</p>
							</div>
						</div>
					</div><!--end-rev-->
				</div><!--end rev-wrap-->
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
								<span class="b-c-title">Телефон</span>
								<span class="orange-text"><?php print $ini['phone']; ?></span>
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
					<p>Шаблон сделан в <a href="http://ibrush.ru" target="_blank">iBrush.ru</a> конечно же</p>
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
