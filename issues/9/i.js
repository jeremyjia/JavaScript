var _parseFun = function (d,txt){
      var str = "var a =" +  txt;  
     eval(str);
     d.innerHTML = "";
     var s = "<a href='https://github.com/littleflute/JavaScript/issues/9' target='_blank'>#9 v0.0. 25<a/> - "; 
    s += "<a href='https://github.com/littleflute/JavaScript/edit/master/issues/9/i.js' target='_blank'>i.js* <a/> - ";
    s += "<a href='https://littleflute.github.io/JavaScript/issues/9/i.js' target='_blank'>i.js<a/>";
     blo0.blDiv(d,d.id+"_#9_", s,blColor[4]);
     blo0.blDiv(d,d.id+"_title_", a.title,blColor[4]);
 
     for(i in a.songs){
           var p = bl$("id_mp3Player");
           var dSong = blo0.blDiv(d,d.id+"_mp3_"+i, a.songs[i].mp3,blGrey[5]);
           dSong .onclick = function(_this){ 
                return function(){ 
                   if(!p.dNow) p.dNow= null;
                   if(_this!= p.dNow){
                     p.src = _this.innerHTML; p.dNow = _this;
                     p.play();
                     _this.style.background = blGrey[0];
                   }
                }
           }(dSong )
           dSong .onmouseover= function(_this){                
                return function(){
                   if(!p.dNow) p.dNow= null;
                   if(_this!= p.dNow){ 
                     _this.style.background = blGrey[3];
                   }
                 }
           }(dSong )
           dSong .onmouseout= function(_this){ 
                return function(){
                   if(!p.dNow) p.dNow= null;
                   if(_this != p.dNow){ 
                     _this.style.background = blGrey[5];
                   }
                 }
           }(dSong )
      }
  }
