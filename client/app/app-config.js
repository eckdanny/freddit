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

      PROTOCOL:     'http:',
      HOSTNAME:     '127.0.0.1',
      PORT:         3000,
      PATHNAME:     '',

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

    /**
     * Pagination Settings
     */
    .constant('PAGINATION', {

      LIMITS: [
        { display: '10' , value: 10 },
        { display: '25' , value: 25 },
        { display: '50' , value: 50 }
      ],

      get DEFAULT_LIMIT() {
        return this.LIMITS[0];
      }

    })

    .config(envConfig);

  function envConfig (ENVIRONMENT, RestangularProvider) {
    RestangularProvider
      .setBaseUrl(ENVIRONMENT.API_PATH);
  }

})(window, window.angular);
