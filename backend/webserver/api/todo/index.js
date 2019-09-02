module.exports = function(dependencies, lib, router, moduleName) {
  const authorizationMW = dependencies('authorizationMW');
  const controller = require('./controller')(dependencies, lib);
  const middleware = require('./middleware')(dependencies, lib);
  const moduleMW = dependencies('moduleMW');

  router.all('/todos*',
    authorizationMW.requiresAPILogin,
    moduleMW.requiresModuleIsEnabledInCurrentDomain(moduleName)
  );

  router.get('/todos', middleware.canList, controller.list);

  router.put('/todos', middleware.canCreate, controller.create);

  router.patch('/todos/:id', middleware.canUpdate, controller.update);

  router.delete('/todos/:id', middleware.canRemove, controller.remove);
};
