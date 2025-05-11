document.addEventListener('DOMContentLoaded', function () {
    const wrap = document.getElementById("wrap");

    // 25文字ごとに改行を強制的に追加
    function adjustContent() {
        const textContainer = wrap;
        let text = textContainer.innerHTML;

        // 正規表現でHTMLタグ以外のテキスト部分を取り出し、25文字ごとに改行
        const lines = text.split(/(<[^>]+>)/g); // タグを保持しつつ分割

        let formattedText = '';
        let lineLength = 25;  // 25文字ごとに改行

        lines.forEach(line => {
            if (line.match(/<[^>]+>/)) {
                // タグはそのまま保持
                formattedText += line;
            } else {
                // それ以外のテキスト部分を25文字ごとに分割して改行を挿入
                while (line.length > lineLength) {
                    formattedText += line.slice(0, lineLength) + '<br />';  // 改行を追加
                    line = line.slice(lineLength);  // 残りの部分を次に回す
                }
                formattedText += line;  // 最後に残ったテキストを追加
            }
        });

        // 結果として加工されたテキストを反映
        textContainer.innerHTML = formattedText;
    }

    // 初期読み込み時に改行を調整
    adjustContent();

    // 縦書きや横書きの切り替え時にも再度調整
    const tateBtn = document.getElementById("Tate");
    const yokoBtn = document.getElementById("Yoko");

    tateBtn.addEventListener("click", () => {
        wrap.classList.remove("yokogaki");
        wrap.classList.add("tategaki");
        adjustContent(); // 縦書き切替時に再度改行処理
    });

    yokoBtn.addEventListener("click", () => {
        wrap.classList.remove("tategaki");
        wrap.classList.add("yokogaki");
        adjustContent(); // 横書き切替時に再度改行処理
    });
});
