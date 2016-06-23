
$(document).ready(function(){
    forUI();
    forUI_AFTER_DATA();    
});


 // for data-result 載入後 //START ------------------------------------------------------------------------

  function forUI(){
    // 定位 : 分頁 & 加入購物車按鈕
    $(".data-result .block-pager-cart").css({
      'left' : ( $(window).width() - 1100 ) / 2 + 'px'
    });   


    // 右側欄篩選區塊: checkbox & label 樣式
    $(".data-result .filter input[type=checkbox]").change(function() {
      if ( typeof( $(this).attr("checked"))=="undefined"){        
        $(this).parent("label").removeClass('selected');
      } else {
        $(this).parent("label").addClass('selected');
      }
    });

    // 右側欄篩選區塊: 雲覆量 非100% 時才給予樣式
    $("#CLOUD_COVER").change(function() {
      if( $(this).val() != '100'){ 
        $(this).addClass('actived');
      } else {
        $(this).removeClass('actived');
      }
    });

    // 右側欄篩選區塊: 摺疊效果 ---START--------
    $(".type-collapse").click(function() {
      if ( $(this).hasClass("toggle") ) {
        $(this).removeClass("toggle");
        $(".type-item").slideDown();
      } else {
        $(this).addClass("toggle");
        $(".type-item").slideUp();
      };
    });
    $(".time-collapse").click(function() {
      if ( $(this).hasClass("toggle") ) {
        $(this).removeClass("toggle");
        $(".time-item").slideDown();
      } else {
        $(this).addClass("toggle");
        $(".time-item").slideUp();
      };
    });
    $(".space-collapse").click(function() {
      if ( $(this).hasClass("toggle") ) {
        $(this).removeClass("toggle");
        $(".space-item").slideDown();
      } else {
        $(this).addClass("toggle");
        $(".space-item").slideUp();
      };
    });
    // 右側欄篩選區塊: 摺疊效果 ---END--------


    // 右側欄篩選區塊: 全選 & 取消全選
    $(".cate input:checkbox").change(function(event) {
        if ( typeof( $(this).attr("checked"))=="undefined"){ // 取消全選 
          $(this).parent("label").next("ul").show().find("label").removeClass("selected").children("input:checkbox").attr("checked", false);
        } else { // 全選          
          $(this).parent().next("ul").show().find("label").addClass("selected").children("input:checkbox").attr("checked", true);
        }
    });

    // 主查詢後, 查詢結果的三種資料TAB, 賦予作用中樣式
    $("#TAB a").click(function() {
      $("#TAB a").removeClass("actived");
      $(this).addClass("actived");
    });




    // 模擬 ~~~~~~ 請改寫或拿掉 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 模擬: 加入成功
    $(".add-cart button").click(function() {
      alert("成功加入購物車！");      
    });

    $(".pagination a").click(function() {
      return false; 
    });
    
    //針對使用者選的種類，讓 
    //福衛二號遙測影像 福衛二號高空大氣閃電觀測 福衛三號大氣/電離層掩星
    //標頭可以藏掉
    $("#TAB div a").hide();    
    var kind = implode(",",getCheckBox_val("ALL_SEARCH_CHECKBOX[]"));
    var m_kind = explode(",",kind);
    
    for(var i=0,max_i=count(m_kind);i<max_i;i++)
    {
      switch(m_kind[i])
      {
        case "1":
          $("#TAB_F2_IMAGE").show();          
          break;
        case "2":
          $("#TAB_F2_ISUAL").show();          
          break;
        case "3":
          $("#TAB_F3_OCCULTATION").show();          
          break;
      }      
    }
    //回到body 頭
    $(window).scrollTop(0);
    //$(".block-pager-cart").hide();
  } //forUI end



  function forUI_AFTER_DATA()
  {    
      // 主查詢後, 查詢結果...要加入購物車的項目:  全選 & 取消全選
    $("#CheckAll").click(function() {  
        if (this.checked) {  
            $("table input:checkbox , .list-item input:checkbox").each(function() {  
                $(this).attr("checked", true);  
                $(this).parents(".list-item , tr").addClass('selected');
            })  
        } else {   //反之 取消全選  
            $("table input:checkbox , .list-item input:checkbox").each(function() {
                $(this).attr("checked", false);  
                $(this).parents(".list-item , tr").removeClass('selected');
            })  
        }  
    });
     // 左側查詢結果: checkbox & label 樣式
    $(".data-result input[type=checkbox]").change(function() {
      if ( typeof( $(this).attr("checked"))=="undefined"){        
        $(this).parents(".list-item , tr").removeClass('selected');
      } else {
        $(this).parents(".list-item , tr").addClass('selected');
      }
    }); 

    // 福二影像資料 - 詳細資料
    $(".list-item a.info").colorbox({
        href: "detail.html",
        transition: 'none',
        iframe:true, 
        innerWidth: '350px', 
        innerHeight: '470px',
        fixed: true,
        scrolling: false
    });

    
  }
  // for data-result 載入後 //EDND ------------------------------------------------------------------------


  $(document).ready(function(){
    $(".menu .query").parent("li").addClass("active");

    //----- for default UI //START ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // 上方主查詢區塊: 三種資料類型 checkbox & label 樣式
    $(".data-query input[type=checkbox]").each(function() { // 預設帶入
      if ( typeof( $(this).attr("checked"))=="undefined"){        
        $(this).parents("strong").removeClass('selected');
      } else {
        $(this).parents("strong").addClass('selected');
      }
    }).change(function() {
      if ( typeof( $(this).attr("checked"))=="undefined"){ 
        $(this).parents("strong").removeClass('selected');
      } else {
        $(this).parents("strong").addClass('selected');
      }
    });

    // 提示區塊: 未查詢"query-tip" & 查詢中"loading"
    $(".query-tip ").css({
      'padding' : ($(window).height() - 76 - $(".data-query").height() )/2 - 40
    });

    // 上方主查詢區塊: 查詢按鈕
    $("#btnDataQuery").click(function() {
      var message = "";
      var o = new Object();
      o["search_kind"] = getCheckBox_val('ALL_SEARCH_CHECKBOX[]'); //三種
      if(o["search_kind"]=="")
      {
        message+="請先選擇要查詢的資料種類...\n";
      }
      if(message != "")
      {
        alert(message);
        return;
      }          
      $(".result-block").hide();
      $(".re-query").fadeIn(500);
      $(".loading").height($(window).height()-150).show();
      $(".data-query").addClass('small');
      $("#btnDataQuery").addClass('query-small');
      $(".query-tip").hide();       

      // 模擬查詢的loading,做個假動畫
      setTimeout(function(){
        $(".loading").hide();
        $(".result-block").show();
      }, 800 );

    });

    // 重新查詢 -> 再把 "上方主查詢區塊 data-query" 打開
    $(".re-query").click(function() {
      if ( $("#btnDataQuery").height() > 70 ) {
        $(".data-query").addClass('small');
        $("#btnDataQuery").addClass('query-small');
        $(".re-query button").removeClass('up');
      } else {
        $(".data-query").removeClass('small');
        $("#btnDataQuery").removeClass('query-small');
        $(".re-query button").addClass('up');
      }
    });


    //----- for default UI //END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     
    $("#ALL_SEARCH_SDATE" ).datepicker({
      'dateFormat':'yy-mm-dd',      
      'changeMonth': true,
      'changeYear': true,
      'numberOfMonths': 1,
      'yearRange': '2005:2014',
      'onClose': function( selectedDate ) {
        $("#ALL_SEARCH_EDATE").datepicker( "option", "minDate", selectedDate );
      }
    });              
    $("#ALL_SEARCH_EDATE").datepicker({
      'dateFormat':'yy-mm-dd',      
      'changeMonth': true,
      'changeYear': true,
      'numberOfMonths': 1,
      'yearRange': '2005:2014',
      'onClose': function( selectedDate ) {
        $("#ALL_SEARCH_SDATE").datepicker( "option", "maxDate", selectedDate );
      }
    });      
        
  });