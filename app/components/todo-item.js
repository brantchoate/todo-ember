/*
http://guides.emberjs.com/v1.13.0/components/composing-components/

An Ember.Component is a view that is completely isolated. Properties accessed
in its templates go to the view object and actions are targeted at the view
object. There is no access to the surrounding context or outer controller; all
contextual information must be passed in.

If you name a template components/my-foo, you will be able to use {{my-foo}} in
other templates, which will make an instance of the isolated component. We've
done this in templates/components/todo-item.hbs

In Ember components have to have a hyphen in their name (so they don't clash
with future versions of web components)
*/

import Ember from 'ember';

export default Ember.Component.extend({
  /*
  These actions were triggered by attributes configured on the component template
  /todo-ember/app/templates/components/todo-item.hbs
  */
  actions: {
    editTodo() {
      // isEditing is made available to the template within the closure of {{}}
      this.set('isEditing', true);
    },
    acceptChanges() {
      this.set('isEditing', false);
      /*
      sendAction gets used to trigger an action named 'acceptChanges' in the Route
      /todo-ember/app/routes/todos.js

      Why to the Route you ask? - Here's more on how action bubbling works:
      http://guides.emberjs.com/v1.13.0/templates/actions/#toc_action-bubbling

      Any subsequent parameters after the name of the action get passed along
      */
      this.sendAction('acceptChanges', this.get("todo"));
    },
    deleteTodo(todo) {
      this.sendAction('deleteTodo', todo);
    },
  },
});


/*
This component gets used in
/todo-ember/app/templates/todos/index.hbs
*/
