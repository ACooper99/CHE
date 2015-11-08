var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var text1 = document.getElementById("Lindsey");
var text2 = document.getElementById("Kim");
var text1 = document.getElementById("Daniel");



img1.onmouseover = function () {
  	$(img1).fadeTo("slow", 0.33);
 }
 img2.onmouseover = function () {
  	$(img2).fadeTo("slow", 0.33);
 }
 img3.onmouseover = function () {
  	$(img3).fadeTo("slow",0.33);
}

img1.onmouseleave = function () {
  	$(img1).fadeIn();
 }
img2.onmouseleave = function () {
  	$(img2).fadeIn();
}
img3.onmouseleave = function () {
  	$(img3).fadeIn();
}

text1.onmouseover = function () {
	$(text1).fadeIn();
}
text2.onmouseover= function () {
	$(text2).fadeIn();
}
text3.onmouseover = function () {
	$(text3).fadeIn();
} // JavaScript File