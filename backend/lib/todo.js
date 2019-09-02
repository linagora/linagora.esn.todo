module.exports = dependencies => {
  return {
    list,
    create,
    update,
    remove
  };

  function list(options = {}) {
    return Promise.resolve([]);
  }

  function create(todo) {
    return Promise.resolve(todo);
  }

  function update(todoId, todo = {}) {
    return Promise.resolve(todo);
  }

  function remove(todoId) {
    return Promise.resolve();
  }
}