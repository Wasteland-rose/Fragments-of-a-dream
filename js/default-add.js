//script.js

/*----------------------------------------------------------------------------------------------------*/

$(document).ready(function () {
//--------------------------------------------------

	$("#UPdate").html(
		'<div id="UpDate-Add">' +
			'UP DATE：<a href="UpDate.html">2025/5/29</a>' +
			'<button id="reloadButton">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">' +
					'<path d="M8 5l7 7-7 7" fill="none" stroke="black" stroke-width="2"/>' +
				'</svg>' +
			'</button>' +
		'</div>'
	);

	$("#reloadButton").click(function() {
		location.reload();
	});

//--------------------------------------------------

	$("#HpRule").html(
		'<div id="HpRules">' +
			'<ul>' +
				'<li>' + '作品のサンプル利用や二次創作は歓迎です。' + '</li>' +
				'<li>' + 'その際は、「霞影 絃音」または「夢の破片」の記載をお願いします。' + '</li>' +
				'<li>' + 'キャラクターやエンディングの変更は自由ですが、物語の大筋は変えないでください。' + '</li>' +
				'<li>' + '※商用利用の場合、事前にメールでご報告をお願いします。<br />メールアドレスはBIOGRAPHYページから確認できます。<br />個人情報は流布しません。' + '</li>' +
				'<li>' + '最新情報はBIOGRAPHYのX（旧Twitter）で確認できます。<br />変化がない場合は時間を置くか、日付横の「＞」を押してください。' + '</li>' +
				'<li>' + '更新履歴は日付をタップするか、<a href="UpDate.html" style="text-decoration: underline;">こちら</a>からご確認いただけます。' + '</li>' +
			'</ul>' +
		'</div>'
	);

//--------------------------------------------------

	$("#bio").html(
		'<div id="Bio">' +
			'<dl>' +
				'<dt>NAME</dt>' +
					'<dd>' +
						'霧影 絃音　(かえい いとね)' +
					'</dd>' +
				'<dt>BLOOD TYPE</dt>' +
					'<dd>' +
						'O' +
					'</dd>' +
				'<dt>HISTORY</dt>' +
					'<dd>' +
						'未成年の頃から活動を始める。<BR />25年までに様々なことがあり、他者との交流を一部停止する。<p>尊敬している作品やアーティストが作品の一部に影響を与える事に悩んでいる。<BR />キャラクターを作って舞台に上がらせているためプロットが作れないでいる。</p>2025/4　下旬、綺麗な作品ができてファビコンとかアイコンにして満足している。<BR />同月、ＨＰ作りをするのに再度jsとcssの勉強をする。<BR />結構つらかった。' +
					'</dd>' +
				'<dt>SNS</dt>' +
					'<dd>' +
						'<a href="https://x.com/itonekaei_/"><img src="images/X_icon.png"></a>' +
					'</dd>' +
				'<dt>CONTACT</dt>' +
					'<dd>' +
						'<div id="send_mail"><a href="mailto:itonekaei@gmail.com">メールを送る</a></div>' +
						'<div id="mail_address"><input type="text" value="itonekaei@gmail.com" onclick="this.select()" readonly></div>' +
							'<hr>' +
								'<div class="text-small">件名には「商用」「二次創作」など分かりやすくしてください。</div>' +
					'</dd>' +
				'<dt>OPERATIPN CHECK</dt>' +
					'<dd>' +
						'<div>Windows11 - Microsoft Bing</div>' +
						'<div>Windows11 - Microsoft Edge</div>' +
						'<div>Windows11 - Chrome</div>' +
						'<div>Windows11 - Firefox</div>' +
						'<div>Windows11 - Opera</div>' +
						'<div>Windows11 - Brave</div>' +
						'<div>GALAXY S23ultra</div>' +
						'<div>iPhone15</div>' +
						'<div>iPhoneSE</div>' +
							'<div id="check">' +
								'<a href="https://jigsaw.w3.org/css-validator/check/referer">' +
									'<img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="正当なCSSです!" />' +
								'</a>' +
							'</div>' +
								'<div class="border"></div>' +
									'<div class="text-small">' +
										'ブラウザーによってレイアウトが異なる場合がございます。<BR />iPhoneは友人のスマートフォンで確認していただいています。' +
									'</div>' +
					'</dd>' +
		'</div>'
	);

//--------------------------------------------------

	$("#links").html(
		'<dl>' +
			'<dt>' + 'HP - COPY' + '</dt>' +
				'<dd>' +
					'<div class="LinksCopyTitle">' + 'タイトル' + '</div>' +
						'<div class="LinksCopyButton">' + '<button class="links-button" data-clipboard-text="夢の破片">夢の破片</button>' + '</div>' +
					'<div class="LinksCopyTitle">' + 'HP URL' + '</div>' +
						'<div class="LinksCopyButton">' + '<button class="links-button" data-clipboard-text="https://wasteland-rose.github.io/Fragments-of-a-dream/">URL</button>' + '</div>' +
					'<div class="LinksCopyTitle">' + '著作者' + '</div>' +
						'<div class="LinksCopyButton">' + '<button class="links-button" data-clipboard-text="霞影 絃音">霞影 絃音</button>' + '<button class="links-button" data-clipboard-text="Itone Kaei">Itone Kaei</button>' + '</div>' +
				'</dd>' +
			'<dt>' + 'Bunner' + '</dt>' +
				'<dd>' +
					'<img src="https://wasteland-rose.github.io/Fragments-of-a-dream/images/bunner.png" style="margin-right: 20px; height: 80px;">' +
					'<img src="https://wasteland-rose.github.io/Fragments-of-a-dream/images/bunner_2.png" style="height: 80px;"><BR />' +
					'ご使用の際は画像を保存して、好きなサイズに変更してください。' +
				'</dd>' +
			'<dt>' + 'FREE IMAGES' + '</dt>' +
				'<dd>' +
					'<a href="https://ja.pngtree.com/freepng/marble-texture-pattern_5420622.html" target="_blank">大理石画像</a>' + '<BR />' +
					'<a href=https://jp.freepik.com/free-photo/shattered-glass-texture_27504247.htm#fromView=keyword&page=1&position=0&uuid=fa9103e5-a775-459f-9d30-3d85a703a8ce&query=%E5%89%B2%E3%82%8C%E3%81%9F%E3%82%AC%E3%83%A9%E3%82%B9" target="_blank">割れる画像</a>' + '<BR />' +
						'<div class="text-small">' + '※外部サイトに移行します。' + '</div>' +
				'</dd>' +
			'<dt>' + 'SNS' + '</dt>' +
				'<dd>' +
					'<a href="https://mypage.syosetu.com/2894478/" target="_blank">小説家になろう</a>' + '<BR />' +
					'<a href="https://www.pixiv.net/users/115809683" target="_blank">pixiv</a>' +
						'<div class="text-small">' + '※外部サイトに移行します。' + '</div>' +
				'</dd>' +
		'</dl>'
	);
});

