module.exports = (dependencies, lib) => {
  return {
    canGet
  };

  // arguments: req, res, next
  function canGet(req, res, next) {
    next();
  }
};
