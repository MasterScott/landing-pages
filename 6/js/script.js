$(document).ready(function(){



		//slider 1
	  function _init_slider1 (carousel) {
	      $('#slider_keis .nav_box a').bind('click', function() {
	        var index = $(this).parent().find('a').index(this);
	        carousel.scroll( index + 1);
	        return false;
	      });
	    };
	    function _active_slide1 (carousel, item, idx, state) {
	      var index = idx-1;
	      $('#slider_keis .nav_box a').removeClass('active');
	      $('#slider_keis .nav_box a').eq(index).addClass('active');
	    };
	    
	    $(document).ready(function() {
	      $("#slider_keis ul").jcarousel({
	        scroll: 1,
	        wrap: 'both',
	        auto: 0,
	        initCallback: _init_slider1,
	        itemFirstInCallback: _active_slide1
	      });
	      
	    }); 

	    //slider 2
	      function _init_slider2 (carousel) {
	          $('#cause .nav_box a').bind('click', function() {
	            var index = $(this).parent().find('a').index(this);
	            carousel.scroll( index + 1);
	            return false;
	          });
	        };
	        function _active_slide2 (carousel, item, idx, state) {
	          var index2 = idx-1;
	          $('#cause .nav_box a').removeClass('active');
	          $('#cause .nav_box a').eq(index2).addClass('active');
	          if(index2==4) {
	          	$('.cause_next').hide();
	          } else {
	          	$('.cause_next').show();
	          }
	        };
	        
	        $(document).ready(function() {
	          $("#cause_slider ul").jcarousel({
	            scroll: 1,
	            wrap: 'both',
				buttonPrevHTML: '<div class="cause_prev"></div>',
				buttonNextHTML: '<div class="cause_next"></div>',
	            initCallback: _init_slider2,
	            itemFirstInCallback: _active_slide2
	          });
	          
	        }); 
	    //main slider
	      function _init_slider (carousel) {
	          $('.box_main_nav .inner a').bind('click', function() {
	            var index = $(this).parent().find('a').index(this);
	            carousel.scroll( index + 1);
	            return false;
	          });
	          $('#main .nav_box a').bind('click', function() {
	            var index = $(this).parent().find('a').index(this);
	            carousel.scroll( index + 1);
	            return false;
	          });
	        };
	        function _active_slide (carousel, item, idx, state) {
	          var index = idx-1;
	          $('.box_main_nav .inner a').removeClass('active');
	          $('.box_main_nav .inner a').eq(index).addClass('active');
	          $('#main .nav_box a').removeClass('active');
	          $('#main .nav_box a').eq(index).addClass('active');
	        };
	        
	        $(document).ready(function() {
	          $("#main ul").jcarousel({
	            scroll: 1,
	            wrap: 'both',
	            initCallback: _init_slider,
	            itemFirstInCallback: _active_slide
	          });
	          
	        }); 

	        //placeholder
	        $('input[type="text"]').placeholder();

	        //popup callback
	        $('#callback').dialog({
	        	autoOpen:false,
	        	width:282,
	        	modal:true,
	        	title: 'Заказать обратный звонок',
	        	resizable: false,
	        	draggable: false
	        })
	        $('.ui-widget-overlay').live('click', function(){
	        	$('#callback').dialog('close');
	        })
	        $('.callback').live('click', function(){
	        	$('#callback').dialog('open');
	        	return false;
	        })
});