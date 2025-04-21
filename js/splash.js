// splash.js
$(document).ready(function() {
  // 初回アクセス時
  if (!sessionStorage.getItem('splashShown')) {
    // 黒背景（#splash）からページ内容にフェードイン
    $('#splash').fadeTo(1000, 0, function() {
      $(this).css('visibility', 'hidden'); // フェードアウト後に非表示にする
    });
    // sessionStorageにアクセス済みを保存
    sessionStorage.setItem('splashShown', 'true');
  } else {
    // 二回目以降は何もしない、すぐに表示
    $('#splash').css('visibility', 'hidden');
  }

  // スマホ画面サイズならfaviconを非表示
  if (window.innerWidth <= 599) {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.remove(); // faviconを非表示にするために削除
    }
  }
});