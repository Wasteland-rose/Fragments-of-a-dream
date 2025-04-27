// script.js
// install.js

let deferredPrompt;
const installButton = document.getElementById('install-button');

window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
  installButton.style.display = 'block';
});

installButton.addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('インストールされた');
      } else {
        console.log('インストールされなかった');
      }
    });
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then((reg) => {
    reg.onupdatefound = () => {
      const newWorker = reg.installing;
      newWorker.onstatechange = () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          console.log("更新が見つかりました。再読み込みします。");
          location.reload();
        }
      };
    };
  }).catch((err) => {
    console.error("ServiceWorker登録エラー:", err);
  });
}
