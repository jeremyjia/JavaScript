function api3(_listURL) {
if(!_listURL){_listURL = "https://api.github.com/repos/littleflute/JavaScript/issues/9";}
  function _api3JobClass(){
   var _nTime = 0;
   var _vTimer = null;
    this.v = "v0.0. 323" + _listURL;   
  var _makeMp3List2Div = function(d,txt){
      var _f = function (o){
        eval(o.body);
        _parseFun (d,txt);
      }
      w3.getHttpObject(_listURL, _f);	
  }
   var _TimeFun = function(){	 				 	
       var p = bl$("id_mp3Player"); 	
      if(!p.users) p.users = [];
      _nTime ++;
      if(_vTimer ) _vTimer.innerHTML = _nTime +  ": " + p.currentTime + "/" + p.duration;
      for(i in p.users){
           p.users[i].currentTimeFun();
      }	 	 
   }	 
    this.blrMp3Player = function(b,d){
        if(!d.v){
            d.v = blo0.blDiv(d,d.id+"v","v",blGrey[3]);
           _vTimer  = blo0.blDiv(d,d.id+"_vTimer ","_vTimer ",blColor[4]);

             var _f = "https://littleflute.github.io/bat/mp3/MereChristianity/cd1/00_Preface.mp3";
            blo0.blAudio (d.v,"id_mp3Player",_f);
            b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
        }
    }//this.blrMp3Player
  
 

    this.blrMp3List = function(b,d){ 
            if(!d.v){
                 d.v = blo0.blDiv(d,d.id+"v","v",blGrey[3]); 

                 d.v4List = blo0.blDiv(d,d.id+"v4List ","v4List ",blColor[4]);
                 function _loadListComments(o) {
				for(i in o){ 
					 var btn = blo0.blBtn(d.v,d.v.id + "_btn_"+i, i+1,blColor[i]);
					 btn.txt = o[i].body; 
					 btn.onclick = function(_this){
					        return function (){_makeMp3List2Div(d.v4List,_this.txt);};
					 }(btn);
				}
			}
			w3.getHttpObject(_listURL  + "/comments", _loadListComments);	
             }

		_on_off_div(b,d);		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
    }//this.blrMp3List 

   this.bllVOA = "VOA";
  this.blrVOA = function(b,d){
           if(!d.v){
                 d.v = blo0.blDiv(d, "id_div_4_VOA", "v" ,blGrey[2]); 
                 function _RunJS(o) {
				d.v.innerHTML = o.body; eval(o.body);
			}var url = "https://api.github.com/repos/littleflute/JavaScript/issues/13";
			w3.getHttpObject("https://api.github.com/repos/littleflute/voa/issues/1", _RunJS);	
           }
	  _on_off_div(b,d);	
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];	
  }

   this.bllAbout = "About";
this.blrAboutI7C3= function(b,d){		
        if(!d.v){
                 d.v0 = blo0.blDiv(d, "id_div_4_blrAboutI7C3_v0", "v0" ,blGrey[2]); 
                d.v0.b1 = blo0.blBtn(d.v0,d.v0.id + "_btn1",  "blGrey[5]", blGrey[5]);
               d.v0.b1.onclick = function(){ d.parentElement.style.background = blGrey[5]; }
               d.v0.b1.onclick();


                 d.v = blo0.blDiv(d, "id_div_4_blrAboutI7C3", "blrAboutI7C3" ,blGrey[2]); 
		var s = "blrAboutI7C3<br>"; 

		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/issues/7'"
		s += " style='color:blue;'";
		s +=">";
		s += "#7*  ";
		s += "</a>"; 

		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/7/c3.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " c3.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/7/c3.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " c3.js ";
		s += "</a>"; 
		d.v.innerHTML = s;
  }
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}//this.blrAboutI7C3

     setInterval(_TimeFun , 100);	
  }//_api3JobClass

var v = document.body;//this.parentElement;
var d = blo0.blMDiv(v,v.id+"api3","api3",101,10,500,400,blGrey[6]);
if(!d.v){
  d.v = blo0.blDiv(d,d.id+"v","v",blColor[0]);
  blo0.blShowObj2Div(d.v, new _api3JobClass); 
  if(bl$("blrMp3Player")){bl$("blrMp3Player").click();}
  if(bl$("blrMp3List")){bl$("blrMp3List").click();}
  if(bl$("blrVOA")){bl$("blrVOA").click();}
  if(bl$("blrAboutI7C3")){bl$("blrAboutI7C3").click();bl$("blrAboutI7C3").click();}
}
_on_off_div(this,d);
var b = this;
b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
}
