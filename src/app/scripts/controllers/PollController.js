app.controller('PollController', function($scope, $routeParams) {
  var vm = this;
  const pin = $routeParams.pin;

  $scope.loading = true;

  setTimeout(() => {
    $scope.loading = false;
    console.log('111');
    $scope.page = 'poll-page111';
  }, 3000);

  $scope.page = 'poll-page';
});
