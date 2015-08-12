/*
These imports work at the namespaces because of the Ember Resolver
Naming Convention here - http://www.ember-cli.com/using-modules/
Ember is a special case - http://stackoverflow.com/questions/25276647/how-does-ember-cli-know-where-to-import-ember-data-from
IN CHOWNOW APP these module names are created by a gulp process that wraps each module in an AMD definition
*/

import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

/*
This is to allow dependency injection into ember data models
http://stackoverflow.com/questions/24068890/injecting-dependencies-into-an-ember-model
*/

Ember.MODEL_FACTORY_INJECTIONS = true;

/*
Ember.Application is the container that holds your other classes in your app
http://emberjs.com/api/classes/Ember.Application.html
Ember.Applicaiton.extend is the way to create new subclasses (the params passed in are mixins)
http://emberjs.com/api/classes/Ember.Application.html#method_extend

*/

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
});

/*
TODO: Not sure what initializers really are
https://github.com/ember-cli/ember-load-initializers
*/

loadInitializers(App, config.modulePrefix);

export default App;
