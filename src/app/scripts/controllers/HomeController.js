angular.module('votestApp')
  .controller('HomeController', function($scope, $location, ApiService) {
    $scope.viewPoll = () => {
      const pin = $scope.pin;

      $scope.error = ''

      if (!/^\d{2}\-\d{2}\-\d{2}$/.test(pin)) {
        $scope.error = 'PIN format is not correct.'
        return
      }

      $scope.loading = true;

      ApiService.getPoll(pin).then((data) => {
        if (!data.poll) {
          $scope.loading = false;
          $scope.error = 'Poll not found.'
          $scope.$apply()
          return
        }

        $location.path(`/poll/${pin}`);
      });
    }
  });
