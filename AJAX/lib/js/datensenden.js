var resOb = erzXHRObjekt();
function sndReqGET() {
	var params = "user=admin&pw=geheim";
	resOb.open('get', 'ajax.php?' + params, true);
	resOb.onreadystatechange = handleResponse;
	resOb.send(null);
}

function sndReqPOST() {
	var params = "blz=90150001&konotnr=4711007";
	resOb.open('post', 'ajax.php', true);
	resOb.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	resOb.setRequestHeader("Content-length", params.length);
	resOb.onreadystatechange = handleResponse;
	resOb.send(params);
}

function handleResponse() {
	if(resOb.readyState == 4) {
		document.getElementById("antwort").innerHTML = resOb.responseText;
	}
}

function init() {
	document.getElementById("sendeget").onclick = sndReqGET;
	document.getElementById("sendepost").onclick = sndReqPOST;

}

window.onload = init;
