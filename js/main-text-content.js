//script.js

/*------------------------------------------------------------------------------------------*/
$(document).ready(function () {
	$(".content").hide();
	$(".content").fadeIn();
});
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
			'<li>' + '<a href="#" class="tag" data-target="Horror">ホラー</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Unown">意味不明</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Flow">ノリ</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Love">恋愛</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="Drama">ドラマ</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="BL">BL</a>' + '</li>' +
			'<li>' + '<a href="#" class="tag" data-target="GL">GL</a>' + '</li>' +
			'<li id="last">' + '<a href="#" class="tag" data-target="TL">TL</a>' + '</li>' +
		'</ul>'
	);
});
/*--------------------------------------------------
															--------------------------------------------------*/
$("#text-content").html(
	'<div class="content Drama Love">' +
		'<div class="main_content_purple">' +
			'<div class="main_title_purple">' + '<a href="main/moonlit_night.html">月夜</a>' + '</div>' +
					'<div class="content_tag_purple">' +
						'ドラマ / 恋愛' +
					'</div>' +
				'<div class="main_summary_purple">' +
					'現代 + ファンタジー + 恋愛 + シリアスで書きました。<BR />切ない感じを出すのに苦労しました。' +
				'</div>' +
				'<div class="writing_day_purple">' + '執筆日：執筆中' + '</div>' +
		'</div>' +
	'</div>'
);
/*--------------------------------------------------
															--------------------------------------------------*/
$(document).on("click", ".tag", function (e) {
	e.preventDefault(); // ページがジャンプしないように

	let target = $(this).data("target");

	$(".content").hide(); // 一旦全部隠す

	// 2秒後に指定されたタグを表示
	setTimeout(function () {
		if (target === "ALL") {
			$(".content").fadeIn(800); // "ALL" の場合は全部表示
		} else {
			$(".content." + target).fadeIn(800); // 指定されたタグだけ表示
		}
	}, 200); // ここで少しの遅延を加えて表示させる
});
/*------------------------------------------------------------------------------------------*/