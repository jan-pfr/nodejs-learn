var resOb = erzXHRObjekt();
function sndReq() {
	var params = "user=" + document.getElementById("user").value + 
	"&pw=" + document.getElementById("pw").value;
	resOb.open('get', 'ajax.php?' + params, true);
	resOb.onreadystatechange = handleResponse;
	resOb.send(null);
}

function handleResponse() {
	if(resOb.readyState == 4) {
		with(document) {
			getElementById("antwort").innerHTML = resOb.responseText;
			getElementById("user").value = "";
			getElementById("user").disabled = true;
			getElementById("user").style.backgroundColor = "gray";
			getElementById("pw").value = "";
			getElementById("pw").disabled = true;
			getElementById("pw").style.backgroundColor = "gray";
			getElementById("logout").style.display = "block";
			getElementById("frage").style.display = "none";
			getElementById("zurueck").style.display = "none";
		}
	}
}

function plausi() {
	var f = document.forms[0];
	var fehler = false;
	meldungenLeeren();
	with(document) {
		// Kontrolle Passwort
		if(getElementById("pw").value == "") {
			getElementById("pwinfo").innerHTML = "Das Passwort darf nicht leer sein";
			getElementById("pw").style.backgroundColor = "red";
			getElementById("pw").value = "";
			getElementById("pw").focus();
			fehler = true;
		}

		// Kontrolle Userid
		if(getElementById("user").value.length < 8) {
			getElementById("userinfo").innerHTML = "Die Userid hat zu wenig Zeichen";
			getElementById("user").style.backgroundColor = "red";
			getElementById("user").value = "";
			getElementById("user").focus();
			fehler = true;
		}
	}
	if(!fehler) {
		fehler = false;
		sndReq();

	} else {
		fehler = false;
		return false;
	}
}

function zuruecksetzen() {
	var f = document.forms[0];
	if(confirm("Das Formular wird zurückgesetzt.\nSind Sie sicher?")) {
		meldungenLeeren();
		f.action = "";
		f.reset();
		return false;
	}
	return false;
}

function meldungenLeeren() {
	with(document) {
		getElementById("userinfo").innerHTML = "";
		getElementById("pwinfo").innerHTML = "";
		getElementById("user").style.backgroundColor = "white";
		getElementById("pw").style.backgroundColor = "white";
	}
}

function init() {
	document.getElementById("frage").onclick = plausi;
	document.getElementById("zurueck").onclick = zuruecksetzen;
}

window.onload = init;
