zit = new Array();
zit[0] = "Wenn etwas schiefgehen kann, dann geht es schief.";
zit[1] = "'s ist schlimm, wenn man alt wird,' das Alter spricht,"+
" 'aber schlimmer ist es, man wird es nicht!'";
zit[2] = "Wie alt, glauben Sie, Herr Doktor, kann ich werden?" + 
" - Rauchen Sie?" + " - Nein." + " - Trinken Sie?" + " - Nein." 
+ " - Frauen?" + " - Niemals." + " - Warum wollen Sie alt werden?";
zit[3] = "Um Erfolg zu haben, muß man aussehen, als habe man Erfolg.";
zit[4] = "Eine Möglichkeit, das letzte Wort zu haben,"+
" hat der Ehemann immer: Er kann um Verzeihung bitten.";
zit[5] = "Alter ist die Zeit, wo die Erinnerung an die Stelle der Hoffnung tritt.";

function zitat() {
	var besuch = new Date().getHours();
	if (besuch < 4) {
		document.write(zit[0]);
	} else if (besuch < 8) {
		document.write(zit[1]);
	} else if (besuch < 12) {
		document.write(zit[2]);
	} else if (besuch < 16) {
		document.write(zit[3]);
	} else if (besuch < 20) {
		document.write(zit[4]);
	} else {
		document.write(zit[5]);
	}
}