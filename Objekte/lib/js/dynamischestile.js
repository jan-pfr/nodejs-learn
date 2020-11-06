function stil() {
	if(new Date().getHours() < 12) {
		document.write(
		'<link rel="stylesheet" href="lib/css/dynamischestile_1.css" type="text/css">');
	} else {
		document.write(
		'<link rel="stylesheet" href="lib/css/dynamischestile_2.css" type="text/css">');
	}
}