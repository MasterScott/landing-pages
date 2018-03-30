<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini'); 
if (!$ini) {
	echo 'Ошибка в конфигурационном файле'; die();
}	?><!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"><title><?php print $ini['title'];?></title><meta name="keywords" content=""><meta name="description" content=""><meta name="viewport" content="user-scalable=1, width=1020px, initial-scale=1"><link rel="stylesheet" type="text/css" href="style/CSS_reset.css"><link rel="stylesheet" type="text/css" href="js/bjqs.css"><link rel="stylesheet" type="text/css" href="style/style.css"><!--[if lt IE 9]>
		<script src="js/html5shiv.js"></script>
	<![endif]--><script type="text/javascript" src="js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="js/jquery.placeholder.min.js"></script><script type="text/javascript" src="js/jquery.maskedinput.min.js"></script><script type="text/javascript" src="js/jquery.form.min.js"></script><script type="text/javascript" src="js/bjqs-1.3.js"></script><script type="text/javascript" src="js/script.js?v2"></script><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id'];?>">
	<div class="header">
		<div class="head-top-row">
			<div class="conteiner clr">
				<div id="ib-block1" class="logo" contenteditable="true"><img alt="" height="79" src="images/logo.jpg" width="209"><span> — инструменты продаж</span></div>
				<div class="b-request">
					<?php if ($ini['phone']) {?><address class="head-phone"><?php print $ini['phone'];?></address><?php } ?><a href="#" class="bl-link call-request-btn">Обратный звонок</a>
					<?php if ($ini['entrance']) {?><?php print chr(60).'a href="'.$ini['entrance'].'" class="enter"'.chr(62).'
					<span class="bl-link">Войти
					<i class="icon-auth"></i>
					'.chr(60).'/a'.chr(62); ?>
					<?php } ?></div><!--end b-request-->
			</div><!--end conteiner-->
		</div><!--end head-top-row-->
		<div class="head-down-row pattern-bg">
			<div class="conteiner clr">
				<div class="head-tile-col">
					<div class="title-block" id="ib-block2" contenteditable="true"><h1>Продающий заголовок</h1>

<p class="post-title">Подзаголовок-описание того, что делает ваш сервис или товар.</p>
</div>
					<div id="slider" style="width: 610px; height: 220px;">
						<ul class="bjqs"><?php if ($ini['slider']) {
							for ($i=1; $i<=$ini['slider']; $i++) {
								print '<li>'.chr(60).'img src="images/slider/img';
								print $i.'.png';
								print '"'.chr(62);
							}
						} ?>
						</ul></div>
				</div>
				<div class="head-form-col">
					<div id="ib-block3" contenteditable="true"><h3 class="form-title">Бесплатная регистрация</h3></div>
					<form class="head-form reg-form" method="POST" action="form/form.php"><input type="hidden" name="type" value="registration"><?php if ($ini['ask_name']) {?><p><input type="text" name="name" class="name <?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя"></p><?php }?><p><input type="text" name="email" class="email <?php if ($ini['email_required']) print 'required';?>" placeholder="Ваш e-mail"></p>
						<?php if ($ini['ask_pwd']) {?><p><input type="password" name="password" class="password <?php if ($ini['pwd_required']) print 'required';?>" placeholder="Ваш пароль"></p><?php } ?><p><button type="submit" class="orange-btn"><?php print $ini['button'];?></button></p>
					</form>
					<div id="ib-block4" contenteditable="true"><p class="privacy">Нажимая на кнопку, Вы соглашаетесь с <a href="#">правилами использования</a> и <a href="#">политикой конфиденциальности</a></p>
</div>
				</div>
			</div><!--end head-down-row-->
		</div><!--end conteiner-->
	</div><!--end header-->
	<div class="stat-block">
		<div class="conteiner">
			<div class="stat-info clr">
				<div class="wrap-num" id="ib-block5" contenteditable="true"><span class="num">348</span> <span class="num-title">активных продавцов</span></div>
				<div class="wrap-num" id="ib-block6" contenteditable="true">
					<span class="num">112</span>
					<span class="num-title">партнёрских программ</span>
				</div>
			</div>
		</div><!--conteiner-->
	</div><!--end stat-block-->
	<div class="how-work-service">
		<div class="conteiner" id="ib-block7" contenteditable="true"><h2>Как работает?</h2>

<ul class="service-list clr"><li>
	<div class="service-img"><img alt="" height="110" src="images/service/1.gif" width="110"></div>
	Регистрация</li>
	<li>
	<div class="service-img"><img alt="" height="110" src="images/service/2.gif" width="110"></div>
	Заполнение данных</li>
	<li>
	<div class="service-img"><img alt="" height="110" src="images/service/3.gif" width="110"></div>
	Получение данных</li>
	<li>
	<div class="service-img"><img alt="" height="110" src="images/service/4.gif" width="110"></div>
	Распространение данных</li>
	<li>
	<div class="service-img"><img alt="" height="110" src="images/service/5.gif" width="110"></div>
	Прибыль!</li>
</ul></div><!--end service-->
	</div><!--end how-work-service-->
	<div class="our-advantages pattern-bg">
		<div class="conteiner" id="ib-block8" contenteditable="true">
			<h2>Преимущества сервиса:</h2>
			<ul class="advantages-list clr"><li><img src="images/advantages/1.png" alt="" width="69" height="69"><span>Опишите здесь</span></li>
				<li class="right-col"><img src="images/advantages/5.png" alt="" width="69" height="69"><span>Ваши преимущества</span></li>
				<li><img src="images/advantages/2.png" alt="" width="69" height="69"><span>Опишите здесь</span></li>
				<li class="right-col"><img src="images/advantages/6.png" alt="" width="69" height="69"><span>Ваши преимущества</span></li>
				<li><img src="images/advantages/3.png" alt="" width="69" height="69"><span>Опишите здесь</span></li>
				<li class="right-col"><img src="images/advantages/7.png" alt="" width="69" height="69"><span>Ваши преимущества</span></li>
				<li><img src="images/advantages/4.png" alt="" width="69" height="69"><span>Опишите здесь</span></li>
				<li class="right-col"><img src="images/advantages/8.png" alt="" width="69" height="69"><span>Ваши преимущества</span></li>
			</ul></div><!--end conteiner-->
	</div><!--end our-advantages-->
	<div class="problem-block">
		<div class="conteiner clr" id="ib-block9" contenteditable="true">
			<h2>Какие проблемы мы решаем?</h2>
			<ul class="problem-list"><li>Проблема</li>
				<li>Проблема</li>
				<li>Проблема</li>
				<li>Проблема</li>
				<li>Проблема</li>
			</ul><ul class="problem-list plus-list"><li>Решение</li>
				<li>Решение</li>
				<li>Решение</li>
				<li>Решение</li>
				<li>Решение</li>
			</ul></div><!--end-conteiner-->
	</div><!--end problem-block-->
	<div class="contacts-block">
		<div class="conteiner clr">
			<div class="contacts-col">
				<div id="ib-block10" contenteditable="true"><h3>Контактная<br>
информация</h3>
</div>
				<address class="bottom-contacts">
					<?php if ($ini['address']) { ?><span class="cont-title">Адрес:</span>
					<span><?php print $ini['address'];?></span>
					<?php } ?><?php if ($ini['phone']) { ?><span class="cont-title">Телефон:</span>
					<span><?php print $ini['phone']; ?></span>
					<?php } ?><?php if ($ini['email']) { ?><span class="cont-title">E-mail:</span>
					<span><?php print $ini['email'];?></span>
					<?php } ?></address>
			</div>
			<div class="bot-form-col">
				<div id="ib-block11" contenteditable="true"><h3>Бесплатная<br>
регистрация</h3>
</div>
				<form class="bottom-form reg-form" method="POST" action="form/form.php"><input type="hidden" name="type" value="registration"><?php if ($ini['ask_name']) {?><p><input type="text" name="name" class="name <?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя"></p><?php }?><p><input type="text" name="email" class="email <?php if ($ini['email_required']) print 'required';?>" placeholder="Ваш e-mail"></p>
					<?php if ($ini['ask_pwd']) {?><p><input type="password" name="password" class="password <?php if ($ini['pwd_required']) print 'required';?>" placeholder="Ваш пароль"></p><?php } ?><p><button type="submit" class="orange-btn"><?php print $ini['button'];?></button></p>
				</form>
				<div id="ib-block12" contenteditable="true"><p class="privacy">Нажимая на кнопку, Вы соглашаетесь  с <a href="#">правилами использования</a> и <a href="#">политикой конфиденциальности</a></p></div>
			</div>
		</div><!--end conteiner-->
	</div><!--end contacts-block-->
	<div class="modals">
		<div class="overlay"></div>
		<div class="modal recall-modal">
			<h3 class="form-title">Обратный звонок</h3>
			<a href="#" class="close-btn"></a>
			<form action="form/form.php" method="POST" class="modal-form callback-form"><input type="hidden" name="type" value="call_request"><p><input type="text" class="phone phone-mask required" name="phone" placeholder="Ваш телефон"></p>	
				<p><input type="text" class="name <?php if ($ini['name_required']) print 'required';?>" name="name" placeholder="Как Вас зовут?"></p>
				<p><button type="submit" class="orange-btn">Заказать звонок</button></p>
			</form>
		</div>
		
		<div class="modal thanks1-modal">
			<h3 class="form-title">Спасибо!</h3>
			<a href="#" class="close-btn"></a>
			<p>Ваша заявка принята!</p>
		</div>
		
		<div class="modal thanks2-modal">
			<h3 class="form-title">Спасибо!</h3>
			<a href="#" class="close-btn"></a>
			<p>Мы перезвоним вам в ближайшее время!</p>
		</div>
	</div>
		<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
