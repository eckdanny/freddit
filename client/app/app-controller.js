'use strict';

/**
 * @ngdoc function
 * @name freddit.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of freddit
 */
angular.module('freddit')
  .controller('AppController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
