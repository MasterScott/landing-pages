var s_ch='';
var s_cf='';

function show_div(id_cur){
	var div_set=document.getElementById(id_cur);
	if (div_set!=null) {
		div_set.style.display="block";
	}
}

function show_divMODE(id_cur, mode){
	var div_set=document.getElementById(id_cur);
	if (div_set!=null)
		div_set.style.display=mode;
}

function set_radio(p,v){
	for (i=0; i < p.length; i++) {
		if (p[i].value==v) { p[i].checked=true; break; }
	}
}

function get_radio(p){
var res="";
	for (i=0; i < p.length; i++) {
		if (p[i].checked) { res=p[i].value; break; }
	}
	return res;
}


function CreateCookie(name,value,ex_date){
	var today=new Date();
	today.setDate(today.getDate()+ex_date);
	document.cookie=name+"="+value+"; expires="+today.toGMTString()+"; path=/;";
}

function CreateTmpCookie(name,value){
	document.cookie=name+"="+value+"; path=/;";
}

function RemoveCookie(name){
	CreateCookie(name,"",-1);
}

function ReadCookie(name){
	var tmpName=name+"=";
	if ((startName=atStr(tmpName,document.cookie))!=-1){
		var startVal=startName+tmpName.length;
		if ((endVal=document.cookie.indexOf(";",startVal))==-1) 
			endVal=document.cookie.length;
		return unescape(document.cookie.substring(startVal,endVal));
	}
	return null;
}

function atStr(sub,str){
	for (var i=0;i<=str.length-sub.length;i++) 
		if(str.substring(i,i+sub.length).toUpperCase()==sub.toUpperCase()) return i;
	return -1;
}

function w_send(){
	document.write('<input type=hidden name=s_ch value=\"'+s_ch+'\"><input type=hidden name=s_cf value=\"'+s_cf+'\">');
}

function get_selected(p){
	if(p==null)
		return"";
	for(i=0;i<p.options.length;i++){
		if(p.options[i].selected)
		{return p.options[i].value;}
	}
	return"";
}

function set_selected(p,v){
	for (i=0; i < p.options.length; i++) {
		if (p.options[i].value==v) { p.options[i].selected=true; break; }
	}
}

// показать форму заказа
function showOrderForm() {
    $('#popups').removeClass("m-hide");
    $('#order').removeClass("m-hide");
    $('#msg').addClass("m-hide");
}

// показать форму ”—ѕ≈ЎЌќ√ќ оформлени€ заказа
function showOrderOkForm() {
    $('#popups').removeClass("m-hide");
    $('#order').addClass("m-hide");
    $('#msg').removeClass("m-hide");
}

// пр€чем формы
function hidePopups() {
    $('#popups').addClass("m-hide");
    $('#order').addClass("m-hide");
    $('#msg').addClass("m-hide");
}

// оформл€ем заказ
function makeOrder() {
    $('#popups').addClass("m-hide");
    $('#order').addClass("m-hide");
    $('#msg').addClass("m-hide");
}

// оформить заказа
function makeOrder() {
    if (document.getElementById("f_name").value == "")
    {
        alert("”кажите ¬аше им€");
        return false;
    }
    if (document.getElementById("f_phone").value == "")
    {
        alert("”кажите контактный телефон");
        return false;
    }
    if (document.getElementById("f_email").value == "")
    {
        alert("”кажите электронный адрес");
        return false;
    }
    var qty = get_radio(ordform.f_qty);
    if (qty == "") {
        alert("”кажите заказываемое количество товара");
        return false;
    }
    if (qty == "manual" && document.getElementById("f_qty_manual").value == "") {
        alert("”кажите желаемый объем мЄда");
        return false;
    }

    //alert("ok");
    return true;
}

// установка фокуса на поле ввода
function qty_manual_focus() {
    set_radio(ordform.f_qty, "manual");
}

// очистка ручного ввода количества
function qty_selected() {
    document.getElementById("f_qty_manual").value = "";
}