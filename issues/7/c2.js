function api2() {
    function _api2JobClass(){
        this.v = "v0.0. 124";
this.blrRunJS = function(b,d){
		if(!d.v){
			d.v = blo0.blDiv(d,d.id+"v","",blGrey[5]);
			d.v.ta = blo0.blTextarea(d.v,d.v.id+"ta","alert(1);",blGrey[3]);
                        d.v.ta.style.width="95%"; 
                        d.v.ta.style.height="150px"; 
			d.v.btnRun= blo0.blBtn(d.v,d.v.id+"btnRun","run;",blColor[4]);
			d.v.btnRun.onclick= function(){
			    eval(d.v.ta.value);
			}

			function _loadIssue10Comments(o) {
				var _i = 0;
				 
				var _v = blo0.blDiv(d.v,d.v.id+"_v", "_v", blGrey[1]);
				for(i in o){
					_i++;
					var a = o[i].body;
					var btnJS = blo0.blBtn(_v, _v.id+"btnJS"+i,_i,blGrey[2]);
					btnJS.onclick = function(_txt){
				               return function(){d.v.ta.value = _txt;}
				        }(a);
				}

			}
			var _src = "https://api.github.com/repos/littleflute/JavaScript/issues/10/comments";
			w3.getHttpObject(_src, _loadIssue10Comments);	
                 }
		_on_off_div(b,d);		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];                  
}//this.blrRunJS
this.bll1="--1--";
this.blrIssue8C = function(b,d){
		if(!d.v){
			d.v = blo0.blDiv(d,d.id+"v","v",blGrey[5]);
			d.v.innerHTML = "blrIssue8C <br>"; 
			function _loadIssue8Comments(o) {
				for(i in o){
					var a = o[i].body;
					var b = a.split("~~~html");
					var c = b[1].split("~~~"); 
					d.v.innerHTML += c[0]; 
					d.v.innerHTML += "<br>";
				}

			}
			w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/8/comments", _loadIssue8Comments);		
		}
		_on_off_div(b,d);		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	} 
this.blrAboutI7C2= function(b,d){		
		var s = "blrAboutI7C3<br>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/issues/7'"
		s += " style='color:blue;'";
		s +=">";
		s += "#7*  ";
		s += "</a>"; 

		s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/7/c2.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " c2.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/JavaScript/issues/7/c2.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " c2.js ";
		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}//this.blrAboutI7C2
    }
var v = document.body;//this.parentElement;
var d = blo0.blMDiv(v,v.id+"api2","api2",101,10,500,400,blGrey[5]);
if(!d.v){
    d.v = blo0.blDiv(d,d.id+"v","v",blColor[0]);
    blo0.blShowObj2Div(d.v, new _api2JobClass);
   if(bl$("blrIssue8C")){bl$("blrIssue8C").click();}
   if(bl$("blrRunJS")){bl$("blrRunJS").click(); bl$("blrRunJS").click();} 
   if(bl$("blrAboutI7C2")){bl$("blrAboutI7C2").click(); bl$("blrAboutI7C2").click();} 

}
_on_off_div(this,d);
var b = this;
b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
 
}
