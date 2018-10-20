/**
 * Nokia TAS Call Direction API
 * The first version of the Nokia TAS Call Direction API is an exciting step forward towards making it easier for developers to have open access to their operator's network.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: openapi.support@nokia.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NotifyURL'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NotifyURL'));
  } else {
    // Browser globals (root is window)
    if (!root.NokiaTasCallDirectionApi) {
      root.NokiaTasCallDirectionApi = {};
    }
    root.NokiaTasCallDirectionApi.CallbackReference = factory(root.NokiaTasCallDirectionApi.ApiClient, root.NokiaTasCallDirectionApi.NotifyURL);
  }
}(this, function(ApiClient, NotifyURL) {
  'use strict';




  /**
   * The CallbackReference model module.
   * @module model/CallbackReference
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CallbackReference</code>.
   * @alias module:model/CallbackReference
   * @class
   * @param notifyURL {module:model/NotifyURL} 
   */
  var exports = function(notifyURL) {
    var _this = this;

    _this['notifyURL'] = notifyURL;
  };

  /**
   * Constructs a <code>CallbackReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallbackReference} obj Optional instance to populate.
   * @return {module:model/CallbackReference} The populated <code>CallbackReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('notifyURL')) {
        obj['notifyURL'] = NotifyURL.constructFromObject(data['notifyURL']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NotifyURL} notifyURL
   */
  exports.prototype['notifyURL'] = undefined;



  return exports;
}));

