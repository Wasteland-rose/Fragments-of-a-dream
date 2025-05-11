document.addEventListener('DOMContentLoaded', function () {
    const wrap = document.getElementById("wrap");

    function adjustContent() {
        const html = wrap.innerHTML;

        // HTMLタグとテキストに分割、指定タグのみ許可
        const allowedTags = ['br', 'hr', 'ul', 'li', 'ol'];
        const segments = html.split(/(<[^>]+>)/g);

        let result = '';

        segments.forEach(segment => {
            const tagMatch = segment.match(/^<\s*\/?\s*([a-z0-9]+)[^>]*>$/i);
            if (tagMatch) {
                const tagName = tagMatch[1].toLowerCase();

                if (allowedTags.includes(tagName)) {
                    result += segment; // 許可されたタグのみ追加
                }
                // それ以外のタグは無視
            } else {
                result += segment; // テキストはそのまま追加（改行制御なし）
            }
        });

        wrap.innerHTML = result;
    }

    // 初回実行
    adjustContent();

    // 書字方向の切り替え時
    document.getElementById("Tate").addEventListener("click", () => {
        wrap.classList.remove("yokogaki");
        wrap.classList.add("tategaki");
        adjustContent();
    });

    document.getElementById("Yoko").addEventListener("click", () => {
        wrap.classList.remove("tategaki");
        wrap.classList.add("yokogaki");
        adjustContent();
    });
});
