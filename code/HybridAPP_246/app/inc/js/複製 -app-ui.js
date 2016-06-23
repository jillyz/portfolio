function appUI () {

	// UI - start ========================================================================
	
	/* size ------------------------------------------------------------------------- */
	var winH = $(window).height();
	var winW = $(window).width();
	var headerH = $(".header").height();
	var footerH = $(".footer:not(.footer.hide)").height();
	$("[data-role='page']").css({'height': winH , 'width': winW });
	$("#map, .loading-tip").height( winH - headerH - footerH );
	$(".out-page").css({'left': winW });
	//$(".out-page .main").height( winH - headerH );
	$(".footer:not(.footer.hide)").parent().find(".main").addClass("has-footer");


	// 關閉側面滑出面板 ----------------------------------------------------------

	$(".js-back").unbind("click");
	$(".js-back").click(function(){
		// $(".out-page").hide();	
		if ( winW < 600 ) {
			$(this).parent().parent().parent().animate({'left': winW });
			$(this).parent().parent().animate({'left': winW });	
			$(".out-page [data-role='panel']").removeClass("show");
		} else {
			$(this).parent().parent().parent().css({'left': winW });
			$(this).parent().parent().css({'left': winW });	
			$(".out-page [data-role='panel']").removeClass("show");
		}
		setTimeout(function(){
		  $(".out-page").hide();
		},600);	
		$(".main-page").css({ 'left' : 0 });
		//$(".footer:not(.footer.hide)").fadeOut(100);
		return false;
	});


	// action-panel 面板開關 -----------------------------------------------------

	// 開啟 action-panel 面板
	$(".js-open-action-panel").unbind("click");
	$(".js-open-action-panel").click(function(){
			/*
			if( $("#"+$(this).attr('req')+"-panel").hasClass("show"))
			{
				$("*[data-role='panel']").removeClass("show");
			}
			else
			{
				$("[data-role=panel]").removeClass("show");				
				$("#"+$(this).attr('req')+"-panel").addClass("show");
				$("[data-role=panel] li:eq(0) a").focus();
			}
			*/
			
			if( !$("#"+$(this).attr('req')+"-panel").hasClass("show"))
			{				
				$("[data-role=panel]").removeClass("show");				
				$("#"+$(this).attr('req')+"-panel").addClass("show");
				$("[data-role=panel] li:eq(0) a").focus();

			}
			else
			{
				$("*[data-role='panel']").removeClass("show");
			}		
			
		}
	);

	// 點擊多處關閉 action-panel 面板
	/*
	$(".main , iframe, :not(.js-show-detail-observation) ").click(function(){
		$("[data-role=panel]").removeClass("show");	
	})
	*/

}