   function get10(i){if(i<10){i="0"+i}return i} 
   setTimeout(function aee(){ 
    var se=new Date() 
    var sh=se.getHours() 
    var sm=se.getMinutes() 
    var ss=se.getSeconds() 
    if(sm==0&&ss==0){ 
     document.getElementById("audio").src="assets/audio/"+sh+".mp3" 
     document.getElementById("audio").play() 
	 document.getElementById("img").src="assets/img/"+sh+".png"
    } 
    setTimeout(aee,900) 
   },900) 
 
   setTimeout(function aee2(){ 
    var se=new Date() 
    var sh=se.getHours() 
    var sm=se.getMinutes() 
    var ss=se.getSeconds() 
    document.getElementById("time").innerHTML=get10(sh)+":"+get10(sm)+":"+get10(ss) 
    setTimeout(aee2,500) 
   },500) 
   var se=new Date() 
   var sh=se.getHours() 
   var sm=se.getMinutes() 
   var ss=se.getSeconds() 
   document.getElementById("time").innerHTML=get10(sh)+":"+get10(sm)+":"+get10(ss) 