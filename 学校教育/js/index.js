$(document).ready(function(){
    if( !('placeholder' in document.createElement('input')) ){
        $('input[placeholder],textarea[placeholder]').each(function(){
            var that = $(this),
                text= that.attr('placeholder');
            if(that.val()===""){
                that.val(text).addClass('placeholder');
            }
            that.focus(function(){
                if(that.val()===text){
                    that.val("").removeClass('placeholder');
                }
            }).blur(function(){
                    if(that.val()===""){
                        that.val(text).addClass('placeholder');
                    }
                }).closest('form').submit(function(){
                if(that.val() === text){
                    that.val('');
                }
            });
        });
    };

    var i={animateThreshold:100};
    $(".aniview").AniView(i);

    $('select:not(.ignore)').niceSelect();

    $(".imgpic").hover(function(){
        $(this).find("img").css({"transition":"all .5s","transform":"scale(1.2)"});
        $(this).find("i").stop().animate({
            height:"200px",
            opacity:0.8
        },400);
        $(this).find("span").stop().animate({
            top:"45%",
            opacity:1
        },300)
    },function(){
        $(this).find("img").css({"transition":"all .5s","transform":"scale(1)"});
        $(this).find("i").stop().animate({
            height:0,
            backgroundColor:"transparent"
        },400);
        $(this).find("span").stop().animate({
            top:"15%",
            opacity:0
        },300)
    });

    $(".outbox").hover(function(){
        $(this).find("img").css({"transition":"all .5s","transform":"scale(1.2)"})
    },function(){
        $(this).find("img").css({"transition":"all .5s","transform":"scale(1)"})
    });

    $(".story img").hover(function(){
        $(this).css({"transition":"all .5s","transform":"scale(1.2)","zIndex":"999" })
    },function(){
        $(this).css({"transition":"all .3s","transform":"scale(1)","zIndex":"0"})
    });

    var height = $(window).height();
    $(".sliderimg").css("height",height);

    var swiper1 = new Swiper('#swiper1', {
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        loop:true,
        pagination: {
            el: '#spswipper',
            dynamicBullets: true,
        },

    });

    var swiper2 = new Swiper('#swiper2', {
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        loop:true,

    });









});