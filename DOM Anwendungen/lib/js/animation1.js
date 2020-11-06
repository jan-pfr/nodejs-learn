var i = 0;
function ani() {
	with(document) {
	switch(i++) {
		case 0 :
			getElementsByTagName("h1")[0].style.color = "red";
			getElementsByTagName("h1")[0].style.backgroundColor= "blue";
			getElementsByTagName("h1")[0].style.fontSize= "62px";
			getElementsByTagName("h1")[0].style.textAlign= "center";
			getElementsByTagName("body")[0].style.backgroundColor= "gray";
			getElementsByTagName("h2")[0].style.color = "cyan";
			break;
		case 1 :
			getElementsByTagName("h1")[0].style.color = "yellow";
			getElementsByTagName("h1")[0].style.backgroundColor	= "black";
			getElementsByTagName("h1")[0].style.fontSize = "12px";
			getElementsByTagName("h1")[0].style.textAlign = "right";
			getElementsByTagName("body")[0].style.backgroundColor = "red";
			break;
		case 2 :
			getElementsByTagName("h1")[0].style.color = "red";
			getElementsByTagName("h1")[0].style.backgroundColor	= "white";
			getElementsByTagName("h1")[0].style.fontSize = "22px";
			getElementsByTagName("h1")[0].style.textAlign = "left";
			getElementsByTagName("body")[0].style.backgroundColor = "lightgray";
			getElementsByTagName("h3")[0].style.color = "purple";
			break;
		default :
			getElementsByTagName("h1")[0].style.color = "cyan";
			getElementsByTagName("h1")[0].style.backgroundColor	= "gray";
			getElementsByTagName("h2")[0].style.color = "black";
			getElementsByTagName("h3")[0].style.color = "black";
	}
	}
	i %= 4;
	setTimeout('ani()','1500');
}
window.onload=ani;