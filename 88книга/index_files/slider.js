// JavaScript Slider
var slide_click = false;
var index = 0;
var interval_time = 4500; 

jQuery(window).bind("load", function(){
	slide_interval = setInterval("nextslide()",interval_time);
});

jQuery('#slider #slider_menu ul li').live('click',function clickSlider(){
	slide_click = true;
	index=jQuery('#slider #slider_menu ul li').index(this);
	clearInterval(slide_interval); 
	nextslide();	
	slide_interval = setInterval('nextslide()',interval_time);          
});
	
function nextslide(){
	if(!slide_click)
	{
		index=jQuery('#slider #slider_menu ul li').index(jQuery('li.active'))+1;
		if (index==jQuery('#slider #slider_menu ul li').size()){index=0;}  	
	}
	var current_index = jQuery('#slider #slider_menu ul li').index(jQuery('li.active'));
	if(current_index != index)
	{
		jQuery('#slider #slider_menu ul li').attr("class", "");
		jQuery("#slider #slider_menu ul li").eq(index).attr("class", "active");

		jQuery("#slider #slider_block .slide_item").not(jQuery("#slider #slider_block .slide_item").eq(index)).not(jQuery("#slider #slider_block .slide_item").eq(current_index)).css("z-index", "1");
		jQuery("#slider #slider_block .slide_item").eq(current_index).css("z-index", "3");
		jQuery("#slider #slider_block .slide_item").eq(index).css("z-index", "2");
		jQuery("#slider #slider_block .slide_item").eq(index).css("opacity", "1");
		jQuery("#slider #slider_block .slide_item").eq(current_index).clearQueue().animate({opacity: 0}, 100, 'linear',
			function()
			{
				jQuery("#slider #slider_block .slide_item").eq(current_index).css("z-index", "2");
				jQuery("#slider #slider_block .slide_item").eq(index).css("z-index", "3");
			}
		);
	}
	slide_click = false;
}