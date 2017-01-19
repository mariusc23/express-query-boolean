'use strict';

/**
 * Attempts to recursively convert object properties to dates.
 * @param  {Object}  obj  - Object to iterate over
 * @return {Object}  Returns new object (shallow copy).
*/
const parse = (obj) => Object.keys(obj).reduce((prev, curr) => {
  const value = obj[curr];
  if (value === 'true') return Object.assign({}, prev, { [curr]: true });
  if (value === 'false') return Object.assign({}, prev, { [curr]: false });
  return obj[curr].constructor === Object ?
    Object.assign({}, prev, { [curr]: parse(value) }) : Object.assign({}, prev, { [curr]: value });
}, {});

module.exports = parse;
