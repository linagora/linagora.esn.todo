'use strict';

const express = require('express');

module.exports = function(dependencies, lib) {

  const router = express.Router();
  const moduleName = 'linagora.esn.todo';

  require('./example')(dependencies, lib, router, moduleName);

  return router;
};
