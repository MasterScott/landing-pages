<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini'); 
if (!$ini) {
	echo 'Ошибка в конфигурационном файле'; die();
}	?><!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="user-scalable=yes, width=1115, initial-scale=1"><title><?php print $ini['title'];?></title><link href="http://fonts.googleapis.com/css?family=Roboto:400,300,500,700&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css"><link rel="shortcut icon" href="favicon.ico" type="image/x-icon"><link href="css/sreset.css?v123" rel="stylesheet" type="text/css"><!-- User CSS --><link href="css/user_style.css?v12322" rel="stylesheet" type="text/css"><script type="text/javascript" src="js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="js/jquery.maskedinput.min.js"></script><script type="text/javascript" src="js/jquery.form.js"></script><script type="text/javascript" src="js/less-1.4.1.min.js"></script><!-- User JS --><script type="text/javascript" src="js/common.js?v2"></script><script type="text/javascript" src="js/Backstretch.js"></script><script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script><?php if ($ini['head_code']) include($ini['head_code']); ?></head><body data-metrika="<?php if ($ini['metrika_id']) print $ini['metrika_id'];?>">
        <!-- VWO Container -->
        <div id="root_container">

            <div class="header">
                <div class="inner">                	
                   <div id="logo" contenteditable="true"><img alt="Ваш логотип" src="ckfinder/userfiles/images/logo(1).png" style="width: 111px; height: 41px;"></div>
                    <span data-offset="-120" href=".promo" class="scroll-link top-btn">ОТПРАВИТЬ ЗАЯВКУ</span>
                    <span class="open_modal call-req" data-modal="#call">Заказать звонок</span>
                    <?php if ($ini['phone']) {?><span class="phone"><?php print $ini['phone'];?></span><?php } ?></div>
            </div>
            <div class="main-title">				
                <div class="fixed-img">

                </div>
                <div class="inner">
                    <h1 contenteditable="true" id="id-block1">Продающий заголовок<br>
 </h1>
                    <div class="post-title" contenteditable="true" id="id-block2">Оптовая продажа физическим и юридическим лицам по всей России.<br>
Доставка на предприятие или объект заказчика. Возможен самовывоз.</div>
                </div>			
            </div>
            <div class="main-title-shadow">				
                <img src="i/main_tite_shadow.png" alt=""></div>

            <div class="promo">
                <div class="inner clearfix">
                    <div class="block-list"><div class="block-arrow">
					<div class="bl-img" contenteditable="true" id="id-block3"><img src="i/boxes_placeholder.jpg" alt=""></div>
                        <div class="title" contenteditable="true" id="id-block4">
                            Более 4000 наименований <br><b>товаров со скидкой 20%:</b>
                        </div>
                        <div contenteditable="true" id="id-block5"><ul><li>болты</li>
                            <li>гайки</li>
                            <li>шайбы</li>
                            <li>винты</li>
                            <li>саморезы</li>
                            <li>шплинты</li>
                            <li>штифты</li>
                            <li>заклепки</li>
                            <li>шпильки</li>
                            <li>такелаж</li>
                            <li>хомуты</li>
                        </ul><p>
                            и многое другое
                        </p></div>
                    </div></div>
                    <div class="block-timer">
                        <div contenteditable="true" id="id-block7"><p>Товар-</p>

<p>локомотив.</p>
<img alt="" class="tomer-bolt" src="i/box_placeholder.jpg"><div class="price-one"><span>1822</span> <img alt="" src="i/r_mini.png"><hr></div>

<div class="price-two"><span>1365</span> <img alt="" src="i/r_big.png"></div>
</div>
                        <div class="top-title">До конца акции осталось:</div>
                        <div class="timer" id="timer">
                            <span class="number-wrapper mar-rig">
                                <span class="number days">5</span>
                                <hr></span>
                            <span class="number-wrapper">
                                <span class="number hurses">09</span>
                                <hr></span>
                            <span class="number-wrapper mar-rig">
                                <span class="number"></span>
                                <hr></span>
                            <span class="number-wrapper">
                                <span class="number minutes">38</span>
                                <hr></span>
                            <span class="number-wrapper mar-rig">
                                <span class="number"></span>
                                <hr></span>
                            <span class="number-wrapper">
                                <span class="number secunds">40</span>
                                <hr></span>
                            <span class="number-wrapper end">
                                <span class="number"></span>
                                <hr></span>
                            <div class="clearfix"></div>
                            <div class="string-time">
                                <span class="ddays">дней</span>
                                <span class="hhours">часов</span>
                                <span class="mminutes">минут</span>
                                <span class="ssecunds">секунд</span>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="block-form">
                        <form class="fck" action="form/form.php" method="POST">
							<input type="hidden" name="type" value="catalog"><div class="title" contenteditable="true" id="id-block8">Отправьте заявку</div>
                            <p contenteditable="true" id="id-block9">и получите каталог всех<br>
наших товаров с ценами,<br>
который содержит более 4000 позиций.</p>
                            <div>
                                <input class="<?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя" type="text" name="name"></div>
                            <div>
                                <input class="<?php if ($ini['phone_required']) print 'required';?> phone" placeholder="Ваш телефон" type="text" name="phone"></div>
                            <div>
                                <input data-valid="email" class="<?php if ($ini['email_required']) print 'required';?>" placeholder="Ваша электропочта" type="text" name="email"></div>
                            <?php if ($ini['catalog_file']) { ?><p class="note">Каталог высылается автоматически.</p><?php } ?><div>
                                <input class="sub_btn" type="submit" name="sub" value="ОТПРАВИТЬ"></div>

                        </form>
                    </div>
                </div>



            </div>

            <div class="ags">
                <div class="inner">
                    <div contenteditable="true" id="id-block10"><ul><li>
                            <span>7</span>
                            <p>
                                лет безупречной работы <br> на российском рынке
                            </p>
                        </li>
                        <li>
                            <span>240</span>
                            <p>
                                постоянных <br> клиентов
                            </p>
                        </li>
                        <li class="end">
                            <span>4329</span>
                            <p class="fck">
                                наименований крепежа <br> в нашем каталоге
                            </p>
                        </li>
                    </ul></div></div>
            </div>

            <div class="why">
                <div>
                    <div>
                        <div class="inner clearfix">
                            <div class="title" contenteditable="true" id="id-block11">
                                Почему выбирают нас?
                            </div>
                            <div contenteditable="true" id="id-block12"><ul><li><img alt="" src="i/why1.png"><p>Доступные<br>
	и понятные<br>
	каждому<br>
	каталоги</p>
	</li>
	<li><img alt="" src="i/why2.png"><p>Доставка в<br>
	любую точку<br>
	России<br>
	 </p>
	</li>
	<li class="separator"> </li>
	<li><img alt="" src="i/why3.png"><p>Возможность<br>
	оплаты прямо<br>
	при получении<br>
	товара</p>
	</li>
	<li class="end"><img alt="" src="i/why4.png"><p>У нас в магазине<br>
	действительно<br>
	есть всё, что<br>
	вам нужно!</p>
	</li>
</ul></div>
						</div>
                    </div>
                </div>
            </div>

            <div class="why-shadow">				
                <img src="i/why_shadow.png" alt=""></div>

            <div class="scheme">
                <div class="title" contenteditable="true" id="id-block13">Схема работы</div>
                <div class="bolts"></div>
                <div class="inner">
                    <div contenteditable="true" id="id-block14"><ul><li>Вы отправляете<br>
	заявку и получаете<br>
	каталог изделий<br>
	по e-mail.</li>
	<li>Наш менеджер<br>
	связывается с вами<br>
	и обговаривает детали заказа.</li>
	<li>Вы выбираете удобный<br>
	способ оплаты.</li>
	<li>Мы готовим заказ к<br>
	отгрузке и связываемся<br>
	с вами для уточнения<br>
	времени доставки.</li>
	<li>Вы получаете товар и<br>
	отгрузочные документы<br>
	точно в срок в удобное<br>
	для вас время.</li>
</ul></div>
					</div>
            </div>

            <div class="bottom-from">
                <div class="inner">
                    <form action="form/form.php" method="POST">
						<input type="hidden" name="type" value="catalog"><div class="title" contenteditable="true" id="id-block15">Хватит раздумывать! Скачайте каталог</div>
                        <p contenteditable="true" id="id-block16">Который содержит более 4000 товарных позиций со <span>скидкой до 30%</span></p>
                        <div>
                            <input class="<?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя" type="text" name="name"><input class="<?php if ($ini['phone_required']) print 'required';?> phone" placeholder="Ваш телефон" type="text" name="phone"><input data-valid="email" class="<?php if ($ini['email_required']) print 'required';?>" placeholder="Ваша электропочта" type="text" name="email"><input class="sub_btn" type="submit" name="sub" value="ОТПРАВИТЬ"></div>
                    </form>
                </div>
            </div>

            <div class="contact">
                <div class="inner clearfix">
                    <div class="title" contenteditable="true" id="id-block17">Контактная информация</div>
                    <div class="map-top"></div>                   
                    <div id="map" data-coord="<?php if ($ini['map_point']) print $ini['map_point'];?>" data-center="<?php if ($ini['map_center']) print $ini['map_center'];?>"></div>
                    <div class="map-rig"></div>                    
                    <div class="panel fck">
						<?php if ($ini['address']) { ?><div class="tit">Адрес склада:</div>
                        <p id="address_block">
							<?php print $ini['address']; ?></p>
						<?php } ?><?php if ($ini['email']) {?><div class="tit">Электропочта:</div>
                        <p>
                            <?php print chr(60).'a href="mailto:'.$ini['email'].'"'.chr(62).$ini['email'].chr(60).'/a'.chr(62);?>
                        </p>
						<?php } ?><?php if ($ini['phone']) {?><div class="tit">Телефон:</div>
                        <p>
                            <?php print $ini['phone'];?></p>
						<?php } ?><div class="description">
                           <span class="open_modal call-req" data-modal="#call">Заказать звонок</span>
                            <p contenteditable="true" id="id-block18">
                                Закажите звонок, и с вами обязательно <br>
                                свяжется один из наших менеджеров.
                            </p>
                        </div>
                        <div class="mans" contenteditable="true" id="id-block19">
                            <div>
                                <img src="i/manager_placeholder1.png" alt=""><p>Иванов Петр</p>
                            </div>
                            <div>
                                <img src="i/manager_placeholder2.png" alt=""><p>Черемухина Анна</p>
                            </div>
                            <div>
                                <img src="i/manager_placeholder2.png" alt=""><p>Самойленко Алина</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div>
                    <div class="inner clearfix">
                        <span class="left"></span>
                        <span class="right">Сайт сделан в YouLP.ru
                            
                        </span>
                    </div>
                </div>
            </div>         

            <div class="modals">			
				<div id="call">
					<span class="close"></span>
					 <form action="form/form.php" method="POST">
						<input type="hidden" name="type" value="callback"><div class="title">Мы вам перезвоним!</div>
                        <div>
                            <input class="<?php if ($ini['name_required']) print 'required';?>" placeholder="Ваше имя" type="text" name="name"></div>
                         <div>
                            <input class="required phone" placeholder="Ваш телефон" type="text" name="phone"></div>
                         <div>
                            <input class="sub_btn" type="submit" name="sub" value="ОТПРАВИТЬ"></div>
                    </form>
				</div>
				
				<div id="success">
					<div>
						<span class="close"></span>
						<div class="title">Спасибо, ваша заявка принята!</div>
						<p>
							Наши операторы свяжутся с вами в ближайшее время, чтобы
							провести расчет вашего заказа!
						</p>
						<span class="close-text">Закрыть</span>
					</div>
				</div>
				
            </div>

            <div id="overlay"></div>
        </div>	
	<?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
