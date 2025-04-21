$(document).ready(function() {
  const isMobile = window.innerWidth <= 599;

  // bodyを最初は非表示（透明）に
  $('body').css('opacity', '0');

  if (isMobile) {
    const splash = $('#splash');
    const bgImg = new Image();

    bgImg.src = 'https://wasteland-rose.github.io/Fragments-of-a-dream/images/splash-bg.jpg';

    bgImg.onload = function () {
      splash.css({
        'background-image': `url('${bgImg.src}')`,
        'background-color': 'transparent',
        'display': 'block'
      });

      setTimeout(() => {
        splash.fadeOut(1000, function () {
          $(this).css('display', 'none');
          // スプラッシュ終了後にbodyを表示
          $('body').css('opacity', '1');
        });
      }, 1000);
    };
  } else {
    // PC時の挙動
    if (!sessionStorage.getItem('splashShown')) {
      $('#splash').fadeOut(1000, function () {
        $(this).css('display', 'none');
        $('body').css('opacity', '1');
      });
      sessionStorage.setItem('splashShown', 'true');
    } else {
      $('#splash').css('display', 'none');
      $('body').css('opacity', '1');
    }
  }
});