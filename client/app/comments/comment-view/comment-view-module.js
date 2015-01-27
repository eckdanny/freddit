(function (window, angular, undefined) { 'use strict';

  var DIR = 'comments/comment-view';

  angular
    .module('de.comments.commentView', [])
    .config(commentViewConfig);

  function commentViewConfig ($stateProvider) {
    $stateProvider
      .state('app.view.comments.one', {
        url: '/:commentId',
        controller: 'CommentViewController',
        controllerAs: 'cmt',
        templateUrl: DIR + '/comment-view.html',
        resolve: {
          comment: function ($stateParams, commentService) {
            return commentService
              .one($stateParams.commentId);
          }
        }
      });
  }

  function mockComment () {
    return {
      id: '123',
      foo: 'foo',
      bar: 'bar'
    };
  }

})(window, window.angular);
