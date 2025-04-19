//script.js

/*---------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
	$("#index-list").html(
		'<div id="index-image">' + '<img src="images/index.png">' + '</div>' +
			'<div id="index-text-content">' +
				'<ul>' +
					'<li>' + '完全オリジナルですが<B>尊敬している作品に影響を受けている可能性</B>があります。' + '</li>' +
					'<li>' + '商用以外での<B>サンプル利用</B>は無料です。' + '</li>' +
					'<li>' + '作品をサンプルにする場合は「原作者名」もしくは「夢の破片」の記載をお願いいたします。' + '</li>' +
					'<li>' + '作品の大まかな筋を変えなければ、キャラクターの関係性・名前・エンドの変更は好きにしていただいてかまいません。' + '</li>' +
					'<li>' + '商用のみ、メールにて報告お願い願います。' + '</li>' +
					'<li>' + 'メールは確認のみで個人情報を流布することはいたしません。' + '</li>' +
					'<li>' + '更新頻度は遅いと思うのでBIOGRAPHYにあるXから確認してください。' + '</li>' +
					'<li>' + 'サンプル利用していただいた作品のURLがある場合、リンクを貼らせていただく場合がございます。' + '</li>' +
				'</ul>' +
			'</div>'
	);
});
/*---------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
	$("#bio").html(
		'<dl>' +
			'<dt>' + 'NAME' + '</dt>' +
				'<dd>' + '霞影　絃音（かえい　いとね）' + '</dd>' +
			'<dt>' + 'BLOOD TYPE' + '</dt>' +
				'<dd>' + 'O' + '</dd>' +
			'<dt>' + 'HISTORY' + '</dt>' +
				'<dd>' +
						'2000年ほどから活動を始める。<BR />' +
						'25年までの間に様々なことがあり、他者との関わりをやめる。<BR />' +
						'尊敬している作品が自分の一部の作品に反映されることに悩んでいる。' +
				'</dd>' +
			'<dt>' + 'SNS' + '</dt>' +
				'<dd>' +
					'<a href="https://x.com/itonekaei_"><img src="images/X_icon.png"></a><BR />' +
						'<div class="text-small">' + '※外部サイトに移行します。' + '</div>' +
				'</dd>' +
			'<dt>' + 'CONTACT' + '</dt>' +
				'<dd>' +
						'<a href="contact.html">MAIL FORM</a>' +
							'<div class="border"></div>' +
							'<div class="text-small">' +
								'※件名には「商用」「二次創作」など分かりやすくしてください。' +
							'</div>' +
				'</dd>' +
			'<dt>' + 'OPERATION CHECK' + '</dt>' +
				'<dd>' +
					'<div>Windows11 - chrome</div>' +
					'<div>GALAXY S23ultra</div>' +
				'</dd>' +
		'</dl>'
	);
});
/*---------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
	$("#links").html(
		'<dl>' +
			'<dt>' + 'HP - COPY' + '</dt>' +
				'<dd>' +
					'<div class="links-copy-title">' + 'タイトル' + '</div>' +
						'<div class="links-copy-button">' + '<button class="links-button" data-clipboard-text="夢の破片">夢の破片</button>' + '</div>' +
					'<div class="links-copy-title">' + 'HP URL' + '</div>' +
						'<div class="links-copy-button">' + '<button class="links-button" data-clipboard-text="https://wasteland-rose.github.io/Fragments-of-a-dream/">URL</button>' + '</div>' +
					'<div class="links-copy-title">' + '著作者' + '</div>' +
						'<div class="links-copy-button">' + '<button class="links-button" data-clipboard-text="霞影 絃音">霞影 絃音</button>' + '<button class="links-button" data-clipboard-text="Itone Kaei">Itone Kaei</button>' + '</div>' +
				'</dd>' +
			'<dt>' + 'LINKS' + '</dt>' +
				'<dd>' +
					'<a href="https://ja.pngtree.com/freepng/marble-texture-pattern_5420622.html" target="_blank">フリー素材：大理石画像</a>' + '<BR />' +
				'</dd>' +
		'</dl>'
	);
});
/*---------------------------------------------------------------------------------------------------------*/