function zeichnen() {
	var zeichnenbereich = document.getElementsByTagName('canvas')[0].getContext('2d');
	zeichnenbereich.fillStyle = "rgb(200,0,0)";
	zeichnenbereich.fillRect (15, 15, 155, 50);
	zeichnenbereich.fillStyle = "rgba(0, 20, 200, 0.2)";
	zeichnenbereich.fillRect (30, 40, 255, 250);
}
function init() {
	zeichnen();
}
window.onload=init;