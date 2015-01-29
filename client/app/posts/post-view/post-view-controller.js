(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.posts.postView')
    .controller('PostViewController', PostViewController);

  function PostViewController (post) {

    var self = this;

    angular.extend(self, {
      post: post
    });
  }

})(window, window.angular);
