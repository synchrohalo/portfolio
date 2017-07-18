$( document ).ready(function() {
  
  // changes current page to About when scrolled down
  $( window ).scroll( function() {
    if( $( document ).scrollTop() >= $( '#about' ).offset().top ) {
      $( 'nav ul li:eq(1)' ).addClass( 'current' );
      $( 'nav ul li:eq(0)' ).removeClass( 'current' );
    } // if at or beyond #about anchor point, switch current page to About
    else {
      $( 'nav ul li:eq(1)' ).removeClass( 'current' );
      $( 'nav ul li:eq(0)' ).addClass( 'current' );
    }
  }); // else, switch to or remain at Home

	playGifReady();
});