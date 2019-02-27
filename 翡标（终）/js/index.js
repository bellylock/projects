$(function(){
		/*$(".flipster").flipster({
			enableNav: true
		});*/
		$(".flipster").flipster({
			itemContainer: 			'ul', // Container for the flippin' items.
			itemSelector: 			'li', // Selector for children of itemContainer to flip
			style:							'coverflow', // Switch between 'coverflow' or 'carousel' display styles
			start: 							'center', // Starting item. Set to 0 to start at the first, 'center' to start in the middle or the index of the item you want to start with.
			
			enableKeyboard: 		false, // Enable left/right arrow navigation
			enableMousewheel: 	false, // Enable scrollwheel navigation (up = left, down = right)
			enableTouch: 				true, // Enable swipe navigation for touch devices
			
			enableNav: 					false, // If true, flipster will insert an unordered list of the slides
			enableNavButtons: 	true, // If true, flipster will insert Previous / Next buttons
			
			onItemSwitch: 			function(){}, // Callback function when items are switches
		});

		$(".sign_now").click(function(){
			var value1 = $(".name_input").val();
			var value2 = $(".dial_input").val();
			if( value1 == "" ){
				show();
				hid()
			}
		});

		function show(){
			$(".jump_name").fadeIn(100)
		}
		function hid(){
			$(".jump_name").fadeOut(6000)
		}

		$(".name_input").on("input",function(){
			$(".jump_name").css("display","none")
		});

		$(".dial_input").on("input",function(){
			var val  = $(this).val();
	        var asd = /[^\d]+/;  //非数字
	        if( asd.test(val) ){
	            $(".jump_dial").css("display","block")
	        }else{
	            $(".jump_dial").css("display","none")
	        }

		});

		$(".vedio_cover").click(function(){
			$(this).fadeOut("fast")
		});

		$(".rewrite").click(function(){
			$(".bar input").empty().val("");
			$(".bar textarea").empty().val("");
		});

		mui.init();
		document.getElementById("confirmBtn").addEventListener('tap', function() {
			var btnArray = ['取消', '确认'];
			mui.confirm('确认拨打电话：17077623107 吗？', '提示', btnArray, function(e) {
				if (e.index == 1) {
					window.location.href = 'tel:17077623107';
				}
			})
		});

		$(".dial_text").on("input",function(){
			this.value = this.value.replace(/\D/g,"")
		});

		










	
	});