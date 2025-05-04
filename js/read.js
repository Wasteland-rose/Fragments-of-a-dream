//script.js

document.addEventListener('DOMContentLoaded', function () {
  const tateBtn = document.getElementById("Tate");
  const yokoBtn = document.getElementById("Yoko");
  const wrap = document.getElementById("wrap");

  tateBtn.addEventListener("click", () => {
    wrap.classList.remove("yokogaki");
    wrap.classList.add("tategaki");
  });

  yokoBtn.addEventListener("click", () => {
    wrap.classList.remove("tategaki");
    wrap.classList.add("yokogaki");
  });

  // ホイールスクロール制御（縦書き/横書き両対応）
  wrap.addEventListener('wheel', (e) => {
    const isTategaki = wrap.classList.contains("tategaki");

    if (isTategaki) {
      // 縦書き時は横スクロールに変換
      wrap.scrollLeft += e.deltaY;
      e.preventDefault(); // 縦スクロール抑制
    } else {
      // 横書き時はデフォルトの縦スクロールでOK
      // ただしMacのトラックパッドなどで横スクロールも使えるように
      wrap.scrollLeft += e.deltaX;
      wrap.scrollTop += e.deltaY;
    }
  }, { passive: false });
});
