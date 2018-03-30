jQuery(document).ready(function($){
$(".testme_button").click(function(){
testme_result_back();

var testme_id=$(this).parents(".testme_area").find("[name=testme_id]").val();
var answered_arr=$(this).parents(".testme_area").find(":radio:checked");
var answered=answered_arr.length;
var questions=$(this).parents(".testme_area").find(".question_block").length;
var quiz_name=$(this).parents(".testme_area").find("[name=quiz_name]").val();
var quiz_email=$(this).parents(".testme_area").find("[name=quiz_email]").val();
var quiz_age=$(this).parents(".testme_area").find("[name=quiz_age]").val();
var quiz_city=$(this).parents(".testme_area").find("[name=quiz_city]").val();

if(answered<questions){alert('Вы ответили только на '+answered+' вопросов из '+questions+'.\n\nОтветьте на все вопросы.')}
else{
var answers_line='';
answered_arr.each(function(index,element){var pr=element.value;answers_line+=pr+','});
$(this).after("<div id=\"testme_result\"><img src=\"/wp-content/plugins/wp_testme/images/loading4.gif\" alt=\"\" style=\"margin-top: 20px;\" /></div>");
jQuery.ajax({url:testme_aj.ajax_url,method:'GET',data:'action=testme&task=testresults&quiz_name='+quiz_name+'&quiz_email='+quiz_email+'&quiz_age='+quiz_age+'&quiz_city='+quiz_city+'&testme_id='+testme_id+'&testme_answers='+answers_line,success:function(html){$("#testme_result").html(html)},error:function(){alert('Не удалось выполнить операцию');
testme_result_back()}})}});
function testme_result_back(){$("#testme_result").remove();$(".testme_button").show()};$(".testme_result_close").live('click',function(){testme_result_back();return false})});