$(document).ready(function(){
    $("#menu").click(function(){
        var status = $(this).attr("data-status");
        if( status == 0){
            $("#cover").fadeIn();
            $("#menubox").fadeIn();
            $("#menu").fadeOut();
            status = 1;
            $("#menu").attr("data-status",1);
            $("html,body").css({"overflow":"hidden","height":"100%"})
        }else{
            $("#cover").fadeOut();
            $("#menubox").fadeOut();
            $("#menu").fadeIn();
            status = 0;
            $("#menu").attr("data-status",0);
            $("html,body").css({"overflow":"scroll","height":"100%"})
        }
    });

    $("#close").click(function(){
        $("#menubox").fadeOut();
        $("#cover").fadeOut();
        $("#menu").fadeIn();
        $("#menu").attr("data-status",0)
    });

    $("#menubtn").click(function(){
        $(".about_list").slideToggle()
    })

})