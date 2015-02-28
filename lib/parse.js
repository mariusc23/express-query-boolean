'use strict';

/**
 * Attempts to recursively convert object properties to dates.
 * @param  {Object}  obj  - Object to iterate over
 * @return {Object}  Returns new object (shallow copy).
*/
function parse(obj) {
  var result = {},
      key,
      value;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      value = obj[key];

      if (typeof value === 'string') {
        if (value === 'true') {
          result[key] = true;
        }
        else if (value === 'false') {
          result[key] = false;
        }
        else {
          result[key] = value;
        }
      }
      else if (value.constructor === Object) {
        result[key] = parse(value);
      }
      else {
        result[key] = value;
      }
    }
  }

  return result;
}

module.exports = parse;
