var obj = new Object();
function getWS() {
	return "<a href='http://rjs.de'>www.rjs.de</a>";
}
obj.firma = "RJS EDV-KnowHow";
obj.getWebseite = getWS;
obj.getBlog= function() {
	return "<a href='http://blog.rjs.de'>blog.rjs.de</a>";
}