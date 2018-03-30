<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta http-equiv="refresh" content="5; URL=./index.html"/><body>

<style>
.zagolovok {
color: #26BBF0;
font-weight:bold;
}
.box {
	position: relative;
	padding: 20px;
	background-color: #fff;
	-webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
	border:1px solid #CCCCCC;
moz-border-radius: 10px; /* Firefox */
-webkit-border-radius: 10px; /* Safari, Google Chrome */
-khtml-border-radius: 10px; /* KHTML */
-o-border-radius: 10px; /* Opera */
-ms-border-radius: 10px; /* IE8 */
border-radius: 10px; /* CSS3 */
overflow:hidden;
margin:0.7em auto;
} 
</style>
<br><br><br>
<table class="box" bgcolor ='lightgrey' width='300'>
    <tr>
      <td>
<?php 
include 'config.php';
$name=$_REQUEST["name"];
$phone=$_REQUEST["phone"];
$place=$_REQUEST["place"];



$text='<html> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><body> <style> .zagolovok {color: #26BBF0;font-weight:bold;}</style>';
if ($place=="zakaz") $text=$text.'<p> <span class ="zagolovok">   Заказ 3D ручек 3Doodler</span></p>';
if ($place=="zvonok") $text=$text.'<p> <span class ="zagolovok">   Заказ Звонка - тема 3D ручка 3Doodler</span></p>' ;
if ($place=="otziv") $text=$text.'<p> <span class ="zagolovok">  Отзыв о 3D ручке 3Doodler</span></p>';
$text=$text.'<p> <span class ="zagolovok">имя : </span>'.$name.'</p>';
$text=$text.'<p> <span class ="zagolovok">телефон : </span>'.$phone.'</p>';
$text=$text.'</body></html>';
?>
<div  style="width:250px; height:140px;background-color: #ffffff;" align=left>
<p align=center style="font-size:120%;text-indent:0px;"><b> 
Спасибо !
</b>
<br><br>
Ваш заказ принят и будет исполнен <br>в ближайшее время<br></p>
<a href='index.html'><p align=center>Вернуться на главную</p></a>	
</div>																			


<?php
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html;  charset=utf-8' . "\r\n";
$headers .='From: My  Site'; // извините но тут только английские буквы - иначе возможны неудобства


if ($place=="zakaz") $theme = "заказ 3D ручек 3Doodler";
if ($place=="zvonok") $theme = "Заказ Звонка - тема 3D ручка 3Doodler";
if ($place=="otziv") $theme = "Отзыв о 3D ручке 3Doodler";

if (isset($addr) && isset($theme) && isset($text)
        && $addr != "" && $theme != "" && $text != "") {
    if (mail($addr, $theme, $text, $headers )) {
        
    }
    else {
    echo "ошибка";
    }
}

?>
</td>
    </tr>
</table>
</body></html>