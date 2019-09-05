module.exports = dependencies => {

  const models = require('./db')(dependencies);
  const todos = require('./todo')(dependencies);

  return {
    models,
    todos
  };
};
