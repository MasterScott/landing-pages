<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini');
if (!$ini) {
	echo 'Ошибка в конфигурационном файле';
	die();
}
?><!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"><meta name="viewport" content="user-scalable=yes, width=1000"><!--[if lt IE 9]>
		<script src="js/html5shiv.js"></script>
		<![endif]--><link href="http://fonts.googleapis.com/css?family=Exo+2:400,400italic,600,600italic,700,700italic&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css"><link type="text/css" href="css/style.css?v2" rel="stylesheet" media="screen"><script type="text/javascript" src="js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="js/plugins.js"></script><script type="text/javascript" src="js/scripts.js?v2"></script><title><?php print $ini['title']; ?></title><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">
		<header id="header"><article class="inner"><p class="logo"><?php print chr(60).'img src="'.$ini['logo'].'"'.chr(62);?></p>
				<div class="right-col">
					<div><a href="javascript:;" class="call-request-btn orange-btn"><span>Заказать звонок</span></a></div><?php if ($ini['phone']) { ?><div class="phone-num"><?php print $ini['phone'];?></div><?php } ?></div>
			</article></header><section id="first"><article class="inner"><div class="title" id="ib-block2" contenteditable="true"><h1>Огромный продающий заголовок</h1>

<h2>Подзаголовок с описанием, чтобы заинтересовать посетителя</h2>
</div>
			<div class="bot-form">
				<form class="order-form" method="post" action="form/form.php">
					<div id="ib-block3" contenteditable="true"><header>Оставьте заявку<br><small>и получите бонус - бесплатный подарок!</small></header></div>
					<article><input type="text" name="fio" class="fio <?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя"><input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required';?>" placeholder="Ваш телефон"><input type="text" name="email" class="email <?php if ($ini['email_required']) print 'required';?>" placeholder="Ваш e-mail"></article><footer><a href="javascript:;" class="send-btn orange-btn">Оставить заявку</a></footer></form>
			</div>
			</article></section><section id="stats-block"><article class="inner" id="ib-block4" contenteditable="true"><ul class="stats-list"><li>
	<div class="num">10</div>

	<div class="descr">городов</div>
	</li>
	<li>
	<div class="num">150</div>

	<div class="descr">заведений</div>
	</li>
	<li>
	<div class="num">20</div>

	<div class="descr">лет опыта</div>
	</li>
	<li>
	<div class="num">1</div>

	<div class="descr">уникальный шанс</div>
	</li>
</ul></article></section><section id="advantages"><article class="inner" id="ib-block7" contenteditable="true"><ul class="advantages-list clearfix"><li><img src="i/pic01.jpg"><div>Быстро!</div>

	<p><!--class="Mso"-->Разнообразный и богатый опыт новая модель организационной деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</p>
	</li>
	<li><img src="i/pic02.jpg"><div>С комфортом</div>

	<p><!--class="Mso"--><!--class="Mso"-->С другой стороны консультация с широким активом в значительной степени обуславливает создание направлений прогрессивного развития.</p>
	</li>
	<li><img src="i/pic03.jpg"><div>В любое место</div>

	<p><!--class="Mso"--><!--class="Mso"-->Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.</p>
	</li>
	<li><img src="i/pic04.jpg"><div>Уникально</div>

	<p><!--class="Mso"--><!--class="Mso"-->Не следует, однако забывать, что рамки и место обучения кадров представляет собой интересный эксперимент проверки существенных финансовых и административных условий.</p>
	</li>
</ul></article></section><section id="examples"><article class="inner clearfix"><div id="ib-block8" contenteditable="true"><h2>Кто мы такие?</h2>
</div>
			<div class="left-col" id="ib-block-lc" contenteditable="true">
			<img src="i/pic05.jpg"></div>
			<div class="right-col" id="ib-block-rc" contenteditable="true"><h3><i>Товарищи! Hеализация намеченных плановых заданий способствует подготовки и реализации дальнейших направлений развития.</i></h3>

<p>Задача организации, в особенности же рамки и место обучения кадров требуют определения и уточнения новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции способствует подготовки и реализации новых предложений. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.</p>

<p>Не следует, однако забывать, что рамки и место обучения кадров представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. С другой стороны консультация с широким активом в значительной степени обуславливает создание направлений прогрессивного развития.</p>
</div>
			</article></section><section class="line-form"><article class="inner"><form class="order-form" method="post" action="form/form.php">
					<div id="ib-block10" contenteditable="true"><header>Оставьте заявку и мы вам перезвоним</header></div>
					<article class="clearfix"><div class="first-col">
							<input type="text" name="fio" class="fio <?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя"></div>
						<div class="second-col">
							<input type="text" name="phone" class="phone phone-mask required" placeholder="Ваш телефон"></div>
						<div class="btn-wrap"><a href="javascript:;" class="send-btn orange-btn">Оставить заявку</a></div>
					</article></form>
			</article></section><footer id="footer"><article class="inner clearfix"><div class="left-col">
					<p class="copyright">© <?php print $ini['company_name'] . ', ' . date('Y'); ?></p>
					<?php if ($ini['address']) { ?><p class="address"><?php print $ini['address']; ?></p><?php } ?><?php if ($ini['email']) { ?><p><?php print chr(60).'a href="mailto:'.$ini['email'].'"'.chr(62).$ini['email'].chr(60).'/a'.chr(62);?></p><?php } ?></div>
				<div class="right-col">
					<?php if ($ini['phone']) { ?><p class="phone-num"><?php print $ini['phone']; ?></p><?php } ?><div class="made-by">Сайт сделан в <a href="http://youlp.ru/" target="_blank">YouLP.ru</a></div>
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
