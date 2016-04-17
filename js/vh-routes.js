projectApp.config( function( $routeProvider ) {
    $routeProvider.
      when('/projects', {
        templateUrl: 'template-parts/projects-page.php'
      }).
     otherwise({
        templateUrl: 'template-parts/main-page.php'
      });

  } );