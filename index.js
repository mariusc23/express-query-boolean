const parseBool = require('./lib/parse');

module.exports = () => {
  return (req, res, next) => {
    req.query = parseBool(req.query);
    next();
  };
};
