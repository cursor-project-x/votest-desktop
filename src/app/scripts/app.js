angular.module('votestApp', ['ngRoute']);

angular.module('votestApp')
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
      })
      .when('/poll/:pin', {
        templateUrl: 'views/poll.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
