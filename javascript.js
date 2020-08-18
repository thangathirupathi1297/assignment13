var div=document.getElementById("div");
var colors=["red","green","yellow","blue","voilet","indigo","#9D8270","#BFC553","#E3A967","#FAD62E","#F8034A"];

function changecolor()
{
 var i=Math.floor(Math.random()*colors.length + 1);
 div.style.backgroundColor=colors[i]

}