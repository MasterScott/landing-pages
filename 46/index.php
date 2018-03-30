<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini'); 
if (!$ini) {
	echo '&#1054;&#1096;&#1080;&#1073;&#1082;&#1072; &#1074; &#1082;&#1086;&#1085;&#1092;&#1080;&#1075;&#1091;&#1088;&#1072;&#1094;&#1080;&#1086;&#1085;&#1085;&#1086;&#1084; &#1092;&#1072;&#1081;&#1083;&#1077;'; die();
}	?><!DOCTYPE html><html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title><?php print $ini['title'];?></title><meta name="keywords" content=""><meta name="description" content=""><!--[if lt IE 9]>
		<script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]--><meta name="viewport" content="user-scalable=yes, width=1000px, initial-scale=1"><link rel="stylesheet" type="text/css" href="style/CSS_reset.css"><link rel="stylesheet" type="text/css" href="style/style.css"><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body id="home" data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id'];?>">
	<header id="header"><!--OPEN HEADER--><div class="conteiner clr">
			<div class="logo" contenteditable="true" id="id-block1"><img alt="Логотип" src="images/logo.gif" title=""></div>
			<address class="header-contacts">
				<?php if ($ini['phone800']) {?><div class="free-phone">
					<span>Звонок по России бесплатный</span>
					<span class="phone-number"><?php print $ini['phone800'];?></span>
				</div>
				<?php } ?><?php if ($ini['phone']) {?><div class="men-phone">
					<span>Телефон менеджера</span>
					<span class="phone-number"><?php print $ini['phone'];?></span>
				</div>
				<?php } ?></address>
			<p><?php print $ini['cat_title'];?></p>
			<nav id="main-nav" contenteditable="true"><ul><li><a href="#b-catalog" class="scroll-link">Каталог</a></li>
					<li><a href="#how-we-work" class="scroll-link">Как заказать</a></li>
					<li><a href="#our-goodsi" class="scroll-link">Гарантии</a></li>
					<li><a href="#b-reviews" class="scroll-link">Отзывы</a></li>
				</ul></nav></div><!--close conteiner-->
	</header><!--CLOSE HEADER--><section class="b-main-offer"><!--OPEN OFFER-BLOCK--><div class="conteiner clr">
			<h1 contenteditable="true" id="id-block2">Здесь вы можете купить вещи с примеркой и доставкой по Москве и по всей России</h1>
			<div class="left-column">
				<div class="main-img" contenteditable="true" id="id-block3"><img alt="" height="290" src="images/main-img.jpg" title="" width="650"><p class="action-text"><span><strong>Только сегодня!</strong></span> <span>Бесплатная примерка понравившейся модели!</span></p>
</div>
				<div class="b-action">
					<div class="timer">
						<strong class="timer-title">До конца акции осталось:</strong>
						<div class="timer-digits clr">
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
					<p contenteditable="true" id="id-block4"><strong>Успейте заказать<br>
прямо сейчас:</strong></p>
				</div>
			</div>
			<div class="order-form-wrap">
				<form class="order-form" method="post" action="form/form.php">
					<fieldset><legend class="form-title" contenteditable="true" id="id-block5">Отправьте заявку, <span>и наш менеджер свяжется с вами для уточнения модели, цвета и размера.</span></legend>
						<input type="text" name="name" class="<?php if ($ini['name_required']) print 'required';?> name" placeholder="Как Вас зовут?"><input type="text" name="phone" class="<?php if ($ini['phone_required']) print 'required';?> phone phone-mask" placeholder="Ваш номер телефона?"><input type="text" name="email" class="<?php if ($ini['email_required']) print 'required';?> email" placeholder="Ваш e-mail?"><button type="submit" class="red-btn">Заказать примерку</button>
					</fieldset></form>
			</div>
		</div><!--close conteiner-->
	</section><!--CLOSE OFFER-BLOCK--><section id="b-catalog"><!--OPEN CATALOG--><div class="conteiner">
			<h2 class="mrg_bot" contenteditable="true" id="id-block6">У нас в наличии:</h2>
			<article class="all-goods clr"><h3><?php print $ini['cat_title1'];?></h3>
							<ul class="goods-list" id="c1"></ul><?php if ($ini['cat_title2']) { ?><?php if ($ini['full_catalog']) {?><div class="button-block">
							<p><?php print chr(60).'a href="'.$ini['full_catalog'].'" target="_blank" class="red-btn big-btn"'.chr(62).'<span>Cмотреть полный каталог'.chr(60).'/a'.chr(62); ?></p>
						</div>
						<?php } ?></article><article class="all-goods clr"><h3><?php print $ini['cat_title2'];?></h3>
				<?php } ?><ul class="goods-list" id="c2"></ul><?php if ($ini['cat_title3']) { ?><?php if ($ini['full_catalog']) {?><div class="button-block">
							<p><?php print chr(60).'a href="'.$ini['full_catalog'].'" target="_blank" class="red-btn big-btn"'.chr(62).'<span>Cмотреть полный каталог'.chr(60).'/a'.chr(62); ?></p>
						</div>
						<?php } ?></article><article class="all-goods clr"><h3><?php print $ini['cat_title3'];?></h3>
				<?php } ?><ul class="goods-list" id="c3"></ul><?php if ($ini['cat_title4']) { ?><?php if ($ini['full_catalog']) {?><div class="button-block">
							<p><?php print chr(60).'a href="'.$ini['full_catalog'].'" target="_blank" class="red-btn big-btn"'.chr(62).'<span>Cмотреть полный каталог'.chr(60).'/a'.chr(62); ?></p>
						</div>
						<?php } ?></article><article class="all-goods clr"><h3><?php print $ini['cat_title4'];?></h3>
				<?php } ?><ul class="goods-list" id="c4"></ul><?php if ($ini['full_catalog']) {?><div class="button-block little">
					<p><?php print chr(60).'a href="'.$ini['full_catalog'].'" target="_blank" class="red-btn big-btn"'.chr(62).'<span>Cмотреть полный каталог'.chr(60).'/a'.chr(62); ?></p>
				</div>
				<?php } ?></article></div><!--close conteiner-->
	</section><!--CLOSE CATALOG--><section id="how-we-work"><!--OPEN HOW-WE-WORK--><div class="conteiner">
			<h2 contenteditable="true" id="id-block8">Как мы работаем</h2>
			<div contenteditable="true" id="id-block9"><ul class="work-list"><li>
	<div class="work-img"><img alt="" src="images/work-list/1.png"></div>
	Вы выбираете из нашего каталога понравившуюся модель и оставляете заявку.</li>
	<li>
	<div class="work-img"><img alt="" src="images/work-list/2.png"></div>
	С вами связывается наш продавец-консультант и обговаривает детали заказа.</li>
	<li>
	<div class="work-img"><img alt="" src="images/work-list/3.png"></div>
	Наш курьер привозит вам для примерки несколько разных размеров выбранной вами модели.</li>
	<li>
	<div class="work-img"><img alt="" src="images/work-list/4.png"></div>
	Вы выбираете свой размер, оплачиваете заказ и получаете скидку на последующую покупку!</li>
</ul></div>
		</div><!--close conteiner-->
	</section><!--CLOSE HOW-WE-WORK--><section id="our-goodsi"><!--OPEN OUR-goodsI--><div class="conteiner">
			<h2 contenteditable="true" id="id-block10">Почему стоит купить вещи у нас:</h2>
			<div contenteditable="true" id="id-block11"><ul class="reason-list"><li>
	<div class="reason-img"><img alt="" src="images/reason-list/1.jpg"></div>

	<p>Мы гарантированно подберем нужный размер понравившейся вам модели.</p>
	</li>
	<li>
	<div class="reason-img"><img alt="" src="images/reason-list/2.jpg"></div>

	<p>Наш курьер приезжает к вам на примерку с несколькими разными размерами, на случай если вы ошиблись с размером.</p>
	</li>
	<li>
	<div class="reason-img"><img alt="" src="images/reason-list/3.jpg"></div>

	<p>Мы уверены в качестве наших вещей, убедитесь и Вы. Предоставляем гарантию на обмен товара или возврат денег, в течение 14 дней со дня покупки.</p>
	</li>
</ul></div>
		</div><!--close conteiner-->
	</section><!--CLOSE OUR-goodsI--><section id="b-reviews"><!--OPEN B-REVIEWS--><div class="conteiner">
			<h2 contenteditable="true" id="id-block12">Отзывы:</h2>
			<div class="reviews-wrap clr">
				<div class="l-col-rev">
					<article class="person-item" contenteditable="true" id="id-block13"><img src="images/review_placeholder1.jpg" width="104" height="104" alt="" title=""><header><time>14.11.2013</time><span>г. Москва</span>
							<h5>Анна Колодова</h5>
						</header><p>Есть возможность заказывать разные размеры одежды. Можно всё перемерять и оставить понравившийся, а можно вообще ничего не оставлять, и за это даже деньги не возьмут. Доставка бесплатная. Оперативная. Буквально на следующий день в удобное время привозят. Время доставки согласуют и менеджеры, и сами курьеры. Товары хорошего качества. Есть скидочно-накопительная система для постоянных клиентов.</p>
					</article><article class="person-item" contenteditable="true" id="id-block14"><img src="images/review_placeholder2.jpg" width="104" height="104" alt="" title=""><header><time>16.11.2013</time><span>г. Казань</span>
							<h5>Инна Зеленая</h5>
						</header><p>После заказа на сайте операторы сразу же звонят, я даже удивилась, что так быстро, такого не встречал! Ценю такую работу и оперативность в людях!
Позвонили мне через секунду после оформления в интернете, объяснили условия, уточнили когда мне удобно будет получить товар, курьер позвонил за час до приезда. Доставка произошла в ранее оговоренное с оператором временное окно. И это учитывая что доставка бесплатно. Отлично оформлен сайт, удобно найти интересующий товар. В этом интернет-магазине действительно думают о клиентах!</p>
					</article></div>
				<div class="r-col-rev clr">
					<article class="person-item" contenteditable="true" id="id-block15"><img alt="" height="104" src="images/review_placeholder1.jpg" title="" width="104"><header><time>16.11.2013</time><span>г. Смоленск</span>
<h5>Катя Кузнецова</h5>
</header><p>Главное возможность примерки (в отличие от многих других инет-магазинов) и возможность вернуть сразу же курьеру,если что-то не подошло,без каких-либо санкций или "чёрных списков"!!!Удобная, грамотная доставка (2 интервала времени),а главное бесплатная и быстрая!Ещё один "плюс" - это прозрачность стоимости товара,сколько написано,столько и платишь</p>
</article><article class="person-item" contenteditable="true" id="id-block16"><img src="images/review_placeholder1.jpg" width="104" height="104" alt="" title=""><header><time>18.11.2013</time><span>г. Москва</span>
							<h5>Юля Кельман</h5>
						</header><p>Так как нахожусь в декретном отпуске с маленьким ребенком и нет возможности ходить по магазинам(да и одежду мне с моим 58 размером не так уж и просто подобрать быстро),послушала совет подруги и заказала платье себе в магазине.в день доставки курьер позвонил и согласовал со мной время доставки.</p>
					</article></div>
			</div>
		</div><!--close conteiner-->
	</section><section class="b-main-offer bottom-block"><!--OPEN OFFER-BLOCK--><div class="conteiner clr">
				<div class="left-column">
				<div class="main-img" contenteditable="true" id="id-block17"><img alt="" height="290" src="images/main-img.jpg" title="" width="650"><p class="action-text"><span><strong>Только сегодня!</strong></span> <span>Бесплатная примерка понравившейся модели!</span></p>
</div>
				<div class="b-action">
					<div class="timer">
						<strong class="timer-title">До конца акции осталось:</strong>
						<div class="timer-digits clr">
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
					<p contenteditable="true" id="id-block18"><strong>Успейте заказать<br>
прямо сейчас:</strong></p>
				</div>
			</div>
			<div class="order-form-wrap border-color">
				<form class="order-form" method="post" action="form/form.php">
					<fieldset><legend class="form-title" contenteditable="true" id="id-block19">Отправьте заявку, <span>и наш менеджер свяжется с вами для уточнения модели, цвета и размера.</span></legend>
						<input type="text" name="name" class="<?php if ($ini['name_required']) print 'required';?> name" placeholder="Как Вас зовут?"><input type="text" name="phone" class="<?php if ($ini['phone_required']) print 'required';?> phone phone-mask" placeholder="Ваш номер телефона?"><input type="text" name="email" class="<?php if ($ini['email_required']) print 'required';?> email" placeholder="Ваш e-mail?"><button type="submit" class="red-btn">Заказать примерку</button>
					</fieldset></form>
			</div>
		</div><!--close conteiner-->
	</section><!--CLOSE OFFER-BLOCK--><footer id="footer"><div class="conteiner clr">
			<div class="copyright">
				<p>© <?php print $ini['company_name'];?>, <?php print date('Y');?></p>
			</div>
			<div class="developer">
				<p>Сайт сделан в <a href="http://youlp.ru/">YouLP.ru</a> в 2013 году</p>
			</div>
		</div>
	</footer><div class="modals">
		<div class="overlay"></div>
		<div class="modal thanks-modal">
			<a class="close-btn" href="javascript:;"></a>
			<article class="size-instruction"><h5>Спасибо за заявку!</h5>
				<p>Мы свяжемся с Вами в ближайшее время!</p>
			</article></div><!--close modal-->
		<div class="modal order-modal">
			<a class="close-btn" href="javascript:;"></a>
			<article class="b-goods-models"><h5>#</h5>
				<div class="col-wrap clr">
					<div class="l-col-mod">
						<div class="gal-cont">
							<div class="gal-left left-arrow"></div>
							<div class="gal-right right-arrow"></div>
							<div class="gal-image">
								<img src="#" alt="" title=""></div>
							<div class="gal-thumbs-cont">
								<div class="gal-thumbs">
									<div class="gal-slider clr">
										<a href="#"><img src="#" alt="" title=""></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="r-col-mod">
						<section class="b-selection-model"><p class="model-descr"></p>
							<form class="form-selection clr" method="post" action="#">
								<p>
									<label for="model-color">Выберите цвет:</label>
									<select name="model-color" id="model-color"><option selected>Каштановый</option><option>Чёрный</option><option>Зелёный</option></select></p>
								<p>
									<label for="model-size">Выберите размер:</label>
									<select name="model-size" id="model-size"><option selected>36</option><option>37</option><option>38</option></select></p>
							</form>
							<p class="price"><span></span> рублей</p>
						</section><section class="b-mod-form"><form class="order-form mod" method="post" action="form/form.php">
								<fieldset><legend>Отправьте заявку для оформления вашего заказа:</legend>
									<input type="hidden" name="model" class="model"><input type="text" name="name" class="<?php if ($ini['name_required']) print 'required';?> name" placeholder="Как Вас зовут?"><input type="text" name="phone" class="<?php if ($ini['phone_required']) print 'required';?> phone phone-mask" placeholder="Ваш номер телефона?"><input type="text" name="email" class="<?php if ($ini['email_required']) print 'required';?> email" placeholder="Ваш e-mail?"><button type="submit" class="red-btn">Заказ</button>
								</fieldset></form>
						</section></div>
				</div>
				<footer class="model-footer"><p class="following-model">cледующая модель</p>
					<p class="previous-model">предыдущая модель</p>
				</footer></article></div>
	</div>
	<script type="text/javascript" src="js/jquery-1.10.2-min.js"></script><script type="text/javascript" src="js/jquery.placeholder.min.js"></script><script type="text/javascript" src="js/jquery.maskedinput.min.js"></script><script type="text/javascript" src="js/jquery.form.min.js"></script><script type="text/javascript" src="js/catalogue.js"></script><script type="text/javascript" src="js/script.js"></script><?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>