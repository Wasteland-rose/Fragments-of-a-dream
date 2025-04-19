//script.js

/*------------------------------------------------------------------------------------------*/
$(document).ready(function () {
	$(".content").hide();
	$("#ALL").fadeIn();
/*--------------------------------------------------*/
$(document).ready(function () {
	$("#text-tag-menu").html(
		'<ul id="target-menu">' +
			'<li>' + '<a href="#" class="tag" data-target="ALL">すべて</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="R15">R15</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="R18">R18</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Gro">Gro</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Ero">Ero</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Death">死</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Unown">意味不明</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Flow">ノリ</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Love">恋愛</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Drama">ドラマ</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="BL">BL</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="LL">LL</a>' + '</li>' +
			'<li id="last">' + '<a href="#" class="tag" data-target="TL">TL</a>' + '</li>' +
		'</ul>'
	);
});
/*--------------------------------------------------
															--------------------------------------------------*/
$("#text-content").html(
	'<div id="Death" class="content">' +
		'<div class="main_content_black">' +
			'<div class="main_title_black"><a href="#">title</a></div>' +
			'<div class="main_summary">' +
				'概要' +
			'</div>' +
			'<div class="writing_day_black">執筆日：</div>' +
		'</div>' +
	'</div>' +
	'<div id="Death" class="content">' +
		'<div class="main_content_black">' +
			'<div class="main_title_black"><a href="#">title</a></div>' +
			'<div class="main_summary">' +
				'概要' +
			'</div>' +
			'<div class="writing_day_black">執筆日：</div>' +
		'</div>' +
	'</div>' +
	'<div id="Death" class="content">' +
		'<div class="main_content_black">' +
			'<div class="main_title_black"><a href="#">title</a></div>' +
			'<div class="main_summary">' +
				'概要' +
			'</div>' +
			'<div class="writing_day_black">執筆日：</div>' +
		'</div>' +
	'</div>' +
	'<div id="Death" class="content">' +
		'<div class="main_content_black">' +
			'<div class="main_title_black"><a href="#">title</a></div>' +
			'<div class="main_summary">' +
				'概要' +
			'</div>' +
			'<div class="writing_day_black">執筆日：</div>' +
		'</div>' +
	'</div>' +
	'<div id="Death" class="content">' +
		'<div class="main_content_black">' +
			'<div class="main_title_black"><a href="#">title</a></div>' +
			'<div class="main_summary">' +
				'概要' +
			'</div>' +
			'<div class="writing_day_black">執筆日：</div>' +
		'</div>' +
	'</div>' +
	'<div id="Death" class="content">' +
		'<div class="main_content_black">' +
			'<div class="main_title_black"><a href="#">title</a></div>' +
			'<div class="main_summary">' +
				'概要' +
			'</div>' +
			'<div class="writing_day_black">執筆日：</div>' +
		'</div>' +
	'</div>' +
	'<div id="Death" class="content">' +
		'<div class="main_content_black">' +
			'<div class="main_title_black"><a href="#">title</a></div>' +
			'<div class="main_summary">' +
				'概要' +
			'</div>' +
			'<div class="writing_day_black">執筆日：</div>' +
		'</div>' +
	'</div>' +
	'<div id="Death" class="content">' +
		'<div class="main_content_black">' +
			'<div class="main_title_black"><a href="#">title</a></div>' +
			'<div class="main_summary">' +
				'概要' +
			'</div>' +
			'<div class="writing_day_black">執筆日：</div>' +
		'</div>' +
	'</div>'
);
/*--------------------------------------------------
															--------------------------------------------------*/
	$(document).on("click", "#target-menu a", function (e) {
		e.preventDefault();  // リンクのデフォルト動作を防ぐ
		const target = $(this).data("target");

		if (target === "ALL") {
			$(".content").fadeIn();  // すべてのコンテンツを表示
		} else {
			$(".content").hide();  // 他のコンテンツを非表示
			$("#" + target).fadeIn();  // クリックしたターゲットだけ表示
		}
	});
});
/*------------------------------------------------------------------------------------------*/