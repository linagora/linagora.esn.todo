module.exports = function(dependencies, lib, router, moduleName) {
  const authorizationMW = dependencies('authorizationMW');
  const controller = require('./controller')(dependencies, lib);
  const middleware = require('./middleware')(dependencies, lib);
  const moduleMW = dependencies('moduleMW');

  router.all('/todo*',
    authorizationMW.requiresAPILogin,
    moduleMW.requiresModuleIsEnabledInCurrentDomain(moduleName)
  );

  router.get('/todo',
    middleware.canGet,
    controller.get);
};
