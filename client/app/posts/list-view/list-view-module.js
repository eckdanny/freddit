(function (window, angular, _, undefined) { 'use strict';

  var DIR = 'posts/list-view';

  angular
    .module('de.posts.listView', ['restangular'])
    .config(listViewConfig);

  function listViewConfig ($stateProvider, RestangularProvider) {
    $stateProvider
      .state('app.view.posts.list', {
        url: '',
        views: {
          '': {
            templateUrl: DIR + '/list-view.html',
            controller: 'PostListViewController',
            controllerAs: 'list',
            resolve: {
              posts: function ($location, PostService) {
                return topicalPostServiceFactory(PostService)
                  .create($location.search().topic)
                  .getList();
              }

            }
          }
        }
      });
  }

  function TopicalPostService (PostService) {
    this.PostService = PostService;
  }

  TopicalPostService.prototype = {};
  TopicalPostService.prototype.constructor = TopicalPostService;

  TopicalPostService.prototype.getList = function () {
    return this.PostService.getList({ query: this.queryObject});
  };

  function Last24HourPostService (PostService) {

    TopicalPostService.call(this, PostService);

    this.queryObject = {
      filtered: {
        filter: {
          range: {
            _timestamp: {
              gt: 'now-24h'
            }
          }
        }
      }
    };
  }

  Last24HourPostService.prototype = _.create(TopicalPostService.prototype, { 'constructor': Last24HourPostService });

  function topicalPostServiceFactory (PostService) {

    var _registry = {
      'last24': Last24HourPostService
    };

    return {
      create: create
    };

    function create (topic) {

      if (_registry[topic]) {
        return new _registry[topic](PostService);
      }

      console.warn('topic', topic, 'is not recognized!');

      return PostService;
    }
  }

})(window, window.angular, window._);
