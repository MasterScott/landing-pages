$(function () {
    $('input, textarea').placeholder();
});
$(document).ready(function () {
    $('#countdown_dashboard_1').countDown({
        targetDate: {
            'day': 21,
            'month': 12,
            'year': 2013,
            'hour': 17,
            'min': 34,
            'sec': 15
        }
    });
    $('#countdown_dashboard_2').countDown({
        targetDate: {
            'day': 21,
            'month': 12,
            'year': 2013,
            'hour': 17,
            'min': 34,
            'sec': 15
        }
    });
    $('#countdown_dashboard_3').countDown({
        targetDate: {
            'day': 21,
            'month': 12,
            'year': 2013,
            'hour': 17,
            'min': 34,
            'sec': 15
        }
    });

    var currentPosition = 0;
    var slideWidth = 940;
    var slides = $('.slide');
    var numberOfSlides = slides.length;

    // Remove scrollbar in JS
    $('#slidesContainer').css('overflow', 'hidden');

    // Wrap all .slides with #slideInner div
    slides
        .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
    .css({
        'float': 'left',
        'width': slideWidth
    });

    // Set #slideInner width equal to total width of all slides
    $('#slideInner').css('width', slideWidth * numberOfSlides);

    // Insert controls in the DOM
    $('#slideshow')
        .prepend('<span class="control" id="leftControl">Clicking moves left</span>')
        .append('<span class="control" id="rightControl">Clicking moves right</span>');

    // Hide left arrow control on first load
    manageControls(currentPosition);

    // Create event listeners for .controls clicks
    $('.control').bind('click', function () {
        if ($(this).hasClass("entable")) {
            // Determine new position
            currentPosition = ($(this).attr('id') == 'rightControl') ? currentPosition + 1 : currentPosition - 1;

            // Hide / show controls
            manageControls(currentPosition);
            // Move slideInner using margin-left
            $('#slideInner').animate({
                'marginLeft': slideWidth * (-currentPosition)
            });
        };
    });

    // manageControls: Hides and Shows controls depending on currentPosition
    function manageControls(position) {
        // Hide left arrow if position is first slide
        if (position == 0) {
            $('#leftControl').removeClass("entable");
        } else {
            $('#leftControl').addClass("entable");
        }
        // Hide right arrow if position is last slide
        if (position == numberOfSlides - 1) {
            $('#rightControl').removeClass("entable");
        } else {
            $('#rightControl').addClass("entable");
        }
    }

    /**/

    google_maps(); // Load google maps onload page

    function google_maps() {
        var latlng = new google.maps.LatLng(55.752284, 37.493055);
        var settings = {
            zoom: 15,
            center: latlng,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            navigationControl: false,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("g_maps"), settings);

        var zhks = new google.maps.LatLng(55.75107, 37.512571);
        var iconBase = 'img/';
        var marker = new google.maps.Marker({
            position: zhks,
            map: map,
            icon: iconBase + 'marker.png'
        });
    }


    var slider = $('.bxslider').bxSlider({
        mode: 'horizontal', 
        speed: 1000, 
        autoStart: true, 
        infiniteLoop: true
    });

    $('.soty3 a').click(function (event) {
        $.loaddata = $(this).data('cat');
        $.loadtitle = $(this).data('title');
        $('#cells h2').html($.loadtitle);

        

            $.ajax({
                type: "POST",
                url: "getfile.php",
                data: {cat: $.loaddata},
                success: function(data){
                //console.log(data)
                   $("#cells .bxslider").html(data);
                   slider.reloadSlider({mode: 'horizontal', speed: 1000, autoStart: true, infiniteLoop: true});
                }
            });

               
    });



             setInterval('header_timer();', 2750);



});
$.times = 1;
    function header_timer() {
        $('header').css({
            'background': 'url(img/bg/' + $.times + '.jpg)',
            'background-size': 'cover'
        });
        $.times = $.times + 1;
        if ($.times > 4) {
            $.times = 4
        }
    }