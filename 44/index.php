<?php require 'functions.php';
header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini'); 
if (!$ini) {
	echo 'Ошибка в конфигурационном файле'; die();
}	?><!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="user-scalable=yes, width=942"><!--[if lt IE 9]>
			<script src="js/html5shiv.js"></script>
		<![endif]--><link href="http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic&amp;subset=latin,cyrillic-ext" rel="stylesheet" type="text/css"><link type="text/css" href="css/style.css?v2" rel="stylesheet" media="screen"><script type="text/javascript" src="js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="js/jquery.placeholder.min.js"></script><script type="text/javascript" src="js/jquery.maskedinput.min.js"></script><script type="text/javascript" src="js/jquery.form.min.js"></script><script type="text/javascript" src="js/script.js?v2"></script><title><?php print $ini['title'];?></title><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id'];?>">
		<header id="header"><article class="inner"><div class="logo" contenteditable="true" id="id-block1"><img alt="Логотип" height="54" src="ckfinder/userfiles/images/logo.png" width="209"></div>
				<div class="order-btn-wrap"><a href="javascript:;" class="order-btn blue-btn">Отправить заявку</a></div>
				<?php if ($ini['phone']) {?><div class="phone"><?php print $ini['phone'];?></div><?php } ?><a href="javascript:;" class="call-request-btn">Заказать звонок</a>
			</article></header><section id="first-block"><article class="inner"><div class="left-col">
					<h1 contenteditable="true" id="id-block2">Продающий заголовок</h1>
					<div class="descr" contenteditable="true" id="id-block3">Подзаголовок</div>
					<div class="offer-item">
						<div class="gal-cont" contenteditable="true" id="id-block4"><div class="gal-image"><img src="i/placeholder.jpg"></div>

<div class="gal-thumbs-cont">
<div class="gal-left"> </div>

<div class="gal-thumbs">
<div class="gal-slider" style="width: 272px;"><a class="act" href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a></div>
</div>

<div class="gal-right"> </div>
</div>
</div>
						<div class="offer-info">
							<div class="offer-text-block" contenteditable="true" id="id-block5"><div class="type">Название товара</div>

<div class="name">JCB 3CX</div>

<div class="hours"><span class="grey">Первый параметр</span> <span class="medium">1200 единиц</span></div>

<div class="price"><span class="grey">Цена</span> <span class="big">2 250 000</span> <span class="medium">рублей</span></div>

<div class="price-add"><span class="medium">+ Плюс что-то еще<br>
   <strong>в подарок!</strong></span></div>
</div>
							<div class="timer">
								<div class="timer-title">До конца акции осталось:</div>
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
							<div class="sub-timer" contenteditable="true" id="id-block6">Отправьте заявку прямо сейчас!</div>
						</div>
					</div>
				</div>
				<div class="order-form-wrap">
					<form class="order-form" method="post" action="form/form.php">
						<header contenteditable="true" id="id-block7">Отправьте заявку<br>
на покупку товаров<br>
сейчас!</header><article><input type="text" name="fio" class="<?php if ($ini['name_required']) print 'required';?> fio" placeholder="Ваше имя"><input type="text" name="phone" class="<?php if ($ini['phone_required']) print 'required';?> phone phone-mask" placeholder="Ваш телефон"><input type="text" name="email" class="<?php if ($ini['email_required']) print 'required';?> email" placeholder="Ваш e-mail"></article><footer><a href="javascript:;" class="send-btn blue-btn">Отправить заявку</a></footer></form>
				</div>
			</article></section><section id="stats-block"><article class="inner"><div contenteditable="true" id="id-block8"><ul class="stats-list"><li>
						<div class="stats-num">10</div>
						<div class="stats-text">лет<br> работы</div>
					</li>
					<li>
						<div class="stats-num">743</div>
						<div class="stats-text">довольных <br> покупателя</div>
					</li>
					<li>
						<div class="stats-num">247</div>
						<div class="stats-text">проданных <br> товаров</div>
					</li>
				</ul></div>
			</article></section><section id="why-we-block"><article class="inner"><h2 contenteditable="true" id="id-block9">Преимущества</h2>
				<div contenteditable="true" id="id-block10"><ul class="reasons-list clearfix"><li>
	<div class="item-img"><img alt="" src="i/i-reason-1.png"></div>
	Первое преимущество</li>
	<li>
	<div class="item-img"><img alt="" src="i/i-reason-2.png"></div>
	Второе преимущество</li>
	<li>
	<div class="item-img"><img alt="" src="i/i-reason-3.png"></div>
	Третье преимущество</li>
	<li>
	<div class="item-img"><img alt="" src="i/i-reason-4.png"></div>
	Четвертое преимущество</li>
	<li>
	<div class="item-img"><img alt="" src="i/i-reason-5.png"></div>
	Пятое преимущество</li>
	<li>
	<div class="item-img"><img alt="" src="i/i-reason-6.png"></div>
	Шестое преимущество</li>
</ul></div>
				</article></section><section id="how-we-work-block"><article class="inner"><h2 contenteditable="true" id="id-block11">Схема работы</h2>
				<h3 contenteditable="true" id="id-block12">Подзаголовок</h3>
				<div contenteditable="true" id="id-block13"><ul class="steps-list"><li>Вы отправляете заявку и мы связываемся с вами.</li>
					<li>Проводим техническую косультацию</li>
					<li>Предлагаем на выбор несколько вариантов.</li>
					<li>Организовываем доставку.</li>
					<li>Обучаем, если требуется.</li>
					<li class="last">Подписываем все документы.</li>
				</ul></div>
			</article></section><section id="offers-block"><article class="inner"><h2 contenteditable="true" id="id-block14">Специальные предложения</h2>
				<div class="offer-items clearfix">
					<div class="offer-item" contenteditable="true" id="id-block15"><div class="gal-cont">
<div class="gal-image"><img src="i/placeholder.jpg"></div>

<div class="gal-thumbs-cont">
<div class="gal-left"> </div>

<div class="gal-thumbs">
<div class="gal-slider" style="width: 248px;"><a class="act" href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a></div>
</div>

<div class="gal-right"> </div>
</div>
</div>

<div class="offer-info">
<div class="type">Название</div>

<div class="name">Модель</div>

<div class="hours">Характеристика: <span class="medium">1200 единиц</span></div>

<div class="year">Характеристика: <span class="medium">2010</span></div>

<div class="price">Цена: 2 250 000 рублей</div>
</div>
</div>
					<div class="offer-item" contenteditable="true" id="id-block16"><div class="gal-cont">
<div class="gal-image"><img src="i/placeholder.jpg"></div>

<div class="gal-thumbs-cont">
<div class="gal-left"> </div>

<div class="gal-thumbs">
<div class="gal-slider" style="width: 248px;"><a class="act" href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a></div>
</div>

<div class="gal-right"> </div>
</div>
</div>

<div class="offer-info">
<div class="type">Название</div>

<div class="name">Модель</div>

<div class="hours">Характеристика: <span class="medium">1200 единиц</span></div>

<div class="year">Характеристика: <span class="medium">2010</span></div>

<div class="price">Цена: 2 250 000 рублей</div>
</div>
</div>
					<div class="offer-item" contenteditable="true" id="id-block17"><div class="gal-cont">
<div class="gal-image"><img src="i/placeholder.jpg"></div>

<div class="gal-thumbs-cont">
<div class="gal-left"> </div>

<div class="gal-thumbs">
<div class="gal-slider" style="width: 248px;"><a class="act" href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a> <a href="i/placeholder.jpg"><img src="i/placeholder_small.jpg"></a></div>
</div>

<div class="gal-right"> </div>
</div>
</div>

<div class="offer-info">
<div class="type">Название</div>

<div class="name">Модель</div>

<div class="hours">Характеристика: <span class="medium">1200 единиц</span></div>

<div class="year">Характеристика: <span class="medium">2010</span></div>

<div class="price">Цена: 2 250 000 рублей</div>
</div>
</div>
				</div>
			</article></section><section id="order-block" class="order-block"><article class="inner"><form class="order-form" method="post" action="form/form.php">
					<header contenteditable="true" id="id-block18"><div>Отправьте заявку</div>
						<div class="sub-title">и узнайте о других наших спецпредложениях!</div>
						
						</header><article><input type="text" name="fio" class="<?php if ($ini['name_required']) print 'required';?> fio" placeholder="Ваше имя"><input type="text" name="phone" class="<?php if ($ini['phone_required']) print 'required';?> phone phone-mask" placeholder="Ваш телефон"><input type="text" name="email" class="<?php if ($ini['email_required']) print 'required';?> email" placeholder="Ваш e-mail"><a href="javascript:;" class="send-btn blue-btn">Отправить заявку</a>
					</article><footer contenteditable="true" id="id-block19">Ваши контактные данные не будут переданы третьим лицам</footer></form>
			</article></section><section id="reviews-block"><article class="inner"><h2 contenteditable="true" id="id-block20">Отзывы</h2>
				<div class="persons-cols clearfix">
					<div class="left-col">
						<div class="person-item" contenteditable="true" id="id-block21">
							<div class="person-left-col">
								<img src="i/review_placeholder2.jpg"><div class="person-name">Алла Иванова</div>
								<div class="person-position">Директор</div>
							</div>
							<div class="person-right-col">
								<div class="person-comment">
									<p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации соответствующий условий активизации. Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании новых предложений.</p>
								</div>
							</div>
						</div>
						<div class="person-item" contenteditable="true" id="id-block22"><div class="person-left-col"><img src="i/review_placeholder2.jpg"><div class="person-name">Петр Петрович</div>

<div class="person-position">Замдиректора</div>
</div>

<div class="person-right-col">
<div class="person-comment">
<p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации соответствующий условий активизации. Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании новых предложений.</p>
</div>
</div>
</div>
					</div>
					<div class="right-col">
						<div class="person-item" contenteditable="true" id="id-block23"><div class="person-left-col"><img src="i/review_placeholder2.jpg"><div class="person-name">Василий Иванов</div>

<div class="person-position">Менеджер</div>
</div>

<div class="person-right-col">
<div class="person-comment">
<p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации соответствующий условий активизации. Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании новых предложений.</p>
</div>
</div>
</div>
						<div class="person-item" contenteditable="true" id="id-block24"><div class="person-left-col"><img src="i/review_placeholder1.jpg"><div class="person-name">Катерина Смирнова</div>

<div class="person-position">Менеджер</div>
</div>

<div class="person-right-col">
<div class="person-comment">
<p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации соответствующий условий активизации. Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании новых предложений.</p>
</div>
</div>
</div>
					</div>
				</div>
			</article></section><section id="contacts-block"><article class="inner"><h2 contenteditable="true" id="id-block25">Контактная информация</h2>
				<div class="clearfix">
					<div class="left-col" contenteditable="true" id="id-block26"><img src="i/map.gif"></div>
					<div class="right-col">
						<div class="contacts-info">
							<?php if ($ini['phone']) {?><div>Телефон:</div>
							<p><span><?php print $ini['phone'];?></span></p>
							<?php } ?><?php if ($ini['email']) { ?><div>E-mail:</div>
							<p><?php print chr(60).'a href="mailto:'.$ini['email'].'"'.chr(62).$ini['email'].chr(60).'/a'.chr(62);?></p>
							<?php } ?><?php if ($ini['address']) { ?><div>Адрес:</div>
							<p><?php print $ini['address']; ?></p>
							<?php } ?><div class="bottom-line clearfix">
								<a href="#" class="call-request-btn">Заказать звонок</a>
								<p contenteditable="true" id="id-block27">Закажите звонок и наш менеджер свяжется с вами</p>
							</div>
						</div>
						<div contenteditable="true" id="id-block28"><div class="person-item"><img class="photo" src="i/manager_placeholder1.jpg"><div class="person-name">Иван Иванов</div>
</div>

<div class="person-item"><img class="photo" src="i/manager_placeholder2.jpg"><div class="person-name">Ольга Ольгова</div>
</div>

<div class="person-item last"><img class="photo" src="i/manager_placeholder2.jpg"><div class="person-name">Ольга Ольгина</div>
</div>
</div>
					</div>
				</div>
			</article></section><footer id="footer"><article class="inner"><span class="copyright">© Ваша компания2014</span>
				<div class="made-by">Сайт сделан в <a href="http://youlp.ru/" target="_blank">YouLP.ru</a></div>
			</article></footer><div class="modals">
			<div class="overlay"></div>
			<div class="modal order-modal">
				<a class="close-btn" href="javascript:;"></a>
				<form class="order-form" method="post" action="form/form.php">
					<header>Отправьте заявку</header><article><input type="text" name="fio" class="<?php if ($ini['name_required']) print 'required';?> fio" placeholder="Ваше имя"><input type="text" name="phone" class="<?php if ($ini['phone_required']) print 'required';?> phone phone-mask" placeholder="Ваш телефон"></article><footer><a href="javascript:;" class="send-btn blue-btn">Отправить</a>
					</footer></form>
			</div>
			<div class="modal phone-request">
				<a class="close-btn" href="javascript:;"></a>
				<form method="post" class="order-form call-request-form" action="form/form.php">
					<input type="hidden" name="type" value="call_request"><header>Мы перезвоним!</header><article><input type="text" name="fio" class="<?php if ($ini['name_required']) print 'required';?> fio" placeholder="Ваше имя"><input type="text" name="phone" class="required phone phone-mask" placeholder="Ваш телефон"></article><footer><a href="javascript:;" class="send-btn blue-btn">Заказать звонок</a>
					</footer></form>
			</div>
		</div>
	<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
