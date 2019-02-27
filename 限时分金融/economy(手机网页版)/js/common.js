$(function(){
	var countdown=60;
	$("#identify_code").click(function(){
		settime($(this))   //$(this)是实参
	});
	//obj是形参
	function settime(obj) { //发送验证码倒计时
	    if (countdown == 0) { 
	        obj.attr('disabled',false); 
	        //obj.removeattr("disabled"); 
	        obj.val("发送验证码");
	        countdown = 60; 
	        return;
	    } else { 
	        obj.attr('disabled',true);
	        obj.val("重新发送(" + countdown + ")");
	        countdown--; 
	    } 
		setTimeout(function() { 
	    	settime(obj) 
		},1000) 
	}
})
