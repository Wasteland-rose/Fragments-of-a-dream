// script.js

//一部chatGPTに聞きました。

//----------------------------------------------------------------------------------------------------
$(document).ready(function () {
    // .contentの表示
    $(".content").hide();
    $(".content").fadeIn();

    // ナビゲーションメニューの作成
    $("#TagMenu").html(
        '<div id="NavMenuButton">' +
            '<button id="NavButton" style="background: none; border: none; padding: 10px;">' +
                '<svg id="NavMenuContent" class="chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                    '<path d="M6 13L12 19L18 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>' +
            '</button>' +
        '</div>' +
        '<ul id="TargetMenu">' +
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

    // ナビゲーションボタンのクリックイベント
    $("#NavButton").on('click', function() {
        $("#NavMenuContent").toggleClass("rotated");
        $("#TargetMenu").slideToggle();
    });

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    $("#TextContents").html(
    					/*---------------*/
        '<div class="content ShortStory">' +
            '<div class="G">' +
                '<div class="Title_G"><a href="#">噂をすれば影が差す</a></div>' +
                '<div class="Tag_G">タグ未定</div>' +
                '<div class="Summary_G">未定</div>' +
                '<div class="Writing_G">執筆日：執筆中</div>' +
                '<div class="Plot_G"><a href="#">あとがき・プロットはこちら</a></div>' +
            '</div>' +
        '</div>' +
    					/*---------------*/
        '<div class="content LongStory R20">' +
            '<div class="BR">' +
                '<div class="Title_BR"><a href="#">死神はただただ踊る</a></div>' +
                '<div class="Tag_BR">タグ未定</div>' +
                '<div class="Summary_BR">未定</div>' +
                '<div class="Writing_BR">執筆日：執筆中</div>' +
                '<div class="Plot_BR"><a href="#">あとがき・プロットはこちら</a></div>' +
            '</div>' +
        '</div>' +
    					/*---------------*/
        '<div class="content ShortStory AllAges Serious Love">' +
            '<div class="Blu">' +
                '<div class="Title_Blu"><a href="main/moonlit_night.html">月夜</a></div>' +
                '<div class="Tag_Blu">短編 / 全年齢 / シリアス / 恋愛</div>' +
                '<div class="Summary_Blu">「友達の家に行く約束をした」<BR />そこから始まる切なさ有りの現代ファンタジー</div>' +
                '<div class="Writing_Blu">執筆日：2025/05/04</div>' +
                '<div class="Plot_Blu"><a href="main/plot/moonlit_night.html">あとがき・プロットはこちら</a></div>' +
            '</div>' +
        '</div>' +
    					/*---------------*/
        '<div class="content LongStory R15 Drama Horror">' +
            '<div class="Bla">' +
                '<div class="Title_Bla"><a href="main/nonfiction.html">言葉は要らず</a></div>' +
                '<div class="Tag_Bla">長編 / R15 / ドラマ / ホラー</div>' +
                '<div class="Summary_Bla">「実際に遭った怖い話」<BR />オチなどないショート集<BR />何か起きた時に執筆します。</div>' +
                '<div class="Writing_Bla">最終執筆日：2025/04/27</div>' +
            '</div>' +
        '</div>'
    );
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    // タグのクリックイベント
    $(document).on("click", ".tag", function (e) {
        e.preventDefault();
        let target = $(this).data("target");
        $(".content").hide();
        setTimeout(function () {
            if (target === "ALL") {
                $(".content").fadeIn(800);
            } else {
                $(".content." + target).fadeIn(800);
            }
        }, 200);
    });

    // ここに追加する部分
    const button = document.getElementById('NavButton');
    const chevron = document.getElementById('NavMenuContent');

    if (button && chevron) {
        button.addEventListener('click', () => {
            chevron.classList.toggle('rotated');
        });
    }
});
//----------------------------------------------------------------------------------------------------
