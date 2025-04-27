//splash.js

$(document).ready(function () {
  if (!sessionStorage.getItem('splashShown')) {

    // フェードアウト処理
    $('#splash').fadeOut(2000, function () {
      $(this).remove();
    });

    sessionStorage.setItem('splashShown', 'true');
  } else {
    $('#splash').remove(); // 2回目以降は即削除
  }
});