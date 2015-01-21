(function () { 'use strict';

  angular
    .module('de.comments', [])
    .config(CommentsModuleConfig);

  function CommentsModuleConfig ($stateProvider) {
    $stateProvider
      .state('app.view.home', {
        url: '/',
        views: {
          'content@app': {
            template: 'override!!!'
          }
        }
      });
  }

})();
