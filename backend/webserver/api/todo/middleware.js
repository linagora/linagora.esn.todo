module.exports = (dependencies, lib) => {
  return {
    canList,
    canCreate,
    canUpdate,
    canRemove
  };

  function canList(req, res, next) {
    next();
  }

  function canCreate(req, res, next) {
    next();
  }

  function canUpdate(req, res, next) {
    next();
  }

  function canRemove(req, res, next) {
    next();
  }
};
