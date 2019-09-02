module.exports = (dependencies, lib) => {
  return {
    list,
    create,
    update,
    remove
  };

  function list(req, res) {
    return res.status(200).json({ message: 'controller example' });
  }

  function create(req, res) {
    return res.status(200).json({ message: 'controller example' });
  }

  function update(req, res) {
    return res.status(200).json({ message: 'controller example' });
  }

  function remove(req, res) {
    return res.status(204).send();
  }
};
