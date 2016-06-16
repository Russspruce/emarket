import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('products').pushObject(item);
  }
});
