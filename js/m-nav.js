//script.js
$(document).ready(function () {
	$("nav").html(
		'<button id="menubar">' +
			'<svg width="150" height="85" viewBox="0 0 145 145" xmlns="http://www.w3.org/2000/svg">' +
			 　'<rect y="4" width="130" height="15" fill="white" />'　+
			'<rect y="29" width="130" height="15" fill="white" />' +
			'<rect y="54" width="130" height="15" fill="white" />' +
			'<rect y="79" width="130" height="15" fill="white" />' +
			'<rect y="104" width="130" height="15" fill="white" />' +
		'</svg>' +
	'</button>' +
	'<div id="menu_content">' +
		'<ul>' +
			'<li><a href="index.html">TOP</a></li>' +
			'<li><a href="bio.html">BIOGRAPHY</a></li>' +
			'<li><a href="main.html">MAIN</a></li>' +
		'</ul>' +
	'</div>'
	);
	$('#menubar').click(function () {
		$('#menu_content').toggleClass('open');
	});
});