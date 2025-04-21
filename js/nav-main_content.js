//script.js
$(document).ready(function () {
	$("nav").html(
		'<button id="menubar">' +
			'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">' +
			 　'<rect y="4" width="30" height="4" fill="white" />'　+
			'<rect y="13" width="30" height="4" fill="white" />' +
			'<rect y="22" width="30" height="4" fill="white" />' +
		'</svg>' +
	'</button>' +
	'<div id="menu_content">' +
		'<ul>' +
			'<li><a href="../index.html">TOP</a></li>' +
			'<li><a href="../bio.html">BIOGRAPHY</a></li>' +
			'<li><a href="../main.html">MAIN</a></li>' +
			'<li><a href="../links.html">LINKS</a></li>' +
		'</ul>' +
	'</div>'
	);
	$('#menubar').click(function () {
		$('#menu_content').toggleClass('open');
	});
});