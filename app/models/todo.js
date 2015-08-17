/*
We don't use ember-data at CHOWNOW
difference between Ember Model and Ember Data
http://blog.sensible.io/2013/06/26/ember-model-introduction.html
*/
import DS from 'ember-data';

/*
When using grunt-cli, you don't have to assign any name when exporting
the models. It uses the filename to created the module on build.
In non grunt-cli implementations (ChowNow's)
you would do something like this:

var Todo = DS.Model.extend({..});
export default Todo;
*/

export default DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Complete Edddmber.js Tutorial",
      isCompleted: false
    },
    {
      id: 2,
      title: "Checkout some more ember stuff",
      isCompleted: true
    },
    {
      id: 3,
      title: "Solve world hunger (with Ember)",
      isCompleted: false
    }
  ]
});
