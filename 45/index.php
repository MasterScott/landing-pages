<?php require 'functions.php'; ?><?php header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('./config/config.ini'); 
if (!$ini) {
	echo 'Ошибка в конфигурационном файле'; die();
}	?><!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="icon" type="image/png" href="/favicon.png"><title><?php print $ini['title'];?></title><meta name="description" content=""><meta name="keywords" content=""><meta name="viewport" content="user-scalable=yes, width=1015, initial-scale=1"><script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false"></script><!--[if lt IE 9]>
		<script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]--><link rel="stylesheet" type="text/css" href="style/CSS_reset.css"><link rel="stylesheet" type="text/css" href="style/style.css"><?php if ($ini['head_code']) include($ini['head_code']); ?>
	<?php if (!$ini['snowflakes']) print chr(60).'style type="text/css"'.chr(62).'.has_snowflakes{background: none;}'.chr(60).'/style'.chr(62); ?>
</head><body>
	<header id="header"><!--OPEN HEADER--><div class="conteiner clr">
			<div class="logo" contenteditable="true" id="id-block1"><img alt="" src="ckfinder/userfiles/images/logo.png" style="width: 218px; height: 54px;" title=""></div>
			<div class="contacts-head">
				<address class="phone-number-head">
					<?php if ($ini['phone']) {?><span><?php print $ini['phone'];?></span><?php } ?></address>
				<a href="#" class="order-btn callback">Обратный звонок</a>
			</div><!--close contacts-->
			<p contenteditable="true" id="id-block2">Билеты на все московские концерты по лучшим ценам</p>
		</div><!--close conteiner-->
	</header><!--CLOSE HEADER--><section id="b-main-poster" class="has_snowflakes"><!--OPEN B-MAIN-POSTER--><div class="conteiner clr">
			<h1 contenteditable="true" id="id-block3">Продающий заголовок!</h1>
			<p contenteditable="true" id="id-block4">Ваше счастье в ваших руках</p>
			<div contenteditable="true" id="id-block5">
			<ul class="post-list"><li>
					<img src="images/post-list/placeholder.jpg" alt="" title=""><div class="post-info">
						<h3>Мероприятие</h3>
						<p>Для того, чтобы шоу стало реальностью, исполнители прошли долгий и непростой путь совершенствования мастерства. Вас ждут профессиональные музыканты, грандиозные спецэффекты и великолепный звук. </p>
						<span><i>Цена от 2500р. до 4000р.</i></span>
						<div class="learn-more">
							<a class="order-btn red-btn" href="javascript:;">Узнать подробнее</a>
						</div>
					</div>
				</li>
				<li>
					<img src="images/post-list/placeholder.jpg" alt="" title=""><div class="post-info">
						<h3>Мероприятие</h3>
						<p>Для того, чтобы шоу стало реальностью, исполнители прошли долгий и непростой путь совершенствования мастерства. Вас ждут профессиональные музыканты, грандиозные спецэффекты и великолепный звук. </p>
						<span><i>Цена от 2500р. до 4000р.</i></span>
						<div class="learn-more">
							<a class="order-btn red-btn" href="javascript:;">Узнать подробнее</a>
						</div>
					</div>
				</li>
				<li>
					<img src="images/post-list/placeholder.jpg" alt="" title=""><div class="post-info">
						<h3>Мероприятие</h3>
						<p>Для того, чтобы шоу стало реальностью, исполнители прошли долгий и непростой путь совершенствования мастерства. Вас ждут профессиональные музыканты, грандиозные спецэффекты и великолепный звук. </p>
						<span><i>Цена от 2500р. до 4000р.</i></span>
						<div class="learn-more">
							<a class="order-btn red-btn" href="javascript:;">Узнать подробнее</a>
						</div>
					</div>
				</li>
				<li>
					<img src="images/post-list/placeholder.jpg" alt="" title=""><div class="post-info">
						<h3>Мероприятие</h3>
						<p>Для того, чтобы шоу стало реальностью, исполнители прошли долгий и непростой путь совершенствования мастерства. Вас ждут профессиональные музыканты, грандиозные спецэффекты и великолепный звук. </p>
						<span><i>Цена от 2500р. до 4000р.</i></span>
						<div class="learn-more">
							<a class="order-btn red-btn" href="javascript:;">Узнать подробнее</a>
						</div>
					</div>
				</li>
			</ul></div>
		</div><!--close conteiner-->
	</section><!--CLOSE B-MAIN-POSTER--><section id="b-all-our-shows"><!--OPEN B-ALL-OUR-SHOWS--><div class="conteiner clr has_snowflakes">
			<h2 contenteditable="true" id="id-block6">Все наши ёлки</h2>
			<div contenteditable="true" id="id-block7">
			<ul class="shows-list-main"><li>
					<ul class="shows-list-in"><li>
							<a href="javascript:;" id="show-1" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
						<li>
							<a href="javascript:;" id="show-2" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
						<li>
							<a href="javascript:;" id="show-3" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
						<li>
							<a href="javascript:;" id="show-4" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
						<li>
							<a href="javascript:;" id="show-5" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
					</ul></li>
				<li>
					<ul class="shows-list-in"><li>
							<a href="javascript:;" id="show-6" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
						<li>
							<a href="javascript:;" id="show-7" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
						<li>
							<a href="javascript:;" id="show-8" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
						<li>
							<a href="javascript:;" id="show-9" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
						<li>
							<a href="javascript:;" id="show-10" class="show-link">
								<img src="images/shows-list/placeholder_small.jpg" alt="" title=""><h3>Мероприятие</h3>
							</a>
						</li>
					</ul></li>
			</ul></div>
		</div><!--close conteiner-->
	</section><!--CLOSE B-ALL-OUR-SHOWS--><section class="b-show has_snowflakes" contenteditable="true" id="show-1-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section class="b-show has_snowflakes" contenteditable="true" id="show-2-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу 2</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section class="b-show has_snowflakes" contenteditable="true" id="show-3-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу 3</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section class="b-show has_snowflakes" contenteditable="true" id="show-4-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу 4</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section class="b-show has_snowflakes" contenteditable="true" id="show-5-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу 5</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section class="b-show has_snowflakes" contenteditable="true" id="show-6-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу 6</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section class="b-show has_snowflakes" contenteditable="true" id="show-7-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу 7</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section class="b-show has_snowflakes" contenteditable="true" id="show-8-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу 8</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section class="b-show has_snowflakes" contenteditable="true" id="show-9-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу 9</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section class="b-show has_snowflakes" contenteditable="true" id="show-10-data"><!--SHOW--такой блок нужен на каждое шоу--><div class="conteiner clr has_snowflakes">
			<h3>Название шоу 10</h3>
			<p class="show-price"><strong>Цена: 4000р. - танцпартер, 6000р. - столики</strong></p>  
			<article class="show-info"><img src="images/shows-list/placeholder_large.jpg" alt="" title=""><div class="show-text">
				<p>Мы рады пригласить вас на шоукейс одного из самых ярких лэйблов пост-индустриальной сцены нулевых! Cyclic Law — это черная дыра, которая, всасывая вещество в параллельной реальности, выбрасывает в нашу Вселенную сгустки темнейшего эмбиента. В Москве в одном месте соберутся лучшие резиденты лэйбла, и можно быть уверенным, что без искажений хронотопа дело не обойдется. Шведы из Sophia женят густые, как стынущая кровь, электронные бэкграунды с торжественной перкуссией, создавая эффект, о котором в свое время писали: «Неподъёмные вериги «нерасшифрованной мечты» в заритмованной коме!» — и взвинченность интонации тут вполне понятна. Еще один скандинавский проект Kammarheit действует иначе — его изоляционистские безлюдные саундскейпы тихи, но от них дрожит земля под ногами. Проект Treha Sektori, имеющий прямое отношение к семейству Church Of Ra, — это сеанс французского мракобесия, злодейский и двусмысленный, как улыбка Жиля де Рэ. Havan делает ставку на инстинктивную работу со звуком, балансируя между импровизацией и оккультными ритуалами. И, наконец, Lamia Vox — колдунья из Петербурга, свивающая в режиме реального времени петли висельного звука. Все, что вы хотели знать о «Молоте ведьм» и «Некрономиконе», но не знали, у кого спросить.</p>
				<p><br><b>Дата:</b> 10 мая 2014 <br></p>

				<p><br><b>Место проведения:</b> Москва — «Plan B»<br><b>Адрес:</b> Москва, м.Достоевская, ул.Советской Армии, 7</p>
				</div>
				<a class="order-btn red-btn" href="javascript:;">хочу билет</a>
			</article></div><!--close conteiner-->
	</section><!--CLOSE SHOW--><section id="b-company-info"><!--OPEN B-COMPANY-INFO--><div class="conteiner clr">
			<div contenteditable="true" id="id-block8">
			<ul class="company-info-list"><li>
					<div class="hexagon-info">
						<p>15 <span>лет</span></p>
					</div>
					<span>15 лет на рынке билетных агенств</span>
				</li>
				<li>
					<div class="hexagon-info">
						<p>56 <span>шоу</span></p>
					</div>
					<span>56 концертов в месяц</span>
				</li>
				<li>
					<div class="hexagon-info">
						<p>9352 <span>билета</span></p>
					</div>
					<span>9352 билета продано за этот месяц</span>
				</li>
				<li>
					<div class="hexagon-info">
						<p>14035 <span>человек</span></p>
					</div>
					<span>14035 счастливых людей, посетивших мероприятия</span>
				</li>
			</ul></div>
		</div><!--close conteiner-->
	</section><!--CLOSE B-COMPANY-INFO--><section id="b-why-we"><!--OPEN-B-WHY-WY--><div class="conteiner clr">
			<h2 contenteditable="true" id="id-block9">Почему люди покупают билеты у нас?</h2>
			<div contenteditable="true" id="id-block10">
			<ul class="reason-list"><li>
					<div class="hexagon-reason bg-1"><img src="images/reason-list/1.png" alt=""></div>
					<span>У нас есть все категории билетов, от обычных до престижных</span>
				</li>
				<li class="r-thin"><div class="arrow"></div></li>
				<li>
					<div class="hexagon-reason bg-2"><img src="images/reason-list/2.png" alt=""></div>
					<span>Мы предлагаем лучшие места. Мы не продаем<br> галерку!</span>
				</li>
				<li class="r-thin"><div class="arrow"></div></li>
				<li>
					<div class="hexagon-reason bg-3"><img src="images/reason-list/3.png" alt=""></div>
					<span>На некоторые концерты есть билеты только у нас. И это здорово!</span>
				</li>
				<li class="r-thin"><div class="arrow"></div></li>
				<li>
					<div class="hexagon-reason bg-4"><span>-10%</span></div>
					<span>При заказе от 10 билетов</span>
				</li>
				<li class="r-thin"><div class="arrow"></div></li>
				<li>
					<div class="hexagon-reason-bg bg-5"><img src="images/reason-list/4.png" alt=""></div>
					<span>В случае отмены мероприятия — вернём деньги!</span>
				</li>
			</ul></div>
		</div><!--close conteiner-->
	</section><!--CLOSE-B-WHY-WE--><section class="b-priece-increase snow-bg has_snowflakes"><!--OPEN B-PRIECE-INCREASE--><div class="conteiner clr">
		<h2 contenteditable="true" id="id-block11">Цены растут на глазах</h2>
			<div class="time-text" contenteditable="true" id="id-block12">
				<h3>Завтра цена может стать выше!</h3>
				<p>Позвоните или закажите обратный звонок<br> сегодня и успейте купить билет по выгодной цене!</p>
				<p><strong>Специальное предложение для корпоративных клиентов</strong>
			</p></div>
			<div class="contacts-time">
				<address class="phone-number-time">
					<?php if ($ini['phone']) {?><span><?php print $ini['phone'];?></span><?php } ?></address>
				<a href="javascript:;" class="order-btn red-btn">заказать звонок</a>
			</div>
			<div class="timer">
				<strong class="timer-title">До роста цен осталось:</strong>
				<div class="timer-digits clr">
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
		</div><!--close conteiner-->
	</section><!--CLOSE-B-PRIECE-INCREASE--><section id="b-how-buy-ticket"><!--OPEN B-HOW-BUY-TICKET--><div class="conteiner clr">
			<h2 contenteditable="true" id="id-block12">Как попасть на концерт?</h2>
			<div contenteditable="true" id="id-block13">
			<ul class="buy-ticket-stages"><li class="st-bg1"><div class="st-img"><img src="images/stages-bg/1.png" alt=""></div><span>Вы выбираете событие.</span></li>
				<li class="s-thin"><div class="arrow2"></div></li>
				<li class="st-bg2"><div class="st-img"><img src="images/stages-bg/2.png" alt=""></div><span>Звоните нам или заказываете обратный звонок</span></li>
				<li class="s-thin"><div class="arrow2"></div></li>
				<li class="st-bg3"><div class="st-img"><img src="images/stages-bg/3.png" alt=""></div><span>Консультируетесь с оператором по событиям, билетам и их наличии. Выбираете билет.</span></li>
				<li class="s-thin"><div class="arrow2"></div></li>
				<li class="st-bg4"><div class="st-img"><img src="images/stages-bg/4.png" alt=""></div><span>Оплачиваете заказ билета любым удобным для вас способом.</span></li>
				<li class="s-thin"><div class="arrow2"></div></li>
				<li class="st-bg5"><div class="st-img"><img src="images/stages-bg/5.png" alt=""></div><span>Курьер доставляет ваш заказ к вам домой.</span></li>
			</ul></div>
		</div><!--close conteiner-->
	</section><!--CLOSE B-HOW-BUY-TICKET--><section id="b-reviews"><!--OPEN B-REVIEWS--><div class="conteiner">
			<h2 contenteditable="true" id="id-block14">Отзывы</h2>
			<div class="persons-cols clr">
				<div class="left-col">
					<div class="person-item" contenteditable="true" id="id-block15">
						<img src="images/reviews/placeholder1.jpg" alt="" title=""><h4>Иннокентий Пожарский</h4>
						<p>Неумолимая немецкая хэви-пауэр машина RAGE заявила о серьезности своих намерений с самого начала, отыграв первым номером программы душераздирающую симфоническую «Empty Hollow». Лидер группы Пиви Вагнер и гитарист Виктор Смольский символизировали хрестоматийных «доброго и злого следователей». Пока первый мрачно посвящал «Feel My Pain» «своему гребаному отцу», второй рассыпался в комплиментах удачному «Ария Фесту» и обещал в следующий приезд в честь 30-летия RAGE играть хоть три часа кряду. Гости из Германии старались не идти проторенной дорожкой, припомнив давно не исполнявшуюся...</p>
					</div>
					<div class="person-item" contenteditable="true" id="id-block16">
						<img src="images/reviews/placeholder2.jpg" alt="" title=""><h4>Елена Васильева</h4>
						<p>Неумолимая немецкая хэви-пауэр машина RAGE заявила о серьезности своих намерений с самого начала, отыграв первым номером программы душераздирающую симфоническую «Empty Hollow». Лидер группы Пиви Вагнер и гитарист Виктор Смольский символизировали хрестоматийных «доброго и злого следователей». Пока первый мрачно посвящал «Feel My Pain» «своему гребаному отцу», второй рассыпался в комплиментах удачному «Ария Фесту» и обещал в следующий приезд в честь 30-летия RAGE играть хоть три часа кряду. Гости из Германии старались не идти проторенной дорожкой, припомнив давно не исполнявшуюся...</p>
					</div>
				</div>
				<div class="right-col">
					<div class="person-item" contenteditable="true" id="id-block17">
						<img src="images/reviews/placeholder2.jpg" alt="" title=""><h4>Наталья Кривова</h4>
						<p>Неумолимая немецкая хэви-пауэр машина RAGE заявила о серьезности своих намерений с самого начала, отыграв первым номером программы душераздирающую симфоническую «Empty Hollow». Лидер группы Пиви Вагнер и гитарист Виктор Смольский символизировали хрестоматийных «доброго и злого следователей». Пока первый мрачно посвящал «Feel My Pain» «своему гребаному отцу», второй рассыпался в комплиментах удачному «Ария Фесту» и обещал в следующий приезд в честь 30-летия RAGE играть хоть три часа кряду. Гости из Германии старались не идти проторенной дорожкой, припомнив давно не исполнявшуюся...</p>
					</div>
					<div class="person-item" contenteditable="true" id="id-block18">
						<img src="images/reviews/placeholder1.jpg" alt="" title=""><h4>Петр Шелестелов</h4>
						<p>Неумолимая немецкая хэви-пауэр машина RAGE заявила о серьезности своих намерений с самого начала, отыграв первым номером программы душераздирающую симфоническую «Empty Hollow». Лидер группы Пиви Вагнер и гитарист Виктор Смольский символизировали хрестоматийных «доброго и злого следователей». Пока первый мрачно посвящал «Feel My Pain» «своему гребаному отцу», второй рассыпался в комплиментах удачному «Ария Фесту» и обещал в следующий приезд в честь 30-летия RAGE играть хоть три часа кряду. Гости из Германии старались не идти проторенной дорожкой, припомнив давно не исполнявшуюся...</p>
					</div>
				</div>
			</div>
		</div><!--close conteiner-->
	</section><!--CLOSE B-REVIEWS--><section class="b-priece-increase bottom-priece"><!--OPEN B-PRIECE-INCREASE--><div class="conteiner clr">
		<h2 contenteditable="true" id="id-block19">Цены растут на глазах</h2>
			<div class="time-text" contenteditable="true" id="id-block20">
				<h3>Завтра цена может стать выше!</h3>
				<p>Позвоните или закажите обратный звонок<br> сегодня и успейте купить билет по выгодной цене!</p>
				<p><strong>Специальное предложение для корпоративных клиентов</strong>
			</p></div>
			<div class="contacts-time">
				<address class="phone-number-time">
					<?php if ($ini['phone']) {?><span><?php print $ini['phone'];?></span><?php } ?></address>
				<a href="javascript:;" class="order-btn red-btn">заказать звонок</a>
			</div>
			<div class="timer">
				<strong class="timer-title">До роста цен осталось:</strong>
				<div class="timer-digits clr">
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
		</div><!--close conteiner-->
	</section><!--CLOSE-B-PRIECE-INCREASE--><?php if ($ini['show_contacts']) { ?><section id="map" data-coord="<?php if ($ini['map_point']) print $ini['map_point'];?>" data-center="<?php if ($ini['map_center']) print $ini['map_center'];?>"></section><section id="b-contacts-bottom"><div class="conteiner">
		<h2 contenteditable="true" id="id-block21">Контактная информация</h2>
			<address class="contacts-bottom">
				<?php if ($ini['address']) { ?><span class="street"><?php print $ini['address']; ?></span>
				<?php } ?><?php if ($ini['phone']) {?><span class="phone-number-bottom"><?php print $ini['phone'];?></span>
				<?php } ?></address>
			<div><a href="javascript:;" class="order-btn red-btn">заказать звонок</a></div>
		</div>
	</section><?php } ?><footer id="footer"><!--OPEN FOOTER--><div class="conteiner clr">
			<div class="copyright">
				<span><?php print $ini['company_name'].', '.date('Y');?></span>
			</div>
			<div class="developer">
				<span>Сайт сделан в <a href="http://youlp.ru/" target="_blank">YouLP.ru</a></span>
			</div>
		</div><!--close conteiner-->
	</footer><!--CLOSE FOOTER--><div class="modals">
		<div class="overlay"></div>
		<div class="modal order-modal">
			<a class="close-btn" href="javascript:;"></a>
			<h4>Закажите обратный<br> звонок</h4>
			<form class="order-form" method="post" action="form/form.php">
				<input type="text" name="fio" class="<?php if ($ini['name_required']) print 'required';?> fio" placeholder="Как Вас зовут?"><input type="text" name="phone" class="required phone phone-mask" placeholder="Ваш номер телефона?"><?php if ($ini['email_field']) { ?><input type="text" name="email" class="<?php if ($ini['email_required']) print 'required';?> email" placeholder="Ваш email"><?php } ?><a href="javascript:;" class="send-btn red-btn">Заказать</a>
			</form>
			<?php if ($ini['phone']) {?><address class="mod-contacts">
					<span class="call-us">или позвоните нам по телефону:</span>
					<span class="phone-number-mod"><?php print $ini['phone'];?></span>
					<span>звонок бесплатный</span>
				</address>
			<?php } ?></div>
		<div class="modal thanks-modal">
			<a class="close-btn" href="javascript:;"></a>
			<h4>Заявка принята!</h4>
			<address class="mod-contacts">
				<span class="call-us">Мы перезвоним вам в ближайшее время!</span>
			</address>
		</div>
	</div>
	<script type="text/javascript" src="js/jquery-1.10.2-min.js"></script><script type="text/javascript" src="js/jquery.placeholder.min.js"></script><script type="text/javascript" src="js/jquery.maskedinput.min.js"></script><script type="text/javascript" src="js/jquery.form.min.js"></script><script type="text/javascript" src="js/scripts.js"></script><?php if ($ini['body_code']) include($ini['body_code']); ?><?php include 'functions_html.php'; ?></body></html>
