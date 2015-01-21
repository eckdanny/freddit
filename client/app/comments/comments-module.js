(function () { 'use strict';

  angular
    .module('de.comments',
      [
        'de.comments.listView'
      ]
    )
    .config(commentsModuleConfig);

  function commentsModuleConfig ($stateProvider) {
    $stateProvider
      .state('app.view.comments', {
        url: '/comments',
        abstract: true,
        views: {
          'content@app': {
            template: '<div ui-view></div>'
          }
        }
      });
  }

})();
