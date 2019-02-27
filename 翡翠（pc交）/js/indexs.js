$(function(){
	//绑定滚动条事件  
    // $(window).bind("scroll", function () {  
    //     var wh = $(window).scrollTop();  
    //     var sTop = $(window).scrollTop();  
    //     var sTop = parseInt(sTop);  
    //     if (sTop >= 500) {
    //         if ($("#sidebar").css("display") == 'none') {  
    //             try {  
    //                 $("#sidebar").slideDown();  
    //             } catch (e) {  
    //                 $("#sidebar").show();  
    //             }                        
    //         }  
    //     }  
    //     else {  
    //         if ($("#sidebar").css("display") == 'block') {        
    //             try {  
    //                 $("#sidebar").slideUp();
    //             } catch (e) {  
    //                 $("#sidebar").hide();
    //             }                         
    //         }  
    //     } 
        
    // });
    //console.log($("#sidebarbtn").offset().top);  //130.796875
    
    //视频播放
    
    
    //$(document).scrollLeft()
    // - $("#sidebarbtn").width()
    
    //侧边栏  
    $("#sidebarbtn").click(function(){
      if( $(this).offset().left > $(window).width()* 0.95 ){
        $("#contact").attr("src","images/next-1.png");
        $("#sidebar").animate({right:150 + "px"},200);
        $("#sidebarbtn").animate({right:125 + "px"},200)
      }else{
        $("#contact").attr("src","images/prev-1.png");
        $("#sidebar").animate({right:0},200);
        $("#sidebarbtn").animate({right:0},200)
      }
    });

     var page = 1;
     var number = 4;               
     var father = $(".profession");
     var $width = father.width();
     var $ul = father.find("ul");
     var $li = $ul.find("li");
     var len = $li.length;
     var pageNum = Math.ceil(len / number);
     $(".next").on("click",function(){                 
          if(page==pageNum){
            $ul.animate({left:"0"},1000);
            page = 1;
          }else{
            $ul.animate({left:"-=" + $width},1000);               
            page++;
        } 
     });
     $(".prev").on("click",function(){
          var father = $(".profession");
          var $width = father.width();
          var $ul = father.find("ul");
          var $li = $ul.find("li");
          var len = $li.length;
          var pageNum = Math.ceil(len / number);            
          if( page!=1){$ul.animate({left:"+=" + $width},1000);page--}
          else{ $ul.animate({left:"-=" + $width*(pageNum-1)},1000);page=pageNum;}
     });


     $("#app").on("mouseenter mouseleave",function(event){
          if(event.type == "mouseenter"){
             $(".menu").css("display","block")
          }else{
             $(".menu").css("display","none")
          }
     });

     //placehlder兼容
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

        function showVideo(o,s,w, h, t){ //t文件格式 
var _html = ''; 
if($.inArray(t, ['ogg', 'mp4', 'webm']) >= 0){ //html5 surport 
var _doc=document.getElementsByTagName('head')[0]; 
var script=document.createElement('script'); 
script.setAttribute('type','text/javascript'); 
script.setAttribute('src','http://html5media.googlecode.com/svn/trunk/src/html5media.min.js'); 
_doc.appendChild(script); 
script.onload=script.onreadystatechange=function(){ 
if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){ 
_html = '<video src="'+s+'" width="'+w+'" height="'+h+'" controls autobuffer >'; 
_html += '</video>'; 
$(o).css({"width":w+'px', 'height':h+'px', 'cursor':'default'}); 
$(o).html(_html); 
} 
script.onload=script.onreadystatechange=null; 
} 
}else{ //other like 3gp 
_html += '<object width="'+w+'" height="'+h+'" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab">'; 
_html += '<param name="src" value="'+s+'">'; 
_html += '<param name="controller" value="true">'; 
_html += '<param name="type" value="video/quicktime">'; 
_html += '<param name="autoplay" value="false">'; 
_html += '<param name="target" value="myself">'; 
_html += '<param name="bgcolor" value="black">'; 
_html += '<param name="pluginspage" value="http://www.apple.com/quicktime/download/index.html">'; 
_html += '<embed src="'+s+'" width="'+w+'" height="'+h+'" controller="true" autoplay="false" align="middle" bgcolor="black" target="myself" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/index.html"></embed>'; 
_html += '</object>'; 
$(o).css({"width":w+'px', 'height':h+'px', 'cursor':'default'}); 
$(o).html(_html); 
} 
} 

})