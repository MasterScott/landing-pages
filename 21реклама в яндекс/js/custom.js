$(function() {
    $.clicks = 318;
    $.converse = 16;
    $.offright = 0;

    $( "#slider" ).slider({
      value: $.clicks,
      min: 0,
      max: 5000,
      step: 10,
      slide: function( event, ui ) {
        
        $( "#slider a" ).text( ui.value );
        $.clicks = ui.value;
        $('#how_much_clients span').html(($.clicks * $.converse/100).toFixed(0));
        $('#cmnsd').html(($.clicks * $.converse/100*12).toFixed(0));

         if ( ui.value <= 100 ) {$("#slider").slider('option', 'step', 10);}
         if ( ui.value <= 700 ) {$("#slider").slider('option', 'step', 20);}
         if ( ui.value >= 700 ) {$("#slider").slider('option', 'step', 50);}

          //$.offset = parseFloat($('#slider a').css('left'));
         $('#omg').css('width', parseFloat($(".ui-slider-handle.ui-state-default.ui-corner-all")[0].style.left)-2+'%');
      },
      change: function( event, ui ) {
        $('#omg').css('width', parseFloat($(".ui-slider-handle.ui-state-default.ui-corner-all")[0].style.left)-2+'%');
      }
    });

    $( "#slider-1" ).slider({
      value: $.converse,
      min: 0,
      max: 30,
      step: 1,
      slide: function( event, ui ) {
        $.converse = ui.value
        $('#how_much_clients span').html(($.clicks * $.converse/100).toFixed(0));
        $('#cmnsd').html(($.clicks * $.converse/100*12).toFixed(0));
        $( "#slider-1 a" ).text( ui.value );
        $.offset = parseFloat($('#slider-1 a').css('left'));
         //('#omg1').css('width', $.offset+'px');
         $('#omg1').css('width', $('#omg1').css('width', parseFloat($(".ui-slider-handle.ui-state-default.ui-corner-all")[1].style.left)-2+'%'));
      },
      change: function( event, ui ) {
        $('#omg1').css('width', $('#omg1').css('width', parseFloat($(".ui-slider-handle.ui-state-default.ui-corner-all")[1].style.left)-2+'%'));
      }
    });


    $( "#slider a" ).text( $.clicks );
    $( "#slider-1 a" ).text( $.converse );


google_maps(); // Load google maps onload page

      function google_maps() {
                var latlng = new google.maps.LatLng(55.736812,37.617574);
                var settings = {
                  zoom: 16,
                  center: latlng,
                  mapTypeControl: true,
                  mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                  navigationControl: false,
                  navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              };
      var map = new google.maps.Map(document.getElementById("map"), settings);
        var myLatlng = new google.maps.LatLng(55.736812,37.617574);
        
        var myOptions = {
          zoom: 16,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var zhks = new google.maps.LatLng(55.736607,37.623652);
        var iconBase = 'img/';
        var marker = new google.maps.Marker({position: zhks,map: map,icon: iconBase + 'marker.png'});
    }

    $('.lmk').click(function(event) {
      event.preventDefault();
      $('#nastr').html($(this).data('buy-id'));
      $('#dsd').attr('value', $(this).data('buy-id'));
    });

    $("#menu .wrapper .in a").click(function(event){
         event.preventDefault();
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height()-56;
         }else{
              dest=$(this.hash).offset().top-56;
         }
         $('html,body').animate({scrollTop:dest}, 500,'swing');
     });

});

