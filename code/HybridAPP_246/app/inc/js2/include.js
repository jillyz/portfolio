function getWindowSize() {	
	var myWidth = 0, myHeight = 0;
	if (typeof (window.innerWidth) == 'number') {
		// Non-IE
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if (document.documentElement
			&& (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		// IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if (document.body
			&& (document.body.clientWidth || document.body.clientHeight)) {
		// IE 4 compatible
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}
	var a = new Object();
	a['width'] = parseInt(myWidth);
	a['height'] = parseInt(myHeight);
	return a;
}
function dialogOn(message,functionAction)
{
	$.mybox({
		 is_background_touch_close:false,
		message : message,
		css : {
			/*
			backgroundColor : '#000',
			color : '#fff',
			padding:'15px'
			*/
		},		
		onBlock : function() {      
			functionAction();      
		}						
	});
}
function dialogOff()
{	
	setTimeout(function(){
		$.unmybox();
	},500);
}
function myAjaxGETOnly(url)
{
  var tmp = $.ajax({
      url: url,
      type: "GET",      
      crossDomain :true,
      async: false
   }).responseText;
  return tmp;
}
//我的ajax
function myAjax(url,postdata)
{
  var tmp = $.ajax({
      url: url,
      type: "POST",
      data: postdata,
      crossDomain :true,
      async: false
   }).responseText;
  return tmp;
}
function myAjax_async(url,postdata,func)
{
  $.ajax({
      url: url,
      type: "POST",
      data: postdata,
      async: true,
      success: function(html){
        func(html);        
      }
  });  
}
function is_string_like($data,$find_string){
	/*
	  is_string_like($data,$fine_string)

	  $mystring = "Hi, this is good!";
	  $searchthis = "%thi% goo%";

	  $resp = string_like($mystring,$searchthis);


	  if ($resp){
	     echo "milike = VERDADERO";
	  } else{
	     echo "milike = FALSO";
	  }

	  Will print:
	  milike = VERDADERO

	  and so on...

	  this is the function:
	*/
    $tieneini=0;
    if($find_string=="") return 1;
    $vi = explode("%",$find_string);
    $offset=0;
    for($n=0,$max_n=count($vi);$n<$max_n;$n++){
        if($vi[$n]== ""){
            if($vi[0]== ""){
                   $tieneini = 1;
            }
        } else {
            $newoff=strpos($data,$vi[$n],$offset);
            if($newoff!==false){
                if(!$tieneini){
                    if($offset!=$newoff){
                        return false;
                    }
                }
                if($n==$max_n-1){
                    if($vi[$n] != substr($data,strlen($data)-strlen($vi[$n]), strlen($vi[$n]))){
                        return false;
                    }

                } else {
                    $offset = $newoff + strlen($vi[$n]);
                 }
            } else {
                return false;
            }
        }
    }
    return true;
}
function smallComment(message,is_need_motion)
{
	//畫面的1/15	
	if($("#mysmallComment").size()==0)
	{
		$("body").append("<div id='mysmallComment'><div class='' id='mysmallCommentContent'></div></div>");
		$("#mysmallComment").css({
			'display':'none',
			'position':'fixed',
			'left':'0px',
			'right':'0px',
			'bottom':'4em',
			'z-index':new Date().getTime(),
			'text-align':'center',
			'opacity':0.8
		});
		$("#mysmallCommentContent").css({			
			'display': 'inline-block',	
			'color':'#fff',
			'background-color':'#000'			
		});

		/*
		$("#mysmallComment").css({
			'left': (wh['width']-$("#mysmallComment").width())/2+'px' 
		});
		*/

		//$("#mysmallComment").corner();
	}		
	$("#mysmallCommentContent").html(message);
	if(is_need_motion==true)
	{
		$("#mysmallComment").stop();
		$("#mysmallComment").fadeIn("slow");
		setTimeout(function(){
			$("#mysmallComment").fadeOut('fast');
		},2500);
	}
	else
	{
		$("#mysmallComment").show();
		setTimeout(function(){
			$("#mysmallComment").hide();
		},2500);
	}
}
function resizeImage(url, width, height, callback) {
    var sourceImage = new Image();

    sourceImage.onload = function() {
        // Create a canvas with the desired dimensions
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        // Scale and draw the source image to the canvas
        canvas.getContext("2d").drawImage(sourceImage, 0, 0, width, height);

        // Convert the canvas to a data URL in PNG format
        callback(canvas.toDataURL());
        delete canvas;
    }

    sourceImage.src = url;
}
function getDeviceKind(){
	var UA = strtoupper(navigator.userAgent);
	if(is_string_like(UA,'%ANDROID%'))
	{
		return "ANDROID";
	}
	else if(is_string_like(UA,'%IPHONE%'))
	{
		return "IOS";
	}
}
$.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
}
function onOffLine(){
	//當發生離線時，重試按鈕的功能
	
		
	if($("#offline_div").size()==0)
	{
		var data = myAjax("../../offline.htm","");
		$("body").append(data);
	}
	
	//外灰框
	$("#offline_div").show();
	$("#offline_div").css({
		'position':'fixed',
		'z-index':time()*1000
	});
	$("#offline_div").center();
	
	//內容框
	$("#offline").show();
	$("#offline").css({
		'position':'fixed',
		'z-index':(time()+1)*1000
	});
	$("#offline").center();	
	//$("#offline").corner();
	//回首頁按鈕
	$("#offline_backmenu_btn").unbind("click");
	$("#offline_backmenu_btn").click(function(){		
		location.replace("../../index.htm");
		return false;
	});
	//重試按鈕
	$("#offline_retry_btn").unbind("click");
	$("#offline_retry_btn").click(function(){
		
		$("#offline").css({
			'height':'10%'
		});
		$("#offline").center();
		$("#offline").html("<div id='offline_retry_div'>網路測試中...</div>");
		$("#offline_retry_div").css({
			//'width':'100%',
			//'height':'100%',
			'padding':'1em',
			//'font-size':'24px',
			'font-weight':'bold',
			'background': '#fff',
			'border-radius': '5px',
			'color': '#666'
		});
		/*setTimeout(function(){
			if(window['g']['online_status']!=true)
			{
				onOffLine();
			}
		},10*1000);
		*/
	    var URL = sprintf("%s",window['webservice_check_online']);
	    $.ajax({
	        url: URL,
	        type: "GET",	        
	        dataType:'text',
	        async: true,
	        timeout: 10*1000,
	        success:function(tmp){
	        	tmp=trim(tmp);
		    	if(tmp=="C_OK")
			   	{
			    	window['g']['online_status']=true;
			    	$("#offline").css({
						'height':'40%'
					});
			    	$("#offline").remove();
			    	$("#offline_div").remove();
			   	}
			    else
			   	{
		        	setTimeout(function(){
				    	$("#offline_div").remove();
				    	$("#offline").remove();	        	
			        	onOffLine();
		        	},1500);
			   	}     
	        },
	        error:function(jqXHR, textStatus, errorThrown){
	        	setTimeout(function(){
			    	$("#offline_div").remove();
			    	$("#offline").remove();	     
			    	//alert(textStatus);
		        	onOffLine();
	        	},1500);
	        }	        
	    });
	    return false;    	    
	    /*myAjax_async(URL,"",function(tmp){
	    	tmp=trim(tmp);
	    	if(tmp=="C_OK")
		   	{
		    	window['g']['online_status']=true;
		    	$("#offline").removeClass("offline_small");
		    	$("#offline").hide();
		    	$("#offline_div").hide();
		   	}
		    else
		   	{
		    	onOffLine();
		   	}
	    });
	    */
	});	
}