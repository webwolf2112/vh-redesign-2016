projectApp.directive( 'weatherWidget', function() {
	return {
		restrict: 'E',
		templateUrl: 'template-parts/widget-weather.html'
	}
} );


/***** API Calls - Need to break out and update these if used in projects **/

projectApp.factory( 'dashboardAPI', [ '$http', dashboardAPI ] )
		
	//contains all of our api calls from with in this object and it will be passed 
	function dashboardAPI( $http ) {
		var svc = {};
		
		// ***************************** Scoped Functions *****************************
		svc.getForecastWeather = getForecastWeather;
		svc.getCurrentWeather = getCurrentWeather;
		svc.getIpLocation = getIpLocation;
		

		function getForecastWeather( city , state ){
				return $http( {
					method: 'GET',
					url: 'http://api.wunderground.com/api/c6cd1b1f5ed51a8b/forecast10day/q/' + state + '/' + city + '.json',
					type: 'GET'
				} );
			};

			
		function getCurrentWeather( city, state ){
				return $http( {
					method: 'GET',
					url: 'http://api.wunderground.com/api/c6cd1b1f5ed51a8b/conditions/q/' + state + '/' + city + '.json',
					type: 'GET'
				} );
			};

		function getIpLocation(){
			return $http({
				method: 'GET',
				url: 'http://ip-api.com/json',
				type: 'GET'
			} );
		};		
		
		// Deploy
		return svc;
	}

