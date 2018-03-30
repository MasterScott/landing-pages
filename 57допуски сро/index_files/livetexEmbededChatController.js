

var livetexEmbededChatController = this.livetexEmbededChatController ||
    (function (window, $, undefined) {

  window.displayCloseConfirmWindow = false;
  var suspended = false;
  var DEFAULT_NAME = 'Гость';

  function sendToParentWindow(message) {
    wltx.xdm.postParentMessage(message);
  }

  var messageHandlers = {
    sys_member_chat_close: function() {
      sendToParentWindow('closeChat');
    },

    o2u: function() {
      sendToParentWindow('newMessage');
    },

    chat_open_error: function() {
      if (!liveTexVChat.isChatOpen()) {
        sendToParentWindow('chatOpenError');
      }
    },

    echo: function (x) {
      if (x instanceof Object &&
          typeof x.crosswindow === 'string') {
        sendToParentWindow(x.crosswindow);
      }
    },

    suspend_chat: function() {
      suspended = true;
    },

    resume_chat: function() {
      if (suspended) {
        //sendToParentWindow('openChat');
      }
      suspended = false;
    },

    setVisitorName: function(name) {
      sendToParentWindow('setVisitorName:' + name);
    }
  };

  var handleMessage = function(type, params, errno) {
    if (errno == 0 && type in messageHandlers) {
      messageHandlers[type](params, errno);
    } else if (errno != 0 && type + "_error" in messageHandlers) {
      messageHandlers[type + "_error"](params, errno);
    }
  };

 function hideChat() {
   sendToParentWindow('hideChat');
 }

 function openBigChat(isCall) {
   sendToParentWindow('hideChat');

   if (isCall) {
     var groupId = typeof livetexChatParams['group_id'] === 'string' ?
         livetexChatParams['group_id'] : null;

     var visitorName = typeof livetexChatParams['visitor_name'] === 'string' ?
         livetexChatParams['visitor_name'] : null;

     sendToParentWindow(wltx.xdm.makeMessage('callOpen', {
       group_id: groupId, visitor_name: visitorName
     }));
   }

   var safarifix = 'height=604',
       openWindowOnDoubleClick = false; //для проверки открывалось ли окно два раза!

   // Если МАк то в Сафари окошко на 35 пикселей меньше, а у Хрома на 31 больше
   if (/Mac OS X/i.test(navigator.userAgent)) {
     if (navigator.appVersion.indexOf("Safari") != -1) safarifix = 'height=555';
     if (navigator.appVersion.indexOf("Chrome") != -1) safarifix = 'height=635';
   }

   var windowSettings = [
         'status=0',
         'toolbar=0',
         'menubar=0',
         'resizable=0',
         'scrollbars=0',
          safarifix,
         'width=447',
         'top=20',
         'left=20',
         'location=0',
         'resize=0'
       ].join(','),
       currentW = {'closed' : true};


   var chatOrCall = (isCall) ? '/personalcall/' : '/chat/';

   if (window.ltSiteSettings['widget_version'] === 2) {
     chatOrCall = (isCall) ? '/personalcall-new/' : '/chat-new/';
   }

   if (wltx.util.loadFromStorage('livetext_name') !== DEFAULT_NAME) {
     livetexChatParams['visitor_name'] =
         wltx.util.loadFromStorage('livetext_name');
   }

   window.open(chatOrCall + '?' + wltx.util.encodeFormData(livetexChatParams), 'lt_external_window', windowSettings);
 }

 return {
    embedListeners: [],
    retrieve: handleMessage,
    hideChat: hideChat,
    openBigChat: openBigChat
 };
})(this, jQuery);
