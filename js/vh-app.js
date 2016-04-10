var projectApp = angular.module('projects', []);

	projectApp.directive('singleProject', function() {
		return {
			restrict : 'E',
			templateUrl : 'template-parts/client-sites.php'
		}
	} );

	projectApp.directive('aboutMe', function() {
		return {
			restrict : 'E',
			templateUrl : 'template-parts/about-me.php'
		}
	});

	projectApp.controller('projectsController', function($scope){

     	$scope.projects = [
     		{
				name: 'Rita Hazan',
				info: 'Rita Hazan- Colorist to the stars',
				img: 'img/rita.jpg',
				url: 'https://ritahazan.com/',
				description: 'I was the the sole developer on this custom shopify website. I implemented pixel perfect designs as well as stretching the boundries of Shopify by creating very customized complex functionality. I worked to create numerous custom Shopify templates, and wrote custom code with Liquid, Javascript, JSON, HTML and CSS.'
			},{
				name: 'Reebok',
				info: 'Reebok Shoes and Apparel',
				img: 'img/reebok.jpg',
				url: 'http://www.reebok.com/us/',
				description: 'I have been the lead developer on numerous projects with Reebok and have custom code on nearly every page on the the current Reebok website. I was in charge of the Superbowl Add Homepage redesign, Athletes Pages, UFC launch pages, and numerous landing pages. I wrote extensive custom Javascript for all of these projects, as well as HTML, JSON, and CSS.'
	 		},{
	 			name: 'Blue Star',
	 			info: 'Blue Star High End Kitchen Appliances',
	 			img: 'img/bluestar.jpg',
	 			url: 'http://www.bluestarcooking.com/',
	 			description: 'I am incharge of troubleshooting and upgrating this custom wordpress website.'
	 		},
			{
				name: 'Crosfit Store by Reebok',
				info: 'Crossfit Store by Reebok',
				img: 'img/crossfit.jpg',
				url: 'http://www.store.crossfit.com/',
				description: 'I was in charge of creating the new website header and footer. I created most of the code on the current homepage, including the masthead, hover product sections and the hover image changer. I wrote custom Javascript, HTML and CSS for this project.'
	 		},{
				name: 'CU Anschutz',
				info: 'CU Anschutz "Micro" Website',
				img: 'img/anschutz.jpg',
				url: 'http://supportcuanschutz.ucdenver.edu/',
				description: 'I worked with my team to create this pixel perfect responsive Micro-Site. This design required very complex CSS for the sliders, as well as very complex data structure. The client was very satisfied. I wrote custom PHP, Javascript, HTML, and CSS for this project.'
	 		},{
				name: 'Crocs',
				info: 'Crocs Shoes',
				img: 'img/crocs.jpg',
				url: 'http://www.crocs.com/',
				description: 'I wrote custom HTML, CSS, and Javascript for their navigation Mega Menu, and landing pages and implemented it on their demandware platform. I also coded several elements of their http://crocs.com.br Brazil site</a> and fixed errors from outsourced.'
	 		},{
				name: 'Woodlands Vascular',
				info: 'Woodlands Vascular Center',
				img: 'img/woodlandsvasc.jpg',
				url: 'http://woodlandsvascularcenter.com/',
				description: 'I was the sole developer on this custom website. I implemented pixel perfect code from our internal designer. I wrote custom PHP, Javascript, HTML, and CSS for this website.'
	 		},{
				name: 'Big Chill',
				info: 'Bill Chill Retro Kitchen Appliances',
				img: 'img/bigchill.jpg',
				url: 'https://bigchill.com/',
				description: 'I am in charge of updates, edits and redesigns on this website per client requests. I also worked on transforming this static website to a responsive site. I wrote several custom pages, including their Retro Page, Pro Page, and Press Page. I have written custom PHP, Javascript, HTML and CSS for this website.'
	 		},{
				name: 'Voltage Advertising and Design',
				info: 'Voltage Advertizing and Design',
				img: 'img/voltage.jpg',
				url: 'http://voltagead.com',
				description: 'I was in charge of implementing many elements and pages of this website. I coded the Services page, and Blog pages as well as many aspects of the Clients pages, and the navigation. This Wordpress website uses advanced custom fields as well as very complex custom code. I wrote custom PHP, Javascript, HTML, and CSS on this website.'
	 		},{
				name: 'Clear Choice',
				info: 'Clear Choice Dental Implants',
				img: 'img/clearchoice.jpg',
				url: 'http://www.clearchoice.com/',
				description: 'I implemented many complex landing pages on this website. Using Wordpress with a custom theme I was able to use advanced custom fields to make the pages highly dynamic.'
	 		},{
				name: 'Pillar Companies',
				info: 'Pillar Companies',
				img: 'img/pillar.jpg',
				url: 'http://pillarcompanies.com/',
				description: 'I was the sole developer on this project and implemented this fully responsive website. I wrote custom PHP, Javascript, HTML and CSS for this website.'
	 		},{
				name: 'Rare Italian',
				info: 'Rare Italian Resturant',
				img: 'img/rare.jpg',
				url: 'http://rareitalian.com/',
				description: 'I was in charge of many custom edits and elements of this custom Wordpress website. I wrote custom Javascript for this website.'
	 		},{
	 			name: 'Colorado Hazard Control',
	 			info: 'Colorady Hazard Control',
	 			img: 'img/chc.png',
	 			url: 'http://www.coloradohazard.com/',
	 			description: 'This website was created with the Bootstrap CSS framework. It was hand coded in HTML5, CSS3 and PHP. I wrote and implemented a custom JQuery "Sticky Slider" for the training portion of this class. It is fully responsive and fully validated.'
	 		},{
	 			name: 'John Mcelveen Real Estate',
	 			info: 'John Mcelveen Real Estate',
	 			img: 'img/john.png',
	 			url: 'http://www.j-macoboulder.com/',
	 			description: 'I successfully implemented and hand coded this pixel perfect website from the clients mock-up design. I accurately sliced all photoshop graphics, as well as hand coding HTML5, CSS3, Javascript & jQuery in this website. This website includes custom jquery and PHP as well. This website was made to be partially responsive using the Skeleton CSS grid framework. As the client preferred to have a separate mobile website I implemented a jquery mobile version of this website as well.'
	 		},{
	 			name: 'AB Installations',
	 			info: 'AB Installations',
	 			img: 'img/abinstall.jpg',
	 			url: 'http://abinstallationsinc.com/',
	 			description: 'I successfully implemented and hand coded this responsive website and assisted the designer in creating a color scheme. I accurately sliced all photoshop graphics, as well as hand coding HTML5, CSS3, Javascript & jQuery in this website.'
	 		},{
	 			name: 'Laurie Kaufman Realestate',
	 			info: 'Laurie Kaufman Real Estate',
	 			img: 'img/laurie.png',
	 			url: 'http://lauriekaufman.net/',
	 			description: 'I both designed and implemented this pixel perfect website.  Using complex realestate API to ensure accurate search results'
	 		},{
	 			name: 'Lynn Ryan Realestate',
	 			info: 'Lynn Ryan Real Estate',
	 			img: 'img/lynnLarge.jpg',
	 			url: 'http://lynnryanboulder.com/',
	 			description: 'I successfully implemented and hand coded this pixel perfect website from the clients mock-up design. I accurately sliced all photoshop graphics, as well as hand coding HTML5, CSS3, Javascript & jQuery in this website. This website includes custom jquery and PHP as well. This website includes custom jquery and PHP as well.This website was made to be partially responsive using a CSS grid framework. As the client preferred to have a separate mobile website I implemented a jquery mobile version of this website as well.'
	 		}
	 		// {
	 		// 	name: '',
	 		// 	info: '',
	 		// 	img: '',
	 		// 	url: '',
	 		// 	description: ''
	 		// }
     	];


     	var dialogPopUp = function() {
     		console.log( 'clicked' );
     	}
	} );


