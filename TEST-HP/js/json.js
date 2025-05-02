// script.js

fetch('json/blackout.json')
	.then(response => response.json())
	.then(data => {
		// ブラックアウト処理
		if (data.loginScene.onEnter.effect === 'blackout') {
			document.body.style.backgroundColor = 'black';
			
			setTimeout(() => {
				// ホワイトアウト処理
				document.body.style.transition = `background-color ${data.loginScene.brightScene.fadeInDuration}ms ${data.loginScene.brightScene.easing}`;
				document.body.style.backgroundColor = 'white'; // 明るくなる演出

				// HPのフェードイン
				setTimeout(() => {
					const mainContent = document.getElementById('main-content');
					mainContent.style.transition = `opacity ${data.loginScene.brightScene.fadeInDuration}ms ${data.loginScene.brightScene.easing}`;
					mainContent.style.opacity = 1; // フェードインさせる
				}, data.loginScene.brightScene.fadeInDuration); // ホワイトアウト終了後にHP表示
			}, data.loginScene.transition.delay);
		}
	})
	.catch(error => {
		console.error('JSONの読み込みエラー:', error);
	});
