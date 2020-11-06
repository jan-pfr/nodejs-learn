var resOb = erzXHRObjekt();
function sndReq(i) {
	switch(i) {
		case 0:
			resOb.open('get', 'info0.txt', true);
			break;
		case 1:
			resOb.open('get', 'info1.txt', true);
			break;
		case 2:
			resOb.open('get', 'info2.txt', true);
			break;
	}
	resOb.onreadystatechange = function() {
		handleResponse(i);
	}
	resOb.send(null);
}

function handleResponse(i) {
	if(resOb.readyState == 4) {
		document.getElementById("info" + i).innerHTML = resOb.responseText;
	}
}

function out() {
	for( i = 0; i < 3; i++) {
		document.getElementById("info" + i).innerHTML = "";
	}
}

function init() {
	with(document) {
		getElementsByTagName("img")[0].onmouseover = function() {
			sndReq(0);
		}
		getElementsByTagName("img")[1].onmouseover = function() {
			sndReq(1);
		}
		getElementsByTagName("img")[2].onmouseover = function() {
			sndReq(2);
		}
		getElementsByTagName("img")[0].onmouseout = function() {
			out();
		}
		getElementsByTagName("img")[1].onmouseout = function() {
			out();
		}
		getElementsByTagName("img")[2].onmouseout = function() {
			out();
		}
	}
}

window.onload = init;
