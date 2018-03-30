$(document).ready(function(){
 $("#fixed_menu div nav a").click(function(event){
         event.preventDefault();
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height()-110;
         }else{
              dest=$(this.hash).offset().top-110;
         }
         $('html,body').animate({scrollTop:dest}, 500,'swing');
     });
});