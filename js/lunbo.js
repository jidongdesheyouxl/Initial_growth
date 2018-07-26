window.onload=function(){
	var wrap=document.getElementById('tenWrap'),
        pic=document.getElementById('tenBodyTo'),
        list=document.getElementsByClassName('contTen_body'),
        index=0,
        timer=null;
        
        // 定义并调用自动播放函数
      if(timer){
          
          clearInterval(timer);
          timer=null;
      }
	  timer=setInterval(autoplay,6000);
	  
	  // 定义图片切换函数
      function autoplay(){
          index++;
          if(index>=list.length){
              index=0;
          }
         changeoptions(index);
          
          
      }
      
      function changeoptions(curindex){
			for(var j=0;j<list.length;j++){
              pic.style.top=0;
              
          }
			var h = list[0].offsetHeight;
          pic.style.top=-curindex*h+'px';
		  index=curindex;
			} 
}
