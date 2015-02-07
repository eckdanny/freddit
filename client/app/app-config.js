(function (window, angular, undefined) { 'use strict';

  angular
    .module('freddit')

    /**
     * Environmental Variability
     */
    .constant('ENVIRONMENT', {

      //
      // Config
      //

      // PROTOCOL:     'http:',
      HOSTNAME:     '127.0.0.1',
      PORT:         3000,
      // PATHNAME:     '/api/v1',

      //
      // Helper Methods (ES5 Getters)
      //

      get API_PATH() {
        return [
          ( this.PROTOCOL || '' ) + '//',
          this.HOSTNAME,
          this.PORT ? ':' + this.PORT : '',
          this.PATHNAME || ''
        ].join('');
      }

    })

    .config(envConfig);

  function envConfig (ENVIRONMENT, RestangularProvider) {
    RestangularProvider
      .setBaseUrl(ENVIRONMENT.API_PATH);
  }

})(window, window.angular);
