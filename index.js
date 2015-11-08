var image = document.getElementById("image");
var text = document.getElementById("surprise");

image.onmouseover = function () {
  	$(image).fadeOut();
}

image.onmouseleave = function () {
  	$(image).fadeIn();
}

text.onclick = function () {
	image.style.display = "initial";
	text.style.display = "none";
}

// JavaScript File