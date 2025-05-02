// script.js

fetch('json/blackout.json')
  .then(response => response.json())
  .then(data => {
    const blackout = document.getElementById('blackout');
    const mainContent = document.getElementById('main-content');

    // ブラックアウトからフェードインへ
    setTimeout(() => {
      // ブラックアウト解除
      blackout.style.backgroundColor = 'white'; // ブラックアウト解除 → 白くする（ホワイトアウト）

      // HPのフェードイン
      setTimeout(() => {
        mainContent.style.opacity = 1; // フェードインさせる
      }, 500); // ちょっと遅れてフェードイン
    }, data.loginScene.transition.delay);  // JSONで指定された遅延時間
  })
  .catch(error => {
    console.error('JSONの読み込みエラー:', error);
  });