(function(){

	var vhNav = {

		init : function () {

			this.sitckyNav();
			this.smoothScroll();
		},

		smoothScroll : function() {

			//smooth scroll to links on the same page

			$('a[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
				    $('html, body').animate({
				      scrollTop: target.offset().top
				    }, 1000);
				    return false;
				  }
				}
			});

            //on window load
            if(window.location.hash) {

                var hash = window.location.hash.substring(1);
                hash = $('#' + hash);

                $('html,body').animate({
                     scrollTop: hash.offset().top
                }, 1000);
                return false;
            }

		},

		sitckyNav : function() {

			var $window = $( window );

			$window.scroll( function(){
				if( $window.scrollTop() > 40 ){
					$( 'nav' ).addClass( 'sticky' );
				} else {
					$( 'nav' ).removeClass( 'sticky' );
				}
			} );

		}
	};



	$( document ).ready( function() {

		vhNav.init();

	} );

})();
