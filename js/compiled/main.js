(function(){
	
	var vhScripts = {

		init : function() {
			this.randomQuotes();
		},

		randomQuotes : function () {

			var randomQuote = [
				"&quotStrive not to be a success, but rather to be of value&quot<span class='author'>-Albert Einstein</span>",
				"&quotWe make a living by what we get, but we make a life by what we give&quot<span class='author'>-Winston Churchill</span>",
				"&quotSuccess is getting what you want, happiness is wanting what you get&quot<span class='author'>― W.P. Kinsella</span>",
				"&quotSuccess is getting what you want, happiness is wanting what you get&quot<span class='author'>― W.P. Kinsella</span>",
				"&quotIf you can dream it, you can do it&quot<span class='author'>― Walt Disney</span>",
				"&quotAt the end of the day, let there be no excuses, no explanations, no regrets&quot<span class='author'>―Steve Maraboli</span>"

			];


			var randomNumber = Math.floor(Math.random() * randomQuote.length);	

			var somerandom() = function (){

				randomNumber = Math.floor(Math.random() * randomQuote.length);
			 	
				document.getElementById("quote").innerHTML=randomQuote[randomNumber];
					
				
			} 


			setInterval( "somerandom()", 3000 );
		}

	}

	$( 'document' ).ready( function() {

		vhScripts.init();

	} );

})();

