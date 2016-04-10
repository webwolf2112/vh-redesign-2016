(function(){
	
	var vhScripts = {

		init : function() {
			this.randomQuotes();
		},

		randomQuotes : function () {

			var randomQuote = [
				"&quotStrive not to be a success, but rather to be of value&quot <span class='author'>-Albert Einstein</span>",
				"&quotWe make a living by what we get, but we make a life by what we give &quot <span class='author'>-Winston Churchill</span>",
				"&quotSuccess is getting what you want, happiness is wanting what you get&quot <span class='author'>- W.P. Kinsella<span>'",
				"&quotIf you can dream it, you can do it&quot <span class='author'>-Walt Disney</span>",
				"&quotAt the end of the day, let there be no excuses, no explanations, no regrets &quot <span class='author'>- Steve Maraboli</span>"

			];


			var randomNumber = Math.floor(Math.random() * randomQuote.length);	

			var somerandom = function (){

				randomNumber = Math.floor(Math.random() * randomQuote.length);

				$( '#quote' ).html(randomQuote[randomNumber]);

				return ;		
				
			} ;

			somerandom();

			setInterval (function () {
				somerandom();
			}, 3000 );
		} 

	}

	$( document ).ready( function() {

		vhScripts.init();

	} ).on( "click" , ".project" , function () {

		var $this = $( this );

			if( ! $( '.dialog-popup').length > 0 ){
				$( 'body' ).append('<div class="dialog-popup"></div>');
			}

			$( '.dialog-popup' ).html('');

			//$this.find( '.description' ).clone().remove().appendTo( '.dialog-popup' );
			var title = $this.find( '.name').html();
			var description = $this.find( '.description').html();

			$( '.dialog-popup').html( description );	


			$( '.dialog-popup ').dialog( {
				draggable : false,
				title: title,
				open: function () {
					$( 'body' ).prepend( '<div class="modal-background"></div>' );
				},

				close: function() {
					$( '.modal-background' ).remove();
				},
				
			});





	} ).on( "click", '.modal-background', function() {

		$( '.dialog-popup ').dialog('close');
		$( this ).remove();

	} );

})();

