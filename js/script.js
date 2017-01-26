$( document ).ready(function() {
  $(window).scroll(function() {
    if( $(document).scrollTop() >= $( '#about' ).offset().top ) {
      $( 'nav ul li:eq(1)' ).addClass( 'current' );
      $( 'nav ul li:eq(0)' ).removeClass( 'current' );
    }
    else {
      $( 'nav ul li:eq(1)' ).removeClass( 'current' );
      $( 'nav ul li:eq(0)' ).addClass( 'current' );
    }
  });
});