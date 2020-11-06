function bild(i) {
	document.getElementById("b1").src =
	window.frames[0].document.images[i].src;
}
function text(i) {
	document.getElementById("td2").innerHTML =
	window.frames[1].document.
	getElementsByTagName("h1")[i].innerHTML;
}
function init() {
	with (document) {
		getElementsByTagName("button")[0].onclick = function() {
			bild(0);
		}
		getElementsByTagName("button")[1].onclick = function() {
			bild(1);
		}
		getElementsByTagName("button")[2].onclick = function() {
			bild(2);
		}
		getElementsByTagName("button")[3].onclick = function() {
			bild(3);
		}
		getElementsByTagName("button")[4].onclick = function() {
			bild(4);
		}
		getElementsByTagName("button")[5].onclick = function() {
			text(0);
		}
		getElementsByTagName("button")[6].onclick = function() {
			text(1);
		}
	}
}
