var i = 0;
var j = 0;
var timer1 = null;
var timer2 = null;
function animation1() {
	i++;
	document.getElementById("ani1").style.width = (2 * i) + "px";
	document.getElementById("ani1").style.height = i + "px";
	if(i > 200)
		i = 0;
	timer1 = setTimeout('animation1()', 5);
}

function animation2() {
	j++;
	document.getElementById("ani2").style.width = j + "px";
	if(j > 500)
		j = 0;
	timer2 = setTimeout('animation2()', 10);
}

function start() {
	animation1();
	animation2();
}

function stopp1() {
	if(timer1 != null)
		clearTimeout(timer1);
}

function stopp2() {
	if(timer2 != null)
		clearTimeout(timer2);
}