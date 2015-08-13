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
    editTodo: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);
      this.sendAction('acceptChanges', this.get("todo"));
    },
    deleteTodo: function(todo) {
      this.sendAction('deleteTodo', todo);
    }
  }
});


/*
This component gets used in
/todo-ember/app/templates/todos.hbs:7
*/
