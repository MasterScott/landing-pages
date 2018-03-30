
function submitN(form){

/* если не заполнено поле Ваше имя, длина менее 3-x*/
if (form.name != null && form.name.value.length < 3 )
{
alert('Заполните поле "Ваше имя"');
return false;}

/* контактный телефон */
if(form.phone != null && form.phone.value.length == 0)
{
alert('поле "Контактный телефон" пустое');
return false;}
  
if(form.phone != null && form.phone.value.length < 5)
{
alert('поле "Контактный телефон" должно содержать минимум пять символов');
return false;}
  
if(!(/^[0-9-+()s]+z/.test(form.phone.value+"z")))
{
alert('"Контактный телефон" указан неверно');
return false;}


form.submit();	
}


