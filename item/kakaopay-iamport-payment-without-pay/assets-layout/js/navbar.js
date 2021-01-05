jQuery(document).ready(function() {

  jQuery(document).click(function (e) {

    // When Clicking Navbar-Toggler
    if ( ( e.target == jQuery('.navbar-toggler')[0] ) || ( e.target == jQuery('.navbar-toggler-icon')[0] ) ) {
      jQuery('.offcanvas-collapse').toggleClass('open');
    }

    // Outside Navbar-Toggler
    if ( ( e.target != jQuery('.navbar-toggler')[0] ) && ( e.target != jQuery('.navbar-toggler-icon')[0] ) && ( e.target != jQuery('.offcanvas-collapse')[0] ) && ( jQuery('.offcanvas-collapse').hasClass('open') ) ) {
      jQuery('.offcanvas-collapse').toggleClass('open');
    }

    // When Clicking Search Button
    if ( ( e.target == jQuery('.buttonsearch')[0] ) || ( e.target == jQuery('.openclosesearch')[0] ) || ( e.target == jQuery('.openclosesearch')[1] ) ) {
      jQuery('.openclosesearch').toggle();
      jQuery('#formsearch').slideToggle("fast");
      jQuery('#searchbox').focus();
    }

    // Outside Formsearch
    if ( jQuery('.searchbardiv').css('display') == 'block' ) {
      if ( ( e.target != jQuery('.buttonsearch')[0] ) && ( e.target != jQuery('.openclosesearch')[0] ) && ( e.target != jQuery('.openclosesearch')[1] ) ) {
        if ( ( e.target != jQuery('.searchbardiv')[0] ) && ( e.target != jQuery('#searchform')[0] ) && ( e.target != jQuery('#searchform .input-group')[0] ) && ( e.target != jQuery('#searchform .input-group-btn')[0] ) && ( e.target != jQuery('#searchbox')[0] ) ) {
          jQuery('.openclosesearch').toggle();
          jQuery('#formsearch').slideToggle("fast");
          jQuery('#searchbox').focusout();
        }
      }
    }

    jQuery('.searchbardiv input').focus(function() {
      this.value = '';
    });
  });
});
