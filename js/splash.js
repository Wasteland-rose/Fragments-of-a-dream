// splash.js

$(document).ready(function() {
  if (!sessionStorage.getItem('splashShown')) {
    $('#splash').fadeOut(1000, function() {
      $(this).css('display', 'none');
    });
    sessionStorage.setItem('splashShown', 'true');
  } else {
    $('#splash').css('display', 'none');
  }
});

if (window.innerWidth <= 599) {
	const favicon = document.querySelector('link[rel="icon"]');
		if (favicon) {
			favicon.remove();
		}
	}
});