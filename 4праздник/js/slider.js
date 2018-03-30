$(document).ready(function(){
  var i;
  var slideWidth = 440;
  var slides=[];
  var numberOfSlides=[];
  var slideInner=[];
  var currentPosition=[];
  for (i=0; i<=9; i++) {
      currentPosition[i]=0;
      slides[i]=$(".slide"+(i+1));
      numberOfSlides[i]= slides[i].length;
      slideInner[i]="slideInner"+(i+1);
      // Remove scrollbar in JS
      $('#slidesContainer'+(i+1)).css('overflow', 'hidden');
      // Wrap all .slides with #slideInner div
      slides[i].wrapAll('<div id="slideInner'+(i+1)+'"></div>')
          // Float left to display horizontally, readjust .slides width
          .css({
              'float' : 'left',
              'width' : slideWidth
          });
      // Set #slideInner width equal to total width of all slides
      $('#slideInner'+(i+1)).css('width', slideWidth * numberOfSlides);
      // Insert controls in the DOM
      $('#control_buttons'+(i+1))
          .prepend('<span class="number'+(i+1)+'">'+(currentPosition[i]+1)+' из '+numberOfSlides[i]+'</span>')
          .prepend('<span class="control'+(i+1)+'"id="leftControl'+(i+1)+'">Clicking moves left</span>')
          .append('<span class="control'+(i+1)+'" id="rightControl'+(i+1)+'">Clicking moves right</span>')

      /**
       * Slideshow controls style rules.
       */
          .css({
          'overflow' : 'hidden',
          'font-size' : '20px',
          'width' : '160px',
          'margin': '0 auto',
          'margin-bottom' : '10px',
          'position' : 'relative',
          'height' : '30px'
      });
      // Hide left arrow control on first load

      /* OTHER STYLES */

      $("#slideInner"+(i+1))
          .css ({
            'width' : '2200px'
      });
      $(".control"+(i+1))
          .css ({
          'display' : 'block',
          'width' : '30px',
          'height' : '30px',
          'text-indent':'-10000px',
          'cursor' : 'pointer',
          'position' : 'absolute',
          'top' : '0'
      });
      $("#leftControl"+(i+1))
          .css ({
          'background' : ' url("./images/left_control.png") no-repeat',
          'left' : '0 '
      });
      $("#rightControl"+(i+1))
          .css ({
          'background' : 'url("./images/right_control.png") no-repeat',
          'right' : '0px'
      });
      $(".number"+(i+1))
          .css ({
          'display' : 'block',
          'padding' : '3px 0 0 0',
          'margin' : '0 48px'
      });

      $("#pageContainer"+(i+1))
          .css ({
          'width' : '425px'
      });
      $("#slideshow"+(i+1))
          .css ({
          'width' : '425px',
          'height' : '300px'
      });
      $("#slidesContainer"+(i+1))
          .css ({
          'margin' : '0 auto',
          'width' : '424px',
          'height' : '300px'
      });
      $("#slidesContainer"+(i+1)+".slide")
          .css ({
          'margin' : '0 auto',
          'width' : '420px', /* reduce by 20 pixels of #slidesContainer to avoid horizontal scroll */
          'height' : '300px'
      });
      manageControls(currentPosition[i],i);
  }
  // Create event listeners for .controls clicks
  $('.control1').bind('click', function(){
    // Determine new position
    currentPosition[0] = ($(this).attr('id')=='rightControl1') ? currentPosition[0]+1 : currentPosition[0]-1;
    // Hide / show controls
    manageControls(currentPosition[0],0);
    // Move slideInner using margin-left
    $('#slideInner1').animate({
        'marginLeft' : slideWidth*(-currentPosition[0])
    });
    $('.number1').text((currentPosition[0]+1)+' из '+numberOfSlides[0]);
  });

  // Create event listeners for .controls clicks
  $('.control2').bind('click', function(){
    // Determine new position
    currentPosition[1] = ($(this).attr('id')=='rightControl2') ? currentPosition[1]+1 : currentPosition[1]-1;
    // Hide / show controls
    manageControls(currentPosition[1],1);
    // Move slideInner using margin-left
    $('#slideInner2').animate({
        'marginLeft' : slideWidth*(-currentPosition[1])
    });
    $('.number2').text((currentPosition[1]+1)+' из '+numberOfSlides[1]);
  });

  // Create event listeners for .controls clicks
  $('.control3').bind('click', function(){
    // Determine new position
    currentPosition[2] = ($(this).attr('id')=='rightControl3') ? currentPosition[2]+1 : currentPosition[2]-1;
    // Hide / show controls
    manageControls(currentPosition[2],2);
    // Move slideInner using margin-left
    $('#slideInner3').animate({
        'marginLeft' : slideWidth*(-currentPosition[2])
    });
    $('.number3').text((currentPosition[2]+1)+' из '+numberOfSlides[2]);
  });

  // Create event listeners for .controls clicks
  $('.control4').bind('click', function(){
    // Determine new position
    currentPosition[3] = ($(this).attr('id')=='rightControl4') ? currentPosition[3]+1 : currentPosition[3]-1;
    // Hide / show controls
    manageControls(currentPosition[3],3);
    // Move slideInner using margin-left
    $('#slideInner4').animate({
        'marginLeft' : slideWidth*(-currentPosition[3])
    });
    $('.number4').text((currentPosition[3]+1)+' из '+numberOfSlides[3]);
  });

  // Create event listeners for .controls clicks
  $('.control5').bind('click', function(){
    // Determine new position
    currentPosition[4] = ($(this).attr('id')=='rightControl5') ? currentPosition[4]+1 : currentPosition[4]-1;
    // Hide / show controls
    manageControls(currentPosition[4],4);
    // Move slideInner using margin-left
    $('#slideInner5').animate({
        'marginLeft' : slideWidth*(-currentPosition[4])
    });
    $('.number5').text((currentPosition[4]+1)+' из '+numberOfSlides[4]);
  });

  // Create event listeners for .controls clicks
  $('.control6').bind('click', function(){
    // Determine new position
    currentPosition[5] = ($(this).attr('id')=='rightControl6') ? currentPosition[5]+1 : currentPosition[5]-1;
    // Hide / show controls
    manageControls(currentPosition[5],5);
    // Move slideInner using margin-left
    $('#slideInner6').animate({
        'marginLeft' : slideWidth*(-currentPosition[5])
    });
    $('.number6').text((currentPosition[5]+1)+' из '+numberOfSlides[5]);
  });

  // Create event listeners for .controls clicks
  $('.control7').bind('click', function(){
    // Determine new position
    currentPosition[6] = ($(this).attr('id')=='rightControl7') ? currentPosition[6]+1 : currentPosition[6]-1;
    // Hide / show controls
    manageControls(currentPosition[6],6);
    // Move slideInner using margin-left
    $('#slideInner7').animate({
        'marginLeft' : slideWidth*(-currentPosition[6])
    });
    $('.number7').text((currentPosition[6]+1)+' из '+numberOfSlides[6]);
  });

  // Create event listeners for .controls clicks
  $('.control8').bind('click', function(){
    // Determine new position
    currentPosition[7] = ($(this).attr('id')=='rightControl8') ? currentPosition[7]+1 : currentPosition[7]-1;
    // Hide / show controls
    manageControls(currentPosition[7],7);
    // Move slideInner using margin-left
    $('#slideInner8').animate({
        'marginLeft' : slideWidth*(-currentPosition[7])
    });
    $('.number8').text((currentPosition[7]+1)+' из '+numberOfSlides[7]);
  });


  // manageControls: Hides and Shows controls depending on currentPosition
  function manageControls(position,i){
    // Hide left arrow if position is first slide
    if(position==0){ $('#leftControl'+(i+1)).hide() } else{ $('#leftControl'+(i+1)).show() }
    // Hide right arrow if position is last slide
    if(position==numberOfSlides[i]-1){ $('#rightControl'+(i+1)).hide() } else{ $('#rightControl'+(i+1)).show() }
  }

});
