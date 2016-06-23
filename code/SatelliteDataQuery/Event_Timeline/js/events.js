
  $(document).ready(function(){    

    $(".menu .event").parent("li").addClass("active"); 

    //--------------------------------------------------------------------------------------//
    //	寫出時間軸外觀 
    //--------------------------------------------------------------------------------------//

    //設定年份寬度    
    var yearWidth = $(".timeline [data-year]").width();
    var n = $(".timeline [data-year]").size();
    var timelineWidth = $(window).width() - 150 ;
    //n is how many years
    var space_range_start = parseInt( timelineWidth / n );
    $(".timeline [data-year]").width(space_range_start);
    $(".timeline").width( yearWidth * n );

    // 寫出刻度的年份
    $(".timeline [data-year]").each(function(){
    	var year = $(this).attr("data-year");
    	$(this).prepend("<span class='tag'>" + year + "</span>");
    });
    // 產生最後一個年份
    var lastYear = parseInt($(".timeline [data-year]:last").text()) + 1;
    $(".timeline [data-year]:last").append("<span class='tag last'>" + lastYear + "</span>");

    // 定小圈圈位置
    $(".timeline [data-date]").each(function(){
    	var date = $(this).attr("data-date");
    	var cssLeft = ( $(this).parent().width()/365 ) * date ;
    	$(this).css({'left': cssLeft - 6 });
    });

    // 錯開事件位置
    $(".timeline a").each(function() {
    	var index = $(this).index();
    	// if ( index % 3 == 1 ) {
    	// 	$(this).addClass("pos2");
    	// } else if ( index % 3 == 2 )  {
    	// 	$(this).addClass("pos3");
    	// } else {
    	// 	$(this).addClass("pos1");
    	// }
		if ( index % 2 == 1 ) {
    		$(this).addClass("pos2");
    	} else {
    		$(this).addClass("pos1");
    	}

    });

    // tip : 定位
    var width_TipNoEvnet = $(window).width()/2 - $(".tip-no-event").width()/2 ;
    $(".tip-no-event").css({ 'left' : width_TipNoEvnet });
    var width_TipGoAll = $(window).width()/2 - $(".tip-go-all").width()/2 ;
    $(".tip-go-all").css({ 'left' : width_TipGoAll });


    //--------------------------------------------------------------------------------------//
    //	點擊時間軸項目 > focus 到事件夾
    //--------------------------------------------------------------------------------------//
    $(".timeline a").click(function () {        
        $(".timeline a").removeClass("active");
        $(this).addClass("active")

        var toID = $(this).attr("href");
        $('html, body').animate({
            scrollTop: ( $(toID).offset().top ) - 300
        }, 500);

        $(".event-item").removeClass("focusOn");
        $(toID).addClass("focusOn");
    });

    //--------------------------------------------------------------------------------------//
    //	時間軸控制
    //--------------------------------------------------------------------------------------//
    
    window['zoomRange']=[
    					 space_range_start,
    				     space_range_start*5,
    				     space_range_start*30,
    				     space_range_start*55,
    				     space_range_start*100];
    window['defaultStep']=0;

	// 時間軸 以年為間距 ------------------------------------

    $("#zoomYear").click(function() {
    	var i = $(window).width() - 140;
    	$(".timeline [data-year]").animate({'width' : i }, 300 );
    	$(".timeline [data-date]").each(function(){
	    	var date = $(this).attr("data-date");
	    	var cssLeft = ( i /365 ) * date ;
	    	$(this).animate({'left': cssLeft - 6 }, 500 );
	    });
	    $(".timeline").animate({'left': 0 } , 300 );

	    window['defaultStep']=0;
	    $(this).attr('disabled','disabled');
	    $("#zoomOut, #zoomAll,#zoomIn").removeAttr('disabled');
    });

    // 時間軸 看全部 ------------------------------------

    $("#zoomAll").click(function() {
    	
    	$(".tip-no-event, .tip-go-all").hide();

    	var i = window['zoomRange'][0];
    	$(".timeline [data-year]").animate({'width' : i }, 300);
    	$(".timeline [data-date]").each(function(){
	    	var date = $(this).attr("data-date");
	    	var cssLeft = ( i /365 ) * date ;
	    	$(this).animate({'left': cssLeft - 6 },300);
	    });
	    $(".timeline").animate({'left': '0' } , 300 );

	    window['defaultStep']=0;
	    $(this).attr('disabled','disabled');
	    $("#zoomOut").attr('disabled','disabled');
	    $("#zoomIn, #zoomYear").removeAttr('disabled');
    });

    $(".timeline").dblclick(function() {
    	$("#zoomAll").trigger('click');
    });

    // 時間軸 放大 ------------------------------------

    $("#zoomIn").click(function() {
    	
    	$(".tip-no-event, .tip-go-all").hide();

    	window['defaultStep']++;
    	if(window['defaultStep']>=window['zoomRange'].length)
    	{
    		window['defaultStep']=window['zoomRange'].length-1;
    		$(this).attr('disabled','disabled');
    	} 

    	$("#zoomAll,#zoomOut,#zoomYear").removeAttr('disabled');	
    	var i = window['zoomRange'][(window['defaultStep']%window['zoomRange'].length)];
    	$(".timeline [data-year]").animate({'width' : i}, 300);
	    $(".timeline [data-date]").each(function(){
	    	var date = $(this).attr("data-date");
	    	var cssLeft = ( i /365 ) * date ;
	    	$(this).animate({'left': cssLeft - 6 },300);
	    }); 

	    $(".timeline").animate({'left': '0' } , 300 ); 	
    });

    // 時間軸 縮小 ------------------------------------

    $("#zoomOut").click(function() {
    	
    	$(".tip-no-event, .tip-go-all").hide();

    	window['defaultStep']--;
    	if(window['defaultStep']<0)
    	{
    		window['defaultStep']=0;
    		$(this).attr('disabled','disabled');
    		$("#zoomAll").attr('disabled','disabled');
    	}
    	$("#zoomIn,#zoomYear").removeAttr('disabled');
    	var i = window['zoomRange'][(window['defaultStep']%window['zoomRange'].length)];
    	i=(i<0)?0:i;
    	$(".timeline [data-year]").animate({'width' : i}, 300);
 	    $(".timeline [data-date]").each(function(){
	    	var date = $(this).attr("data-date");
	    	var cssLeft = ( i/365 ) * date ;
	    	$(this).animate({'left': cssLeft - 6 },300);
	    }); 

	    $(".timeline").animate({'left': '0' } , 300 );    	
    });

    // 時間軸 直接跳到某一年 ------------------------------------

    $(".timeline .tag:not(:last)").click(function() {

    	$(".tip-no-event").hide();

    	var i = $(window).width() - 140;    	
    	$(".timeline [data-year]").animate({'width' : i }, 300 );
    	$(".timeline [data-date]").each(function(){
	    	var date = $(this).attr("data-date");
	    	var dateLeft = ( i /365 ) * date ;
	    	$(this).animate({'left': dateLeft - 6 }, 500 );
	    });

	    var n = $(this).parent().index() ;
	    $(".timeline").animate({'left': "-" + ((i*n)+10) + "px" } , 300 );
	    
	    window['defaultStep']=0;
	    $("#zoomYear").attr('disabled','disabled');
	    $("#zoomOut, #zoomAll,#zoomIn").removeAttr('disabled');

	    var child = $(this).parent().children("a").size();
	    if ( child == 0 ) {
	    	$(".tip-no-event").show();
	    }
	    $(".tip-go-all").show();
    });

    //初始化排序類型與方向
    $(".main .order a").removeClass("descending");
    $(".main .order a").removeClass("ascending");
    $(".main .order a[req='sdatetime']").addClass("descending");
              
  });
