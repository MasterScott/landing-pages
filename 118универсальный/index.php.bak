<?php require 'functions.php';
header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini');
if (!$ini) {
	echo 'Ошибка в конфигурационном файле';
	die();
}
?><!DOCTYPE html><html><head><title><?php print $ini['title']; ?></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="user-scalable=yes, width=1100, initial-scale=1"><link rel="shortcut icon" href="favicon.ico" type="image/x-icon"><link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500"><link href="css/sreset.css?v123" rel="stylesheet" type="text/css"><link href="css/user_style.css?v123" rel="stylesheet" type="text/css"><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id']; ?>">
        <!-- VWO Container -->
        <div id="root_container">
            <div class="header">
                <div class="inner">
					<div id="logo" contenteditable="true"><img alt="Креселмного.ру" src="i/logo.gif"></div>
                    <span data-offset="-120" data-href=".form-wrapper" class="scroll-link green-btn top-btn">ОТПРАВИТЬ ЗАЯВКУ</span>
                    <span class="open-modal call-req" data-modal="#call">Заказать звонок</span>
					<?php if ($ini['phone']) { ?><span class="phone"><?php print $ini['phone']; ?></span><?php } ?></div>
            </div>
            <div class="promo clearfix">
                <div class="inner clearfix">
                    <div class="title" contenteditable="true" id="id-block1">Продающий заголовок</div>
                    <div class="post-title" contenteditable="true" id="id-block2">Основное описание о сайте продающем ваш товар или услугу</div>
                    <div class="product-block">
                        <div contenteditable="true" id="id-block3"><ul class="clearfix"><li><img alt="" src="ckfinder/userfiles/images/box_placeholder.jpg" style="width: 202px; height: 164px;"><div class="text">
	<p class="tit">Груша</p>

	<p class="tit_2">кресло-мешок</p>

	<p class="tit_3">4 990.- <span> 7 425. </span></p>
	</div>
	</li>
	<li><img alt="" src="ckfinder/userfiles/images/box_placeholder.jpg" style="width: 202px; height: 164px;"><div class="text">
	<p class="tit">Звезда</p>

	<p class="tit_2">кресло-диван</p>

	<p class="tit_3">5 990.- <span> 8 775.- </span></p>
	</div>
	</li>
	<li><img alt="" src="ckfinder/userfiles/images/box_placeholder.jpg" style="width: 202px; height: 164px;"><div class="text">
	<p class="tit">Драйвер</p>

	<p class="tit_2">кресло</p>

	<p class="tit_3">4 990.- <span> 6 750.- </span></p>
	</div>
	</li>
</ul></div>
                        <div class="timer">
                            <div class="left">
                                <div class="top" contenteditable="true" id="id-block4"><span>Успейте купить</span><br>
товар/услугу со скидкой <span class="discount">50%</span></div>
                                <div class="bottom" contenteditable="true" id="id-block5">Отправьте заявку на получение<br>
каталога и узнайте подробнее о наших скидках/услугах!</div>
                            </div>
                            <div class="right">
                                <div class="title">До конца акции осталось:</div>
                                <div id="timer">
                                    <span class="number-wrapper mar-rig">
                                        <span class="number days">4</span>
                                        <span class="hr"></span>
                                    </span>
                                    <span class="number-wrapper">
                                        <span class="number hurses">09</span>
                                        <span class="hr"></span>

                                    </span>
                                    <span class="number-wrapper mar-rig">
                                        <span class="number"></span>
                                        <span class="hr"></span>
                                    </span>
                                    <span class="number-wrapper">
                                        <span class="number minutes">41</span>
                                        <span class="hr"></span>

                                    </span>
                                    <span class="number-wrapper mar-rig">
                                        <span class="number"></span>
                                        <span class="hr"></span>
                                    </span>
                                    <span class="number-wrapper">
                                        <span class="number secunds">34</span>
                                        <span class="hr"></span>
                                    </span>
                                    <span class="number-wrapper end">
                                        <span class="number"></span>
                                        <span class="hr"></span>
                                    </span>
                                    <div class="clearfix"></div>
                                    <div class="string-time">
                                        <span class="ddays width30">дня</span>
                                        <span class="hhours width57">часов</span>
                                        <span class="mminutes">минута</span>
                                        <span class="ssecunds">секунды</span>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="form-wrapper">
                            <form class="fck" action="form/form.php" method="POST"><input type="hidden" name="type" value="catalog">
                                <div class="form-title" contenteditable="true" id="id-block6">Получите скидку</div>
                                <p contenteditable="true" id="id-block7">просто оставьте ваше<br /> имя, телефон и e-mail, в&nbsp;форме ниже<br><span>со скидкой 15%</span></p>
                                <div>
                                    <input class="<?php if ($ini['name_required']) print 'required'; ?> name" placeholder="Ваше имя" type="text" name="name"></div>
                                <div>
                                    <input class="<?php if ($ini['phone_required']) print 'required'; ?> phone" placeholder="Ваш телефон" type="text" name="phone"></div>
                                <div>
                                    <input data-valid="email" class="<?php if ($ini['email_required']) print 'required'; ?> email" placeholder="Ваша электропочта" type="text" name="email"></div>

                                <div>
                                    <input class="green-btn" type="submit" name="sub" value="ОТПРАВИТЬ"></div>
                                <?php if ($ini['catalog_file']) { ?><p class="bot" contenteditable="true" id="id-block8">Каталог придет на почту</p><?php } ?>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ags">
                <div class="inner clearfix" contenteditable="true" id="id-block9">
					<div class="stat-b">
						<span class="number">2</span>
						<p class="num-cl">года</p>
						<p class="num-info">на рынке</br> производства<br /> и продажи<br /> мебели</p>
					</div>
					<div class="stat-b">
						<span class="number">78</span>
						<p class="num-cl">кресел</p>
						<p class="num-info">мы продали<br /> на прошлой<br /> неделе</p>
					</div>
					<div class="stat-b">
						<span class="number">4000</span>
						<p class="num-cl">довольных</p>
						<p class="num-info">клиентов используют<br /> наши кресла дома,<br /> в офисе, на даче</p>
					</div>
					<div class="stat-b">
						<span class="number">53</span>
						<p class="num-cl">вида</p>
						<p class="num-info">отделок и пошива<br /> мы производим<br /> для вашего удобства</p>
					</div>
					
				</div>
            </div>
            <div class="well">
                <div class="inner">
                    <div class="title" contenteditable="true" id="id-block10">Чем мы хороши или почему мы лучше?</div>
                    <div contenteditable="true" id="id-block11"><ul class="clearfix"><li>
                            <img src="i/well1.png" alt=""><p class="tit">
                                Преимущество <br>
                                1
                            </p>
                            <p>
								Описание вашего преимущества(несколько предложений)
                            </p>
                        </li>
                        <li>
                            <img src="i/well2.png" alt=""><p class="tit">
								Преимущество<br />2
                            </p>
                            <p>
								Описание вашего преимущества(несколько предложений)
                            </p>
                        </li>
                        <li>
                            <img src="i/well3.png" alt=""><p class="tit">
                                Преимущество<br />3
                            </p>
                            <p>
                               Описание вашего преимущества(несколько предложений)
                            </p>
                        </li>
                        <li>
                            <img src="i/well4.png" alt=""><p class="tit">
                                 Преимущество<br />4
                            </p>
                            <p>
                                 Описание вашего преимущества(несколько предложений)
                            </p>
                        </li>
                        <li>
                            <img src="i/well5.png" alt=""><p class="tit">
                               Преимущество<br />5
                            </p>
                            <p>
                                Описание вашего преимущества(несколько предложений)
                            </p>
                        </li>
                    </ul></div>
				</div>
            </div>
            <div class="scheme">
                <div class="inner">
                    <div class="title" contenteditable="true" id="id-block12">Схема работы</div>
                    <div contenteditable="true" id="id-block13"><ul class="clearfix">
						<li class="width134">
                            Начало<br /> работы,<br /> несколько слов описания
                        </li>
                        <li class="sep">
                        </li>
						<li class="width142">
							 Продолжение<br /> работы,<br /> несколько слов описания
                        </li>
                        <li class="sep">
                        </li><li class="width160">
                             Продолжение<br /> работы,<br /> несколько слов описания
                        </li>
                        <li class="sep">
                        </li><li class="width197">
                             Продолжение<br /> работы,<br /> несколько слов<br /> описания
                        </li>
                        <li class="sep">
                        </li><li class="end width178">
                             Окончание<br /> работы,<br /> несколько слов описания
                        </li>
                    </ul></div>
				</div>
            </div>
			<div class="b-reviews">
				<div class="inner">
					 <div class="title" contenteditable="true" id="id-block18">Отзывы</div>
					<div class="rev-wr" contenteditable="true" id="id-block19">
						<div class="rev-info pos-rev">
							<p class="rev-cont">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. </p>
							<p class="b-data">15.02.2016</p>
						</div>
						<div class="per-img pos-rev-img">
							<img src="i/per1.png" alt="" />
						</div>
					</div>
					<div class="rev-wr" contenteditable="true" id="id-block20">
						<div class="rev-info neg-rev">
							<p class="rev-cont">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
							<p class="b-data">15.02.2016</p>
						</div>
						<div class="per-img pos-neg-img">
							<img src="i/per2.png" alt="" />
						</div>
					</div>
				</div>
			</div>
            <div class="contact">
                <div class="inner">
                    <form action="form/form.php" method="POST"><input type="hidden" name="type" value="catalog">
                        <div class="title" contenteditable="true" id="id-block14">Вы ещё думаете? Получите скидку!</div>
                        <p contenteditable="true" id="id-block15">просто оставьте имя, телефон и e-mail в форме ниже <span>получите скидку 50%</span></p>
                        <div>
                            <input class="<?php if ($ini['name_required']) print 'required'; ?> name" placeholder="Ваше имя" type="text" name="name"><input class="<?php if ($ini['phone_required']) print 'required'; ?> phone" placeholder="Ваш телефон" type="text" name="phone"><input data-valid="email" class="<?php if ($ini['email_required']) print 'required'; ?> email" placeholder="Ваша электропочта" type="text" name="email"><input class="green-btn" type="submit" name="sub" value="ОТПРАВИТЬ"></div>
                        
						<?php if ($ini['phone']) { ?><div class="note" contenteditable="true" id="id-block16">
                            Или позвоните нам по номеру<?php print $ini['phone']; ?> 
                        </div><?php } ?>
                    </form>
                    <div class="title" contenteditable="true" id="id-block17">Контактная информация</div>
					<div class="cols clearfix">
						<div class="adres">
							<?php if ($ini['address']) { ?><div>
									<strong>Адрес:</strong><br><?php print $ini['address']; ?></div>
							<?php } ?><?php if ($ini['email']) { ?><div class="ad_email">
									<strong>Электропочта:</strong><br><?php print chr(60).'a href="mailto:'.$ini['email'].'"'.chr(62).$ini['email'].chr(60).'/a'.chr(62);?>
								</div>
							<?php } ?><?php if ($ini['phone']) { ?><div class="phone">
									<strong>Телефон:</strong><br><?php print $ini['phone']; ?></div>
							<?php } ?></div>
						<div id="map" data-coord="<?php if ($ini['map_point']) print $ini['map_point'];?>" data-center="<?php if ($ini['map_center']) print $ini['map_center'];?>"></div>
						
					</div>
                </div>
            </div>
            <div class="footer">
                <div>
                    <div class="inner clearfix">
                        <span class="left">© <?php print $ini['company_name'] . ', ' . date('Y'); ?></span>
                        <span class="right">Лэндинг сделан в <a target="_blank" href="http://www.ibrush.ru/">iBrush</a>
                            <img src="i/ibrush.png" alt=""><i></i>в 2013 году
                        </span>
                    </div>
                </div>
            </div>
            <div class="modals">			
                <div id="call">
                    <span class="close"></span>
                    <form action="form/form.php" method="POST"><input type="hidden" name="type" value="callback">
						<input type="hidden" name="call" value="1"><div class="title">Мы вам перезвоним!</div>
                        <div>
                            <input class="<?php if ($ini['name_required']) print 'required'; ?> name" placeholder="Ваше имя" type="text" name="name"></div>
                        <div>
                            <input class="required phone" placeholder="Ваш телефон" type="text" name="phone"></div>
                        <div>
                            <input class="green-btn sub_btn" type="submit" name="sub" value="ОТПРАВИТЬ"></div>
                    </form>
                </div>
                <div id="success">
                    <div>
                        <span class="close"></span>
                        <div class="title">Спасибо, ваша заявка принята!</div>
                        <p>
                            Наши операторы свяжутся с вами в ближайшее время, чтобы <br>
                            провести расчет вашего заказа!
                        </p>
                        <span class="close-text">Закрыть</span>
                    </div>
                </div>
            </div>
            <div id="overlay"></div>
        </div>
		<script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false"></script><script type="text/javascript" src="js/jquery-1.10.2-min.js"></script><script type="text/javascript" src="js/jquery.plugins.js"></script><script type="text/javascript" src="js/common.js?v2"></script><?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
