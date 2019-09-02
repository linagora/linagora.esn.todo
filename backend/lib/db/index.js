module.exports = dependencies => {

  const todo = require('./todo')(dependencies);

  return {
    todo
  };
};
