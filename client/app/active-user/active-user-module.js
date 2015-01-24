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
              controller: function ($http, ActiveUserService) {
                // debugger;
                //
                // $http
                //   .get('http://localhost:8080/hello/joe')
                //   .then(
                //     function success (res) {
                //       debugger;
                //     },
                //     function error (err) {
                //       debugger;
                //     }
                //   );

                var thePost = {
                  upvotes: 0,
                  downvotes: 0,
                  title: 'Goodbye Cruel World!',
                  body: 'I am the 2nd post. I was created from the angular app. The request should go from Client => (thru CORS) => API (restify) => es client => elasticsearch.',
                  created: (new Date()).toISOString(),
                  tags: ['hello world'],
                  author: {
                    displayName: 'Anonymous'
                  },
                  comments: []
                };

                $http
                  .post(
                    'http://localhost:8080/posts',
                    thePost
                  )
                  .then(
                    function success (res) {
                      debugger;
                    },
                    function error (err) {
                      debugger;
                    }
                  );
              }
            }
          }
        });
    });

})(window, window.angular);
