angular.module('votestApp')
  .controller('PollController', function($scope, $routeParams, $location, ApiService, ApiWsService) {
    const pin = $routeParams.pin;

    $scope.loading = true;

    ApiService.getPoll(pin).then((data) => {
      $scope.loading = false;
      $scope.$apply();

      if (!data.poll) {
          $location.path('/');
          return
        }

      $scope.poll = data.poll;
      $scope.$apply();
    });

    ApiWsService.subscribe(function onmessage (data) {
      console.log('data', data, data.pin, pin)
      if (data.pin !== pin) return;

      $scope.poll.votesGrouped = data.votesGrouped
      $scope.$apply()
    })
  });
