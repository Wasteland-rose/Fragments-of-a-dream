//script.js

$(document).ready(function () {
    $("#update").html(
        '<div id="update-title">' + 
            '<b>UP DATE</b>：<a href="update.html">2025/04/28</a>' +
            '<button id="reloadButton">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">' +
                    '<path d="M8 5l7 7-7 7" fill="none" stroke="black" stroke-width="2"/>' +
                '</svg>' +
            '</button>' +
        '</div>'
    );

    $("#reloadButton").click(function() {
        reloadPage();
    });
});

/*---------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
	$("#hp-rule").html(
			'<div id="hp-rule-content">' +
				'<ul>' +
					'<li>' + '作品のサンプル利用や二次創作は歓迎です。' + '</li>' +
					'<li>' + 'その際は、「霞影 絃音」または「夢の破片」の記載をお願いします。' + '</li>' +
					'<li>' + 'キャラクターやエンディングの変更は自由ですが、物語の大筋は変えないでください。' + '</li>' +
					'<li>' + '※商用利用の場合、事前にメールでご報告をお願いします。<br />メールアドレスはBIOGRAPHYページから確認できます。<br />個人情報は流布しません。' + '</li>' +
					'<li>' + '最新情報はBIOGRAPHYのX（旧Twitter）で確認できます。<br />変化がない場合は時間を置くか、日付横の「＞」を押してください。' + '</li>' +
					'<li>' + '更新履歴は日付をタップするか、<a href="update.html" style="text-decoration: underline;">こちら</a>からご確認いただけます。' + '</li>' +
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
						'<p>' +
						'尊敬している作品が自分の一部の作品に反映されることに悩んでいる。' +
						'キャラクターを作って舞台を用意しているため、プロットが作れないで居る。' +
						'</p>' +
						'2025/4 下旬　綺麗な作品が出来てファビコンとかアイコンにして満足している。' +
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
/*---------------------------------------------------------------------------------------------------------*/