function init() {
	with(document) {
		getElementsByTagName("img")[0].onmouseover = function(evt) {
			for(i in evt) {
				document.getElementById("info").innerHTML += 
				"Eigenschaft: " + i + " - Wert: " + evt[i] + "<br />";
			}
		}
		getElementById("info").onclick = function() {
			this.innerHTML = "";
		}
	}
}

window.onload = init;
