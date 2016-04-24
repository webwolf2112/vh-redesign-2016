projectApp.directive( 'weatherWidget', function() {
	return {
		restrict: 'E',
		templateUrl: 'template-parts/widget-weather.html'
	}
} );

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

projectApp.controller( 'weatherAppController', [ 'dashboardAPI', '$http', weatherApp ] );
	
function weatherApp( dashboardAPI, $http ) {
	var weather = this;
	weather.days = [];

	weather.info = {
		text : 'Welcome to the Weather App',
		currentCity : 'Louisville',
		currentState : 'CO'
	};

	weather.getIpLocation = function () {
		dashboardAPI.getIpLocation()
		.then ( function mySuccess ( response ) {
			weather.info.currentCity = response.data.city;
			weather.info.currentState = response.data.region;

			weather.currentWeatherFunction();
			weather.forecastWeatherFunction();

		} );
	};

	//Call the api to get the current weather and update the page via Angular 2 way databinding
	weather.currentWeatherFunction = function () {

		dashboardAPI.getCurrentWeather( weather.info.currentCity, weather.info.currentState )
		.then( function mySucces( response ) {
			if( response.data.current_observation ){
				weather.info.currentTemp = response.data.current_observation.temp_f;
				weather.info.city = response.data.current_observation.display_location.city;
				weather.info.state = response.data.current_observation.display_location.state;
				weather.info.iconUrl = response.data.current_observation.icon_url;
			} else {
				$( '.not-valid-city' ).show();
			}
		} );
	};

	//Call the api to get the 10 day weather forecast and update the page via Angular 2 way databinding
	weather.forecastWeatherFunction = function () {
		//emptying the array if it has values
		weather.days = [];

		//making the api call for the current weather in the city and state - Louisville CO is the default
		dashboardAPI.getForecastWeather( weather.info.currentCity, weather.info.currentState )
		.then( function mySucces( response ) {

			if( response.data.forecast ) {
				var dayArray = response.data.forecast.simpleforecast.forecastday

				//looping through the 10 day returned array and populating the weather.days with new daily weather object for each day
				for( day in dayArray ) {
					weather.days.push( {
						day: dayArray[ day ].date.day,
						month: dayArray[ day ].date.monthname,
						weekday: dayArray[ day ].date.weekday,
						iconUrl: dayArray[ day ].icon_url,
						conditions: dayArray[ day ].conditions,
						highTemp:  dayArray[ day ].high.fahrenheit,
						lowTemp: dayArray[ day ].low.fahrenheit,
						snowTotal: dayArray[ day ].snow_allday.in
					} );
				}
			} else {
				$( '.not-valid-city' ).show();
			}
		} );
	};

	//On form submit run the new functions with the new values that angular has databinded 
	weather.formChangeCity = function () {
		weather.currentWeatherFunction();
		weather.forecastWeatherFunction();
	};

	weather.geoLocation = function () {
		weather.info.latitude = '',
		weather.info.longitude = ''
	};

	initFunction = function() {
		//get the ip loction then run the other two functions
		weather.getIpLocation();

		//Update the current weather every 5 minutes
		setInterval( function() {
			//weather.currentWeatherFunction();
		}, 300000 );
	}
	
	weather.initFunction = initFunction;

	weather.initFunction();
}