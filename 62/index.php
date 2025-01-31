<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini');
if (!$ini) {
	echo 'Ошибка в конфигурационном файле';
	die();
}
?><!DOCTYPE html>
<html lang="ru">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title><?php print $ini['title']; ?></title>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<meta name="viewport" content="user-scalable=1, width=1000, initial-scale=1" />
	<link rel="stylesheet" href="style/CSS_reset.css" />
	<link rel="stylesheet" href="style/style.css" />
	<?php if ($ini['head_code']) include($ini['head_code']); ?>
</head>
<body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">
	<div class="header">
		<div class="b-head-cont">
			<div class="conteiner clr">
				<div class="logo" contenteditable="true" id="id-block1">
					<img src="images/logo.gif" alt="" />
				</div>
				<div class="head-contacts">
					<div class="b-phone-order">
						<?php if ($ini['phone']) { ?><div class="phone-num"><i class="phone-icon"></i><?php print $ini['phone'];?></div><?php } ?>
						<a href="#" class="call-request">Заказать звонок</a>
					</div>
				</div>
				<a href="#" class="order-cons-btn btn">Заказать консультацию</a>
			</div>
		</div>
		<div class="b-order bg-c">
			<div class="conteiner main-bg">
				<h1 class="clr" contenteditable="true" id="id-block2"><span class="title-top-line">Комплексная</span> <span class="title-bottom-line">Юридическая Помощь</span></h1>
				<div class="order-form-wr">
					<h2 class="form-title" contenteditable="true" id="id-block3">Это биржа юридических услуг, где каждый сможет бесплатно получить  юридическую помощь по телефону.</h2>
					<form class="order-form main-form" action="form/form.php" method="post">
						<input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required';?>" placeholder="Ваш номер телефона" />
						<button type="submit" class="order-btn btn">Заказать звонок</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="bor-b">
		<div class="conteiner">
			<div class="b-timer-wrap clr">
				<div class="action-info" contenteditable="true" id="id-block4">
					<h2 class="action-title"><span>Бесплатно</span> найдём Вам лучшего юриста!</h2>
					<p class="rem-time">До конца акции осталось:</p>
				</div>
				<div class="b-timer">
					<div class="timer clr">
						<div>
							<i class="days">01</i>
							<span class="days-text">дней</span>
						</div>
						<div>
							<i class="hours">13</i>
							<span class="hours-text">часов</span>
						</div>
						<div>
							<i class="mins">10</i>
							<span class="mins-text">минута</span>
						</div>
						<div>
							<i class="secs">00</i>
							<span class="secs-text">секунды</span>
						</div>
					</div>
				</div>
			</div>
			<div class="b-advantages">
				<h2 contenteditable="true" id="id-block5">Наши преимущества</h2>
				<div contenteditable="true" id="id-block6">
					<ul class="adv-list">
						<li>
							<div class="adv-img">
								<img src="images/advantages/1.png" alt="" />
							</div>
							Профессионализм, компетентность, порядочность. Наша компания профессионально, ответственно, компетентно оказывает юридическую поддержку наших клиентов.
						</li>
						<li>
							<div class="adv-img">
								<img src="images/advantages/2.png" alt="" />
							</div>
							Узкая специализация каждого юриста компании. Специализация каждого сотрудника компании предоставляет возможность оказывать юридические услуги нашим клиентам.
						</li>
						<li>
							<div class="adv-img">
								<img src="images/advantages/3.png" alt="" />
							</div>
							Использование современных средств связи при работе с клиентами компании. Наша компания при работе с клиентами использует различные способы связи.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="b-hor-form bg-c">	
		<div class="conteiner arrow-down">
			<h2 contenteditable="true" id="id-block7">Оставьте заявку <span>и мы свяжемся с вами в ближайшее время</span></h2>
			<div class="hor-form-wr">
				<form class="order-form hor-form" name="order-form" action="form/form.php" method="post">
					<input type="text" name="name" class="fio <?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя" />
					<input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required';?>" placeholder="Ваш телефон" />
					<input type="text" name="email" class="email <?php if ($ini['email_required']) print 'required';?>" placeholder="Ваш e-mail" />
					<button type="submit" class="order-btn btn">Отправить заявку</button>
				</form>
			</div>
		</div>
	</div>
	<div class="bor-b">
		<div class="b-sheme-work conteiner">
			<h2 contenteditable="true" id="id-block8">Схема работы</h2>
			<div contenteditable="true" id="id-block9">
				<ul class="sheme-list">
					<li>
						<img src="images/sheme/1.png" alt="" />
						<p>Наш специалист принимает ваш звонок</p>
					</li>
					<li>
						<img src="images/sheme/2.png" alt="" />
						<p>Мы анализируем ваш вопрос</p>
					</li>
					<li>
						<img src="images/sheme/3.png" alt="" />
						<p>Профессионально консультируем</p>
					</li>
					<li>
						<img src="images/sheme/4.png" alt="" />
						<p>Озвучиваем скромную цену за наши услуги</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="b-reviews conteiner clr">
			<h2 contenteditable="true" id="id-block10">Отзывы</h2>
			<div class="left-col" contenteditable="true" id="id-block11">
				<div class="rev-img">
					<img src="images/reviews/1.jpg" alt="" />
				</div>
				<div class="rev-info">
					<p class="per-name">Максим Турчинов</p>
					<p class="per-info">25 лет, Москва</p>
					<p class="rev-cont">В сентябре 2012 года не прошел&nbsp;собеседование в Международную Юридическую компанию. Руководство очень серьезно подходит к выбору сотрудников. На собеседовании подробно проверяли уровень моей квалификации, но на должность ведущего...</p>
				</div>
			</div>
			<div class="right-col" contenteditable="true" id="id-block12">
				<div class="rev-img">
					<img src="images/reviews/2.jpg" alt="" />
				</div>
				<div class="rev-info">
					<p class="per-name">Леонид Спарта</p>
					<p class="per-info">25 лет, Москва</p>
					<p class="rev-cont">Начальство в Международной Юридической Компании очень требовательное. Это если судить по отзывам тех, кто работал и ушел по этой причине. Что я могу сказать по этому поводу – это действительно очень требовательное...</p>
				</div>
			</div>
		</div>
	</div>
	<div class="b-contact-info">
		<div class="conteiner clr">
			<h2 contenteditable="true" id="id-block13">Контактная информация</h2>
			<div class="map-col">
				<div id="map" data-coord="<?php if ($ini['map_point']) print $ini['map_point'];?>" data-center="<?php if ($ini['map_center']) print $ini['map_center'];?>"></div>
			</div>
			<div class="contacts-info">
				<address class="b-contacts">
					<span><?php print $ini['company_name']; ?></span>
					<span>
					<?php print $ini['address']; ?>
					</span>
					<?php if ($ini['phone']) { ?><span>тел. <?php print $ini['phone']; ?></span><?php } ?>
				</address>
				<div class="form-bot-wr">
					<h3 class="form-title" contenteditable="true" id="id-block14">Оставьте телефон и мы<br /> вам перезвоним</h3>
					<form class="order-form bot-form" action="form/form.php" method="post">
						<input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required';?>" placeholder="Ваш номер телефона" />
						<button type="submit" class="order-btn btn">Перезвоните мне</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<div class="modals">
		<div class="overlay"></div>
		<div class="modal callback-modal" style="display: none;">
			<a href="#"	class="close-btn"></a>
			<h2>Обратный звонок</h2>
			<form class="modal-form callback-form" name="callback-form" method="post" action="form/form.php">
				<input type="hidden" name="type" value="call_request"/>
				<input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required';?>" placeholder="Ваш номер телефона" />
				<button type="submit" class="modal-btn btn">Перезвоните мне</button>
			</form>
		</div>
		
		<div class="modal order-modal" style="display: none;">
			<a class="close-btn" href="javascript:;"></a>
			<h2>Отправьте заявку</h2>
			<form class="modal-form order-modal-form" name="order-modal-form" method="post" action="form/form.php">
				<input type="hidden" name="type" value="call_request"/>
				<input type="text" name="phone" class="phone phone-mask <?php if ($ini['phone_required']) print 'required';?>" placeholder="Ваш номер телефона" />
				<button type="submit" class="modal-btn btn">Отправить заявку</button>
			</form>
		</div>
		
		<div class="modal thanks1-modal">
			<h2>Спасибо!</h2>
			<a href="#"	class="close-btn"></a>
			<p class="call-you">Ваша заявка принята! Мы свяжемся с вами<br/>в ближайшее время</p>
		</div>
		
		<div class="modal thanks2-modal">
			<h2>Спасибо!</h2>
			<a href="#"	class="close-btn"></a>
			<p class="call-you">Мы перезвоним вам в&nbsp;ближайшее время!</p>
		</div>
	</div>
	
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.placeholder.min.js"></script>
	<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
	<script type="text/javascript" src="js/jquery.form.min.js"></script>
	<script type="text/javascript" src="js/script.js?v2"></script>
<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body>
</html>