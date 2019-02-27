$(function(){
	$(".reset").click(function(){
			$(".inp").val("");
			$(".emp").val(1);
			$(".end").val("");
			$(".ps").val("")
		});

		$(".resets").click(function(){
			$(".strings input").val("")
		});

		$(".near_time").click(function(){
			if( !$(this).find("i").hasClass("picked")){
				$(this).find("i").addClass("picked")
			}else{
				$(this).find("i").removeClass("picked")
			}
		});

		$(".fee_bar").click(function(){
			$(".fee_bar i").removeClass("fee_pick")
			$(this).children("i").addClass("fee_pick")
		});

		$(".range").on('input',function(){
			this.value = this.value.replace(/\D/g,"")
		});

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
	        })      
	        .blur(function(){      
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

	    $(".export").click(function(){
	    	$(".context .bbb").text("");
	    	for( var i = 0; i < $(".tab_date tbody tr .picked").length; i++ ){
	    		var a = $($(".tab_date tbody tr")[i]).children(".aut").text();
	    		var b = $($(".tab_date tbody tr")[i]).children(".pas").text();
	    		var c = $($(".tab_date tbody tr")[i]).children(".nums").text();
	    		var d = $($(".tab_date tbody tr")[i]).find(".po").text();
	    		var e = $($(".tab_date tbody tr")[i]).find(".pu").text();
	    		var f = $($(".tab_date tbody tr")[i]).find(".pe").text();
	    		var str = '<p>账户：'+a+'</p>'+
                          '<p>密码：'+b+'</p>'+
                          '<p>连接数：'+c+'</p>'+
                          '<p>'+d+'</p>'+
                          '<p>'+e+'</p>'+
                          '<p class="lastp">'+f+'</p>';
	    		$(".context .bbb").append(str)
	    	}
	    });

	    $(".fee_box input").on('input',function(){
	    	this.value = this.value.replace(/\D/g,"");
	    	var length = $(".tab_date tbody tr .picked").length;
	    	var pri = $(".fee_pick").siblings("span").find(".pri").text() * 1;
	    	var value = $(this).val();
	    	var price = length * value * pri;
	    	$("#fee_tals").text(price)
	    });

	    $(".fee_box input").change(function(){
	    	var value = $(this).val();
	    	var length = $(".tab_date tbody tr .picked").length;
	    	var pri = $(".fee_pick").siblings("span").find(".pri").text() * 1;
	    	if( value == "" || value <= 0){
	    		$(this).val(1);
	    		var price = length * 1 * pri;
	    		$("#fee_tals").text(price)
	    	}else{
	    		var price = length * value * pri;
	    		$("#fee_tals").text(price)
	    	}
	    	
	    });

	    $(".renew").click(function(){
	    	$(".context1 .names").text("");
	    	var length = $(".tab_date tbody tr .picked").length;
	    	var number = $(".fee_box input").val();
	    	var pri = $(".fee_pick").siblings("span").find(".pri").text() * 1;
	    	for( var i = 0; i < length; i++ ){
	    		var a = $($(".tab_date tbody tr")[i]).children(".aut").text();
	    		var str = '<span>'+ a + "，" +'</span>';
	    		$(".context1 .names").append(str);
	    	}
	    	var price = length * number * pri;
	    	console.log(pri);
	    	$("#fee_tals").text(price)
	    });

	    $(".bar1").click(function(){
	    	var length = $(".tab_date tbody tr .picked").length;
	    	var number = $(".fee_box input").val();
	    	var price = length * number * 4;
	    	$("#fee_tals").text(price)
	    });
	    $(".bar2").click(function(){
	    	var length = $(".tab_date tbody tr .picked").length;
	    	var number = $(".fee_box input").val();
	    	var price = length * number * 6;
	    	$("#fee_tals").text(price)
	    });
	    $(".bar3").click(function(){
	    	var length = $(".tab_date tbody tr .picked").length;
	    	var number = $(".fee_box input").val();
	    	var price = length * number * 10;
	    	$("#fee_tals").text(price)
	    });

	    $(".online").click(function(){
	    	$(".context2 tbody").text("");
	    	for( var i = 0; i < $(".tab_date tbody tr .picked").length; i++ ){
	    		var a = $($(".tab_date tbody tr")[i]).children(".aut").text();
	    		var str = '<tr>' +
			    				'<td>'+a+'</td>'+
		                        '<td>'+ '<sapn class="line_area">昆明</span>' +'</td>'+
		                        '<td>'+ '<span class="line_time">1小时</span>' +'</td>'+
		                        '<td>'+ '<a class="manipulate">下线</a>' +'</td>' + 
                          '</tr>';
	    		$(".context2 tbody").append(str)
	    	}
	    });

	    $(".refresh").click(function(){
	    	window.location.reload()
	    });

	    var ins = 0;
	    var wa = "";
	    var wb = "";
	    var wc = "";
	    $(".mdf").click(function(){
	    	$(".ma").val("");
	    	$(".mp").val("");
	    	$(".mi").val("");
	    	var index = $(this).attr("index");
	    	ins = index;
	    });

		var exportFun = function(obj1, obj2){
			obj1.zclip({
			    path:'js/ZeroClipboard.swf', //记得把ZeroClipboard.swf引入到项目中 
			    copy:function(){
			      return obj2.text();
			    },
			    afterCopy:function(){
			    	layer.msg('复制成功！');
			    }
			});
		}

	    layui.use('layer', function(){
		  	var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
		  	//触发事件
		  	var active = {
		  		
			    export2: function(){
			       	layer.open({
				        title:'文本信息',
				        type: 1,
				        btn:['复制','关闭'],
				        btn1:function(index, layero){
				        	// console.log($(layero).find('.layui-layer-btn0'));
				        	exportFun($(layero).find('.layui-layer-btn0'), $(layero).find('.bbb'));
							return false
				        },
				        skin: 'layui-layer-rim', 
				        area: ['430px', '500px'], 
				        content: $('#edit_text'),
				        success: function(layero, index){
				        	exportFun($(layero).find('.layui-layer-btn0'), $(layero).find('.bbb'));
				        }

			      	});
			    }
			    ,fees: function(){
			       	layer.open({
				        title:'批量续费',
				        type: 1,
				        btn:['确认','取消'],
				        btn1:function(){
				        	return false;
				        },
				        skin: 'layui-layer-rim', 
				        area: ['430px', '290px'], 
				        content: $('#fee_text')
			      	});
			    }
			    ,onlines: function(){
			       	layer.open({
				        title:'在线信息',
				        type: 1,
				        btn:['确认','取消'],
				        btn1:function(){
				        	return false;
				        },
				        skin: 'layui-layer-rim', 
				        area: ['430px', '320px'], 
				        content: $('#online_text')
			      	});
			    }
			    ,modify_file: function(){
			       	layer.open({
				        title:'编辑信息',
				        type: 1,
				        btn:['确认','取消'],
				        btn1:function(){
				        	var a = $(".ma").val();
					    	var b = $(".mp").val();
					    	var c = $(".mi").val();
					    	wa = a;
					    	wb = b;
					    	wc = c;
					    	$($(".aut")[ins]).text(wa);
					    	$($(".pas")[ins]).text(wb);
					    	$($(".pes")[ins]).text(wc);
					    	console.log(wa + "--" + wb + "--" + wc);
					    	layer.closeAll()
				        },
				        skin: 'layui-layer-rim', 
				        area: ['430px', '355px'], 
				        content: $('#modify_text')
			      	});
			    }
			    ,export1: function(){
			      layer.alert('请选择用户');
			    }
			};

			$('.exports').on('click', function(){
			    var type = $(this).data('type');
			    active[type] ? active[type].call(this) : '';
			});
		});

	    

	    layui.use('form', function(){});

	    layui.use('laydate', function(){
	    	var laydate = layui.laydate;
	    	//双控件
			laydate.render({
			    elem: '#test1' //指定元素
			    // ,value: '选择日期'
			    // ,type: 'date'
			    // ,trigger: 'click'
			    ,lang: 'cn'
			    //,lang: 'en'
			    ,range: true //开启日期范围，默认使用“_”分割
			    ,done: function(date){
			      // console.log(value, date, endDate);
			    }
			    ,change: function(date){
			      // console.log(value, date, endDate);
			    }
			});
			laydate.render({
			    elem: '#test2' //指定元素
			    ,lang: 'cn'
			    ,range: true //开启日期范围，默认使用“_”分割
			    ,done: function(date){}
			    ,change: function(date){}
			});
	    });

	    layui.use(['laypage', 'layer'], function(){
			var laypage = layui.laypage
			,layer = layui.layer;
			//总页数大于页码总数
			laypage.render({
			    elem: 'demo1'
			    ,count: 70 //数据总数
			    ,jump: function(obj){}
			});
		});

	    var count = 0;
	    $(".counts").click(function(event){
	    	if( !$(this).parents("tbody tr").children(".rect1").hasClass("picked") ){
	    		$(this).parents("tbody tr").children(".rect1").addClass("picked");
	    		count++;
	    		// console.log( "add" + count)
	    	}else{
	    		$(this).parents("tbody tr").children(".rect1").removeClass("picked");
	    		count--;
	    		// console.log( "reducve" + count)
	    	}

	    	var length = $(".rect1").length;
	    	if( count == length ){
	    		$(".rect_all").addClass("picked");
	    	}else{
	    		$(".rect_all").removeClass("picked");
	    	}
	    	// console.log( "total" + count)
	    });

	    $(".rect_all").click(function(){
	    	var length = $(".rect1").length;
	    	if( !$(this).hasClass("picked") ){
	    		$(this).addClass("picked");
	    		$(".rect1").addClass("picked");
	    		count = length;
	    		// console.log( "全选" + count)
	    	}else{
	    		$(this).removeClass("picked");
	    		$(".rect1").removeClass("picked");
	    		count = 0
	    		// console.log( "反全选" + count)
	    	}
	    	// console.log( count)
	    });

    	$(".uploads").click(function(){
            var code = "";
            var codeLength = 12;//验证码的长度
            var num = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
                's','t','u','v','w','x','y','z');//随机数
            for(var i = 0; i < codeLength; i++) {
                var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
                code += num[index];//根据索引取得随机数加到code上
                $(".beuped").text(code)
            }
		});
		

		
})