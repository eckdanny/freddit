(function (window, _, ns) { 'use strict';



  // function EventGroup (data) {

  //   var _defaults = {
  //     dateTime: '',     // String
  //     eventIds: [],     // String[]
  //     rootCauseId: '',  // String 0..1
  //     eventCount: 0,    // Integer
  //     name: '',         // String
  //     id: ''            // String 0..1
  //   };

  //   _.assign(this, _defaults, _.pick(data, _.keys(_defaults)));
  // }

  /*
      PAGINATION ???
   */

  /**
   * Create something
   * @constructor
   */
  function ResourceDAL () {
    console.log('hi');
  }

  ResourceDAL.prototype = {};
  ResourceDAL.prototype.constructor = ResourceDAL;

  /*
      INSTANCE METHODS
      =========================================
      + save()
      + destroy()
      + toObject() <== ?
      + toJSON()
   */

  ResourceDAL.prototype.save = function () {
    return 'instance save';
  };

  ResourceDAL.prototype.destroy = function () {
    return 'instance destroy';
  };

  ResourceDAL.prototype.toJSON = function () {
    return 'instance toJSON';
  };

  /*
      CLASS METHODS (COLLECTION)
      =========================================
      + find()
      + findOne(id)
      + create()
      + update()
      + destroy()
      + count()
   */

  ResourceDAL.find = function (query) {
    return 'collection find()';
  };

  ResourceDAL.findOne = function (id) {
    return 'collection findOne()';
  };

  ResourceDAL.save = function (partial) {
    return 'collection save()';
  };

  ResourceDAL.update = function (partial) {
    return 'collection update()';
  };

  ResourceDAL.destroy = function (partial) {
    return 'collection destroy()';
  };

  ns.resouce = ResourceDAL;

})(window, window._, ( window.de ? window.de : (window.de = {}) ));
