<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini'); 
if (!$ini) {
	echo '&#1054;&#1096;&#1080;&#1073;&#1082;&#1072; &#1074; &#1082;&#1086;&#1085;&#1092;&#1080;&#1075;&#1091;&#1088;&#1072;&#1094;&#1080;&#1086;&#1085;&#1085;&#1086;&#1084; &#1092;&#1072;&#1081;&#1083;&#1077;'; die();
}	?><!DOCTYPE html><html data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id'];?>"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="user-scalable=yes, width=1020, initial-scale=1"><title><?php print $ini['title'];?></title><link rel="shortcut icon" href="favicon.ico" type="image/x-icon"><link href="css/sreset.css" rel="stylesheet" type="text/css"><!-- User CSS --><link href="css/style.css" rel="stylesheet" type="text/css"><link href="http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css"><script src="http://api-maps.yandex.ru/2.0-stable/?load=package.full&amp;lang=ru-RU" type="text/javascript"></script><script type="text/javascript" src="js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="js/jquery.maskedinput.min.js"></script><script type="text/javascript" src="js/jquery.form.js"></script><!-- User JS --><script type="text/javascript" src="js/script.js"></script><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">
        <!-- VWO Container -->
        <div class="wrapper" id="root_container">

            <div class="header">
                <div class="top-line"></div>
                <div class="inner clearfix">
                    <div class="logo">
						<img src="i/logo.png"></div>
                    <div class="button">
                        <button class="blue-btn open-modal" data-modal="#call">Заказать звонок</button>
                    </div>
                    <div class="contact">
                       <?php if ($ini['phone']) {?><div class="phone"><span class="red"><?php print $ini['phone'];?></span></div><?php } ?><?php if ($ini['email']) {?><?php print chr(60).'a href="mailto:'.$ini['email'].'"'.chr(62).$ini['email'].chr(60).'/a'.chr(62);?><?php } ?></div>
                </div>
            </div>
            <div class="promo">
                <div class="inner clearfix">
                    <div class="title main" id="ib-block1" contenteditable="true">Продающий заголовок</div>
                    <div class="ribbon" id="ib-block2" contenteditable="true">Подзаголовок-описание</div>

                    <div class="forms clearfix">
                        <div class="left">
                            <div class="title" id="ib-block3" contenteditable="true">Ваш товар</div>
                            <div class="post-title" id="ib-block4" contenteditable="true">«Мегатовар 2000»</div>
                            <div class="title white" id="ib-block5" contenteditable="true">Преимущества:</div>
                            <div id="ib-block6" contenteditable="true"><p>быстро собирается</p>

<p>быстро разбирается</p>

<p>удобен и красив</p>
</div>
                        </div>
                        <form action="form/form.php" method="POST"><input type="hidden" name="type" value="main"><div class="vis">
                                <div class="title" id="ib-block7" contenteditable="true">Отправь заявку и получи</div>
                                <div class="post-title" id="ib-block8" contenteditable="true">Бонусы, скидки и подарки<br>
всего за 1 999 руб.!</div>
                                <div class="row">
                                    <input class="<?php if ($ini['name_required']) print 'required';?>" type="text" name="name" placeholder="ФИО"></div>
                                <div class="row">
                                    <input class="<?php if ($ini['phone_required']) print 'required';?> phone" type="text" name="phone" placeholder="Телефон"></div>
                                <div class="row">
                                    <input class="<?php if ($ini['email_required']) print 'required';?>" data-valid="email" type="text" name="email" placeholder="E-mail"></div>
                                <div id="ib-block9" contenteditable="true"><p>* дополнительная информация мелким шрифтом<br>
 </p>
</div>
                                <button class="yellow-btn">Отправить заявку</button>
                            </div>
                            <div class="suc">
                                <img src="i/forms_suc.png" alt=""><div class="title">Ваша заявка отправлена!</div>
                                <div class="post-title">Наши менеджеры свяжутся <br>
                                    с вами в течении нескольких часов!</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="ags">
                <div class="inner">
                    <div class="title main" id="ib-block10" contenteditable="true">Мы — амбициозная молодая команда</div>
                    <div class="post-title" id="ib-block11" contenteditable="true">Но за свою историю уже успели провести:</div>
                    <div id="ib-block12" contenteditable="true"><ul class="clearfix"><li><span>5</span>

	<p>Тренингов</p>
	</li>
	<li><span>10</span>
	<p>Выставок</p>
	</li>
	<li><span>15</span>
	<p>Митингов</p>
	</li>
	<li><span class="yellow">20+</span>
	<p>Концертов</p>
	</li>
	<li><span class="yellow">30+</span>
	<p>Вечеринок</p>
	</li>
</ul></div>
                </div>
            </div>
            <div class="cont">
                <div class="inner">
                    <div class="title main" id="ib-block13" contenteditable="true">Содержание программ</div>
                    <div class="timetable clearfix">
                        <div class="blue" id="ib-block14" contenteditable="true"><div class="title main">Первая</div>

<div class="post-title">Описание</div>

<ul class="fuck"><li>Пункт 1</li>
	<li>Пункт 2</li>
	<li>Пункт 3</li>
	<li>Пункт 4</li>
	<li>Пункт 5</li>
	<li>Пункт 6</li>
</ul></div>
                        <div class="yellow" id="ib-block15" contenteditable="true"><div class="title main">Вторая</div>

<div class="post-title">Описание</div>

<ul><li>Длинный<br>
	пункт 1</li>
	<li>Свободное время</li>
	<li>Пункты со 2 по 19</li>
</ul></div>
                        <div class="red" style="margin:0" id="ib-block16" contenteditable="true"><div class="title main">Третья</div>

<div class="post-title">Описание</div>

<ul><li>Пункт 3</li>
	<li>Пункт 2</li>
	<li>Пункт 1</li>
	<li>Пункт 0</li>
	<li>Пункт -1</li>
</ul></div>
                    </div>
                </div>
            </div>

            <div class="review">
                <div class="inner">
                    <div class="shadow">
                        <div class="title main" id="ib-block17" contenteditable="true">Отзывы участников</div>
                        <div id="ib-block18" contenteditable="true"><ul class="clearfix"><li>
	<div class="face"><img alt="" src="./i/review_placeholder1.png">20 лет</div>

	<div class="body">
	<p class="title">Маша Иванова</p>

	<p><!--class="Mso"-->Решение о продаже газеты, входящей в группу<br>
	РИА Новости, московским властям уже принято,<br>
	но условия сделки пока согласовываются.</p>
	</div>
	</li>
	<li style="margin: 0;">
	<div class="face"><img alt="" src="./i/review_placeholder2.png">20 лет</div>

	<div class="body">
	<p class="title">Саша Петров</p>

	<p><!--class="Mso"-->Решение о продаже газеты, входящей в группу<br>
	РИА Новости, московским властям уже принято,<br>
	но условия сделки пока согласовываются.</p>
	</div>
	</li>
	<li>
	<div class="face"><img alt="" src="./i/review_placeholder2.png">20 лет</div>

	<div class="body">
	<p class="title">Иоанн Грозный</p>

	<p><!--class="Mso"-->Решение о продаже газеты, входящей в группу<br>
	РИА Новости, московским властям уже принято,<br>
	но условия сделки пока согласовываются.</p>
	</div>
	</li>
	<li style="margin: 0;">
	<div class="face"><img alt="" src="./i/review_placeholder1.png">20 лет</div>

	<div class="body">
	<p class="title">Коля Светлов</p>

	<p><!--class="Mso"-->Решение о продаже газеты, входящей в группу<br>
	РИА Новости, московским властям уже принято,<br>
	но условия сделки пока согласовываются.</p>
	</div>
	</li>
</ul></div>
                    </div>
                </div>
            </div>

            <div class="partner">
                <div class="inner" id="ib-block18-p" contenteditable="true"><div class="title main">Наши партнеры</div>
<img alt="" src="i/partner.jpg"></div>
            </div>


            <div class="bot-form">
                <div class="inner">
                    <form action="form/form.php" method="POST"><input type="hidden" name="type" value="main"><div class="vis">
                        <div class="title" id="ib-block19" contenteditable="true">Отправь заявку и получи спецпредложение</div>
                        <div class="post-title" id="ib-block20" contenteditable="true">Товары для всех со <strong>скидкой</strong>!</div>
                        <div class="inputs">

                            <input class="<?php if ($ini['name_required']) print 'required';?>" type="text" name="name" placeholder="ФИО"><input class="<?php if ($ini['phone_required']) print 'required';?> phone" type="text" name="phone" placeholder="Телефон"><input class="<?php if ($ini['email_required']) print 'required';?>" data-valid="email" type="text" name="email" placeholder="E-mail"></div>
                        <div id="ib-block21" contenteditable="true"><p>* только при заказе всех товаров сразу</p>
</div>
                        <button type="submit" class="blue-btn">Отправить заявку</button>
                        </div>
                        <div class="suc">
                            <img src="i/forms_suc_b.png" alt=""><div class="title">Ваша заявка отправлена!</div>
                                <div class="post-title">Наши менеджеры свяжутся 
                                    с вами в течении нескольких часов!</div>
                        </div>
                    </form>
                </div>
            </div>


            <div class="contacts">
                <div class="inner clearfix">
                    <div class="title main" id="ib-block22" contenteditable="true">Контактная информация</div>
                    <div class="col">
                        <div class="title" id="ib-block23" contenteditable="true">Адрес офиса:</div>
                        <div class="map" id="map" data-coord="<?php if ($ini['map_point']) print $ini['map_point'];?>" data-center="<?php if ($ini['map_center']) print $ini['map_center'];?>"></div>
                        <p>
                            <?php print $ini['address'];?><?php if ($ini['phone']) { ?><br>Телефон: <?php print $ini['phone']; ?><?php } ?></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">

            <div class="inner clearfix">
                <span class="left">© <?php print $ini['company_name'];?>, <?php print date('Y');?></span>
                <span class="right">Лэндинг сделан в <a href="http://youlp.ru/">YouLP.ru</a>
                   
                </span>
            </div>

        </div>

        <div id="overlay"></div>

        <div class="modals">			
            <div id="call">
                <span class="close"></span>
                <form name="call" action="form/form.php" method="POST"><input type="hidden" name="type" value="call_request"><div class="title">Обратный звонок</div>
                    <div>
                        <input class="<?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя" type="text" name="name"><input class="required phone" placeholder="Ваш телефон" type="text" name="phone"></div>                       
                    <div>
                        <button class="blue-btn" type="submit">Заказать</button>
                    </div>
                </form>
            </div>

            <div id="success">
                <div>
                    <span class="close"></span>
                    <div class="title">Спасибо!<br>
                        Наши менеджеры свяжутся <br>
                                    с вами в ближайшее время</div>

                </div>
            </div>

        </div>
		<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>