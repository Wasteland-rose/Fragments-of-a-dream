//splash.js

$(document).ready(function() {
  const isMobile = window.innerWidth <= 599;  // モバイルかどうかを判定
  const splash = $('#splash');  // スプラッシュ画面の要素
  const bgImg = new Image();  // 新しい画像オブジェクトを作成

  // bodyを最初は透明にして非表示
  $('body').css('opacity', '0');

  if (isMobile) {
    // スマホ用の画像URL
    bgImg.src = 'https://wasteland-rose.github.io/Fragments-of-a-dream/images/splash-bg.jpg';

    // 画像が正常にロードされたら
    bgImg.onload = function() {
      splash.css({
        'background-image': 'url("' + bgImg.src + '") !important',  // background-imageに!importantを追加
        'background-color': 'transparent !important',  // background-colorも強制的に適用
        'opacity': '1'  // 画像が表示される
      });

      // 画像表示後にフェードアウト
      setTimeout(function() {
        splash.fadeOut(1000, function() {
          $(this).css('display', 'none');
          $('body').css('opacity', '1');  // 本体をフェードイン
        });
      }, 1000);  // 1秒後にフェードアウト
    };

    bgImg.onerror = function() {
      console.error("画像の読み込みに失敗しました。URLを確認してください。");
    };
  } else {
    // PCの黒背景設定
    splash.css({
      'background': '#000 !important',  // 強制的に黒背景を指定
      'opacity': '1',  // 初期状態で表示されるように
      'display': 'flex'
    });

    // スプラッシュ画面の表示制御
    if (!sessionStorage.getItem('splashShown')) {
      splash.fadeOut(1000, function() {
        $(this).css('display', 'none');  // スプラッシュ画面非表示
        $('body').css('opacity', '1');  // 本体表示
      });
      sessionStorage.setItem('splashShown', 'true');
    } else {
      splash.css('display', 'none');
      $('body').css('opacity', '1');
    }
  }
});