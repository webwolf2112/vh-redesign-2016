var context;

(function(){

	var vhNav = {

		init : function () {

			this.challengeContext();
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
				      scrollTop: target.offset().top - 50
				    }, 1000);

				    //close the mobile menu
				    $( '#hamburger-helper').prop( "checked", false );

				    

				    return false;
				  }
				}
			});

            //on window load
            if(window.location.hash) {

                var hash = window.location.hash.substring(1);
                hash = $('#' + hash);

                $('html,body').animate({
                     scrollTop: hash.offset().top - 50
                }, 1000);
                return false;
            }

		},

		sitckyNav : function() {

			var $window = $( window );

			if( context === 'mobile' ){

				$( 'nav' ).addClass( 'sticky' );

			} else {

				$window.scroll( function(){
					if( $window.scrollTop() > 40 ){
						$( 'nav' ).addClass( 'sticky' );
					} else {
						$( 'nav' ).removeClass( 'sticky' );
					}
				} );
			}

		},

			/**
		 * Device targeting should be based on media queries in CSS,
		 * we do not define this in scripts
		 * Modified from http://davidwalsh.name/device-state-detection-css-media-queries-javascript
		 */

		challengeContext: function() {
			var challengeElement = document.querySelector('.breakpoint-context'),
				styles = window.getComputedStyle(challengeElement),
				index = parseInt(styles.getPropertyValue('z-index'), 10),
				states = {
					1: 'mobile',
					2: 'tablet'
				};

			context = states[index] || 'desktop';

		}
	};



	$( document ).ready( function() {

		vhNav.init();

	} );

	$( window ).resize( function() {

		vhNav.challengeContext();
	} );

})();
