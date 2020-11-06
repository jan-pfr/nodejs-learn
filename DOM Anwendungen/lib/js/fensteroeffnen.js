var meinFenster = null;
function f1() {
	open("http://www.video2brain.com");
}

function f2() {
	open("http://rjsedv.blogspot.com", "fa", "width=600, height=450, " + 
	" resizable=yes, directories=yes, menubar=yes, location=yes");
}

function f3() {
	meinFenster = open("images/b1.jpg", "fb", "width=450, height=350, resizable=no," + 
	" directories=no, menubar=no, location=no");
}

function f4() {
	meinFenster = open("images/b2.jpg", "fb");
}

function f3_zu() {
	if(meinFenster != null) {
		meinFenster.close();
	}
}

