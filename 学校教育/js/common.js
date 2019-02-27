$(document).ready(function(){
    $(".nav ul li a").hover(function(){
        $(this).find("i").stop().animate({
            width:"100%",
            left:0
        },300)
    },function(){
        $(this).find("i").stop().animate({
            width:0,
            left:"50%"
        },300)
    });

    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);

        if (sTop >= 100) {
            $(".nav").css("top",0)
        }else {
            $(".nav").css("top","50px")
        }

        if (sTop >= 400) {
            if (!$("#up").is(":visible")) {
                try {
                    $("#up").fadeIn();
                } catch (e) {}
            }
        }else {
            if ($("#up").is(":visible")) {
                try {
                    $("#up").fadeOut();
                } catch (e) {}
            }
        }


    });

    $("#up").click(function(){
        $('html,body').animate({scrollTop:"0px"},300)
    });

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
            }).blur(function () {
                if (that.val() === "") {
                    that.val(text).addClass('placeholder');
                }
            }).closest('form').submit(function () {
                if (that.val() === text) {
                    that.val('');
                }
            });
        });
    };


})