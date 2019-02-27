$(document).ready(function () {
    var mySwiper = new Swiper('.swiperevaluation', {
        pagination: '.pagination',
        loop: true,
        grabCursor: false,    //鼠标在swiper-slider区域上的手势
        simulateTouch : false,//禁止拖动swiper-slider区域
        paginationClickable: true
    });

    $('#prevbtn').on('click', function (e) {
        e.preventDefault();
        mySwiper.swipePrev();
    });
    $('#nextbtn').on('click', function (e) {
        e.preventDefault();
        mySwiper.swipeNext();
    });

    $('#btn1').click(function () {
        mySwiper.swipeTo(0, 1000, false);
    });
    $('#btn2').click(function () {
        mySwiper.swipeTo(1, 1000, false);
    });
    $('#btn3').click(function () {
        mySwiper.swipeTo(2, 1000, false);
    });
    $('#btn4').click(function () {
        mySwiper.swipeTo(3, 1000, false);
    });

    var i = {animateThreshold: 100};
    $(".aniview").AniView(i);

    if (!$('counterup-nums')) {
        return;
    }
    window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js"><\/script>');
    $('.numbers').countUp();

    $(".courses .classname .block").hover(function () {
        $(this).find("span").css("color", "#e79800");
    }, function () {
        $(this).find("span").css("color", "#000");
    });

    $(".saycabin .box ul li").click(function () {
        $(".saycabin .box ul li").removeClass("active");
        $(this).addClass('active');
    });

    $(".sliderbtn a").click(function(){
        $(".saycabin .box ul li").removeClass("active")
    });

    var swiper = new Swiper('.swipermember', {
        pagination: '.pagination',
        paginationClickable: true,
        slidesPerView: 4,
        // grabCursor: true
    });
    $('.memberprev').on('click', function (e) {
        e.preventDefault();
        swiper.swipePrev();
    });
    $('.membernext').on('click', function (e) {
        e.preventDefault();
        swiper.swipeNext();
    });

    $(".memberbar").hover(function(){
        $(this).find(".covers").stop().animate({
            width:"100%",
            height:"100%",
            left:0,
            top:0,
            opacity: 0.8
        },300);
        $(this).find(".butt").css("backgroundColor","white");
        $(this).find("a").animate({
            opacity: 1
        },300);
    },function(){
        $(this).find(".covers").stop().animate({
            width:"80%",
            height:"80%",
            left:"10%",
            top:"10%",
            opacity:0
        },300);
        $(this).find(".butt").css("backgroundColor","#f7f7f7");
        $(this).find("a").animate({
            opacity: 0
        },300);
    });


})