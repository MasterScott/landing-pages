<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini');
if (!$ini) {
	echo 'Ошибка в конфигурационном файле';
	die();
}
?><!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"><meta name="viewport" content="user-scalable=yes, width=1000"><!--[if lt IE 9]>
		<script src="js/html5shiv.js"></script>
		<![endif]--><link href="http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic&amp;subset=latin,cyrillic-ext" rel="stylesheet" type="text/css"><link type="text/css" href="css/style.css?v2" rel="stylesheet" media="screen"><script type="text/javascript" src="js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="js/plugins.js"></script><script type="text/javascript" src="js/scripts.js?v2"></script><title><?php print $ini['title']; ?></title><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">
		<header id="header"><article class="inner"><a class="logo" href="/"><?php print chr(60).'img src="'.$ini['logo'].'"'.chr(62);?></a>
<h1 class="h1"><span><strong><?php print $ini['company_name'];?></strong></span><br><?php print $ini['motto'];?></h1>
				<div class="right-col">
					<?php if ($ini['phone']) { ?><div class="phone-num"><?php print $ini['phone'];?></div><?php } ?><div><a href="javascript:;" class="call-request-btn orange-btn"><span>Заказать звонок</span></a></div>
				</div>
			</article></header><section id="first"><article class="inner"><div class="left-col" id="ib-block2" contenteditable="true"><ul class="items-list"><li>Торты</li>
	<li>Пицца</li>
	<li>Восточная кухня</li>
	<li>Мясные блюда</li>
	<li>Салаты</li>
	<li>Уникальные рецепты</li>
</ul></div>
				<div class="right-col">
					<form class="order-form" method="post" action="form/form.php">
						<div id="ib-block3" contenteditable="true"><header>Оставьте заявку<br>
и запишитесь на ближайшее занятие</header></div>
						<article><input type="text" name="fio" class="fio <?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя"><input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required';?>" placeholder="Ваш телефон"><textarea name="comment" class="comment" placeholder="Ваш комментарий"></textarea></article><footer><a href="javascript:;" class="send-btn orange-btn">Оставить заявку</a></footer></form>
				</div>
			</article></section><section id="stats-block"><article class="inner" id="ib-block4" contenteditable="true"><ul class="stats-list"><li>
	<div class="num">10</div>

	<div class="descr">уроков</div>
	</li>
	<li>
	<div class="num">1200</div>

	<div class="descr">учеников</div>
	</li>
	<li>
	<div class="num">216</div>

	<div class="descr">рецептов</div>
	</li>
	<li>
	<div class="num">5</div>

	<div class="descr">преподавателей<br>
	шеф-поваров</div>
	</li>
</ul></article></section><section id="action"><article class="inner clearfix"><div class="left-col" id="ib-block5" contenteditable="true">Только на этой неделе<br>
действует наше<br>
уникальное предложение!</div>
				<div class="right-col">
					<div class="timer">
						<div class="timer-digits clearfix">
							<div>
								<i class="days">0</i>
								<span class="days-text">дней</span>
							</div>
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
					</div>
					<div class="btn-wrap right" id="ib-block6" contenteditable="true"><a class="order-btn brown-btn" href="javascript:;">Заказать уникальное<br>
предложение</a></div>
				</div>
			</article></section><section id="advantages"><article class="inner" id="ib-block7" contenteditable="true"><ul class="advantages-list clearfix"><li>
	<div>Профессиональный подход</div>

	<p>Мы используем только высококлассное оборудование и материалы. Все наши сотрудники имеют огромный опыт работы.</p>
	</li>
	<li>
	<div>Адекватные цены</div>

	<p><!--class="Mso"-->Мы используем только высококлассное оборудование и материалы. Все наши сотрудники имеют огромный опыт работы.</p>
	</li>
	<li>
	<div>Индивидуальный подход</div>

	<p><!--class="Mso"-->Мы используем только высококлассное оборудование и материалы. Все наши сотрудники имеют огромный опыт работы.</p>
	</li>
	<li>
	<div>Гарантия</div>

	<p><!--class="Mso"-->Мы используем только высококлассное оборудование и материалы. Все наши сотрудники имеют огромный опыт работы.</p>
	</li>
</ul></article></section><section id="examples"><article class="inner"><div id="ib-block8" contenteditable="true"><h2>Что готовим?</h2>
</div>
				<div id="examples-gal">
					<a class="gal-left prev" href="#"></a>
					<a class="gal-right next" href="#"></a>
					<div class="viewport" id="ib-block9" contenteditable="true">
						<ul class="overview"><!-- Галерея -->
							<li><a href="i/gal-1.jpg" rel="group1"><img src="i/gal-1.jpg" alt=""></a></li>
							<li><a href="i/gal-2.jpg" rel="group1"><img src="i/gal-2.jpg" alt=""></a></li>
							<li><a href="i/gal-3.jpg" rel="group1"><img src="i/gal-3.jpg" alt=""></a></li>
							<li><a href="i/gal-4.jpg" rel="group1"><img src="i/gal-4.jpg" alt=""></a></li>
							<li><a href="i/gal-5.jpg" rel="group1"><img src="i/gal-5.jpg" alt=""></a></li>
							<li><a href="i/gal-6.jpg" rel="group1"><img src="i/gal-6.jpg" alt=""></a></li>                                                    
						<!-- конец галереи --></ul></div>
				</div>
			</article></section><section class="line-form"><article class="inner"><form class="order-form" method="post" action="form/form.php">
					<div id="ib-block10" contenteditable="true"><header>Оставьте заявку запишитесь на занятия</header></div>
					<article class="clearfix"><div class="first-col">
							<input type="text" name="fio" class="fio <?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя"><input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required';?>" placeholder="Ваш телефон"></div>
						<div class="second-col">
							<textarea name="comment" class="comment" placeholder="Ваш комментарий"></textarea></div>
						<div class="btn-wrap"><a href="javascript:;" class="send-btn orange-btn">Оставить заявку</a></div>
					</article></form>
			</article></section><footer id="footer"><article class="inner clearfix"><div class="left-col">
					<p class="copyright">© <?php print $ini['company_name'] . ', ' . date('Y'); ?></p>
					<?php if ($ini['address']) { ?><p class="address"><?php print $ini['address']; ?></p><?php } ?><?php if ($ini['phone']) { ?><p class="phone-num"><?php print $ini['phone']; ?></p><?php } ?><?php if ($ini['email']) { ?><p><?php print chr(60).'a href="mailto:'.$ini['email'].'"'.chr(62).$ini['email'].chr(60).'/a'.chr(62);?></p><?php } ?></div>
				<div class="right-col">
					<div class="social-btns" id="ib-block11" contenteditable="true"><!--
						--><!--
						--><!--
						--><!--
					--></div>
					<div class="made-by">Лэндинг сделан в <a href="http://youlp.ru/" target="_blank">YouLP.ru</a></div>
				</div>
			</article></footer><div class="modals">
			<div class="overlay" style="display: none;"></div>
			<div class="modal order-modal">
				<a class="close-btn" href="javascript:;"></a>
				<form class="order-form" method="post" action="form/form.php">
					<header>Оставить заявку</header><article><input type="text" name="fio" class="fio <?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя"><input type="text" name="email" class="email <?php if ($ini['email_required']) print 'required';?>" placeholder="Ваш email"><input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required';?>" placeholder="Ваш телефон"></article><footer><a href="javascript:;" class="send-btn orange-btn">Отправить</a>
					</footer></form>
			</div>
			<div class="modal phone-request">
				<a class="close-btn" href="javascript:;"></a>
				<form method="post" class="order-form call-request-form" action="form/form.php">
					<input type="hidden" name="type" value="call_request"><header>Заказать звонок</header><article><input type="text" name="fio" class="fio <?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя"><input type="text" name="phone" class="phone required phone-mask" placeholder="Ваш телефон"></article><footer><a href="javascript:;" class="send-btn orange-btn">Заказать звонок</a>
					</footer></form>
			</div>
			<div class="modal thanks">
				<a class="close-btn" href="javascript:;"></a>
				<div class="order-form">
					<header>Спасибо за заявку!</header></div>
			</div>
		</div>
<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
