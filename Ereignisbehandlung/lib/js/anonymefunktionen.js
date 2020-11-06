function anzeigen(i) {
	switch(i) {
		case 0:
			document.getElementById("info").innerHTML = "Frühjahr";
			break;
		case 1:
			document.getElementById("info").innerHTML = "Winter";
			break;
		case 2:
			document.getElementById("info").innerHTML = "Sommer";
			break;
	}

}

function leeren() {
	document.getElementById("info").innerHTML = "";
}

function init() {
	with(document) {
		getElementsByTagName("img")[0].onmouseover = function() {
			anzeigen(0);
		}
		getElementsByTagName("img")[1].onmouseover = function() {
			anzeigen(1);
		}
		getElementsByTagName("img")[2].onmouseover = function() {
			anzeigen(2);
		}
		for(i in getElementsByTagName("img")) {
			getElementsByTagName("img")[i].onmouseout = leeren;
		}
	}
}

window.onload = init;
