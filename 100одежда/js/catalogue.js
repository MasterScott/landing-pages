var goods = {};

//Цвета
goods.colors = {
	darkBlue: 'Синий',
	beige: 'Бежевый',
	black: 'Черный',
	blackMetallic: 'Чёрный металлик',
	blue: 'Голубой',
	chestnut: 'Ореховый',
	chocolate: 'Шоколадный',
	gray: 'Cерый',
	green: 'Зелёный',
	oxfordGray: 'Стальной',
	pink: 'Розовый',
	purple: 'Фиолетовый',
	red: 'Красный',
	silver: 'Серебристый',
	turquoise: 'Бирюзовый',
	white: 'Белый'
};
// models
/*
 Здесь необходимо перечислить все ваши товары. Они разделены на блоки по 5 штук, которым в config.ini можно задать разные заголовки
 У каждого товара есть идентификатор, например c1_4. Это четвертый товар первого блока. Если вы в каком-то блоке укажете меньше, чем 5 товаров,
 то на лендинге их в этой строке тоже будет меньше 5. Не забывайте, что это JS-файл, поэтому необходимо соблюдать синтаксис языка JavaScript.
 Обратите внимание на расстановку кавычек, запятых и пр.
*/
goods.models = {
	//Раздел 1
	c1_1: {
		name: "Пример товара",	//Название товара. Оно же будет приходить вам на почту
		price: "4000",	//Цена, в рублях.
		img: "images/good_sample.jpg",	//Изображение в каталоге. Размер - 149px в ширину, одинаковой высоты
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.", //краткое описание
		sizes: [36, 37, 38, 39, 40, 41],	//список размеров
		colors: {	//цвета, обязателен хотя бы один
			black: [	//это ключи, которые задавали в начале этого файла
				'images/models/2.jpg',	//через запятую - список ссылок на изображения для галереи (они будут ужаты по ширине до 264px, но лучше сделать это самим)
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		} //не забываем
	}, //про закрывающие скобки и запятые
	c1_2: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c1_3: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c1_4: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c1_5: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	
	//Раздел 2
	c2_1: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c2_2: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c2_3: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c2_4: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c2_5: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	
	//Раздел 3
	c3_1: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c3_2: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c3_3: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c3_4: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c3_5: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	
	//Раздел 4
	c4_1: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c4_2: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c4_3: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c4_4: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	},
	c4_5: {
		name: "Пример товара",	
		price: "4000",
		img: "images/good_sample.jpg",
		description: "Новейшая модель этого года, которая не схожа с другими моделями австралийского производства.",
		sizes: [36, 37, 38, 39, 40, 41],
		colors: {
			black: [
				'images/models/2.jpg',
				'images/models/3.jpg'
			],
			chestnut: [
				'images/models/4.jpg',
				'images/models/5.jpg'
			]
		}
	}// Обратите внимание! В последних элементах запятая не нужна
};