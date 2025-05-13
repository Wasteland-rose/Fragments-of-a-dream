document.addEventListener('DOMContentLoaded', function () {
    const wrap = document.getElementById("wrap");

    // 書字方向の切り替え時
    document.getElementById("Tate").addEventListener("click", () => {
        wrap.classList.remove("yokogaki");
        wrap.classList.add("tategaki");
    });

    document.getElementById("Yoko").addEventListener("click", () => {
        wrap.classList.remove("tategaki");
        wrap.classList.add("yokogaki");
    });
});
