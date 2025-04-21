//splash.js

$(document).ready(function () {
  if (!sessionStorage.getItem('splashShown')) {
    // モバイルなら画像背景にする
    if (window.innerWidth <= 767) {
      $('#splash').css('background-image', "url('https://wasteland-rose.github.io/Fragments-of-a-dream/images/splash-bg.jpg')");
      $('#splash').css('background-color', 'transparent');
    }

    // フェードアウト処理
    $('#splash').fadeOut(2000, function () {
      $(this).remove();
    });

    sessionStorage.setItem('splashShown', 'true');
  } else {
    $('#splash').remove(); // 2回目以降は即削除
  }
});