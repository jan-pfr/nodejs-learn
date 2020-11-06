function init() {
	with(document) {
		getElementsByTagName("img")[0].onmouseover = function() {
			for(i in event) {
				document.getElementById("info").innerHTML += 
				"Eigenschaft: " + i + " - Wert: " + event[i] + "<br />";
			}
		}
		getElementById("info").onclick = function() {
			this.innerHTML = "";
		}
	}
}

window.onload = init;
