// splash.js

$(document).ready(function() {
  const isMobile = window.innerWidth <= 599;

  // ページコンテンツを最初は非表示
  $('body').css('visibility', 'hidden');

  if (isMobile) {
    const splash = $('#splash');
    const bgImg = new Image();

    // 画像を先にプリロード
    bgImg.src = 'https://wasteland-rose.github.io/Fragments-of-a-dream/images/splash-bg.jpg';

    // 画像が完全に読み込まれたら splash を表示＆1秒後にフェードアウト
    bgImg.onload = function () {
      splash.css({
        'background-image': `url('${bgImg.src}')`,
        'background-color': 'transparent',
        'display': 'block'
      });

      setTimeout(() => {
        splash.fadeOut(1000, function () {
          $(this).css('display', 'none');
          // ファビコン削除（以降は表示しない）
          $('link[rel="icon"]').remove();
          
          // スプラッシュ画面が消えたらコンテンツ表示
          $('body').css('visibility', 'visible');
        });
      }, 1000); // 1秒間ファビコン＋背景画像を表示
    };
  } else {
    // PC時の既存挙動
    if (!sessionStorage.getItem('splashShown')) {
      $('#splash').fadeOut(1000, function () {
        $(this).css('display', 'none');
      });
      sessionStorage.setItem('splashShown', 'true');
      // スプラッシュ画面が消えたらコンテンツ表示
      $('body').css('visibility', 'visible');
    } else {
      $('#splash').css('display', 'none');
      $('body').css('visibility', 'visible');
    }
  }
});