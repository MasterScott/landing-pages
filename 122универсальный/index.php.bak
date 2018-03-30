<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini');
if (!$ini) {
	echo 'Ошибка в конфигурационном файле';
	die();
}
?><!DOCTYPE html><html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title><?php print $ini['title']; ?></title><meta name="keywords" content=""><meta name="description" content=""><meta name="viewport" content="user-scalable=1, width=1001px, initial-scale=1"><link rel="stylesheet" type="text/css" href="style/CSS_reset.css"><link rel="stylesheet" type="text/css" href="style/style.css"><script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false"></script><script type="text/javascript" src="js/jquery-1.10.2-min.js"></script><script type="text/javascript" src="js/jquery.plugins.js"></script><script type="text/javascript" src="js/scripts.js?v2"></script><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">
	<div class="wrapper">
		<div class="header">
			<div class="head-top-row">
				<?php if ($ini['phone']) { ?><address class="head-phone">
						<span class="phone-icon"></span>
						<?php print $ini['phone']; ?></address>
				<?php } ?><a href="#" class="blue-btn call-request-btn header-btn">Обратный звонок</a>
			</div>
			<div class="head-nav-row">
				<div class="logo" id="ib-block1" contenteditable="true">
					<img src="images/logo.png" width="245" height="113" alt="Steklo"></div>
				<div id="ib-block2" contenteditable="true"><ul class="nav"><li><a href="#our-advantages">наши преимущества</a></li>
	<li><a href="#sheme">схема работы</a></li>
	<li><a href="#reviews">отзывы</a></li>
	<li><a href="#contacts">контакты</a></li>
</ul></div>
			</div>
			<div class="head-title-row" id="ib-block3" contenteditable="true"><h1>Заголовок</h1>

<p class="main-post-title">Изготовление и монтаж с доставкой по Москве и Московской области</p>
</div>
		</div><!--end header-->
		<div class="gallery-block" id="ib-block4" contenteditable="true"><ul id="gallery"><li>
	<div class="gal-img"><img alt="" height="249" src="images/gallery/1.jpg" width="249"></div>

	<div class="gal-title">Товар 1</div>
	</li>
	<li>
	<div class="gal-img"><img alt="" height="249" src="images/gallery/1.jpg" width="249"></div>

	<div class="gal-title">Товар 2</div>
	</li>
	<li>
	<div class="gal-img"><img alt="" height="249" src="images/gallery/1.jpg" width="249"></div>

	<div class="gal-title">Товар 3</div>
	</li>
	<li>
	<div class="gal-img"><img alt="" height="249" src="images/gallery/1.jpg" width="249"></div>

	<div class="gal-title">Товар 4</div>
	</li>
	<li>
	<div class="gal-img"><img alt="" height="249" src="images/gallery/1.jpg" width="249"></div>

	<div class="gal-title">Товар 5</div>
	</li>
	<li>
	<div class="gal-img"><img alt="" height="249" src="images/gallery/1.jpg" width="249"></div>

	<div class="gal-title">Товар 6</div>
	</li>
	<li>
	<div class="gal-img"><img alt="" height="249" src="images/gallery/1.jpg" width="249"></div>

	<div class="gal-title">Товар 7</div>
	</li>
	<li>
	<div class="gal-img"><img alt="" height="249" src="images/gallery/1.jpg" width="249"></div>

	<div class="gal-title">Товар 8</div>
	</li>
</ul></div><!--end-gallery-->
		<div class="form-block pattern-bg">	
			<div id="ib-block5" contenteditable="true"><h3 class="form-title">Отправьте заявку на бесплатную консультацию нашего специалиста и оформление заказа.</h3></div>
				<form class="order-form clr" method="post" action="form/form.php">
					<p><input type="text" name="name" class="name <?php if ($ini['name_required']) print 'required'; ?>" placeholder="Ваше имя"></p>
					<p><input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required'; ?>" placeholder="Ваш телефон"></p>
					<p><input type="text" name="email" class="email <?php if ($ini['email_required']) print 'required'; ?>" placeholder="Ваш e-mail"></p>
					<p><button class="db-btn" type="submit">Отправить</button></p>
				</form>
		</div><!--end form-block-->
		<div class="stat-block" id="ib-block6" contenteditable="true"><h3>Нашими довольными клиентами являются</h3>

<ul class="stat-list clr"><li><span class="num-stat">4</span> <span>лет работаем<br>
	в этой сфере</span></li>
	<li><span class="num-stat">9</span> <span>фото<br>
	студий</span></li>
	<li><span class="num-stat">14</span> <span>школ<br>
	йоги</span></li>
	<li class="k"><span class="num-stat">35</span> <span>офисов</span></li>
	<li><span class="num-stat">52</span> <span>инфо-<br>
	центра</span></li>
</ul></div><!--end-stat-block-->
		<div class="why-we-wrap-block">
			<div class="why-we-block" id="our-advantages" contenteditable="true"><h2>Почему нас выбирают?</h2>

<ul class="why-we-list"><li>
	<ul class="why-we-inner"><li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/1.png" width="137"></div>
		Договора</li>
		<li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/2.png" width="137"></div>
		Доставка</li>
		<li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/3.png" width="137"></div>
		Расчеты</li>
		<li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/4.png" width="137"></div>
		Уборка</li>
		<li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/5.png" width="137"></div>
		Гарантия</li>
	</ul></li>
	<li>
	<ul class="why-we-inner"><li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/6.png" width="137"></div>
		Мы - первые!</li>
		<li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/7.png" width="137"></div>
		Скидки</li>
		<li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/8.png" width="137"></div>
		Работаем 24 часа.</li>
		<li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/9.png" width="137"></div>
		Европейское качетсво</li>
		<li>
		<div class="why-we-img"><img alt="" height="137" src="images/why-we-list/10.png" width="137"></div>
		Любая сложность</li>
	</ul></li>
</ul></div>
		</div>
		<div class="work-sheme" id="sheme" contenteditable="true"><h2>Схема работы</h2>

<ul class="sheme-list clr">
	<li>
	<ul class="sheme-list-inner left-list">
		<li><img alt="" height="101" src="images/sheme-work/l-1.gif" width="101"><span>Первый этап</span></li>
		<li><img alt="" height="101" src="images/sheme-work/l-2.gif" width="101"><span>Третий этап</span></li>
		<li><img alt="" height="101" src="images/sheme-work/l-3.gif" width="101"><span>Пятый этап</span></li>
	</ul>
	</li>
	<li class="l-right">
	<ul class="sheme-list-inner right-list">
		<li><span>Второй этап</span><img alt="" height="101" src="images/sheme-work/r-1.gif" width="101"></li>
		<li><span>Четвертый этап</span><img alt="" height="101" src="images/sheme-work/r-2.gif" width="101"></li>
		<li><span>Шестой этап</span><img alt="" height="101" src="images/sheme-work/r-3.gif" width="101"></li>
	</ul>
	</li>
</ul>
</div>
		<div class="reviews" id="reviews" contenteditable="true">
			<h2>Отзывы</h2>
			<ul class="reviews-list"><li>
					<div class="rev-img">
						<img src="images/reviews/1.jpg" alt="" width="231" height="199"></div>
					<div class="rev-text">
						<h3>Маша Иванова</h3>
						<span class="per-info">Москва</span>
						<span class="per-info">ООО «Траст Холдинг»</span>
						<p>Компания произвела на меня очень хорошее впечатление. Я не разочаровалась! Зеркала уже стоят, монтаж длился один день. После окончания работ, работники все убрали за собой</p>
					</div>
				</li>
				<li>
					<div class="rev-img">
						<img src="images/reviews/2.jpg" alt="" width="231" height="199"></div>
					<div class="rev-text">
						<h3>Маша Иванова</h3>
						<span class="per-info">Москва</span>
						<span class="per-info">ООО «Траст Холдинг»</span>
						<p>Компания произвела на меня очень хорошее впечатление. Я не разочаровалась! Зеркала уже стоят, монтаж длился один день. После окончания работ, работники все убрали за собой</p>
					</div>
				</li>
				<li>
					<div class="rev-img">
						<img src="images/reviews/1.jpg" alt="" width="231" height="199"></div>
					<div class="rev-text">
						<h3>Маша Иванова</h3>
						<span class="per-info">Москва</span>
						<span class="per-info">ООО «Траст Холдинг»</span>
						<p>Компания произвела на меня очень хорошее впечатление. Я не разочаровалась! Зеркала уже стоят, монтаж длился один день. После окончания работ, работники все убрали за собой</p>
					</div>
				</li>
				<li>
					<div class="rev-img">
						<img src="images/reviews/2.jpg" alt="" width="231" height="199"></div>
					<div class="rev-text">
						<h3>Маша Иванова</h3>
						<span class="per-info">Москва</span>
						<span class="per-info">ООО «Траст Холдинг»</span>
						<p>Компания произвела на меня очень хорошее впечатление. Я не разочаровалась! Зеркала уже стоят, монтаж длился один день. После окончания работ, работники все убрали за собой</p>
					</div>
				</li>
			</ul></div>
		<div class="contacts-info clr" id="contacts">
			<div id="ib-block-cont" contenteditable="true"><h2>Контактная информация</h2></div>
			<div class="map-column">
				<div id="map"  data-coord="<?php if ($ini['map_point']) print $ini['map_point'];?>" data-center="<?php if ($ini['map_center']) print $ini['map_center'];?>"></div>
			</div>
			<div class="contacts-column">
				<address class="bottom-contacts">
					<?php if ($ini['address']) { ?><span class="contacts-title">Адрес:</span>
					<span><?php print $ini['address']; ?></span>
					<?php } ?><?php if ($ini['phone']) { ?><span class="contacts-title">Телефон:</span>
					<span><?php print $ini['phone']; ?></span>
					<?php } ?></address>
				<a href="#" class="blue-btn call-request-btn bottom-btn">Обратный звонок</a>
				<div class="delivery-info" id="ib-block-delivery" contenteditable="true">
					<span class="contacts-title">Условия доставки:</span>
					<span>От 2000 рублей, за МКАД 25 руб/км, при крупных заказах бесплатно</span>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="copyright">
				<p>© <?php print $ini['company_name'] . ', ' . date('Y'); ?></p>
			</div>
			<div class="developer">
				<p>Шаблон сделан в <a href="http://ibrush.ru" target="_blank">iBrush.ru</a> в 2013 году</p>
			</div>
		</div>
	</div><!--end wrapper-->
	
	<div class="modals">
		<div class="overlay"></div>
		<div class="modal recall-modal">
			<a href="#" class="close-btn"></a>
			<form action="form/form.php" method="POST" class="modal-form callback-form"><input type="hidden" name="type" value="call_request"><p><input type="text" name="name" class="name" placeholder="Ваше имя"></p>
					<p><input type="text" name="phone" class="phone phone-mask required" placeholder="Ваш телефон"></p>
				<p><button type="submit" class="blue-btn modal-btn">Заказать звонок</button></p>
			</form>
		</div>
		
		<div class="modal thanks1-modal">
			<h3 class="form-title">Спасибо!</h3>
			<a href="#" class="close-btn"></a>
			<p class="call-you">Ваша заявка принята!</p>
		</div>
		
		<div class="modal thanks2-modal">
			<h3 class="form-title">Спасибо!</h3>
			<a href="#" class="close-btn"></a>
			<p class="call-you">Мы перезвоним вам в ближайшее время!</p>
		</div>
	</div>
	<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
