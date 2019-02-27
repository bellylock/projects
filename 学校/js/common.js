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
                })
                .closest('form').submit(function(){
                if(that.val() === text){
                    that.val('');
                }
            });
        });
    };

    $(window).scroll(function(){
       var height = $(window).scrollTop();
       var scroll = parseInt(height);
       if( scroll >= 200){
           $("#ToTop").fadeIn()
       }else{
           $("#ToTop").fadeOut()
       }
    });

    $("#ToTop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },300)
    })

})