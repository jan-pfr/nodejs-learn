function plausi() {
	var f = document.forms[0];
	var fehler = false;
	var regausdruck = new RegExp('.@.');
	meldungenLeeren();
	with(document) {
		// Kontrolle E-Mail
		if(!regausdruck.test(getElementById("email").value)) {
			getElementById("emailinfo").innerHTML = "Die E-Mail ist falsch";
			getElementById("email").style.backgroundColor = "red";
			getElementById("email").value = "";
			getElementById("email").focus();
			fehler = true;
		}
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
		f.action = "http://safety-first-rock.de/info.php";
		f.submit();

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
		getElementById("emailinfo").innerHTML = "";
		getElementById("email").style.backgroundColor = "white";
		getElementById("user").style.backgroundColor = "white";
		getElementById("pw").style.backgroundColor = "white";
	}
}

function init() {
	document.getElementById("frage").onclick = plausi;
	document.getElementById("zurueck").onclick = zuruecksetzen;
}

window.onload = init;
