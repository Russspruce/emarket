import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  addNewPurchase: false,
  actions: {
    purchaseFormShow() {
      this.set('addNewPurchase', true);

    },
    save() {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        quantity: this.get('quantity')

      };
      this.set('addNewPurchase', false);
      this.sendAction('saveTwo', params);
    }
  }
});
