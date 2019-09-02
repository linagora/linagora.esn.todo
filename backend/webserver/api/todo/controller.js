module.exports = (dependencies, lib) => {
  return {
    get
  };

  function get(req, res) {
    return res.status(200).json({ message: 'controller example' });
  }
};
