$(function(){ 
    $("#chat").on("mouseenter mouseleave",function(event){
          if(event.type == "mouseenter"){
             $(".emerge").css("display","block")
          }else{
            $(".emerge").css("display","none")
          }
     });

    $("#phones").on("mouseenter mouseleave",function(event){
          if(event.type == "mouseenter"){
             $(".phone_number").css("display","block")
          }else{
            $(".phone_number").css("display","none")
          }
     });

    $(".emerge").on("mouseenter mouseleave",function(event){
          if(event.type == "mouseenter"){
             $(".emerge").css("display","block")
          }else{
            $(".emerge").css("display","none")
          }
     });

    $(".phone_number").on("mouseenter mouseleave",function(event){
          if(event.type == "mouseenter"){
             $(".phone_number").css("display","block")
          }else{
            $(".phone_number").css("display","none")
          }
     });

    
    $(".moredetail").on("click",function(){
        if($(".list").css("display") == 'none'){
            $(".list").css("display","block")
        }else {
            $(".list").css("display","none")
        }
    });

    $(".moredetails").on("click",function(){
        if($(".lists").css("display") == 'none'){
            $(".lists").css("display","block")
        }else {
            $(".lists").css("display","none")
        }
    });   

    $(".shop_menu").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".content .sidebar").css("display","block");
            }else{
                $(".content .sidebar").css("display","none");
            }
    });
    $(".content .sidebar").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(this).css("display","block");
            }else{
                $(this).css("display","none");
            }
    });
    $(".bar").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".content .sidebar").css("display","block");
            }else{
                $(".content .sidebar").css("display","none");
            }
    });

	$(".li-1").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".bar-1").css("display","block");
            }else{
            	$(".bar-1").css("display","none");
            }
    });
	$(".bar-1").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(this).css("display","block");
                $(".li-1").css("backgroundColor",'white');
                $(".li-1 a").css("color",'#906e2b')
            }else{
            	$(this).css("display","none");
                $(".li-1").css("backgroundColor",'#906e2b');
                $(".li-1 a").css("color",'white')
            }
     });

	$(".li-2").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".bar-2").css("display","block");
                
            }else{
            	$(".bar-2").css("display","none");
            }
     });
	$(".bar-2").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(this).css("display","block");
                $(".li-2").css("backgroundColor",'white');
                $(".li-2 a").css("color",'#906e2b')
            }else{
            	$(this).css("display","none");
                $(".li-2").css("backgroundColor",'#b4a078');
                $(".li-2 a").css("color",'white')
            }
     });

	$(".li-3").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".bar-3").css("display","block");
                
            }else{
            	$(".bar-3").css("display","none");
            }
     });
	$(".bar-3").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(this).css("display","block");
                $(".li-3").css("backgroundColor",'white');
                $(".li-3 a").css("color",'#906e2b')
            }else{
            	$(this).css("display","none");
                $(".li-3").css("backgroundColor",'#906e2b');
                $(".li-3 a").css("color",'white')
            }
     });

	$(".li-4").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".bar-4").css("display","block");
                
            }else{
            	$(".bar-4").css("display","none");
            }
     });
	$(".bar-4").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(this).css("display","block");
                $(".li-4").css("backgroundColor",'white');
                $(".li-4 a").css("color",'#906e2b')
            }else{
            	$(this).css("display","none");
                $(".li-4").css("backgroundColor",'#b4a078');
                $(".li-4 a").css("color",'white')
            }
     });

	$(".li-5").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".bar-5").css("display","block");
                
            }else{
            	$(".bar-5").css("display","none");
            }
     });
	$(".bar-5").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(this).css("display","block");
                $(".li-5").css("backgroundColor",'white');
                $(".li-5 a").css("color",'#906e2b')
            }else{
            	$(this).css("display","none");
                $(".li-5").css("backgroundColor",'#906e2b');
                $(".li-5 a").css("color",'white')
            }
     });

	$(".li-6").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".bar-6").css("display","block");
                
            }else{
            	$(".bar-6").css("display","none");
            }
     });
	$(".bar-6").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(this).css("display","block");
                $(".li-6").css("backgroundColor",'white');
                $(".li-6 a").css("color",'#906e2b')
            }else{
            	$(this).css("display","none");
                $(".li-6").css("backgroundColor",'#b4a078');
                $(".li-6 a").css("color",'white')
            }
     });

	$("#top").click(function() {
	      $("html,body").animate({scrollTop:0}, 500);
	}); 

	$("#gotop").click(function() {
	      $("html,body").animate({scrollTop:0}, 500);
	}); 

    //左导航跳到指定位置
    $(".sideleft ul li a").click(function() {
        $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 10 + "px"
        }, 500);
        return false;
    });


    var liWidth = $(".circulation ul li").innerWidth();
    var len = $(".circulation ul li").length;
    var ulWidth = liWidth*len;
    $(".circulation ul").width(ulWidth*4);
    var n = 4;
    var boxWidth = liWidth*n;
    $(".circulation .boxs").width(boxWidth);
    $(".circulation .boxs ul li:lt(4)").clone().insertAfter(".circulation .boxs ul li:last");
    $(".circulation .boxs ul li:lt(1)").clone().insertAfter(".circulation .boxs ul li:first");
    $(".prev").on("click",function(){
        if(!$(".circulation ul").is(":animated")){
            prev();
        }
    });
    $(".next").on("click",function(){
        if(!$(".circulation ul").is(":animated")){
        next();
    }
    });

    var r;
    total();
    function total(){
        r = setInterval(function(){
            next();
        },2000)
    }
    
    $(".circulation ul li").hover(function(){
        clearInterval(r);
    },function(){
        total();
    })
    
    function prev(){
        var left = $(".circulation ul").css("left").replace("px","")*1;
        if (left == 0) {
            $(".circulation ul").css({"left":-liWidth*len})
            $(".circulation ul").animate({"left": "+="+liWidth})
        }else{
            $(".circulation ul").animate({"left": "+="+liWidth})
        }
        
    }
    function next(){
            var left = $(".circulation ul").css("left").replace("px","")*1;
            if (left < - liWidth*len) {
                $(".circulation ul").css({left:0})
                $(".circulation ul").animate({left: "-="+liWidth})
            }else{
                $(".circulation ul").animate({left: "-="+liWidth})
            }
        }

           
    //绑定滚动条事件  
    $(window).bind("scroll", function () {  
        var wh = $(window).scrollTop();  
        var sTop = $(window).scrollTop();  
        var sTop = parseInt(sTop);  
        if (sTop >= 500) {
            if ($("#left").css("display") == 'none') {  
                try {  
                    $("#left").slideDown();  
                } catch (e) {  
                    $("#left").show();  
                }                        
            }  
        }  
        else {  
            if ($("#left").css("display") == 'block') {  
                try {  
                    $("#left").slideUp();
                } catch (e) {  
                    $("#left").hide(); 
                }                         
            }  
        } 
        if (sTop >= 300) {  
            if (!$(".sidelist").is(":visible")) {  
                try {  
                    $(".sidelist").slideDown();  
                } catch (e) {  
                    $(".sidelist").show();  
                }                        
            }  
        }  
        else {  
            if ($(".sidelist").is(":visible")) { 
                try {  
                    $(".sidelist").slideUp(); 
                } catch (e) {  
                    $(".sidelist").hide();
                }                         
            }  
        } 
       
        
    }); 
    //1
    (function($) {
     $.fn.placeholder = function(options) {
         var opts = $.extend({}, $.fn.placeholder.defaults, options);
         var isIE = document.all ? true : false;
         return this.each(function() {
             var _this = this,
                 placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
             if (isIE) {
                 _this.setAttribute("value", placeholderValue);
                 _this.onfocus = function() {
                     $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                 };
                 _this.onblur = function() {
                     $.trim(_this.value) == "" ? _this.value = placeholderValue : '';
                 };
             }
         });
     };
 })(jQuery);

 $("input").placeholder();

// //2
//  $(function(){
//   //判断浏览器是否支持placeholder属性
//   supportPlaceholder='placeholder'in document.createElement('input'),
//   placeholder=function(input){
//     var text = input.attr('placeholder'),
//     defaultValue = input.defaultValue;
//     if(!defaultValue){
//       input.val(text).addClass("phcolor");
//     }
//     input.focus(function(){
//       if(input.val() == text){
//         $(this).val("");
//       }
//     });
//     input.blur(function(){
//       if(input.val() == ""){
//         $(this).val(text).addClass("phcolor");
//       }
//     });
//     //输入的字符不为灰色
//      input.keydown(function(){
//        $(this).removeClass("phcolor");
//      });
//    };
//    //当浏览器不支持placeholder属性时，调用placeholder函数
//    if(!supportPlaceholder){
//      $('input').each(function(){
//        text = $(this).attr("placeholder");
//        if($(this).attr("type") == "text"){
//          placeholder($(this));
//        }
//      });
//    }
//  });


})