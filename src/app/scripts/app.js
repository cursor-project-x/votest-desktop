const app = angular.module('votestApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/poll/:pin', {
      templateUrl: 'views/poll.html',
      controller: 'PollController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
