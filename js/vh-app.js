( function () {

	var projectApp = angular.module('projects', []);

	projectApp.directive('singleProject', function() {
		return {
			restrict: 'E',
			templateUrl: 'template-parts/client-sites.php'
		}
	} );

	projectApp.controller('projectsController', function($scope){

     	$scope.projects = [
     		{
				name: 'Rita Hazan',
				info: 'Rita Hazan- Colorist to the stars',
				img: 'img/rita.jpg',
				imgAlt: 'Rita Hazan',
				url: 'https://ritahazan.com/',
				description: 'I was the the sole developer on this custom shopify website. I implemented pixel perfect designs as well as stretching the boundries of Shopify by creating very customized complex functionality. I worked to create numerous custom Shopify templates, and wrote custom code with Liquid, Javascript, JSON, HTML and CSS.'
			},{
				name: 'CU Anschutz',
				info: 'CU Anschutz "Micro" Website',
				img: 'img/anschutz.jpg',
				imgAlt: 'UC Anschutz',
				url: 'http://supportcuanschutz.ucdenver.edu/',
				description: 'I worked with my team to create this pixel perfect responsive Micro-Site. This design required very complex CSS for the sliders, as well as very complex data structure. The client was very satisfied. I wrote custom PHP, Javascript, HTML, and CSS for this project.'
	 		},{
				name: 'Reebok',
				info: 'Reebok Website',
				img: 'img/reebok.jpg',
				imgAlt: 'Reebok',
				url: 'http://www.reebok.com/us/',
				description: 'I have been the lead developer on numerous projects with Reebok and have custom code on nearly every page on the the current Reebok website. I was in charge of the Superbowl Add Homepage redesign, Athletes Pages, UFC launch pages, and numerous landing pages. I wrote extensive custom Javascript for all of these projects, as well as HTML, JSON, and CSS.'
	 		},
			{
				name: '',
				info: '',
				img: '',
				imgAlt: '',
				url: '',
				description: ''
	 		},
     	];

	} );


})();

