(function (window, angular, undefined) { 'use strict';

  var DIR = 'comments/list-view';

  angular
    .module('de.comments.listView', [])
    .config(listViewConfig);

  function listViewConfig ($stateProvider) {
    $stateProvider
      .state('app.view.comments.list', {
        url: '',
        views: {
          '': {
            templateUrl: DIR + '/list-view.html',
            controller: 'CommentsListViewController',
            controllerAs: 'list',
            resolve: {
              comments: mockComments
            }
          }
        }
      });
  }

  function mockComments () {
    return [
      {
        id: 123,
        title: 'Foo',
        body: 'Hello World!',
        created: '2015-01-21T14:34:59.527Z',
        author: {
          id: 'aaa',
          name: 'Danny'
        }
      },
      {
        id: 124,
        title: 'Sup',
        body: 'Hello World!',
        created: '2015-01-21T14:34:59.527Z',
        author: {
          id: 'aaa',
          name: 'Danny'
        }
      },
      {
        id: 125,
        title: 'Oh No\'s!!!',
        body: 'Goodbye cruel world!',
        created: '2015-01-21T14:34:59.527Z',
        author: {
          id: 'aaa',
          name: 'Danny'
        }
      }
    ];
  }

})(window, window.angular);
