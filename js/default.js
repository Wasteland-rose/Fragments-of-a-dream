//script.js

/*----------------------------------------------------------------------------------------------------*/

$('header div').text('夢の破片');
$('footer div').html('&copy;&nbsp;2025&nbsp;Itone&nbsp;Kaei.');

		//--------------------------------------------------

$(document).ready(function () {
	$("nav").html(
		'<button id="NavSvg">' +
			'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">' +
			 　'<rect y="4" width="30" height="4" fill="white" />' +
				'<rect y="13" width="30" height="4" fill="white" />' +
				'<rect y="22" width="30" height="4" fill="white" />' +
		'</svg>' +
	'</button>' +
	'<div id="MenuContent">' +
		'<ul>' +
			'<li><a href="https://wasteland-rose.github.io/Fragments-of-a-dream/index.html">HOME</a></li>' +
			'<li><a href="https://wasteland-rose.github.io/Fragments-of-a-dream/bio.html">BIOGRAPHY</a></li>' +
			'<li><a href="https://wasteland-rose.github.io/Fragments-of-a-dream/main.html">MAIN</a></li>' +
			'<li><a href="https://wasteland-rose.github.io/Fragments-of-a-dream/links.html">LINKS</a></li>' +
		'</ul>' +
	'</div>'
	);

	$('#NavSvg').click(function () {
		$('#MenuContent').toggleClass('open');
	});
});