//js1: _loadIssue @ INO
var INO = 11;

var s= "v0.0. 23 - ";
s += "<a target='_blank' href='https://github.com/littleflute/JavaScript/edit/master/issues/10/c1.js'"
s += " style='color:blue;'";		s +=">"; s += "c1.js* ";
s += "<a target='_blank' href='https://littleflute.github.io/JavaScript/issues/10/c1.js'"
s += " style='color:green;'";		s +=">"; s += "c1.js ";


var d = blo0.blMDiv(document.body,"id_mdiv_loadIssue" + INO , s,
            300,100,500,400,blColor[1]);
if(!d.v){
 d.v = blo0.blDiv(d,d.id+"v","v",blGrey[0]);   
 
  function _loadIssue (o) { 
    eval(o.body);
   new blIsseuClass(d.v);		
  }
  var url = "https://api.github.com/repos/littleflute/JavaScript/issues/" + INO;
  w3.getHttpObject(url, _loadIssue);
}
_on_off_div(null,d);
