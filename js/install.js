// script.js

// install.js
let deferredPrompt;
const installButton = document.getElementById('install-button');

// beforeinstallprompt イベントが発生したら、インストールボタンを表示
window.addEventListener('beforeinstallprompt', (e) => {
    // イベントを保存して、後で表示できるようにする
    deferredPrompt = e;
    installButton.style.display = 'block'; // ボタンを表示
});

// インストールボタンがクリックされたら、インストールのプロンプトを表示
installButton.addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt(); // インストールのプロンプトを表示
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('インストールされた');
            } else {
                console.log('インストールされなかった');
            }
        });
    }
});
