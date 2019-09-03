const { DEFAULT_LIMIT, DEFAULT_OFFSET } = require('./constants');

module.exports = dependencies => {
  const mongoose = dependencies('db').mongo.mongoose;
  const TodoModel = mongoose.model('Todo');

  return {
    getTodoForUser,
    list,
    create,
    update,
    remove
  };

  function getTodoForUser(todoId, userId) {
    return TodoModel.findOne({ _id: todoId, creator: userId }).exec();
  }

  function list(options = {}) {
    const query = {};

    if (options.creator) {
      query.creator = options.creator;
    }

    return TodoModel
      .find(query)
      .skip(+options.offset || DEFAULT_OFFSET)
      .limit(+options.limit || DEFAULT_LIMIT)
      .sort({ 'created_at': 1 })
      .exec();
  }

  function create(todo) {
    if (!todo) {
      return Promise.reject(new Error('todo is required'));
    }

    return new TodoModel(todo).save()
  }

  function update(todoId, todo = {}) {
    if (!todo.title) {
      return Promise.reject(new Error('title is required'));
    }

    return DashboardModel.findByIdAndUpdate(todoId, { $set: { title: todo.title } }, { new: true })
      .exec()
  }

  function remove(todoId) {
    if (!todoId) {
      return Promise.reject(new Error('todoId is required'));
    }

    return DashboardModel.findByIdAndRemove(todoId).exec();
  }
}