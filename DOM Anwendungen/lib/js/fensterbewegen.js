var meinFenster = null;
function auf() {
	meinFenster = open("images/b1.jpg", "fb", "width=450, height=350");
}

function f1() {
	meinFenster.moveBy(100, 50);
}

function f2() {
 meinFenster.moveTo(100, 50);
}

function f3() {
	meinFenster.resizeBy(300, 200);
}

function f4() {
	meinFenster.resizeTo(100, 100);
}

