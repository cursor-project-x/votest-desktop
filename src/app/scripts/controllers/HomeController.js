app.controller('HomeController', function($location) {
  var vm = this;

  vm.page = 'homepage';

  vm.viewPoll = () => {
    const pin = vm.pin;

    vm.error = ''

    if (!/^\d{2}\-\d{2}\-\d{2}$/.test(pin)) {
      vm.error = 'PIN format is not correct.'
      return
    }

    $location.path(`/poll/${pin}`);
  }
});
