import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
});

/*
The Router.map function allows you to define mappings from URLs to routes and
resources in your application. These mappings are defined within the supplied
callback function using this.resource and this.route.

inside the callback the keyword "this" gets set to a value that you can use to
create resources and routes (a 'DSL' object with no documentation :))

You should use this.resource for URLs that represent a noun, and
this.route for URLs that represent adjectives or verbs modifying those nouns.
*/

Router.map(function() {
  //first param - the name of the resource
  //second param - the path to map it to
  this.resource('todos', { path: '/'});
  this.route('todos');
});

export default Router;
