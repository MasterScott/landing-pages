


/**
 * @namespace
 */
var wltx = {};


/**
 * @namespace
 */
wltx.util = {};


/**
 * @namespace
 */
wltx.util.dom = {};


/**
 * @namespace
 */
wltx.xdm = {};


/**
 * Кодирование объекта в x-www-form-urlencoded форму.
 *
 * @param {!Object} object Объект кодирования.
 * @param {string=} opt_separator Разделитель.
 * @return {string} Перекодированный в строку объект.
 */
wltx.util.encodeFormData = function(object, opt_separator) {
  return wltx.util.tokenizeUrlData(object).join(opt_separator || '&');
};


/**
 * Рекурсивное разбиение объекта н данные для кодирования в
 * x-www-form-urlencoded.
 *
 * @param {!Object} object Объект кодирования.
 * @param {!Array.<string>=} opt_path Путь к элементарной единице данных.
 * @return {!Array.<string>} Массив элементарных данных составляющих объект.
 */
wltx.util.tokenizeUrlData = function(object, opt_path) {
  var result = [];

  if (opt_path === undefined) {
    opt_path = [];
  }

  if (typeof object === 'object') {
    for (var key in object) {
      var newPath = opt_path.length === 0 ?
          [encodeURIComponent(key)] : [opt_path.join(','),
           encodeURIComponent(key)];

      result = result.concat(
          wltx.util.tokenizeUrlData(object[key], newPath));
    }
  } else {
    result = [
      opt_path.shift() +
          (opt_path.length > 0 ? '[' + opt_path.join('][') + ']=' : '=') +
              encodeURIComponent(String(object))
    ];
  }


  return result;
};


/**
 * Декодирование строки.
 *
 * @param {string} str Строка.
 * @return {string} Раскодированная строка.
 */
wltx.util.unescape = function(str) {
  try {
    return decodeURIComponent(str);
  } catch (error) {
  }

  return '';
};


/**
 * @param {!Array.<string>} source
 * @return {!Array.<string>}
 */
wltx.util.unescapeArray = function(source) {
  var result = [];

  var i = 0,
      l = source.length;

  while (i < l) {
    result.push(wltx.util.unescape(source[i]));
    i += 1;
  }

  return result;
};


wltx.util.makeObject = function(keys, values) {
  var result = {};

  var i = 0,
      l = keys.length;

  while (i < l) {
    result[keys[i]] = values[i];
    i += 1;
  }

  return result;
};


/**
 * @param {!Object} base База.
 * @param {!Object} target Цель.
 */
wltx.util.merge = function(base, target) {
  for(var key in target) {
    base[key] = target[key]
  }
};


/**
 * @param {!Object} object Объект.
 * @return {boolean} Флаг пустого объекта.
 */
wltx.util.isObjectEmpty = function(object) {
  var result = true;

  for (var key in object) {
    result = false;
    break;
  }

  return result;
};


/**
 * @param {string} data Закодированный объект.
 * @return {*} Раскодированный объект.
 */
wltx.util.decodeFormData = function(data) {
  var result = new wltx.util.SafeObject({});

  var values = decodeURIComponent(data).split('&');
  var i = 0,
      l = values.length;

  var pair = [];
  while (i < l) {
    pair = values[i].split('=');

    if (pair[1] !== undefined) {
      result.setByPath(pair[1], wltx.util.parseUrlPathToken(pair[0]));
    }

    i++;
  }

  return result.getCore();
};


/**
 * @param {string} token Имя элементарного узла данных.
 * @return {!Array.<string>} Массив строк пути к узлу.
 */
wltx.util.parseUrlPathToken = function(token) {
  if (token.charAt(token.length - 1) !== ']') {
    return [token];
  }

  var nameLength = token.indexOf('[');
  return [token.substring(0, nameLength)].concat(
      token.substring(nameLength + 1, token.length - 1).split(']['));
};



/**
* @constructor
* @param {!Object} data Исходные данные.
*/
wltx.util.SafeObject = function(data) {

  /**
* @type {!Object}
*/
  this.__core = data;
};


/**
* @return {!Object} Исходные данные.
*/
wltx.util.SafeObject.prototype.getCore = function() {
  return this.__core;
};


/**
* @param {...(string|number)} var_keys Путь к значению.
* @return {string|number|boolean|Object} Данные.
*/
wltx.util.SafeObject.prototype.get = function(var_keys) {
  return this.getByPath(Array.prototype.slice.call(arguments));
};


/**
* @param {string|number|boolean|Object} value Данные.
* @param {...(string|number)} var_keys Путь к значению.
*/
wltx.util.SafeObject.prototype.set = function(value, var_keys) {
  var path = Array.prototype.slice.call(arguments);
  this.setByPath(path.shift(), path);
};


/**
* @param {!Array.<(string|number)>} path Путь к значению.
* @return {string|number|boolean|Object} Данные.
*/
wltx.util.SafeObject.prototype.getByPath = function(path) {
  var result = this.__core;

  var i = 0,
      l = path.length;

  var value = null;
  while (i < l) {
    if (result === null || path[i] === '') {
      break;
    }

    value = result[path[i]];
    if (value !== undefined) {
      result = value;
    } else {
      result = null;
    }

    i++;
  }

  return result;
};


/**
* @param {string|number|boolean|Object} value Данные.
* @param {!Array.<(string|number)>} path Путь к значению.
*/
wltx.util.SafeObject.prototype.setByPath = function(value, path) {
  var scope = this.__core;

  var i = 0,
      l = path.length;

  var key = null;
  while (i < l) {
    key = path[i];

    i += 1;

    if (key === '') {
      key = 0;

      while (scope[key] !== undefined) {
        key++;
      }
    }

    if (i === l) {
      scope[key] = value;
    } else if (scope[key] === undefined) {
      scope[key] = {};
    }

    scope = scope[key];
  }
};


/**
 * @param {string} str Строка.
 * @return {string} Строка без пробелов.
 */
wltx.util.trim = function(str) {
  return str.replace(/^\s+|\s+$/g, '');
};


/**
 * Добавление обработчика нестандартного события в Internet Explorer.
 *
 * В качестве вспомогательного события, данный метод использует событие
 * <code>'onhelp'</code>.
 *
 * @see util.dom.__dispatchCustomIEEvent
 * @param {!Node|!Window} element DOM-елемент, событие которого нужно
 *    обрабатывать.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
wltx.util.dom.__addCustomIEListener = function(element, type, handler) {
  if (element['__customListener'] === undefined) {
    element['__customListener'] = function(event) {
      if (event['__type'] !== undefined) {
        var type = event['__type'];
        delete event['__type'];

        var handlers = element['__' + type];
        for (var i in handlers) {
          handlers[i].call(element, event);
        }
      }
    };

    element.attachEvent('onhelp', element['__customListener']);
  }

  if (element['__' + type] === undefined) {
    element['__' + type] = [];
  }

  element['__' + type].push(handler);
};


/**
 * Добавление обработчика события DOM-елемента.
 *
 * Все обработчик событий вызываются в контексте элемента, оповещение о событии
 * которого произошло.
 *
 * @see util.dom.dispatchEvent
 * @param {!Node|!Window} element DOM-элемент, событие которого нужно
 *    обрабатывать.
 * @param {string} type Тип обрабатываемого события.
 * @param {!function(Event)} handler Функция-обработчик события.
 */
wltx.util.dom.addEventListener = function(element, type, handler) {
  if (element.addEventListener !== undefined) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent !== undefined) {
    var eventName = 'on' + type;
    if (element[eventName] === undefined) {
      wltx.util.dom.__addCustomIEListener(element, type, handler);
    } else {
      if (element['__ieTargetId'] === undefined) {
        element['__ieTargetId'] = 'element_' + wltx.util.dom.__lastElementId++;
      }

      var listenerId = element['__ieTargetId'] + '_' + type;
      handler[listenerId] = function(event) {
        handler.call(element, event);
      };

      element.attachEvent(eventName, handler[listenerId]);
    }
  }
};


/**
 * @param {!HTMLIFrameElement} frame Окно.
 */
wltx.xdm.registerFrame = function(frame) {
  if (frame.contentWindow !== null) {
    wltx.xdm.__windows[frame.name] = frame.contentWindow;
  }
};


/**
 * @param {string} name Имя.
 * @param {string} message Сообщение.
 */
wltx.xdm.postWindowMessage = function(name, message) {
  if (wltx.xdm.__windows[name] !== undefined &&
      typeof wltx.xdm.__windows[name]['postMessage'] !== 'undefined') {
    wltx.xdm.__windows[name].postMessage(message, '*');
  }
};


/**
 * @param {string} message Сообщение.
 */
wltx.xdm.postParentMessage = function(message) {
  var parent = null;

  if (window.parent !== window) {
    parent = window.parent || null;
  } else if (window.opener !== window) {
    parent = window.opener || null;
  }

  if (parent !== null && parent['postMessage'] !== undefined) {
      try {

        var name = window.name ? window.name : window.frameElement.id;
        parent.postMessage(name + ':' + message, '*');
      } catch(error) {}
  }
};


/**
 * @param {string} name Имя.
 * @param {function(string)} handler Обработчик.
 */
wltx.xdm.setWindowMessageHandler = function(name, handler) {
  var prefix = name + ':';

  wltx.util.dom.addEventListener(window, 'message', function(event) {
    if (typeof event['data'] === 'string') {
      var data = event['data'];
      if (data.indexOf(prefix) === 0) {
        handler(data.substr(prefix.length));
      }
    }
  });
};


/**
 * @param {function(string)} handler Обработчик.
 */
wltx.xdm.setParentMessageHandler = function(handler) {
  wltx.util.dom.addEventListener(window, 'message', function(event) {
    if (typeof event['data'] === 'string') {
      handler(event['data']);
    }
  });
};


/**
 * @param {string} action Действие.
 * @param {!Object} params Параметры.
 * @return {string} Строка.
 */
wltx.xdm.makeMessage = function(action, params) {
  return action + ',' + wltx.util.encodeJsonData(params);
};


/**
 * @type {!Object.<string, !Window>}
 */
wltx.xdm.__windows = {};


/**
 * @param {string} name Имя переменной.
 * @return {string} Значение переменной.
 */
wltx.util.getCookie = function(name) {
  var cookies = document.cookie;

  var token = name + '=';
  var tokenIndex = cookies.indexOf(token);
  if (tokenIndex !== -1) {
    var semicolonIndex = cookies.indexOf(';', tokenIndex);
    if (semicolonIndex === -1) {
      return cookies.substring(tokenIndex + token.length);
    } else {
      return cookies.substring(tokenIndex + token.length, semicolonIndex);
    }
  }

  return '';
};


wltx.util.setCookie = function(name, value, opt_time) {
  var expires = "";
  if(opt_time !== undefined) {
    var date = new Date;
    date.setTime(opt_time + date.getTime());
    expires = "; expires=" + date.toGMTString()
  }
  document.cookie = name + "=" + value + expires + "; path=/"
};


wltx.util.removeCookie = function(name) {
  var date = new Date;
  date.setTime(date.getTime() - 1E3);
  document.cookie = name + "=0; expires=" + date.toGMTString() + "; path=/"
};


/**
 * @return {boolean} Доступность хранилища.
 */
wltx.util.__isStorageAvailable = function() {
  try {
    var key = Math.random().toString();
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (error) {}
    return false;
};


/**
 * @param {string} data Данные.
 * @param {number=} opt_expireTime Время хранения в секундах.
 * @return {string} Элемент хранилища.
 */
wltx.util.__encodeStorageItem = function(data, opt_expireTime) {
  return wltx.util.encodeJsonData({
    data: data,
    time: opt_expireTime ?
        new Date().getTime() + opt_expireTime : undefined
  });
};


/**
 * @param {string} item Закодированный элемент хранилища.
 * @return {Object} Раскодированный элемент хранилища.
 */
wltx.util.__decodeStorageItem = function(item) {
  return wltx.util.decodeJsonData(item);
};


/**
 * @param {string} key Ключ.
 * @param {string} data Данные.
 * @param {number=} opt_expireTime Время хранения в миллисекундах.
 */
wltx.util.saveToStorage = function(key, data, opt_expireTime) {
  if (wltx.util.__isStorageAvailable()) {
    localStorage.setItem(key,
        wltx.util.__encodeStorageItem(data, opt_expireTime));
  } else {
    wltx.util.setCookie(key, data, opt_expireTime);
  }
};


/**
 * @param {string} key Ключ.
 */
wltx.util.removeFromStorage = function(key) {
  if (wltx.util.__isStorageAvailable()) {
    localStorage.removeItem(key);
  } else {
    if (wltx.util.getCookie(key) !== '') {
      wltx.util.removeCookie(key);
    }
  }
};


/**
 * @param {string} key Ключ.
 * @return {string} Раскодированный элемент хранилища.
 */
wltx.util.loadFromStorage = function(key) {

  if (wltx.util.__isStorageAvailable()) {
    var item = wltx.util.__decodeStorageItem(localStorage.getItem(key));
    if (item !== null) {
      if (item['time'] !== undefined &&
          new Date().getTime() < item['time']) {
        return item['data'];
      } else {
        wltx.util.removeFromStorage(key);
      }
    }

    return '';
  }

  return wltx.util.getCookie(key);
};


/**
 * Алгоритм хеширования.
 *
 * @param {string} str Строка для хеширования.
 * @param {number} seed Случайное зерно.
 * @return {number} Результат хеширования.
 */
wltx.util.hashMurmur = function(str, seed) {
  var l = str.length;
  var h = seed ^ l;
  var i = 0;
  var k = 0;

  while (l >= 4) {
    k = ((str.charCodeAt(i) & 0xff)) |
        ((str.charCodeAt(i + 1) & 0xff) << 8) |
        ((str.charCodeAt(i + 2) & 0xff) << 16) |
        ((str.charCodeAt(i + 3) & 0xff) << 24);

    k = (((k & 0xffff) * 0x5bd1e995) +
        ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

    k ^= k >>> 24;
    k = (((k & 0xffff) * 0x5bd1e995) +
        ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

    h = (((h & 0xffff) * 0x5bd1e995) +
        ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

    l -= 4;
    i += 4;
  }

  switch (l) {
    case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1: {
      h ^= (str.charCodeAt(i) & 0xff);
      h = (((h & 0xffff) * 0x5bd1e995) +
          ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    }
  }

  h ^= h >>> 13;
  h = (((h & 0xffff) * 0x5bd1e995) +
      ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  h ^= h >>> 15;

  return h >>> 0;
};


/**
 * @param {!Object} object Объект данных.
 * @return {*} Закодированный объект.
 */
wltx.util.encodeJsonData = function(object) {
  try {
    return JSON.stringify(object);
  } catch(error) {
  }

  return '';
};


/**
 * @param {string} data Объект данных.
 * @return {*} Раскодированный объект.
 */
wltx.util.decodeJsonData = function(data) {
  try {
    return JSON.parse(data);
  } catch(error) {
  }

  return null;
};

