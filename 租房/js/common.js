$(function () {

    $(".area").hover(function () {
        $(this).children("ul").stop().slideToggle(300);
    });

    $(".magnifyImg").hover(function () {
        $(this).find("img").css({"transition": "all .3s", "transform": "scale(1.2)"});
    }, function () {
        $(this).find("img").css({"transition": "all .3s", "transform": "scale(1)"});
    });

    $(".footer .footer_info .left li a").hover(function () {
        $(this).css({"color": "#ffa001", "transition": "all .3s", "transform": "translateX(10px)"});
    }, function () {
        $(this).css({"color": "#333", "transition": "all .3s", "transform": "translateX(0px)"});
    });

    // 回到顶部
    $(window).scroll(function () {
        var h = $(window).scrollTop();
        var height = parseInt(h);
        if (height >= 300) {
            $("#backUp").fadeIn();
        } else {
            $("#backUp").fadeOut();
        }
        if (height >= 1500) {
            $("#lasttwo").css({"position": "fixed", "top": "65px", "right": "50%", "marginRight": "-570px"})
        } else {
            $("#lasttwo").css({"position": "absolute", "top": "1580px", "right": "50%", "marginRight": "-570px"})
        }

    });
    $("#backUp").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 300);
    });

    $(".header .area ul li a").click(function () {
        var value = $(this).text();
        $(".header .area p").text(value);
        // $('.header .area ul').fadeOut();
    });

    // 兼容placeholder
    if (!('placeholder' in document.createElement('input'))) {
        $('input[placeholder],textarea[placeholder]').each(function () {
            var that = $(this),
                text = that.attr('placeholder');
            if (that.val() === "") {
                that.val(text).addClass('placeholder');
            }
            that.focus(function () {
                if (that.val() === text) {
                    that.val("").removeClass('placeholder');
                }
            })
                .blur(function () {
                    if (that.val() === "") {
                        that.val(text).addClass('placeholder');
                    }
                })
                .closest('form').submit(function () {
                if (that.val() === text) {
                    that.val('');
                }
            });
        });
    }
    ;


});