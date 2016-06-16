import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
