import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // 'this.store.find' was used in the past, has been deprecated
    return this.store.findAll('todo');
  },
  actions: {
    createTodo: function(newTitle) {
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false,
      });

      this.controllerFor('todos').set('newTitle', '');

      todo.save();
    },
    acceptChanges: function(todo) {
      if (Ember.isEmpty(todo.get('title'))) {
        this.send('deleteTodo', todo);
      } else {
        todo.save();
      }
    },
    deleteTodo: function(todo) {
      todo.deleteRecord();
    },
  },
});
