$( document ).ready( function() {

	var stickyNav = $( '.js-menu' ).offset().top -40;

	var $window = $( window );

	$window.scroll( function(){
		if( $window.scrollTop() > stickyNav ){
			$( 'nav' ).addClass( 'sticky' );
		} else {
			$( 'nav' ).removeClass( 'sticky' );
		}
	} );

} );