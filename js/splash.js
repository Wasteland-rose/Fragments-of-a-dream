//splash.js

$(document).ready(function() {
  const isMobile = window.innerWidth <= 599;  // モバイルかどうかを判定
  const splash = $('#splash');  // スプラッシュ画面の要素
  const bgImg = new Image();  // 新しい画像オブジェクトを作成

  // bodyを最初は透明にして非表示
  $('body').css('opacity', '0');

  if (isMobile) {
    bgImg.src = 'https://wasteland-rose.github.io/Fragments-of-a-dream/images/splash-bg.jpg';  // スマホ用の画像URL

    bgImg.onload = function() {
      splash.css({
        'background-image': `url('${bgImg.src}')`,
        'background-color': 'transparent',
        'display': 'flex', // 画像を中央に表示
        'opacity': '1'  // 画像を表示
      });

      setTimeout(() => {
        splash.fadeOut(1000, function() {
          $(this).css('display', 'none');  // 画像がフェードアウト
          $('body').css('opacity', '1');  // 本体をフェードイン
        });
      }, 1000);  // 画像を表示させてから1秒後にフェードアウト
    };
  } else {
    // PCの場合（黒い背景から本体表示）
    if (!sessionStorage.getItem('splashShown')) {
      splash.fadeOut(1000, function() {
        $(this).css('display', 'none');  // スプラッシュ画面非表示
        $('body').css('opacity', '1');  // 本体表示
      });
      sessionStorage.setItem('splashShown', 'true');  // 1回表示されたことを記録
    } else {
      splash.css('display', 'none');  // スプラッシュ非表示
      $('body').css('opacity', '1');  // 本体表示
    }
  }
});