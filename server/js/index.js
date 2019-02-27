$(document).ready(function(){
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        autoplay: 2000,
        // disableOnInteraction: false,  //解决不自动轮播(swiper3)
        autoplayDisableOnInteraction : false //解决不自动轮播(swiper2)
    });
    $('.arrow-left').on('click', function (e) {
        e.preventDefault();
        mySwiper.swipePrev()
    });
    $('.arrow-right').on('click', function (e) {
        e.preventDefault();
        mySwiper.swipeNext()
    });

    (function ($) {
        $.fn.extend({
            Scroll: function (opt, callback) {
                //参数初始化
                if (!opt) var opt = {};
                var _this = this.eq(0).find("ul:first");
                var lineH = _this.find("li:first").height(), //获取行高
                    line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10), //每次滚动的行数，默认为一屏，即父容器高度
                    speed = opt.speed ? parseInt(opt.speed, 10) : 500, //卷动速度，数值越大，速度越慢（毫秒）
                    timer = opt.timer ? parseInt(opt.timer, 10) : 3000; //滚动的时间间隔（毫秒）
                if (line == 0) line = 1;
                var upHeight = 0 - line * lineH;
                //滚动函数
                scrollUp = function () {
                    _this.animate({
                        marginTop: upHeight
                    }, speed, function () {
                        for (i = 1; i <= line; i++) {
                            _this.find("li:first").appendTo(_this);
                        }
                        _this.css({
                            marginTop: 0
                        });
                    });
                }
                //鼠标事件绑定
                _this.hover(function () {
                    clearInterval(timerID);
                }, function () {
                    timerID = setInterval("scrollUp()", timer);
                }).mouseout();
            }
        });
    })(jQuery);

    $("#scrollText").Scroll({
        line: 1,     //一次向上滚动几行
        speed: 500,  //向上滚动的速度
        timer: 3000  //多久滚动一次
    });

    $(".friendsbox a").hover(function(){
        $(this).find(".i1").stop().animate({
            width:"100%",
        },300);
        $(this).find(".i2").stop().animate({
            height:"100%"
        },300);
        $(this).find(".i3").stop().animate({
            width:"100%"
        },300);
        $(this).find(".i4").stop().animate({
            height:"100%"
        },300);
        $(this).find("img").css({"transition":"all .5s","transform":"scale(1.1)"})
    },function(){
        $(this).find(".i1").stop().animate({
            width:0,
        },300);
        $(this).find(".i2").stop().animate({
            height:0
        },300);
        $(this).find(".i3").stop().animate({
            width:0
        },300);
        $(this).find(".i4").stop().animate({
            height:0
        },300);
        $(this).find("img").css({"transition":"all .5s","transform":"scale(1)"})
    })


    // function AutoScroll(obj1,obj2) {
    //     $(obj1).find(obj2).animate({
    //         marginTop: "-50px"
    //     }, 500, function () {
    //         $(this).css({
    //             marginTop: "0px"
    //         }).find("li:first").appendTo(this);
    //     });
    // }

    // setInterval(function(){
    //     AutoScroll("#scrollText",".s1box")
    // },3000)





})








