function init() {
	if(navigator.appName.search("Microsoft") > -1) {
		document.onkeypress = function() {
			document.getElementById("info").innerHTML = "Gedrückter Tastencode: " + event.keyCode;
		}
		document.onmouseup = function() {
			var text = "Koordinatenangaben relativ zum Fenster (pageX und pageY): " + event.x + ", " + event.y + ".<br />";
			text += "Bildschirmkoordinaten (screenX und screenY): " + event.clientX + ", " + event.clientY + ".<br />";
			text += "Tastaturcode bzw. Maustastencode (which): " + event.button + ".<br />";
			text += "Art des Ereignisses (type): " + event.type + ".<br />";
			document.getElementById("info").innerHTML = text;
		}
	} else {
		document.onkeypress = function(evt) {
			document.getElementById("info").innerHTML = "Gedrückter Tastencode: " + evt.which;
		}
		document.onmouseup = function(ev) {
			var text = "Koordinatenangaben relativ zum Fenster (pageX und pageY): " + ev.pageX + ", " + ev.pageY + ".<br />";
			text += "Bildschirmkoordinaten (screenX und screenY): " + ev.screenX + ", " + ev.screenY + ".<br />";
			text += "Tastaturcode bzw. Maustastencode (which): " + ev.which + ".<br />";
			text += "Art des Ereignisses (type): " + ev.type + ".<br />";
			document.getElementById("info").innerHTML = text;
		}
	}
}

window.onload = init;
