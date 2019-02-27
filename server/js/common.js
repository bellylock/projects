$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var scrolls = parseInt(scroll);

        if( scrolls >= 200){
            $("#rocket").fadeIn()
        }else{
            $("#rocket").fadeOut()
        }
    });

    $("#rocket").click(function(){
        $("html,body").animate({
            scrollTop:0
        },300)
    });

    $(".header .nav ul li a").hover(function(){
        $(this).find("i").stop().animate({
            width:"100%",
            height:"2px",
            left:0
        },300)
    },function(){
        $(this).find("i").stop().animate({
            width:0,
            height:0,
            left:"50%"
        },300)
    });

})