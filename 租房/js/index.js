$(function () {
    $(".face").emojioneArea();
    /*添加表情*/

    if (!$('counterup-nums')) {
        return;
    }
    window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js"><\/script>');
    $('.countNum').countUp();


    $(".area").hover(function () {
        $(this).children("ul").stop().slideToggle(300)
    });

    $(".magnifyImg").hover(function () {
        $(this).find("img").css({"transition": "all .3s", "transform": "scale(1.2)"})
    }, function () {
        $(this).find("img").css({"transition": "all .3s", "transform": "scale(1)"})
    });

    $(".footer .footer_info .left li a").hover(function () {
        $(this).css({"color": "#ffa001", "transition": "all .3s", "transform": "translateX(10px)"})
    }, function () {
        $(this).css({"color": "#333", "transition": "all .3s", "transform": "translateX(0px)"})
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

    //发布
    $(".subMsg").click(function () {
        var i = $(this).attr("index");
        var status = $(this).attr("data-status");
        var texts = $($(".evubox")[i]).find("span").text();
        var name = $(".account .name a:first-child").text();
        var level = $(".account .name a:eq(1)").attr("class");
        var dates = new Date();
        // var datenow = dates.toLocaleString();  //当前时间 年/月/日 上下午 几点几分几秒
        var month = dates.getMonth();
        var date = dates.getDate();
        var hour = dates.getHours();
        var minutes = dates.getMinutes();
        if (minutes <= 9) {
            minutes = "0" + minutes;
        }
        var time = (month + 1) + "月" + date + "日" + "&nbsp;" + hour + ":" + minutes;

        var value = $($(".subMsg")[i]).parents(".sendmsg").find(".emojionearea-editor").html();
        if (value == "") {
            return;
        } else if (status == 0) {
            $($(".evaluation")[i]).find("ul").prepend(`
                    <li>
                        <a href="###" class="head_pic"><img src="images/ocean3.jpg" alt=""></a>
                        <div class="add_eva">
                            <a class="name" href=""###>${name}</a>
                            <a href="###" class="${level}"></a>
                            <span>${value}</span>
                            <p>${time}<a class="deletelist" index="${i}">删除</a></p>
                        </div>
                    </li>
                `);
            if ($.isNumeric(texts) == false) {
                texts = 1;
            } else {
                texts++;
            }
            $($(".subMsg")[i]).parents(".sendmsg").find(".emojionearea-editor").text("");
            $($(".evubox")[i]).find("span").text(texts);
            $($(".subMsg")[i]).attr("data-status", 1);
        } else {
            // layer.msg("您已经发布过了！");
        }
    });

    //删除
    $(".evaluation").on("click", ".deletelist", function (event) {
        var i = $(this).attr("index");
        var texts = $($(".evubox")[i]).find("span").text();
        layer.confirm("确认是否删除", {
            btn: ["删除", "取消"]
        }, function () {
            layer.closeAll();
            $($(".evaluation")[i]).find(".deletelist").parents("p").parents(".add_eva").parents("li").remove();
            if (texts == 1) {
                texts = "评论";
            } else {
                texts--;
            }
            $($(".evubox")[i]).find("span").text(texts);
            $($(".subMsg")[i]).attr("data-status", 0);
        }, function () {
        });
        event.stopPropagation();

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
        // if (height >= 1500) {
        //     $("#lasttwo").css({"position": "fixed", "top": "65px", "right": "50%", "marginRight": "-570px"});
        // } else {
        //     $("#lasttwo").css({"position": "absolute", "top": "1580px", "right": "50%", "marginRight": "-570px"});
        // }
        if (height >= 1500) {
            $("#lasttwo").css({
                "position": "fixed",
                "top": "65px",
                "right": "50%",
                "marginRight": "-570px",
                "display": "block"
            });
        } else {
            $("#lasttwo").css("display", "none");
        }

    });
    $("#backUp").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 300);
    });

    // 图片预览
    $('.cabinPics1').imagesGrid({
        images: [
            'images/f1.jpg',
            'images/adv2.jpg',
            'images/ocean3.jpg',
            'images/f4.jpg',
            'images/f5.jpg',
            'images/f6.jpg',
            'images/f1.jpg',
            'images/f2.jpg',
            'images/f3.jpg',
            'images/f4.jpg',
            'images/f5.jpg',
            'images/f6.jpg',
        ],
        align: true
    });

    $('.cabinPics2').imagesGrid({
        images: [
            'images/f1.jpg',
            'images/f2.jpg',
            'images/f3.jpg',
            'images/f4.jpg',
            'images/f5.jpg',
            'images/f6.jpg',
        ],
        align: true
    });

    //关注
    $(".add_concern").click(function () {
        var index = $(this).attr("index");
        var status = $(this).attr("data-status");
        if (status == 0) {
            $($(".add_concern")[index]).find("i").text("√");
            $($(".add_concern")[index]).find("em").text("已关注");
            $($(".add_concern")[index]).attr("data-status", 1);
            $($(".concern_list")[index]).css("display", "block");
            $($(".add_concern")[index]).hover(function () {
                $($(".concern_list")[index]).css("display", "block");
            }, function () {
                $($(".concern_list")[index]).css("display", "none");
            });
            $($(".concern_list")[index]).hover(function () {
                $(this).css("display", "block");
            }, function () {
                $(this).css("display", "none");
            });
            $($(".concern_list")[index]).click(function () {
                $($(".add_concern")[index]).find("em").text("特别关注");
                $(this).fadeOut();
            });
        } else {
            $($(".add_concern")[index]).find("i").text("+");
            $($(".add_concern")[index]).find("em").text("关注");
            $($(".add_concern")[index]).attr("data-status", 0);
            $($(".concern_list")[index]).css("display", "none");
            $($(".add_concern")[index]).hover(function () {
                $($(".concern_list")[index]).css("display", "none");
            }, function () {
                $($(".concern_list")[index]).css("display", "none");
            });
        }
    });

    // 点赞
    // $.isNumeric("12")  判断是否为数字
    $(".praise_bar").click(function () {
        // var num = 1;
        var status = $(this).attr("data-status");
        var index = $(this).attr("index");
        var value = $($(".praise_bar")[index]).children("span").text();
        var judge = parseInt(value);
        // alert(judge);
        if (status == 0) {
            $($(".praise_bar")[index]).find(".praiseIcon").css({"backgroundPosition": "-460px -6px"});
            $($(".praise_bar")[index]).find("span").css("color", "#dc0201");
            $($(".praise_bar")[index]).attr("data-status", 1);
            if ($.isNumeric(judge) == false) {
                value = 1;
            } else {
                value++;
            }

        } else {
            $($(".praise_bar")[index]).attr("data-status", 0);
            $($(".praise_bar")[index]).find(".praiseIcon").css({"backgroundPosition": "0 -6px"});
            $($(".praise_bar")[index]).find("span").css("color", "#666");
            if ($.isNumeric(judge) == false) {
                value = 1;
            } else if (value > 1) {
                value--;
            } else {
                value = "赞";
            }
        }

        $($(".praise_bar")[index]).children("span").text(value);

    });

    $(".share_bar").hover(function () {
        $(this).find("p").stop().slideToggle(300)
    });

    //评论
    $(".evubox").click(function () {
        var index = $(this).attr("index");
        var status = $($(".evubox")[index]).attr("data-status");
        if (status == 0) {
            $($(".evaluation")[index]).slideDown(300);
            $($(".evubox")[index]).attr("data-status", 1);
        } else {
            $($(".evaluation")[index]).slideUp(300);
            $($(".evubox")[index]).attr("data-status", 0);
        }

    });

    //分享
    $(".share_qq").hover(function () {
        var index = $(this).attr("index");
        $($(".share_bar .qq_img")[index]).fadeIn();
    }, function () {
        var index = $(this).attr("index");
        $($(".share_bar .qq_img")[index]).fadeOut();
    });

    $(".share_wechat").hover(function () {
        var index = $(this).attr("index");
        $($(".share_bar .wechat_img")[index]).fadeIn();
    }, function () {
        var index = $(this).attr("index");
        $($(".share_bar .wechat_img")[index]).fadeOut();
    });

    //上传图片
    var app = new Vue({
        el: '#app',
        data() {
            return {
                imgList: [],
                size: 0,
                surplus: 9,
                num: 0
            };
        },
        methods: {
            fileClick() {
                document.getElementById('upload_file').click();
            },
            fileChange(el) {
                if (!el.target.files[0].size) return;
                this.fileList(el.target);
                el.target.value = '';
            },
            fileList(fileList) {
                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                    //判断是否为文件夹
                    if (files[i].type != '') {
                        this.fileAdd(files[i]);
                    } else {
                        //文件夹处理
                        this.folders(fileList.items[i]);
                    }
                }
            },
            //文件夹处理
            folders(files) {
                let _this = this;
                //判断是否为原生file
                if (files.kind) {
                    files = files.webkitGetAsEntry();
                }
                files.createReader().readEntries(function (file) {
                    for (let i = 0; i < file.length; i++) {
                        if (file[i].isFile) {
                            _this.foldersAdd(file[i]);
                        } else {
                            _this.folders(file[i]);
                        }
                    }
                });
            },
            foldersAdd(entry) {
                let _this = this;
                entry.file(function (file) {
                    _this.fileAdd(file);
                });
            },
            fileAdd(file) {
                //总大小
                this.size = this.size + file.size;
                //判断是否为图片文件
                if (file.type.indexOf('image') == -1) {
                    file.src = 'wenjian.png';
                    this.imgList.push({
                        file
                    });
                } else {
                    let reader = new FileReader();
                    reader.vue = this;
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        file.src = this.result;
                        // this.vue.imgList.push({
                        //     file
                        // });
                        // this.num = this.vue.imgList.length;
                        if (this.vue.imgList.length >= 9) {
                            return;
                        } else {
                            this.vue.imgList.push({
                                file
                            });

                        }
                    };
                }
            },
            fileDel(index) {
                this.size = this.size - this.imgList[index].file.size;//总大小
                this.imgList.splice(index, 1);
            },
            bytesToSize(bytes) {
                if (bytes === 0) return '0 B';
                let k = 1000, // or 1024
                    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                    i = Math.floor(Math.log(bytes) / Math.log(k));
                return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
            },

            // dragenter(el) {
            //     el.stopPropagation();
            //     el.preventDefault();
            // },
            // dragover(el) {
            //     el.stopPropagation();
            //     el.preventDefault();
            // },
            // drop(el) {
            //     el.stopPropagation();
            //     el.preventDefault();
            //     this.fileList(el.dataTransfer);
            // }
        }
    });

    // 首页编辑栏
    // layui.use('layedit', function () {
    //     var layedit = layui.layedit;
    //
    //     var index = layedit.build('demo', {
    //         tool: ['strong', 'italic', 'underline', 'del', '|', 'left', 'center', 'right','|', 'face','image'],//设置需要的控件
    //         // hideTool: ['image'],  //隐藏某个工具
    //         height:130,   //编辑器高度
    //         uploadImage: {
    //             url: 'json/upload/demoLayEdit.json',
    //             type: 'get'
    //         }
    //     });
    // });

    //分页
    layui.use(['laypage', 'layer'], function () {
        var laypage = layui.laypage,
            layer = layui.layer;
        //总页数大于页码总数
        laypage.render({
            elem: 'demo1'
            , count: 70 //数据总数
            , jump: function (obj) {
                // console.log(obj)
            }
        });
    });

});