function init() {
	try {
		if(event) {
			document.onmousemove = posIE;
			document.onkeyup = zeichenIE;
		}
	} catch (e) {
		document.onmousemove = posMZ;
		document.onkeyup = zeichenMZ;
	}
}

function posIE() {
	document.getElementById("koord").innerHTML = "<h5>Koordinaten</h5>X: " + event.x + ", Y: " + event.y;
}

function posMZ(ev) {
	document.getElementById("koord").innerHTML = "<h5>Koordinaten</h5>X: " + ev.clientX + ", Y: " + ev.clientY;
}

function zeichenIE() {
	document.getElementById("zeichen").innerHTML = "<h5>Tastaturcode</h5>" + event.keyCode;
}

function zeichenMZ(ev) {
	document.getElementById("zeichen").innerHTML = "<h5>Tastaturcode</h5>" + ev.which;
}

window.onload = init;
