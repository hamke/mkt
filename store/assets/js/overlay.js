function setCookie(key, value) {
    // var expires = new Date();
    // expires.setTime(expires.getTime() + 31536000000); //1 year
    // document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    document.cookie = key + '=' + value;
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function noScroll() {
  window.scrollTo(0, 0);
}

function closeOverlay() {
  var target = $("#overlay");
  target.animate({
    opacity: "-=1"
  }, 1000, function() {
    target.remove();
  });
  window.removeEventListener('scroll', noScroll);
  $("body").css("overflow-y", "unset");
  setCookie('wptalk_overlay','closed');
}

if ( getCookie('wptalk_overlay') !== 'closed' ) {
  $('#overlay').show();
  window.addEventListener('scroll', noScroll);
  $("body").css("overflow-y", "hidden");
}
