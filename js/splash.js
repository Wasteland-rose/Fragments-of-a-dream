// splash.js

$(document).ready(function() {
  const isMobile = window.innerWidth <= 599;

  if (isMobile) {
    // モバイルならsplashを1秒キープしてからフェードアウト
    $('#splash').css('display', 'block');

    setTimeout(() => {
      $('#splash').fadeOut(1000, function () {
        $(this).css('display', 'none');
        // ファビコンを削除（以降は表示しない）
        $('link[rel="icon"]').remove();
      });
    }, 1000); // ← ここで1秒キープ（ファビコンだけ出てる状態）

  } else {
    // PCの場合は今まで通り
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