$(function () {
    //展开评论
    $(".article .show").click(function(){
        var index = $(this).attr("index");
        var status = $(this).attr("data-status");
        $($("article section")[index]).slideToggle(300);
        if( status == 0){
            $($(".article .show")[index]).text("收起评论");
            $($(".article .show")[index]).attr("data-status",1);
        }else{
            $($(".article .show")[index]).text("查看评论");
            $($(".article .show")[index]).attr("data-status",0);
        }
    });

    //阅读更多展开
    statusOfReadmore();

    function statusOfReadmore() {
        // var array = document.getElementsByClassName("context_show");
        // for (var i = 0; i < array.length; i++) {
        //     var height = array[i].clientHeight;
        //     if (height > 40) {
        //         array[i].style.height = '40px';
        //     } else {
        //         array[i].style.height = 'auto';
        //     }
        // }

        var ele = document.getElementsByClassName("main_context");
        for (var i = 0; i < ele.length; i++) {
            var child1 = ele[i].children[0];
            var child2 = ele[i].children[1];
            var change_height;
            $(child1).each(function(){
                var height = $(this).height();
                change_height = height;
                if( height > 40){
                    $(this).height("40px");
                }else{
                    $(this).height("auto");
                }
            });
            $(child2).each(function(){
                if( change_height > 40 ){
                    $(this).css("display","block");
                }else{
                    $(this).css("display","none");
                }
            });
        }
    }

    $(".read_more_context").click(function () {
        var i = $(this).attr("index");
        var status = $(this).attr("data-status");
        if (status == 0) {
            $($(".context_show")[i]).css("height", "auto");
            $($(".read_more_context")[i]).text("收起文章");
            $($(".read_more_context")[i]).attr("data-status", 1);
        } else {
            $($(".context_show")[i]).css("height", "40px");
            $($(".read_more_context")[i]).text("阅读全文");
            $($(".read_more_context")[i]).attr("data-status", 0);
        }
    });

    //阅读更多展开
    // $(".read_more_context").click(function () {
    //     var i = $(this).attr("index");
    //     var status = $(this).attr("data-status");
    //     if (status == 0) {
    //         $($(".context_show")[i]).css("display", "none");
    //         $($(".context_hide")[i]).css("display", "block");
    //         $($(".read_more_context")[i]).text("收起文章");
    //         $($(".read_more_context")[i]).attr("data-status", 1);
    //     } else {
    //         $($(".context_show")[i]).css("display", "block");
    //         $($(".context_hide")[i]).css("display", "none");
    //         $($(".read_more_context")[i]).text("阅读全文");
    //         $($(".read_more_context")[i]).attr("data-status", 0);
    //     }
    // });

    //删除
    // $(".indexCabin").on("click",".deleteBtn",function(event){
    //    var i = $(this).attr("index");
    //    layer.confirm("确认要删除？",{
    //        btn:["删除","取消"],
    //    },function(){
    //        layer.closeAll();
    //        $($(".deleteBtn")[i]).parents(".indexCabin").remove();
    //        // $($(".indexCabin")[i]).css("display","none");
    //    },function(){});
    //    event.stopPropagation();
    // });

    $(".deleteBtn").click(function () {
        var i = $(this).attr('index');
        layer.confirm("确认是否删除", {
            btn: ["删除", "取消"]
        }, function () {
            layer.closeAll();
            // $($(".deleteBtn")[i]).parents(".indexCabin").css("display","none");
            $($(".deleteBtn")[i]).parents(".indexCabin").remove();
            for (var j = 0; j < $(".deleteBtn").length; j++) {
                $($(".indexCabin")[j]).attr("index", j);
                $($(".title_text")[j]).attr("index", j);
                $($(".user_title")[j]).attr("index", j);
                $($(".deleteBtn")[j]).attr("index", j);
                $($(".context_show")[j]).attr("index", j);
                $($(".context_hide")[j]).attr("index", j);
                $($(".read_more_context")[j]).attr("index", j);
            }
        }, function () {
        });
    });

    // $(".evaluation").on("click",".deletelist",function(event){
    //     var i = $(this).attr("index");
    //     var texts = $($(".evubox")[i]).find("span").text();
    //     layer.confirm("确认是否删除",{
    //         btn:["删除","取消"]
    //     },function(){
    //         layer.closeAll();
    //         $($(".evaluation")[i]).find(".deletelist").parents("p").parents(".add_eva").parents("li").remove();
    //         if( texts == 1 ){
    //             texts = "评论";
    //         }else{
    //             texts--;
    //         }
    //         $($(".evubox")[i]).find("span").text(texts);
    //         $($(".subMsg")[i]).attr("data-status",0);
    //     },function(){});
    //     event.stopPropagation();
    //
    // });

    // 图片预览
    $('.cabinPics1').imagesGrid({
        images: [
            'images/f1.jpg',
            'images/f2.jpg',
            'images/ocean3.jpg',
            'images/f4.jpg',
            'images/adv2.jpg',
            'images/f1.jpg',
        ],
        align: true
    });

    $('.cabinPics2').imagesGrid({
        images: [
            'images/f1.jpg',
            'images/f2.jpg',
            'images/f4.jpg',
        ],
        align: true
    });

    //分页
    layui.use(['laypage', 'layer'], function () {
        var laypage = layui.laypage,
            layer = layui.layer;
        //总页数大于页码总数
        laypage.render({
            elem: 'demo2'
            , count: 40 //数据总数
            , jump: function (obj) {
                // console.log(obj)
            }
        });
    });

});