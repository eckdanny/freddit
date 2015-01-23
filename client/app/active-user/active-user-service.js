(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.activeUser')
    .service('ActiveUserService', ActiveUserService);

  function ActiveUserService () {}

  ActiveUserService.prototype = Object.create(null);
  ActiveUserService.prototype.constructor = ActiveUserService;

  /**
   * Import User data into the ActiveUser Service
   * @param {Object} spec User data
   * @chainable
   */
  ActiveUserService.prototype.set = function (spec) {
    angular.extend(this, spec);
    return this;
  };

})(window, window.angular);
