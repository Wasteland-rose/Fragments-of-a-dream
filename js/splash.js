// splash.js

$(document).ready(function() {
  // 初回アクセス時
  if (!sessionStorage.getItem('splashShown')) {
    // 黒背景（#splash）からページ内容にフェードイン
    $('#splash').fadeOut(1000, function() {
      $(this).css('display', 'none'); // フェードアウト後に非表示にする
      // splashが終わった後にファビコンを表示
      $('link[rel="icon"]').attr('href', 'https://wasteland-rose.github.io/Fragments-of-a-dream/images/favicon.png');
    });
    // sessionStorageにアクセス済みを保存
    sessionStorage.setItem('splashShown', 'true');
  } else {
    // 二回目以降は何もしない、すぐに表示
    $('#splash').css('display', 'none');
    // splashが終わった後にファビコンを表示
    $('link[rel="icon"]').attr('href', 'https://wasteland-rose.github.io/Fragments-of-a-dream/images/favicon.png');
  }

  // 初期にファビコンを削除
  $('link[rel="icon"]').remove();

  // スマホ画面サイズならfaviconを非表示
  if (window.innerWidth <= 599) {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.remove(); // faviconを非表示にするために削除
    }
  }
});