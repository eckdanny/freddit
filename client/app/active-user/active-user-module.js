(function (window, angular, undefined) { 'use strict';

  angular.module('de.activeUser', []);

  angular
    .module('de.activeUser')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.view.activeUser', {
          url: '/user',
          views: {
            'content@app': {
              template: 'Heloooo there!',
              controller: function (ActiveUserService) {
                debugger;
              }
            }
          }
        });
    });

})(window, window.angular);
