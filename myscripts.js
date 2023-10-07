var x1 = 100;
var x2 = 100;
var x3 = 100;
var speed = 100;

var fish1 = document.getElementsByClass("phytofish");
var fish2 = document.getElementsByClass("foodfish fish");
var fish3 = document.getElementsByClass("co2fish fish");

    function movefish(){

        x1 = x1 + speed

        fish1.style.left = x1 + "px";
    
    }

setInterval(movefish, 200);