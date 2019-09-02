module.exports = (dependencies, lib) => {
  const todoModule = require('../../../lib/todo')(dependencies);

  return {
    list,
    create,
    update,
    remove
  };

  function list(req, res) {
    todoModule.list()
      .then(todos => {
        res.status(200).json(todos || []);
      })
      .catch(err => {
        res.status(500).send();
      });
  }

  function create(req, res) {
    const todo = {};

    todoModule.create(todo)
      .then(created => {
        res.status(201).json(created);
      })
      .catch(err => {
        res.status(500).send();
      });
  }

  function update(req, res) {
    const update = {};

    todoModule.update(req.params.id, update)
      .then(updated => {
        res.status(200).json(updated);
      })
      .catch(err => {
        res.status(500).send();
      });
    }

  function remove(req, res) {
    const update = {};

    todoModule.remove(req.params.id)
      .then(() => {
        res.status(204).send();
      })
      .catch(err => {
        res.status(500).send();
      });
    }
};
