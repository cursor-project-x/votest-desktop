angular.module('votestApp')
  .service('ApiService', function ($http) {
    this.request = function (path) {
      return new Promise((resolve, reject) => {
        $http.get(API_URL_HTTP + path)
          .then((response) => {
            return resolve(response.data, response);
          })
          .catch((error) => {
            console.log('error', error);
            return reject(error);
          })
      });
    }

    // ping api
    this.ping = function () {
      return this.request('/ping');
    }

    //
    this.getPoll = function (pin) {
      return this.request(`/poll/${pin}`);
    }
  })
