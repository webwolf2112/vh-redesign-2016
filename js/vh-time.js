projectApp.directive( 'timeWidget', function(){
 	return {
 		restrict: 'E',
 		templateUrl: 'template-parts/widget-time.html'
 	}
} );


projectApp.controller( 'timeAppController', [ '$scope','$timeout', timeAppController ] );
	
	function timeAppController( $scope, $timeout, dashboardAPI ) {
		var time = this;
		
		// ***************************** Local Variables *****************************
		time.text = 'Current Day & Time';
		time.mountain = {
			hour : 0,
			day : 0,
			dayOfWeek: 0,
			month: 0,
			minutes: 0,
			ampm : 0,
			clients : []
		};
		time.pacific = {
			hour : 0,
			day : 0,
			dayOfWeek: 0,
			month: 0,
			minutes: 0,
			ampm : 0 ,
			clients : [ ]
		};
		time.central = {
			hour : 0,
			day : 0,
			dayOfWeek: 0,
			month: 0,
			minutes: 0,
			ampm : 0,
			clients: []
		};
		time.eastern = {
			hour : 0,
			day : 0,
			dayOfWeek: 0,
			month: 0,
			minutes: 0,
			ampm : 0,
			clients : []
		};

		// ***************************** Controller Functions *****************************

		time.getCurrentTime = function(){

			//internal time functions

			//check for daylight savings time
			function stdTimezoneOffset( currentDate ) {
				var jan = new Date( currentDate.getFullYear(), 0, 1 ),
					jul = new Date( currentDate.getFullYear(), 6, 1 );
				return Math.max( jan.getTimezoneOffset(), jul.getTimezoneOffset() );
			}

			function dst( currentDate ) {
				return currentDate.getTimezoneOffset() < stdTimezoneOffset( currentDate );
			}

			//convert the number to a day of the week
			function dayConversion( day ) {
				switch ( day ) {
					case 1 :
					day =  'Monday';
					break;
					case 2 :
					day = 'Tuesday';
					break;
					case 3 :
					day = 'Wednesday';
					break;
					case 4 :
					day = 'Thursday';
					break;
					case 5 :
					day = 'Friday';
					break;
					case 6 :
					day = 'Saturday';
					break;
					default :
					day = 'Sunday';
					break;
				}

				return day;
			}

			//convert the number to the month
			function monthConversion ( month ) {
				switch ( month ) {
					case 0 :
					month = 'January';
					break;
					case 1 :
					month = 'Feburary';
					break;
					case 2 :
					month = 'March';
					break;
					case 3 :
					month = 'April';
					break;
					case 4 :
					month = 'May';
					break;
					case 5 :
					month = 'June';
					break;
					case 6 :
					month = 'July';
					break;
					case 7 :
					month = 'August';
					break;
					case 8 :
					month = 'September';
					break;
					case 9 :
					month = 'October';
					break;
					case 10 :
					month = 'November';
					break;
					default :
					month = 'December';
					break;
				}

				return month;
			}

			//time format conversion
			function hourConversion ( hour ){
				if ( hour <= 12 ){
					hour = hour;
				} else {
					hour = hour - 12;
				}
				return hour;
			}

			//minute conversion
			function minuteConversion ( minute ) {
				if ( minute < 12 ){
					minute = '0' + minute;
				} else {
					minute = minute;
				}
				return minute;
			}

			//am pm coversion
			function amPmConversion ( hour ) {
				if ( hour < 12 ){
					hour = 'am';
				} else {
					hour = 'pm';
				}
				return hour;
			}

			date = new Date();

			//getting the offsets for each time zone you can find those values here http://www.timetemperature.com/tzus/gmt_united_states.shtml
			var mtOffset = 7,
				pOffset = 8,
				cOffset = 6,
				eOffset = 5;
				
			//subtract and hour from the offset if it's daylight savings
			if ( dst( date ) ) { 
				mtOffset = 6;
				pOffset = 7;
				cOffset = 5;
				eOffset = 4;
			}

			//getting the UTC Time for correct conversion
			var localTime = date.getTime(),
				localOffset = date.getTimezoneOffset() * 60000,
				utc = localTime + localOffset;

			//setting the new timezones with the correct offset
			var mountainTime = utc - ( 3600000 * mtOffset ),
				pacificTime = utc - ( 3600000 * pOffset ),
				easternTime = utc - ( 3600000 * eOffset ),
				centralTime = utc - ( 3600000 * cOffset );

			//getting the current UTC time to make up for the other time zones
			var timeOffset = date.getTimezoneOffset(),
				mountainTime = new Date( mountainTime ),
				centralTime = new Date( centralTime ),
				pacificTime = new Date( pacificTime ),
				easternTime = new Date( easternTime );

				//mountain time variables 
				time.mountain.hour = hourConversion( mountainTime.getHours() );
				time.mountain.day = mountainTime.getDate();
				time.mountain.dayOfWeek = dayConversion( time.mountain.day );
				time.mountain.month = monthConversion( mountainTime.getMonth() );
				time.mountain.minutes = minuteConversion( mountainTime.getMinutes() );
				time.mountain.ampm = amPmConversion( mountainTime.getHours() );
				;

				//pacific time variables
				time.pacific.hour = hourConversion( pacificTime.getHours() );
				time.pacific.day = pacificTime.getDate();
				time.pacific.dayOfWeek = dayConversion( time.pacific.day );
				time.pacific.month = monthConversion( pacificTime.getMonth() );
				time.pacific.minutes = minuteConversion( pacificTime.getMinutes() );
				time.pacific.ampm = amPmConversion( pacificTime.getHours() );

				//central time variables
				time.central.hour = hourConversion( centralTime.getHours() );
				time.central.day = centralTime.getDate();
				time.central.dayOfWeek = dayConversion( time.central.day );
				time.central.month = monthConversion( centralTime.getMonth() );
				time.central.minutes = minuteConversion( centralTime.getMinutes() );
				time.central.ampm = amPmConversion( centralTime.getHours() );

				//eastern time variables
				time.eastern.hour = hourConversion( easternTime.getHours() );
				time.eastern.day = easternTime.getDate();
				time.eastern.dayOfWeek = dayConversion( time.eastern.day );
				time.eastern.month = monthConversion( easternTime.getMonth() );
				time.eastern.minutes = minuteConversion( easternTime.getMinutes() );
				time.eastern.ampm = amPmConversion( easternTime.getHours() );
		

			$scope.$apply();
		
		};

		init = function() {

			$timeout(function(){
				time.getCurrentTime();
			});
				
			//reset the time every minute
			setInterval( function() {
				time.getCurrentTime();
			}, 40000 );
			
		}

		// ***************************** Scoped Functions *****************************
		time.init = init;

		time.init();
	}
