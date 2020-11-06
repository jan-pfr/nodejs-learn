function anzeigen() {
	document.getElementById("info").innerHTML = "Gleitschirmfliegen";
}

function leeren() {
	document.getElementById("info").innerHTML = "";
}

function init() {
	document.getElementsByTagName("img")[1].onmouseover = anzeigen;
	document.getElementsByTagName("img")[1].onmouseout = leeren;

}

window.onload=init;