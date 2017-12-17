angular.module('votestApp')
  .service('ApiWsService', function ($http) {
    this.subscribe = function (onmessage) {
      var socket = new WebSocket(API_URL_WS);

      socket.onopen = function() { console.log('onopen'); };
      socket.onclose = function(event) { console.log('onclose', event); };
      socket.onerror = function(e) { console.log('onerror', e); };
      socket.onmessage = function(event) {
        onmessage(JSON.parse(event.data));
      }
    }

    //
  })
