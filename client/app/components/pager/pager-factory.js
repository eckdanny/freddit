(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('de.pager')
    .factory('PagerFactory', PagerFactory);

  /**
   * Cretes a PagerMetaObject
   * @param {PagerConfigObject} spec
   * @example
   * // PagerConfigObject
   * {
   *   count: Integer,
   *   limit: Integer,
   *   offset: Integer,
   *   fromServer: Boolean
   * }
   */
  function PagerMeta (spec) {

    var _defaults = {
      count: 0,
      limit: 0,
      offset: 0,
      fromServer: true
    };

    var _data = _.defaults(
      _.pick(spec, _.keys(_defaults)),
      _defaults
    );

    var instance = {};

    Object.defineProperties(instance, {

      //
      count: {
        enumerable: true,
        get: function () {
          return _data.count;
        }
      },

      //
      offset: {
        enumerable: true,
        get: function () {
          return _data.offset;
        },
        set: function (value) {
          _data.offset = value;
          _data.fromServer = false;
        }
      },

      //
      page: {
        enumerable: true,
        get: function () {
          return Math.ceil(_data.offset / _data.limit) + 1;
        },
        set: function (N) {
          _data.offset = (N - 1) * _data.limit;
          _data.fromServer = false;
        }
      },

      //
      limit: {
        enumerable: true,
        set: function (N) {
          _data.offset = 0;
          _data.limit = N;
          _data.fromServer = false;
        },
        get: function () {
          return _data.limit;
        }
      },

      //
      fromServer: {
        enumerable: true,
        get: function () {
          return _data.fromServer;
        },
        set: function (value) {
          _data.fromServer = value;
        }
      }
    });

    instance.set = function (spec) {
      _.assign(_data, _.pick(spec, _.keys(_defaults)));
    };

    return instance;
  }

  function PagerFactory (PAGINATION) {

    return {
      create: create
    };

    function create (spec, scope, callback) {

      var myPageMeta = PagerMeta.call(null, spec);

      scope.$watch(
        function onChangePageMeta () {
          return myPageMeta;
        },
        function listenerPageMeta (newValue, oldValue) {
          if (newValue === oldValue || !!newValue.fromServer) {
            return void 0;
          }
          callback(newValue);
        },
        true
      );

      return {
        meta: myPageMeta,
        defaults: PAGINATION.LIMITS
      };
    }
  }

})(window, window.angular, window._);
