// splash.js

$(document).ready(function() {
  const isMobile = window.innerWidth <= 599;

  if (isMobile) {
    const splash = $('#splash');
    const bgImg = new Image();

    // 画像を先にプリロード
    bgImg.src = 'https://wasteland-rose.github.io/Fragments-of-a-dream/images/splash-bg.jpg';

    // 画像が完全に読み込まれたら splash を表示＆1秒後にフェードアウト
    bgImg.onload = function () {
      splash.css({
        'background-image': url('${bgImg.src}'),
        'background-color': 'transparent',
        'display': 'block'
      });

      setTimeout(() => {
        splash.fadeOut(1000, function () {
          $(this).css('display', 'none');
          // ファビコン削除（以降は表示しない）
          $('link[rel="icon"]').remove();
        });
      }, 1000); // ←ここでファビコン＋背景画像が揃ってから1秒キープ
    };
  } else {
    // PC時の既存挙動
    if (!sessionStorage.getItem('splashShown')) {
      $('#splash').fadeOut(1000, function () {
        $(this).css('display', 'none');
      });
      sessionStorage.setItem('splashShown', 'true');
    } else {
      $('#splash').css('display', 'none');
    }
  }
});
