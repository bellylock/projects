$(function(){
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);

        if (sTop >= 300) {
            if (!$("#up").is(":visible")) {
                try {
                    $("#up").fadeIn();
                } catch (e) {}
            }
        }
        else {
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

    $('.hero__scroll').on('click', function (e) {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 1200);
    });
})