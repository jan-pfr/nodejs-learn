var resOb = erzXHRObjekt();
function sndReq(i) {
	resOb.open('get', 'info.json', true);
	resOb.onreadystatechange = function() {
		handleResponse(i);
	}
	resOb.send(null);
}
function handleResponse(i) {
		var daten=null;
	if(resOb.readyState == 4) {
		daten=JSON.parse(resOb.responseText);
		document.getElementById("info" + i).innerHTML = daten.info[i];
	}
};
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
