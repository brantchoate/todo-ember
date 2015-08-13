import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    /*
    One way to think about the 'store' is as a cache of all of the records that
    have been loaded by your application. If a route or a controller in your
    app asks for a record, the store can return it immediately if it is in the cache


    'this.store.find' was used in the past, has been deprecated
    now is store.findAll(modelName, findArguments)
    */
    return this.store.findAll('todo');
  },
  actions: {
    createTodo(newTitle) {
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false,
      });

      todo.save();
    },
    /*
    acceptChanges gets triggered by the sendAction method in:
    /todo-ember/app/components/todo-item.js

    The Route and Component are mapped together unexplicitly via Action bubbling
    http://guides.emberjs.com/v1.13.0/templates/actions/#toc_action-bubbling
    */
    acceptChanges(todo) {
      if (Ember.isEmpty(todo.get('title'))) {
        /*
        this.send is used in the same way that this.sendAction. The difference
        is that we are outside of a component. this.sendAction is used to break
        the confines of the component

        http://stackoverflow.com/questions/21374647/ember-what-is-the-difference-between-sendaction-and-send
        */
        this.send('deleteTodo', todo);
      } else {
        todo.save();
      }
    },
    deleteTodo(todo) {
      todo.deleteRecord();
    },
  },
});
