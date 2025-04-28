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
			'<li>' + '<a href="#" class="tag" data-target="ALL">ALL</a>' + '</li>' +
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
			'<li id="last">' + '<a href="#" class="tag" data-target="NL">NL</a>' + '</li>' +
		'</ul>'
	);
});
/*------------------------------------------------------------------------------------------
		black,red,blue,green,orange,pink,purple
		A15,R18,Gro,Ero,Death,Horror,Unown,Flow,Love,Drama,BL,GL,NL
	------------------------------------------------------------------------------------------*/
$("#text-content").html(
				/*--------------------*/
	'<div class="content Love">' +
		'<div class="main_content_purple">' +
			'<div class="main_title_purple">' + '<a href="main/moonlit_night.html">月夜</a>' + '</div>' +
					'<div class="content_tag_purple">' +
						'恋愛' +
					'</div>' +
				'<div class="main_summary_purple">' +
					'「友達の家に行く約束をした」<BR />そこから始まる切なさ有りの現代ファンタジー' +
				'</div>' +
				'<div class="writing_day_purple">' + '執筆日：2025/04/29' + '</div>' +
		'</div>' +
	'</div>' +
				/*--------------------*/
	'<div class="content Drama Horror">' +
		'<div class="main_content_black">' +
			'<div class="main_title_black">' + '<a href="main/nonfiction-horror.html">言葉は要らず</a>' + '</div>' +
					'<div class="content_tag_black">' +
						'ドラマ / ホラー' +
					'</div>' +
				'<div class="main_summary_black">' +
					'「実際に遭った怖い話」<BR />オチなどないショート集<BR />何か起きた時に執筆します。' +
				'</div>' +
				'<div class="writing_day_black">' + '最終執筆日：2025/04/27' + '</div>' +
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