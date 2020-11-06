function init() {
	document.getElementsByTagName("h2")[0].style.color = "red";
	document.getElementsByTagName("h2")[1].style.backgroundColor = "blue";
	document.getElementsByTagName("h3")[0].style.color = "yellow";
	document.getElementsByTagName("body")[0].style.backgroundColor = "lightgray";
	document.getElementsByTagName("body")[0].style.color = "green";
	document.getElementsByTagName("body")[0].style.textAlign = "center";
	document.getElementsByTagName("div")[1].style.fontSize = "36px";
	document.getElementsByTagName("div")[1].style.textAlign = "right";
	document.getElementById("d1").style.fontSize = "40px";
}

window.onload = init;
