var mB1 = new Image();
var mB2 = new Image();
mB1.src = "images/b1.png";
mB2.src = "images/b2.png";
var counter = 0;
function ani() {
	counter++;
	document.getElementById("b1").src = mB1.src;
	document.getElementById("b1").style.height = (30 + counter * 3) + "px";
	document.getElementById("b1").style.width = (40 + counter * 4) + "px";
	document.getElementById("p1").style.top = parseInt(document.getElementById("p1").style.top) + 1 + "px";
	document.getElementById("p1").style.left = parseInt(document.getElementById("p1").style.left) + 1 + "px";
	if(counter < 100)
		window.setTimeout("ani()", 10);
	else {
		document.getElementById("b1").src = mB2.src;
		counter = 0;
	}
}
function retur() {
	init();
	document.getElementById("b1").src = mB1.src;
	document.getElementById("b1").style.height = 30 + "px";
	document.getElementById("b1").style.width = 40 + "px";
	counter = 0;
}

function init() {
	document.getElementById("p1").style.top = "120px";
	document.getElementById("p1").style.left = "100px";
}