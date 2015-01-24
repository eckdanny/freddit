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
        id: 1,
        upvotes: 23,
        downvotes: 2,
        title: 'Bathroom Tiles',
        tags: [
          'annoy',
          'weird',
          'bathroom',
          'drunk'
        ],
        body: '' +
          'Dude! The men\'s bathroom tile job is trippy. They\'re like, ' +
          'slanted or something. Every time I go in there, I feel drunk. Can ' +
          'we do something to fix that?',
        created: '2015-01-19T14:34:59.527Z',
        author: {
          id: '1',
          name: 'Danny'
        }
      },
      {
        id: 2,
        upvotes: 1,
        downvotes: 8,
        title: 'Sup',
        tags: [
          'hello'
        ],
        body: 'Hello World!',
        created: '2015-01-21T14:34:59.527Z',
        author: {
          id: '1',
          name: 'Danny'
        }
      },
      {
        id: 3,
        upvotes: 48,
        downvotes: 13,
        title: 'Harry Potter would beat Batman in a fight',
        tags: [
          'Harry Potter',
          'Batman',
          'magic',
          'fight'
        ],
        body: '' +
          'If it came down to mortal combat, I\'m pretty sure ' +
          'that Harry Potter would beat Batman. I mean... he\'s got like mad ' +
          'magic skills and he can fly (on a broom). Batman doesn\'t know magic ' +
          'last time I checked. He\'d definitely lose.',
        created: '2015-01-21T14:36:59.527Z',
        author: {
          id: '2',
          name: 'Mike'
        }
      },
      {
        id: 4,
        upvotes: 48,
        downvotes: 13,
        title: 'Everything is Awesome!!!',
        tags: [
          'Harry Potter',
          'Batman',
          'magic',
          'fight'
        ],
        body: '' +
          'If it came down to mortal combat, I\'m pretty sure ' +
          'that Harry Potter would beat Batman. I mean... he\'s got like mad ' +
          'magic skills and he can fly (on a broom). Batman doesn\'t know magic ' +
          'last time I checked. He\'d definitely lose.',
        created: '2015-01-21T14:36:59.527Z',
        author: {
          id: '2',
          name: 'Mike'
        }
      },
      {
        id: 5,
        upvotes: 48,
        downvotes: 13,
        title: 'Pairing Issues',
        tags: [
          'Harry Potter',
          'Batman',
          'magic',
          'fight'
        ],
        body: '' +
          'If it came down to mortal combat, I\'m pretty sure ' +
          'that Harry Potter would beat Batman. I mean... he\'s got like mad ' +
          'magic skills and he can fly (on a broom). Batman doesn\'t know magic ' +
          'last time I checked. He\'d definitely lose.',
        created: '2015-01-21T14:36:59.527Z',
        author: {
          id: '2',
          name: 'Mike'
        }
      }
    ];
  }

})(window, window.angular);
