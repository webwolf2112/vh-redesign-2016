	projectApp.directive('professionalSkills', function() {
		return {
			restrict : 'E',
			templateUrl : 'template-parts/skills.php'
		}
	} );

	projectApp.controller('skillsController', function($scope){

     	$scope.skills = [
               [
         	 	     'Javascript',
          		'JQuery',
          		'HTML',
          		'CSS',
          		'PHP',
          		'Angular Js',
                    'Ajax'
     	    ],
              [
                    'API Integration',
                    'Wordpress',
                    'Shopify',
                    'MySQL fundamentals',
                    'Git',
                    'SASS',
                    'Responsive Development',
              ],
              [
                    'Mailchimp',
                    'Adobe Creative Suite',
                    'Advanced Troubleshooting',
                    'Highly Motivated',
                    'Passion for Learning',
                    'Creative Problem Solving',
                    'Proficient in Mac & PC',
              ]
          ];


     	$scope.highlights = [
     		{
     			name : 'Reebok',
     			description: [ 'All main pages on Reeboks current website' , 'Be More Human Superbowl 2015 Homepage Launch.', 'Developed custom email capture forms on Reebok landing pages.' , 'Developed Multiple Landing Pages for Reebok.']
     		},{
     			name : 'Crossfit by Reebok',
     			description: [
                         'new Crossfit Store main page, header and footer.'
                    ]
     		},{
     			name : 'Crocs',
     			description : [
                         'Crocs current Mega Menu, Landing Pages, and Brazil Site.'
                    ]
     		},{
     			name : 'Big Chill',
     			description: [
                         'Updating and Implementing Code on Big Chill'
                    ]
     		}, {
     			name : 'Multiple Wordpress Sites',
     			description: [ 
                         'Implementing and writing custom Wordpress Child Themes and functionality.'
                    ]
     		}
     	];

     	$scope.education = [
     		{
     			year : '2015',
     			field : [
                         '2015 Online Training through Code School and Udemy Training'
                    ]
     		},{
     			year : '2014',
     			field : [ 
                         'PHP training classes, PB Tech Training',
                         'PHP training classes, Udemy'

                    ]
     		},{
     			year : '2013',
     			field : [
                         'Ruby training classes, Boulder Digital Arts',
                         'Online training through Code Academy & Infinite Skills'
                    ]
     		},{
     			year : '2012',
     			field : [
                         'Graphic Design Courses completed at Boulder Digital Arts',
                         'Web Transitions Certification LAMP technologies, Boulder Digital Arts'

                    ]
     		},{
     			year : '2011',
     			field : [ 'Adobe Certified Expert CS4' ]
     		},{
     			year : '2002',
     			field : [ 
                         'Master CIW Designer Certified',
                         'CIW Professional Certified'
                    ]
     		},{
     			year : '2001',
     			field : [ 
                         'CompTIA i-net+ Certified Professional',
                         'CIW Associate Certified'

                     ]
     		}
     	];

          $scope.showSection = function ( id, element ) {
              
               var $ele =  $("." + element),
                    $id = $("." + id),
                    text;

               $ele.slideToggle().toggleClass( 'open' );
          
               text = $ele.hasClass('open') ? 'Show' : 'Hide';

               $id.find( 'span' ).html( text );
          }

	} );