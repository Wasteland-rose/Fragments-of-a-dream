// splash.js

$(document).ready(function() {
  const isMobile = window.innerWidth <= 599;

  // ページのコンテンツを最初は非表示（透明）にする
  $('body').css('opacity', '0');

  if (isMobile) {
    // スマホの場合のみファビコンを削除
    $('link[rel="icon"]').remove();

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
          // スプラッシュ画面が消えたらページの透明度を戻す
          $('body').css('opacity', '1');
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
      // スプラッシュ画面が消えたらページの透明度を戻す
      $('body').css('opacity', '1');
    } else {
      $('#splash').css('display', 'none');
      $('body').css('opacity', '1');
    }
  }
});