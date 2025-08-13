$(document).ready(function () {
    // 1. ナビゲーションメニューの作成
    $("#TagMenu").html(
        '<div id="NavMenuButton">' +
            '<button id="NavButton" style="background: none; border: none; padding: 10px;">' +
                '<svg id="NavMenuContent" class="chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                    '<path d="M6 13L12 19L18 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>' +
            '</button>' +
        '</div>' +
        '<ul id="TargetMenu"">' +
            '<li id="first"><a href="#" class="tag" data-target="ALL">ALL</a></li>' +
            '<li><a href="#" class="tag" data-target="ShortStory">短編</a></li>' +
            '<li><a href="#" class="tag" data-target="LongStory">長編</a></li>' +
            '<li><a href="#" class="tag" data-target="AllAges">全年齢</a></li>' +
            '<li><a href="#" class="tag" data-target="R15">R15</a></li>' +
            '<li><a href="#" class="tag" data-target="R18">R18</a></li>' +
            '<li><a href="#" class="tag" data-target="R20">R20</a></li>' +
            '<li><a href="#" class="tag" data-target="Horror">ホラー</a></li>' +
            '<li><a href="#" class="tag" data-target="Serious">シリアス</a></li>' +
            '<li><a href="#" class="tag" data-target="Drama">ドラマ</a></li>' +
            '<li><a href="#" class="tag" data-target="Love">恋愛</a></li>' +
            '<li><a href="#" class="tag" data-target="Death">死</a></li>' +
            '<li><a href="#" class="tag" data-target="Flow">ノリ</a></li>' +
            '<li id="last"><a href="#" class="tag" data-target="Unown">意味不明</a></li>' +
        '</ul>'
    );

    // 2. キーワード検索ボックス設置
    $("#SearchPosition").html(
        '<input type="text" id="keywordSearch" placeholder="キーワードで検索">'
    );

    // 3. テキストコンテンツの生成（作品リスト）
    $("#TextContents").html(

        '<div class="search">' +
            '<div class="content LongStory AllAges Love Flow" data-date="2025-07-28">' +
            '<div class="Pi">' +
            '<div class="Title_Pi"><a href="main/bouquet.html">微笑む君に花束を</a></div>' +
	            '<div class="Tag_Pi">長編 / 全年齢 / 恋愛 / ノリ</div>' +
	            '<div class="Summary_Pi">SFを舞台にしたBL作品</div>' +
	            '<div class="Writing_Pi">執筆日：2025/07/31～</div>' +
	            '<div class="Writing_Pi">次回更新：2025/08/28</div>' +
            '<div class="Plot_Pi"><a href="main/plot/bouquet.html">あとがき・プロットはこちら</a></div>' +
            '</div></div></div>' +

        '<div class="search">' +
            '<div class="content LongStory R15 Horror Serious Flow" data-date="2025-07-28">' +
            '<div class="Pu">' +
            '<div class="Title_Pu"><a href="main/Ridicule.html">Ridicule</a></div>' +
	            '<div class="Tag_Pu">長編 / R15 / ホラー / シリアス / ノリ</div>' +
	            '<div class="Summary_Pu">厳格な規則と謎に満ちた学園に売られた妹・ニアが、兄ノアとともに狂気と恐怖の中で運命を切り開く。読者参加型のダークファンタジー物語。<BR />分岐エンド有</div>' +
	            '<div class="Writing_Pu">執筆日：2025/07/28</div>' +
            '<div class="Plot_Pu"><a href="main/plot/Ridicule.html">あとがきはこちら</a></div>' +
            '</div></div></div>' +

        '<div class="search">' +
            '<div class="content LongStory R20 Horror Serious Drama Death" data-date="2025-05-11">' +
            '<div class="BR">' +
            '<div class="Title_BR"><a href="main/theGrimReaperJustDances.html">死神はただただ踊る</a></div>' +
            '<div class="Tag_BR">長編 / R20 / ホラー / シリアス / ドラマ / 死</div>' +
            '<div class="Summary_BR">壊れた魂が欲望と嫌悪の狭間で静かに育っていく。田舎町で誰にも気づかれず芽吹いた異常は、やがて血と肉の饗宴へと変わり――死が名を呼ぶその日、すべてが終わる。<br />「僕は生きてちゃいけないって分かっていたんだ」</div>' +
            '<div class="Writing_BR">執筆日：2025/05/11</div>' +
            '<div class="Plot_BR"><a href="main/plot/theGrimReaperJustDances.html">あとがき・プロットはこちら</a></div>' +
            '</div></div></div>' +

        '<div class="search">' +
            '<div class="content ShortStory R15 Horror Unown" data-date="2025-05-06">' +
            '<div class="G">' +
            '<div class="Title_G"><a href="main/speak_of_the_devil_and_he_shall_appear.html">噂をすれば影が差す</a></div>' +
            '<div class="Tag_G">短編 / R15 / ホラー / 意味不明</div>' +
            '<div class="Summary_G">町と町が分断された５年後、謎の病が広がる。親友が病に患って孤立を強いられる中、町を出る決意をした主人公。しかし、親友が異変し始める。――逃げられない運命から主人公はどうするのか？<br />『終われる恐怖、視えない恐怖』</div>' +
            '<div class="Writing_G">執筆日：2025/05/06</div>' +
            '<div class="Plot_G"><a href="main/plot/speak_of_the_devil_and_he_shall_appear.html">あとがき・プロットはこちら</a></div>' +
            '</div></div></div>' +

        '<div class="search">' +
            '<div class="content ShortStory AllAges Serious Love" data-date="2025-05-04">' +
            '<div class="Blu">' +
            '<div class="Title_Blu"><a href="main/moonlit_night.html">月夜</a></div>' +
            '<div class="Tag_Blu">短編 / 全年齢 / シリアス / 恋愛</div>' +
            '<div class="Summary_Blu">「都会に飽きた」――そう言う友達に会いに行く道中、現代ではありえない洋館に辿り着く。そこで出会った家主は主人公の事を知っている様子。封鎖された空間で主人公は過去と対峙する。<br />切なさ有りの現代ファンタジー</div>' +
            '<div class="Writing_Blu">執筆日：2025/05/04</div>' +
            '<div class="Plot_Blu"><a href="main/plot/moonlit_night.html">あとがき・プロットはこちら</a></div>' +
            '</div></div></div>' +

        '<div class="search">' +
            '<div class="content LongStory R15 Drama Horror" data-date="2025-04-27">' +
            '<div class="Bla">' +
            '<div class="Title_Bla"><a href="main/nonfiction.html">言葉は要らず</a></div>' +
            '<div class="Tag_Bla">長編 / R15 / ドラマ / ホラー</div>' +
            '<div class="Summary_Bla">「実際に遭った怖い話」<br />オチなどないショート集<br />何か起きた時に執筆します。</div>' +
            '<div class="Writing_Bla">最終執筆日：2025/04/27</div>' +
            '</div></div></div>'
    );

    // 4. 初期表示：非表示→フェードイン
    $(".content").hide().fadeIn();

    // 5. 並び替え（data-date 降順）
function sortContentsByDate(desc = true) {
    let contents = $("#TextContents .search").get();
    contents.sort(function(a, b) {
        let dateA = new Date($(a).find(".content").data("date"));
        let dateB = new Date($(b).find(".content").data("date"));
        return desc ? dateB - dateA : dateA - dateB;
    });
    $.each(contents, function(i, el) {
        $("#TextContents").append(el);
    });
}

	// 6. 並び替えボタンを置く場所の例（検索ボックス下などにHTMLで用意することを推奨）
$("#sortButtons").html(`
	<a id="btnLatest">最新順</a> / <a id="btnOldest">古い順</a>
`);

// ボタン押下で並び替え実行
$("#btnLatest").on("click", function() {
    sortContentsByDate(true);
});
$("#btnOldest").on("click", function() {
    sortContentsByDate(false);
});

	// 7. タグフィルターの中の並び替え呼び出し修正
$(".tag").on("click", function (e) {
    e.preventDefault();
    let target = $(this).data("target");

    $(".content").hide();
    setTimeout(function () {
        if (target === "ALL") {
            $(".content").fadeIn(800);
        } else {
            $(".content." + target).fadeIn(800);
        }
        sortContentsByDate(true);  // 修正ここ
    }, 200);
});

	// 8. キーワード検索内の並び替え呼び出しも修正済み
$("#keywordSearch").on("input", function () {
    let keyword = $(this).val().toLowerCase();
    $(".search").each(function () {
        let text = $(this).text().toLowerCase();
        $(this).toggle(text.includes(keyword));
    });
    sortContentsByDate(true);
});

    // 9. ナビゲーションの開閉処理
    $("#NavButton").on("click", function () {
        $("#NavMenuContent").toggleClass("rotated");
        $("#TargetMenu").slideToggle();
    });
});
