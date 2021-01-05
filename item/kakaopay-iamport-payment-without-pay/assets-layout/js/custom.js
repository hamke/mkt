// Fix Anchor Links Hidden by Top Navigation
function offsetAnchor() {
	if (location.hash.length !== 0) {
		window.scrollTo(window.scrollX, window.scrollY - 70);
	}
}
jQuery(document).on('click', 'a[href^="#"]', function(event) {
	window.setTimeout(function() {
		offsetAnchor();
	}, 0);
});
window.setTimeout(offsetAnchor, 0);

jQuery(document).ready(function(){
	jQuery('.dropdown, .btn-group').hover(function(){
		var dropdownMenu = jQuery(this).children('.dropdown-menu');
		if(dropdownMenu.is(':visible')){
			dropdownMenu.parent().toggleClass('open');
		}
	});
});

jQuery(document).ready(function(){

	// Open Modal On loading Front Page
	// jQuery('#frontpage-notice').modal('show');

	jQuery(window).scroll(function () {
     if (jQuery(this).scrollTop() > 50) {
       jQuery('#chat-button').fadeIn();
       jQuery('#back-to-top').fadeIn();
       jQuery('#footer-banner').fadeIn();
     } else {
       jQuery('#chat-button').fadeOut();
       jQuery('#back-to-top').fadeOut();
       jQuery('#footer-banner').fadeOut();
     }
   });
  // scroll body to 0px on click
  jQuery('#back-to-top').click(function () {
    // jQuery('#back-to-top').tooltip('hide');
    jQuery('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  // jQuery('#back-to-top').tooltip('show');

	jQuery('.wpmem_loginout a').addClass('nav-link');
	jQuery('.wpmem_msg').addClass('cosmosfarm-members-form').removeClass('wpmem_msg');

});

jQuery(document).on('click',function(){
	jQuery('.collapse').collapse('hide');
})

function copyToClipboard(param){
	var el =document.createElement('input');
	document.body.appendChild(el)
	el.value =param.textContent
	el.select();
	document.execCommand('copy',false);
	el.remove();
	alert("자동 복사되었습니다 : " + el.value);
}
