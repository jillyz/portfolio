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
			backgroundColor : '#000',
			color : '#fff',
			padding:'15px'
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
//我的ajax
function myAjax(url,postdata)
{
  var tmp = $.ajax({
      url: url,
      type: "POST",
      data: postdata,
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