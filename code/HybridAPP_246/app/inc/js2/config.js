//檢查手機是否可以連到服務的webservice 
//會回傳 C_OK
/*
 * 可以用這個方法檢查
    var URL = sprintf("%s",window['webservice_check_online']);
	var tmp = trim(myAjaxGETOnly(URL));
	if(tmp=="C_OK")
	{
		window['g']['online_status']=true;
	}
	else
	{
		alert("無法取得服務...");
	}
 */
window['webservice_check_online'] = "http://fema.swcb.gov.tw/MobileWebService/Data.ashx?op=testingConnection";

//總體變數
window['g'] = {};

$(document).ready(function(){
	window['wh']=getWindowSize();
	$("html, body").css({
		width:window['wh']['width']+'px',
		height:window['wh']['height']+'px'
	});
});




