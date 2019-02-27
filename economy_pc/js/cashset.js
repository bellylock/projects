$(function(){
    $(".n_page input").on('input',function(){
        this.value = this.value .replace(/\D/g,"")
    });
    $(".n_pg").click(function(){
        var val = $(this).text();
        $(".n_pg").removeClass("n_pages");
        $(this).addClass("n_pages");
        $(".headpage").text(val)
    });
    $(".s_numbers").on('input',function(){
        this.value = this.value .replace(/\D/g,"")
    });

    //验证码倒计时
    var countdown=60;
    var countdown1=60;
    $("#code1").click(function(){
        sendemail()
    });
    $("#code2").click(function(){
        sendemail1()
    });
    function sendemail(){
        var obj = $("#code1");
        settime(obj);
    }
    function settime(obj) { //发送验证码倒计时
        if (countdown == 0) {
            obj.attr('disabled',false);
            obj.val("获取验证码");
            obj.css({"backgroundColor":"#0c61ed","border":"1px solid #0c61ed","color":"#fff"});
            countdown = 60;
            return;
        } else {
            // obj.attr('disabled',true);
            obj.css({"backgroundColor":"#eee","border":"1px solid #eee","color":"#ccc"});
            obj.attr('disabled',true);
            obj.val("重新发送(" + countdown + ")");
            countdown--;
        }
        setTimeout(function() {
                settime(obj) }
            ,1000)
    }

    function sendemail1(){
        var obj1 = $("#code2");
        settime1(obj1);
    }
    function settime1(obj1) { //发送验证码倒计时
        if (countdown1 == 0) {
            obj1.attr('disabled',false);
            obj1.val("获取验证码");
            obj1.css({"backgroundColor":"#0c61ed","border":"1px solid #0c61ed","color":"#fff"});
            countdown1 = 60;
            return;
        } else {
            // obj.attr('disabled',true);
            obj1.css({"backgroundColor":"#eee","border":"1px solid #eee","color":"#ccc"});
            obj1.attr('disabled',true);
            obj1.val("重新发送(" + countdown1 + ")");
            countdown1--;
        }
        setTimeout(function() {
                settime1(obj1) }
            ,1000)
    }

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
})