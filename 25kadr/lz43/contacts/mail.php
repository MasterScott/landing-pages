<?php
echo '<meta http-equiv="refresh" content="5; url=http://sozvezdie-tv.ru/">';
$name = $_POST['name'];
$subj = $_POST['subject'];
$email = $_POST['mail'];
$mess = $_POST['message'];
$REMOTE_ADDR = $_POST['REMOTE_ADDR'];

$to = "triowork@i.ua";
$subject = "Форма контактов";
$message = "Имя пославшего письмо: $name\nEmail: $email\nТема: $subj\nСообщение: $mess\nIP-адрес: $_SERVER[REMOTE_ADDR]";
mail ($to,$subject,$message,"Content-type:text/plain; charset = utf-8") or print "Не могу отправить письмо !!!";
echo "<div style='width:960px;margin: 0 auto;'>
    <div style='width: 618px; height: 240px; color: #111111; font-family: 'PFAgoraSlabPro';font-size: 18px; line-height: 18px;'>
        <div style='margin: 20;border:1px dashed #282828;border-radius:8px;padding:10px;margin-left:370px;'>
            <p>Спасибо за запрос, наш оператор свяжется с вами в ближайшее время!</p>
            <p>Через 5 сек. вы будете перенаправлены на главную страницу.</p>
        </div>
    </div>
</div>
";
exit;
?>