var resOb = erzXHRObjekt();
function sndReq() {
	resOb.open('get', 'ajax.txt?z=' + Math.random(), true);
	resOb.onreadystatechange = handleResponse;
	resOb.send(null);
}

function handleResponse() {
	if(resOb.readyState == 4) {
		document.getElementById("antwort").innerHTML = resOb.responseText;
	}
}

function init() {
	document.getElementById("frage").onclick = sndReq;
}

window.onload = init;
