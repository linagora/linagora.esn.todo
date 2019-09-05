module.exports = (dependencies, lib) => {
  const todoModule = require('../../../lib/todo')(dependencies);
  const logger = dependencies('logger');

  return {
    loadTodo,
    canList,
    canCreate,
    canUpdate,
    canRemove
  };

  function loadTodo(req, res, next) {
    todoModule.getTodoForUser(req.params.id, req.user._id)
      .then(todo => {
        if (!todo) {
          return res.status(404).json({
            error: {
              code: 404,
              message: 'Not found',
              details: 'todo not found'
            }
          });
        }

        req.todo = todo;
        next();
      })
      .catch(err => {
        logger.error('Error while loading todo', err);

        res.status(500).send();
      });
  }

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
