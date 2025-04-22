//script.js

/*---------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
	$("#index-list").html(
		'<div id="index-image">' + '<img src="images/index.png">' + '</div>' +
			'<div id="index-text-content">' +
				'<ul>' +
					'<li>' + '推薦ブラウザ―はchromeです。' + '</li>' +
					'<li>' + '完全オリジナルですが<B>尊敬している作品の影響を受けている</B>可能性があります。' + '</li>' +
					'<li>' + '作品をサンプル活用、二次創作は大歓迎です。' + '</li>' +
					'<li>' + 'サンプル活用・二次創作をする場合は、「原作者名」もしくは「夢の破片」の記載をお願いいたします。' + '</li>' +
					'<li>' + '作品のおおまかな筋を変えなければ、キャラクターの関係性・名前・エンドの変更は好きにしていただいてかまいません。' + '</li>' +
					'<li>' + '商用のみ、メールにて報告をお願いいたします。' + '</li>' +
					'<li>' + 'メールは確認のみで個人情報を流布することはいたしません。' + '</li>' +
					'<li>' + 'メールアドレスはBIOGRAPHYから確認をしてください。' + '</li>' +
					'<li>' + '更新頻度は遅いと思うので、BIOGRAPHYにあるXから確認をしてください。' + '</li>' +
					'<li>' + 'サンプル利用・二次創作をしていただいたURLがある場合、リンクを貼らせていただく場合がございます。' + '</li>' +
					'<li>' + 'ホーム画面に追加することも可能です。' + '</li>' +
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
						'<div id="send_mail"><a href="mailto:itonekaei@gmail.com">メールを送る</a></div>' +
						'<input type="text" onfocus="this.select();" value="itonekaei@gmail.com">' +
							'<div class="border"></div>' +
							'<div class="text-small">' +
								'※件名には「商用」「二次創作」など分かりやすくしてください。' +
							'</div>' +
				'</dd>' +
			'<dt>' + 'OPERATION CHECK' + '</dt>' +
				'<dd>' +
					'<div>Windows11 - chrome</div>' +
					'<div>GALAXY S23ultra</div>' +
					'<div>iPhone15</div>' +
						'<div id="check">' +
							'<a href="https://jigsaw.w3.org/css-validator/check/referer">' +
								'<img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="正当なCSSです!" />' +
							'</a>' +
						'</div>' +
							'<div class="border"></div>' +
								'<div class="text-small">' +
									'ブラウザによってレイアウトが異なる場合がございます。' +
								'</div>' +
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
			'<dt>' + 'SHORTCUT ICON' + '</dt>' +
				'<dd>' +
					'<button id="install-button" style="display:none;">インストール</button>' +
						'<div class="text-small">' + '※「インストール」が出てこない場合、ブラウザや端末に従ってショートカットアイコンを作成願います。' + '</div>' +
				'</dd>' +
			'<dt>' + 'FREE' + '</dt>' +
				'<dd>' +
					'<a href="https://ja.pngtree.com/freepng/marble-texture-pattern_5420622.html" target="_blank">大理石画像</a>' + '<BR />' +
					'<a href=https://jp.freepik.com/free-photo/shattered-glass-texture_27504247.htm#fromView=keyword&page=1&position=0&uuid=fa9103e5-a775-459f-9d30-3d85a703a8ce&query=%E5%89%B2%E3%82%8C%E3%81%9F%E3%82%AC%E3%83%A9%E3%82%B9" target="_blank">割れる画像</a>' + '<BR />' +
				'</dd>' +
		'</dl>'
	);
});
/*---------------------------------------------------------------------------------------------------------*/