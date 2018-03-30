<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini'); 
if (!$ini) {
	echo 'Ошибка в конфигурационном файле'; die();
}	?><!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="user-scalable=yes, width=1000"><!--[if lt IE 9]>
		<script src="js/html5shiv.js"></script>
		<![endif]--><link href="http://fonts.googleapis.com/css?family=PT+Sans:400,700&amp;subset=latin,cyrillic-ext" rel="stylesheet" type="text/css"><link type="text/css" href="css/style.css?v2" rel="stylesheet" media="screen"><script type="text/javascript" src="js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="js/jquery.plugins.js"></script><script type="text/javascript" src="js/scripts.js?v2"></script><title><?php print $ini['title'];?></title><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id'];?>">
		<div id="wrapper">
			<section id="first"><article class="inner"><div id="ib-block1" contenteditable="true"><h1>Хотите похудеть?</h1></div>
					<div class="sub-title" id="ib-block2" contenteditable="true">Уникальная авторская методика:<br><span class="pink">-12 кг</span> веса и <span class="pink">-9 см</span> в талии ежемесячно!</div>
					<div class="btn-wrap"><span><a href="javascript:;" class="blue-btn order-btn" id="ib-block3" contenteditable="true">Получить урок</a></span></div>
					<div class="sub-btn" id="ib-block4" contenteditable="true">
						Все секреты элитного диетолога<br>
						в коротких видеоуроках
					</div>
				</article></section><section id="second"><article class="inner"><div class="cols clearfix">
						<div class="left-col">
							<div id="ib-block5" contenteditable="true"><h3>Пошаговый видеокурс <br>
								«Секреты идеальной фигуры»</h3></div>
							<a href="javascript:;" class="video-link order-btn"></a>
							<div class="sub-video" id="ib-block6" contenteditable="true">Пошаговая методика в видеоуроках</div>
							<div class="result-ribbon" id="ib-block7" contenteditable="true"><span>Средний результат:<br><strong>минус 12 кг каждый месяц!</strong></span></div>
						</div>
						<div class="right-col">
							<div class="top-part">
								<h3>Всего <span class="pink2">50</span></h3>
								<div class="sub-title" id="ib-block8" contenteditable="true">бесплатных копий видеоуроков </div>
								<div class="timer-wrap">
									<div class="espan" id="ib-block9" contenteditable="true"><span>Осталось</span></div>
									<div class="timer">03</div>
									<div class="espan" id="ib-block10" contenteditable="true"><span>копий</span></div>
								</div>
								<div class="attention-title" id="ib-block11" contenteditable="true">ВНИМАНИЕ:</div>
								<div class="attention-text" id="ib-block12" contenteditable="true">Если вы попали на этот сайт случайно и не<br>
очень хотите похудеть, не заполняйте форму получения<br>
уроков. Тираж ограничен, вы можете лишить этой<br>
информации человека, которому она<br>
действительно нужна.</div>
							</div>
							<form class="order-form" method="post" action="form/form.php">
								<header>Отправьте заявку:</header><div class="cols">
									<div class="form-left-col" id="ib-block13" contenteditable="true">Введите свой email, на который будет выслан видеокурс «Секреты идеальной фигуры» + все бонусы БЕСПЛАТНО.</div>
									<div class="form-right-col">
										<input type="text" class="email" placeholder="Ваш e-mail"><a href="javascript:;" class="send-btn blue-btn-sm" id="ib-block14" contenteditable="true">Получить уроки</a>
									</div>
								</div>
							</form>
						</div>
						<div class="arrow"></div>
					</div>
					<div class="bonus-title" id="ib-block15" contenteditable="true">Бесплатные БОНУСЫ</div>
					<div class="bonus-descr" id="ib-block16" contenteditable="true">Все бонусы абсолютно бесплатны первым 50-ти отправившим заявку!</div>
				</article></section><section id="links"><article class="inner" id="ib-block17" contenteditable="true"><ul><li>
	<div><img src="i/link-1.png"></div>
	Список лучших жиросжигателей на 2013-2014 годы</li>
	<li>
	<div><img src="i/link-2.png"></div>
	Список секретных упражнений для сжигания жира</li>
	<li>
	<div><img src="i/link-3.png"></div>
	Плоский живот за 14 минут в неделю</li>
	<li>
	<div><img src="i/link-4.png"></div>
	Рецепт тонкой талии: раз и навсегда</li>
	<li class="last">
	<div><img src="i/link-5.png"></div>
	Как сохранить результат после диеты</li>
</ul></article></section><section id="stats"><article class="inner" id="ib-block18" contenteditable="true"><ul class="clearfix"><li>
							<div>15</div>
							<p>лет опыта борьбы <br>
								с лишним весом</p>
						</li>
						<li>
							<div>3 000</div>
							<p>положительных<br>
								отзывов за 2013 год</p>
						</li>
						<li class="last">
							<div>97 000</div>
							<p>успешных похудений</p>
						</li>
					</ul></article></section><section id="techniques"><article class="inner clearfix"><div class="left-col" id="ib-block19" contenteditable="true">
						<h3>Почему выбирают именно эту методику?</h3>
						<ul><li>Все материалы предоставляются бесплатно</li>
							<li>Ни одного отрицательного отзыва за последние 3 года</li>
							<li>Быстрое решение проблем с лишним весом НАВСЕГДА</li>
							<li>Мгновенный доступ — быстрые результаты</li>
							<li>Бесплатно. Без СМС. Без анкет. Без телефонов</li>
							<li>Без скрытых платежей</li>
						</ul></div>
					<div class="right-col" id="ib-block20" contenteditable="true">
						<h3>Данная методика помогает вам:</h3>
						<ul><li>Избавиться от лишнего веса</li>
							<li>Сохранить вес после диет</li>
							<li>Решить проблемы больных суставов и сердца</li>
							<li>Повысить самооценку</li>
							<li>Перестать заедать стресс</li>
						</ul></div>
				</article></section><section id="results"><article class="inner"><div id="ib-block21" contenteditable="true"><h2>Результаты методики:</h2>
</div>
					<div class="gal-cont">
						<div class="gal-frame viewport" id="ib-block22" contenteditable="true"><ul class="gal-slider overview" style="width: 1896px; left: 0px;"><li>
	<div><img alt="" src="i/person-1.jpg"></div>
	<span class="gal-1">До</span> <span class="gal-2">После</span></li>
	<li>
	<div><img alt="" src="i/person-2.jpg"></div>
	<span class="gal-1">До</span> <span class="gal-2">После</span></li>
	<li>
	<div><img alt="" src="i/person-3.jpg"></div>
	<span class="gal-1">До</span> <span class="gal-2">После</span></li>
	<li>
	<div><img alt="" src="i/person-4.jpg"></div>
	<span class="gal-1">До</span> <span class="gal-2">После</span></li>
	<li>
	<div><img alt="" src="i/person-5.jpg"></div>
	<span class="gal-1">До</span> <span class="gal-2">После</span></li>
	<li>
	<div><img alt="" src="i/person-6.jpg"></div>
	<span class="gal-1">До</span> <span class="gal-2">После</span></li>
</ul></div>
						<div class="gal-left prev"></div>
						<div class="gal-right next"></div>
					</div>
				</article></section><section id="about"><article class="inner"><div class="cols clearfix">
						<div class="left-col" id="ib-block27" contenteditable="true"><img alt="" class="person-about" src="i/person-about.jpg"><div>100% гарантия результата</div>

<p>В любом возрасте, при любой генетической<br>
предрасположенности.</p>
</div>
						<div class="right-col" id="ib-block28" contenteditable="true">
							<h2>Автор методики</h2>
							<ul class="about-list"><li>разработчик уникальных обучающих программ и семинаров в области фитнеса</li>
								<li>специалист в области психофизической и специальной физической подготовки</li>
								<li>разработчик программ по физической подготовке фитнес-моделей и медиазвёзд</li>
								<li>разработчик программ развития самодисциплины, самомотивации, создатель алгоритмов принятия решений в условиях неопределённости</li>
							</ul></div>
					</div>
				</article></section><section id="order"><article class="inner"><div class="cols clearfix">
						<div class="left-col">
							<form class="order-form order-form-blue" method="post" action="form/form.php">
								<header id="ib-block23" contenteditable="true">Заполните поле для получения <br>видео уроков</header><article><input type="text" class="email" placeholder="Ваш e-mail"><a href="javascript:;" class="send-btn blue-btn-ord" id="ib-block24" contenteditable="true">Получить уроки</a>
								</article></form>
						</div>
						<div class="right-col" id="ib-block25" contenteditable="true">
							<h2>Отправить заявку</h2>
							<p>Введите свой email на который будет выслан видео-курс «Секреты идеальной фигуры» + все бонусы БЕСПЛАТНО.</p>
						</div>
					</div>
				</article></section></div>
		<div class="modals">
			<div class="overlay"></div>
			<div class="modal order-modal">
				<div class="modal-close"></div>
				<form class="order-form order-form-blue" method="post" action="form/form.php">
					<header id="ib-block26" contenteditable="true">Заполните поле для получения <br>видео уроков</header><article><input type="text" class="email" placeholder="Ваш e-mail"><a href="javascript:;" class="send-btn blue-btn-ord">Получить уроки</a>
					</article></form>
			</div>
			<div class="modal thanks-modal">
				<div class="modal-close"></div>
				<div class="text">Спасибо! <br> На указанный вами e-mail через несколько <br> минут будет выслана вся<br>необходимая информация</div>
			</div>
		</div>
		<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
