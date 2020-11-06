var farbAusnahme = new Error();

function init() {
	document.getElementsByTagName("button")[0].onclick = function() {
		var zufall = Math.floor(Math.random() * 2);
		try {
			if(zufall == 0)
				throw farbAusnahme;
			document.getElementsByTagName("h1")[0].style.backgroundColor = "blue";
		} catch(e) {
			document.getElementsByTagName("h1")[0].style.backgroundColor = "red";
		}
	}
}

window.onload = init;
